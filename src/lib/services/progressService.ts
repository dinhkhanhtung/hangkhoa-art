import { supabase } from '../supabase'
import type { Database } from '../supabase'

type UserProgress = Database['public']['Tables']['user_progress']['Row']
type UserProgressInsert = Database['public']['Tables']['user_progress']['Insert']

export const progressService = {
  // Mark lesson as completed and award XP
  async completeLesson(userId: string, lessonId: string, xpEarned: number = 10) {
    const { data, error } = await supabase
      .from('user_progress')
      .upsert({
        user_id: userId,
        lesson_id: lessonId,
        is_completed: true,
        xp_earned: xpEarned,
        completed_at: new Date().toISOString()
      }, {
        onConflict: 'user_id,lesson_id'
      })
      .select()
      .single()

    if (error) throw error
    return data
  },

  // Get user's progress for a specific lesson
  async getLessonProgress(userId: string, lessonId: string) {
    const { data, error } = await supabase
      .from('user_progress')
      .select('*')
      .eq('user_id', userId)
      .eq('lesson_id', lessonId)
      .single()

    if (error && error.code !== 'PGRST116') throw error
    return data
  },

  // Get user's total XP
  async getUserTotalXP(userId: string) {
    const { data, error } = await supabase
      .from('user_progress')
      .select('xp_earned')
      .eq('user_id', userId)
      .eq('is_completed', true)

    if (error) throw error
    return data.reduce((total, progress) => total + progress.xp_earned, 0)
  },

  // Get user's progress for a course
  async getCourseProgress(userId: string, courseId: string) {
    // Get all lessons in the course
    const { data: lessons, error: lessonsError } = await supabase
      .from('lessons')
      .select('id')
      .eq('course_id', courseId)

    if (lessonsError) throw lessonsError

    if (!lessons || lessons.length === 0) return { completed: 0, total: 0, percentage: 0 }

    // Get completed lessons
    const { data: progress, error: progressError } = await supabase
      .from('user_progress')
      .select('lesson_id')
      .eq('user_id', userId)
      .eq('is_completed', true)
      .in('lesson_id', lessons.map(l => l.id))

    if (progressError) throw progressError

    const completed = progress?.length || 0
    const total = lessons.length
    const percentage = total > 0 ? Math.round((completed / total) * 100) : 0

    return { completed, total, percentage }
  },

  // Get user's progress for all purchased courses
  async getUserCoursesProgress(userId: string) {
    // Get user's purchased courses
    const { data: purchases, error: purchasesError } = await supabase
      .from('purchases')
      .select(`
        product_id,
        courses (
          id,
          title,
          slug
        )
      `)
      .eq('user_id', userId)
      .eq('product_type', 'COURSE')
      .eq('status', 'completed')

    if (purchasesError) throw purchasesError

    if (!purchases || purchases.length === 0) return []

    // Get progress for each course
    const coursesWithProgress = await Promise.all(
      purchases.map(async (purchase: any) => {
        const course = purchase.courses
        if (!course) return null

        const progress = await this.getCourseProgress(userId, course.id)
        return {
          ...course,
          progress
        }
      })
    )

    return coursesWithProgress.filter(Boolean)
  }
}

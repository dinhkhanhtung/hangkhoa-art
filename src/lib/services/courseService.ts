import { supabase } from '../supabase'
import type { Database } from '../supabase'

type Course = Database['public']['Tables']['courses']['Row']
type Lesson = Database['public']['Tables']['lessons']['Row']

export const courseService = {
  // Get all published courses
  async getPublishedCourses() {
    const { data, error } = await supabase
      .from('courses')
      .select('*')
      .eq('is_published', true)
      .order('created_at', { ascending: false })

    if (error) throw error
    return data
  },

  // Get course by slug
  async getCourseBySlug(slug: string) {
    const { data, error } = await supabase
      .from('courses')
      .select('*')
      .eq('slug', slug)
      .eq('is_published', true)
      .single()

    if (error) throw error
    return data
  },

  // Get lessons for a course
  async getCourseLessons(courseId: string) {
    const { data, error } = await supabase
      .from('lessons')
      .select('*')
      .eq('course_id', courseId)
      .order('order_index', { ascending: true })

    if (error) throw error
    return data
  },

  // Check if user has purchased a course
  async hasUserPurchasedCourse(userId: string, courseId: string) {
    const { data, error } = await supabase
      .from('purchases')
      .select('*')
      .eq('user_id', userId)
      .eq('product_type', 'COURSE')
      .eq('product_id', courseId)
      .eq('status', 'completed')
      .single()

    if (error && error.code !== 'PGRST116') throw error
    return !!data
  },

  // Check if user has purchased a lesson
  async hasUserPurchasedLesson(userId: string, lessonId: string) {
    const { data, error } = await supabase
      .from('purchases')
      .select('*')
      .eq('user_id', userId)
      .eq('product_type', 'LESSON')
      .eq('product_id', lessonId)
      .eq('status', 'completed')
      .single()

    if (error && error.code !== 'PGRST116') throw error
    return !!data
  },

  // Get lesson by ID
  async getLessonById(lessonId: string) {
    const { data, error } = await supabase
      .from('lessons')
      .select('*')
      .eq('id', lessonId)
      .single()

    if (error) throw error
    return data
  },

  // Check if user can access lesson (purchased course or free preview or purchased lesson)
  async canUserAccessLesson(userId: string | null, lesson: Lesson) {
    // Free preview lessons are always accessible
    if (lesson.is_free_preview) return true

    // If no user, can't access paid content
    if (!userId) return false

    // Check if user purchased the course
    const hasPurchasedCourse = await this.hasUserPurchasedCourse(userId, lesson.course_id)
    if (hasPurchasedCourse) return true

    // Check if user purchased the lesson individually
    const hasPurchasedLesson = await this.hasUserPurchasedLesson(userId, lesson.id)
    return hasPurchasedLesson
  }
}

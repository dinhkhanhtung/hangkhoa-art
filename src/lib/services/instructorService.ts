import { supabase } from '../supabase'

export interface Instructor {
  id: string
  name: string
  bio: string
  avatar_url: string
  specialty: string
  experience_years: number
  course_count: number
  student_count: number
  created_at: string
  updated_at: string
}

export const instructorService = {
  // Get all instructors
  async getAllInstructors() {
    const { data, error } = await supabase
      .from('instructors')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) throw error
    return data
  },

  // Get instructor by ID
  async getInstructorById(id: string) {
    const { data, error } = await supabase
      .from('instructors')
      .select('*')
      .eq('id', id)
      .single()

    if (error) throw error
    return data
  },

  // Get courses by instructor
  async getCoursesByInstructor(instructorId: string) {
    const { data, error } = await supabase
      .from('courses')
      .select('*')
      .eq('instructor_id', instructorId)
      .eq('is_published', true)
      .order('created_at', { ascending: false })

    if (error) throw error
    return data
  }
}

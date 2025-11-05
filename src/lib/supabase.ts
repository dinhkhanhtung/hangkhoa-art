import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types
export type Database = {
  public: {
    Tables: {
      courses: {
        Row: {
          id: string
          title: string
          slug: string
          full_description: string | null
          price: number
          cover_image_url: string | null
          is_published: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          slug: string
          full_description?: string | null
          price: number
          cover_image_url?: string | null
          is_published?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          slug?: string
          full_description?: string | null
          price?: number
          cover_image_url?: string | null
          is_published?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      lessons: {
        Row: {
          id: string
          course_id: string
          title: string
          video_id: string
          duration: number | null
          order_index: number
          is_free_preview: boolean
          price_standalone: number | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          course_id: string
          title: string
          video_id: string
          duration?: number | null
          order_index: number
          is_free_preview?: boolean
          price_standalone?: number | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          course_id?: string
          title?: string
          video_id?: string
          duration?: number | null
          order_index?: number
          is_free_preview?: boolean
          price_standalone?: number | null
          created_at?: string
          updated_at?: string
        }
      }
      standalone_videos: {
        Row: {
          id: string
          title: string
          description: string | null
          category: string | null
          price: number
          video_id: string
          is_published: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          description?: string | null
          category?: string | null
          price: number
          video_id: string
          is_published?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          description?: string | null
          category?: string | null
          price?: number
          video_id?: string
          is_published?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      purchases: {
        Row: {
          id: string
          user_id: string
          product_type: 'COURSE' | 'LESSON' | 'VIDEO_STANDALONE'
          product_id: string
          amount: number
          status: 'pending' | 'completed' | 'failed' | 'refunded'
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          product_type: 'COURSE' | 'LESSON' | 'VIDEO_STANDALONE'
          product_id: string
          amount: number
          status?: 'pending' | 'completed' | 'failed' | 'refunded'
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          product_type?: 'COURSE' | 'LESSON' | 'VIDEO_STANDALONE'
          product_id?: string
          amount?: number
          status?: 'pending' | 'completed' | 'failed' | 'refunded'
          created_at?: string
          updated_at?: string
        }
      }
      user_progress: {
        Row: {
          id: string
          user_id: string
          lesson_id: string
          is_completed: boolean
          xp_earned: number
          completed_at: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          lesson_id: string
          is_completed?: boolean
          xp_earned?: number
          completed_at?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          lesson_id?: string
          is_completed?: boolean
          xp_earned?: number
          completed_at?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      artworks: {
        Row: {
          id: string
          user_id: string
          title: string
          image_url: string
          techniques: string[] | null
          likes_count: number
          is_published: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          title: string
          image_url: string
          techniques?: string[] | null
          likes_count?: number
          is_published?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          title?: string
          image_url?: string
          techniques?: string[] | null
          likes_count?: number
          is_published?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      comments: {
        Row: {
          id: string
          user_id: string
          artwork_id: string
          comment_text: string | null
          type: 'COMMENT' | 'LIKE'
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          artwork_id: string
          comment_text?: string | null
          type?: 'COMMENT' | 'LIKE'
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          artwork_id?: string
          comment_text?: string | null
          type?: 'COMMENT' | 'LIKE'
          created_at?: string
          updated_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}

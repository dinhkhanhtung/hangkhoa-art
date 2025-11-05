import { supabase } from '../supabase'
import type { Database } from '../supabase'

type StandaloneVideo = Database['public']['Tables']['standalone_videos']['Row']

export const videoService = {
  // Get all published videos
  async getPublishedVideos() {
    const { data, error } = await supabase
      .from('standalone_videos')
      .select('*')
      .eq('is_published', true)
      .order('created_at', { ascending: false })

    if (error) throw error
    return data
  },

  // Get video by ID
  async getVideoById(id: string) {
    const { data, error } = await supabase
      .from('standalone_videos')
      .select('*')
      .eq('id', id)
      .eq('is_published', true)
      .single()

    if (error) throw error
    return data
  },

  // Get videos by category
  async getVideosByCategory(category: string) {
    const { data, error } = await supabase
      .from('standalone_videos')
      .select('*')
      .eq('category', category)
      .eq('is_published', true)
      .order('created_at', { ascending: false })

    if (error) throw error
    return data
  },

  // Check if user has purchased a video
  async hasUserPurchasedVideo(userId: string, videoId: string) {
    const { data, error } = await supabase
      .from('purchases')
      .select('*')
      .eq('user_id', userId)
      .eq('product_type', 'VIDEO_STANDALONE')
      .eq('product_id', videoId)
      .eq('status', 'completed')
      .single()

    if (error && error.code !== 'PGRST116') throw error
    return !!data
  },

  // Check if user can access video (purchased or free)
  async canUserAccessVideo(userId: string | null, video: StandaloneVideo) {
    // If video is free (price = 0), anyone can access
    if (video.price === 0) return true

    // If no user, can't access paid content
    if (!userId) return false

    // Check if user purchased the video
    return await this.hasUserPurchasedVideo(userId, video.id)
  },

  // Get featured videos (recently added)
  async getFeaturedVideos(limit: number = 6) {
    const { data, error } = await supabase
      .from('standalone_videos')
      .select('*')
      .eq('is_published', true)
      .order('created_at', { ascending: false })
      .limit(limit)

    if (error) throw error
    return data
  },

  // Search videos by title or description
  async searchVideos(query: string) {
    const { data, error } = await supabase
      .from('standalone_videos')
      .select('*')
      .eq('is_published', true)
      .or(`title.ilike.%${query}%,description.ilike.%${query}%`)
      .order('created_at', { ascending: false })

    if (error) throw error
    return data
  }
}

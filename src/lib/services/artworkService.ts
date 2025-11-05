import { supabase } from '../supabase'
import type { Database } from '../supabase'

type Artwork = Database['public']['Tables']['artworks']['Row']
type ArtworkInsert = Database['public']['Tables']['artworks']['Insert']
type Comment = Database['public']['Tables']['comments']['Row']
type CommentInsert = Database['public']['Tables']['comments']['Insert']

export const artworkService = {
  // Get all published artworks
  async getPublishedArtworks() {
    const { data, error } = await supabase
      .from('artworks')
      .select('*')
      .eq('is_published', true)
      .order('created_at', { ascending: false })

    if (error) throw error
    return data
  },

  // Get artwork by ID
  async getArtworkById(id: string) {
    const { data, error } = await supabase
      .from('artworks')
      .select('*')
      .eq('id', id)
      .eq('is_published', true)
      .single()

    if (error) throw error
    return data
  },

  // Create new artwork
  async createArtwork(artwork: ArtworkInsert) {
    const { data, error } = await supabase
      .from('artworks')
      .insert(artwork)
      .select()
      .single()

    if (error) throw error
    return data
  },

  // Get user's artworks
  async getUserArtworks(userId: string) {
    const { data, error } = await supabase
      .from('artworks')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false })

    if (error) throw error
    return data
  },

  // Get comments for an artwork
  async getArtworkComments(artworkId: string) {
    const { data, error } = await supabase
      .from('comments')
      .select(`
        *,
        user:user_id (
          id,
          email
        )
      `)
      .eq('artwork_id', artworkId)
      .eq('type', 'COMMENT')
      .order('created_at', { ascending: true })

    if (error) throw error
    return data
  },

  // Add comment to artwork
  async addComment(comment: CommentInsert) {
    const { data, error } = await supabase
      .from('comments')
      .insert(comment)
      .select()
      .single()

    if (error) throw error
    return data
  },

  // Like/unlike artwork
  async toggleLike(userId: string, artworkId: string) {
    // Check if user already liked this artwork
    const { data: existingLike, error: checkError } = await supabase
      .from('comments')
      .select('*')
      .eq('user_id', userId)
      .eq('artwork_id', artworkId)
      .eq('type', 'LIKE')
      .single()

    if (checkError && checkError.code !== 'PGRST116') throw checkError

    if (existingLike) {
      // Unlike: remove the like
      const { error: deleteError } = await supabase
        .from('comments')
        .delete()
        .eq('id', existingLike.id)

      if (deleteError) throw deleteError

      // Decrement likes count
      await this.updateLikesCount(artworkId, -1)
      return { liked: false }
    } else {
      // Like: add the like
      const { error: insertError } = await supabase
        .from('comments')
        .insert({
          user_id: userId,
          artwork_id: artworkId,
          type: 'LIKE'
        })

      if (insertError) throw insertError

      // Increment likes count
      await this.updateLikesCount(artworkId, 1)
      return { liked: true }
    }
  },

  // Update artwork likes count
  async updateLikesCount(artworkId: string, increment: number) {
    const { data: currentArtwork, error: fetchError } = await supabase
      .from('artworks')
      .select('likes_count')
      .eq('id', artworkId)
      .single()

    if (fetchError) throw fetchError

    const newCount = Math.max(0, (currentArtwork.likes_count || 0) + increment)

    const { error: updateError } = await supabase
      .from('artworks')
      .update({ likes_count: newCount })
      .eq('id', artworkId)

    if (updateError) throw updateError
  },

  // Check if user liked artwork
  async hasUserLiked(userId: string, artworkId: string) {
    const { data, error } = await supabase
      .from('comments')
      .select('*')
      .eq('user_id', userId)
      .eq('artwork_id', artworkId)
      .eq('type', 'LIKE')
      .single()

    if (error && error.code !== 'PGRST116') throw error
    return !!data
  },

  // Get artworks by technique
  async getArtworksByTechnique(technique: string) {
    const { data, error } = await supabase
      .from('artworks')
      .select('*')
      .contains('techniques', [technique])
      .eq('is_published', true)
      .order('created_at', { ascending: false })

    if (error) throw error
    return data
  },

  // Get featured artworks (most liked)
  async getFeaturedArtworks(limit: number = 6) {
    const { data, error } = await supabase
      .from('artworks')
      .select('*')
      .eq('is_published', true)
      .order('likes_count', { ascending: false })
      .limit(limit)

    if (error) throw error
    return data
  }
}

import { supabase } from '../supabase'
import type { Database } from '../supabase'
import type { CartItem } from '../../stores/cartStore'

type Purchase = Database['public']['Tables']['purchases']['Row']
type PurchaseInsert = Database['public']['Tables']['purchases']['Insert']

export const purchaseService = {
  // Create a purchase record
  async createPurchase(purchase: PurchaseInsert) {
    const { data, error } = await supabase
      .from('purchases')
      .insert(purchase)
      .select()
      .single()

    if (error) throw error
    return data
  },

  // Process cart checkout (mock implementation)
  async processCheckout(userId: string, cartItems: CartItem[]) {
    const purchases: PurchaseInsert[] = cartItems.map(item => ({
      user_id: userId,
      product_type: item.type,
      product_id: item.id,
      amount: item.price,
      status: 'completed' // Mock successful payment
    }))

    const { data, error } = await supabase
      .from('purchases')
      .insert(purchases)
      .select()

    if (error) throw error
    return data
  },

  // Get user's purchases
  async getUserPurchases(userId: string) {
    const { data, error } = await supabase
      .from('purchases')
      .select('*')
      .eq('user_id', userId)
      .eq('status', 'completed')
      .order('created_at', { ascending: false })

    if (error) throw error
    return data
  },

  // Get user's purchased courses
  async getUserPurchasedCourses(userId: string) {
    const { data, error } = await supabase
      .from('purchases')
      .select(`
        *,
        courses (*)
      `)
      .eq('user_id', userId)
      .eq('product_type', 'COURSE')
      .eq('status', 'completed')

    if (error) throw error
    return data
  },

  // Get user's purchased lessons
  async getUserPurchasedLessons(userId: string) {
    const { data, error } = await supabase
      .from('purchases')
      .select(`
        *,
        lessons (*)
      `)
      .eq('user_id', userId)
      .eq('product_type', 'LESSON')
      .eq('status', 'completed')

    if (error) throw error
    return data
  },

  // Get user's purchased videos
  async getUserPurchasedVideos(userId: string) {
    const { data, error } = await supabase
      .from('purchases')
      .select(`
        *,
        standalone_videos (*)
      `)
      .eq('user_id', userId)
      .eq('product_type', 'VIDEO_STANDALONE')
      .eq('status', 'completed')

    if (error) throw error
    return data
  }
}

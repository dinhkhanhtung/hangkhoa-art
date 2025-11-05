import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type CartItem = {
  id: string
  name: string
  price: number
  type: 'COURSE' | 'LESSON' | 'VIDEO_STANDALONE'
  imageUrl?: string
}

type CartStore = {
  items: CartItem[]
  addItem: (item: CartItem) => void
  removeItem: (id: string) => void
  clearCart: () => void
  getTotal: () => number
  getItemCount: () => number
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (item: CartItem) => {
        const { items } = get()
        // Check if item already exists
        const existingItem = items.find(i => i.id === item.id && i.type === item.type)
        if (!existingItem) {
          set({ items: [...items, item] })
        }
      },

      removeItem: (id: string) => {
        const { items } = get()
        set({ items: items.filter(item => item.id !== id) })
      },

      clearCart: () => {
        set({ items: [] })
      },

      getTotal: () => {
        const { items } = get()
        return items.reduce((total, item) => total + item.price, 0)
      },

      getItemCount: () => {
        const { items } = get()
        return items.length
      },
    }),
    {
      name: 'cart-storage',
    }
  )
)

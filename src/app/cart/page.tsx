'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useCartStore } from '../../stores/cartStore'
import { useAuth } from '../../lib/auth'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import { purchaseService } from '../../lib/services/purchaseService'
import { motion, AnimatePresence } from 'framer-motion'

const LoadingSkeleton = () => (
  <div className="space-y-4 animate-pulse">
    {[1, 2, 3].map((i) => (
      <div key={i} className="flex items-center gap-4 bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark p-4 justify-between rounded-lg">
        <div className="flex items-start sm:items-center gap-4 w-full">
          <div className="bg-gray-200 dark:bg-gray-700 rounded-lg h-16 w-28 flex-shrink-0" />
          <div className="flex flex-col justify-center flex-grow space-y-2">
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4" />
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2" />
          </div>
        </div>
        <div className="flex items-center gap-4 sm:gap-8 flex-shrink-0">
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-20" />
          <div className="h-6 w-6 bg-gray-200 dark:bg-gray-700 rounded" />
        </div>
      </div>
    ))}
  </div>
)

const CheckoutProgress = () => (
  <div className="max-w-3xl mx-auto mb-8">
    <div className="flex items-center justify-between relative">
      <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-0.5 bg-border-light dark:bg-border-dark" />
      {['Giỏ hàng', 'Thanh toán', 'Hoàn tất'].map((step, i) => (
        <div key={i} className="relative flex flex-col items-center gap-2">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold z-10 
            ${i === 0 ? 'bg-primary text-white' : 'bg-surface-light dark:bg-surface-dark text-text-light/50 dark:text-text-dark/50'}`}>
            {i + 1}
          </div>
          <span className={`text-sm font-medium ${i === 0 ? 'text-primary' : 'text-text-light/50 dark:text-text-dark/50'}`}>
            {step}
          </span>
        </div>
      ))}
    </div>
  </div>
)

export default function CartPage() {
  const { items, removeItem, getTotal, clearCart } = useCartStore()
  const { user, isAuthenticated } = useAuth()
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [removingItems, setRemovingItems] = useState<string[]>([])
  const [initialLoading, setInitialLoading] = useState(true)

  // Simulate initial loading
  useEffect(() => {
    const timer = setTimeout(() => setInitialLoading(false), 1000)
    return () => clearTimeout(timer)
  }, [])

  const handleRemoveItem = async (id: string) => {
    setRemovingItems(prev => [...prev, id])
    try {
      await new Promise(resolve => setTimeout(resolve, 500)) // Simulate delay
      removeItem(id)
    } finally {
      setRemovingItems(prev => prev.filter(item => item !== id))
    }
  }

  const handleCheckout = async () => {
    if (!isAuthenticated) {
      router.push('/auth')
      return
    }

    if (items.length === 0) return

    setLoading(true)
    try {
      // Process checkout (mock implementation)
      await purchaseService.processCheckout(user!.id, items)
      clearCart()
      router.push('/checkout/success')
    } catch (error) {
      console.error('Checkout failed:', error)
      alert('Có lỗi xảy ra khi thanh toán. Vui lòng thử lại.')
    } finally {
      setLoading(false)
    }
  }

  // Shared Header Component
  const Header = () => (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-border-light dark:border-border-dark px-4 sm:px-10 py-3">
      <div className="flex items-center gap-4 text-text-light dark:text-text-dark">
        <div className="w-6 h-6 text-primary">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2zM15 5v2m-6-2v2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
          </svg>
        </div>
        <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">Hang Khoa Art</h2>
      </div>
      <Link href="/" className="text-sm font-medium leading-normal hover:text-primary transition-colors">
        ← Tiếp tục mua sắm
      </Link>
    </header>
  )

  if (initialLoading) {
    return (
      <div className="flex min-h-screen w-full flex-col">
        <Header />
        <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8 animate-pulse">
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-48 mb-2" />
            <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-72" />
          </div>
          <LoadingSkeleton />
        </main>
      </div>
    )
  }

  if (items.length === 0) {
    return (
      <div className="flex min-h-screen w-full flex-col">
        <Header />
        <main className="flex flex-1 items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="text-center"
          >
            <div className="relative">
              <motion.div 
                initial={{ y: 10 }}
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="text-6xl mb-4"
              >
                🛒
              </motion.div>
            </div>
            <h1 className="text-2xl font-bold mb-4">Giỏ hàng trống</h1>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Bạn chưa có sản phẩm nào trong giỏ hàng.
            </p>
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-base font-bold text-white hover:opacity-90 transition-all hover:scale-105"
            >
              Khám phá khóa học
            </Link>
          </motion.div>
        </main>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Breadcrumbs & Heading */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="mb-8"
          >
            <div className="flex flex-wrap gap-2 mb-2">
              <Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-primary">
                Trang chủ
              </Link>
              <span className="text-gray-400">/</span>
              <span className="text-text-light dark:text-text-dark">Giỏ hàng</span>
            </div>
            <h1 className="text-4xl font-black leading-tight tracking-[-0.033em]">
              Giỏ hàng của bạn
            </h1>
          </motion.div>

          <CheckoutProgress />

          {/* Cart Layout */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Left Column: Product List */}
            <div className="w-full lg:w-2/3">
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="space-y-4"
              >
                <AnimatePresence>
                  {items.map((item) => (
                    <motion.div
                      key={item.id}
                      initial={{ scale: 0.95, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.95, opacity: 0, x: -20 }}
                      transition={{ duration: 0.2 }}
                      layout
                      className={`flex items-center gap-4 bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark p-4 justify-between rounded-lg relative overflow-hidden
                        ${removingItems.includes(item.id) ? 'opacity-50' : ''}`}
                    >
                      {removingItems.includes(item.id) && (
                        <div className="absolute inset-0 bg-background-light/50 dark:bg-background-dark/50 flex items-center justify-center">
                          <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                        </div>
                      )}
                      <div className="flex items-start sm:items-center gap-4 w-full">
                        <div className="bg-center bg-no-repeat aspect-video bg-cover rounded-lg h-16 w-28 flex-shrink-0 overflow-hidden" style={{
                          backgroundImage: item.imageUrl ? `url(${item.imageUrl})` : undefined
                        }}>
                          {!item.imageUrl && (
                            <div className="w-full h-full flex items-center justify-center text-gray-400">
                              <span className="material-symbols-outlined text-2xl">
                                {item.type === 'COURSE' ? 'school' : item.type === 'VIDEO_STANDALONE' ? 'videocam' : 'play_circle'}
                              </span>
                            </div>
                          )}
                        </div>
                        <div className="flex flex-col justify-center flex-grow">
                          <p className="text-text-light dark:text-text-dark text-base font-medium leading-normal line-clamp-1">
                            {item.name}
                          </p>
                          <p className="text-text-light/60 dark:text-text-dark/60 text-sm font-normal leading-normal line-clamp-2">
                            {item.type === 'COURSE' ? 'Khóa học' : item.type === 'VIDEO_STANDALONE' ? 'Video lẻ' : 'Bài học'}
                          </p>
                          <p className="sm:hidden text-text-light dark:text-text-dark text-base font-semibold mt-1">
                            {item.price.toLocaleString('vi-VN')}đ
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 sm:gap-8 flex-shrink-0">
                        <p className="hidden sm:block text-text-light dark:text-text-dark text-base font-semibold">
                          {item.price.toLocaleString('vi-VN')}đ
                        </p>
                        <motion.button
                          onClick={() => handleRemoveItem(item.id)}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="text-text-light/50 dark:text-text-dark/50 hover:text-red-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                          disabled={removingItems.includes(item.id)}
                        >
                          <span className="material-symbols-outlined">delete</span>
                        </motion.button>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            </div>

            {/* Right Column: Order Summary */}
            <div className="w-full lg:w-1/3">
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark p-6 rounded-lg sticky top-28"
              >
                <h3 className="text-xl font-bold mb-4">Tóm tắt đơn hàng</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-text-light/80 dark:text-text-dark/80">
                    <span>Tạm tính</span>
                    <span>{getTotal().toLocaleString('vi-VN')}đ</span>
                  </div>
                  <div className="flex justify-between text-text-light/80 dark:text-text-dark/80">
                    <span>Giảm giá</span>
                    <span>- 0đ</span>
                  </div>
                </div>
                <div className="border-t border-border-light dark:border-border-dark pt-4 mb-6">
                  <motion.div 
                    className="flex justify-between text-text-light dark:text-text-dark font-bold text-lg"
                    initial={false}
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 0.3 }}
                  >
                    <span>Tổng cộng</span>
                    <span>{getTotal().toLocaleString('vi-VN')}đ</span>
                  </motion.div>
                </div>

                {!isAuthenticated && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mb-4 p-3 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg"
                  >
                    <p className="text-sm text-yellow-800 dark:text-yellow-200">
                      Vui lòng đăng nhập để tiếp tục thanh toán.
                    </p>
                  </motion.div>
                )}

                <motion.button
                  onClick={handleCheckout}
                  disabled={loading || !isAuthenticated}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-4 bg-primary text-background-dark text-base font-bold leading-normal tracking-[0.015em] disabled:opacity-50 disabled:cursor-not-allowed relative"
                >
                  {loading ? (
                    <>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      </div>
                      <span className="opacity-0">Đang xử lý...</span>
                    </>
                  ) : (
                    'Tiến hành Thanh toán'
                  )}
                </motion.button>

                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="flex items-center justify-center gap-2 mt-4 text-sm text-text-light/60 dark:text-text-dark/60"
                >
                  <span className="material-symbols-outlined text-base">lock</span>
                  <span>Thanh toán an toàn</span>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

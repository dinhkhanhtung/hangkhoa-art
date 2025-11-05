'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useCartStore } from '../stores/cartStore'

interface CourseCardProps {
  id: string
  title: string
  slug: string
  price: number
  coverImageUrl?: string
  instructor?: string
  rating?: number
  reviewCount?: number
  onAddToCart?: () => void
}

export default function CourseCard({
  id,
  title,
  slug,
  price,
  coverImageUrl,
  instructor,
  rating = 4.8,
  reviewCount = 125,
  onAddToCart
}: CourseCardProps) {
  const { addItem } = useCartStore()

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

    addItem({
      id,
      name: title,
      price,
      type: 'COURSE',
      imageUrl: coverImageUrl
    })

    if (onAddToCart) {
      onAddToCart()
    }
  }

  return (
    <Link href={`/courses/${slug}`} className="group relative block">
      <div className="w-full rounded-xl bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark hover:border-primary dark:hover:border-primary transition-colors duration-300 overflow-hidden">
        {/* Course Image */}
        <div className="relative aspect-video bg-surface-light dark:bg-surface-dark">
          {coverImageUrl ? (
            <Image
              src={coverImageUrl}
              alt={title}
              width={400}
              height={225}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-muted-light dark:text-muted-dark">
              <span className="material-symbols-outlined text-4xl">image</span>
            </div>
          )}
        </div>

        {/* Course Info */}
        <div className="p-4 sm:p-6 flex flex-col gap-3">
          <h3 className="text-lg font-semibold text-text-light dark:text-text-dark group-hover:text-primary transition-colors line-clamp-2">
            {title}
          </h3>

          {instructor && (
            <p className="text-sm text-muted-light dark:text-muted-dark">
              <span className="material-symbols-outlined text-base align-middle mr-1">person</span>
              {instructor}
            </p>
          )}

          {/* Rating */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <span className="material-symbols-outlined text-amber-400 text-base" style={{ fontVariationSettings: "'FILL' 1" }}>
                star
              </span>
              <span className="text-sm font-semibold text-text-light dark:text-text-dark">{rating}</span>
            </div>
            <span className="text-muted-light dark:text-muted-dark">•</span>
            <span className="text-sm text-muted-light dark:text-muted-dark">
              {reviewCount} đánh giá
            </span>
          </div>

          {/* Price and CTA */}
          <div className="flex items-center justify-between gap-4 mt-2">
            <span className="text-xl font-bold text-text-light dark:text-text-dark">
              {price.toLocaleString('vi-VN')}đ
            </span>
            <button
              onClick={handleAddToCart}
              className="flex items-center justify-center gap-1.5 rounded-lg bg-primary hover:bg-primary/90 text-white px-4 py-2 text-sm font-medium transition-colors"
            >
              <span className="material-symbols-outlined text-base">add_shopping_cart</span>
              <span>Mua</span>
            </button>
          </div>
        </div>
      </div>
    </Link>
  )
}

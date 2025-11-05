'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useCartStore } from '../stores/cartStore'

interface VideoCardProps {
  id: string
  title: string
  description?: string
  price: number
  videoId: string
  thumbnailUrl?: string
  duration?: string
  category?: string
  onAddToCart?: () => void
}

export default function VideoCard({
  id,
  title,
  description,
  price,
  videoId,
  thumbnailUrl,
  duration = "5:00",
  category,
  onAddToCart
}: VideoCardProps) {
  const { addItem } = useCartStore()

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

    addItem({
      id,
      name: title,
      price,
      type: 'VIDEO_STANDALONE',
      imageUrl: thumbnailUrl
    })

    if (onAddToCart) {
      onAddToCart()
    }
  }

  return (
    <Link href={`/videos/${id}`} className="group relative block">
      <div className="w-full sm:w-64 rounded-xl bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark hover:border-primary dark:hover:border-primary transition-colors duration-300 overflow-hidden">
        {/* Video Thumbnail */}
        <div className="relative aspect-video bg-surface-light dark:bg-surface-dark">
          {thumbnailUrl ? (
            <Image
              src={thumbnailUrl}
              alt={title}
              width={256}
              height={144}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-muted-light dark:text-muted-dark">
              <span className="material-symbols-outlined text-4xl">videocam</span>
            </div>
          )}

          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="material-symbols-outlined text-white text-5xl">play_circle</span>
          </div>

          {/* Duration Badge */}
          <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs font-medium px-2 py-1 rounded">
            {duration}
          </div>
        </div>

        {/* Video Info */}
        <div className="p-4">
          <h4 className="font-semibold text-text-light dark:text-text-dark group-hover:text-primary transition-colors line-clamp-2 mb-2">
            {title}
          </h4>

          {description && (
            <p className="text-sm text-muted-light dark:text-muted-dark line-clamp-2 mb-3">
              {description}
            </p>
          )}

          {category && (
            <div className="mb-4">
              <span className="inline-flex items-center bg-primary/10 text-primary text-xs font-medium px-2.5 py-1 rounded-full">
                {category}
              </span>
            </div>
          )}

          {/* Price and CTA */}
          <div className="flex items-center justify-between gap-4">
            <span className="text-sm font-bold text-text-light dark:text-text-dark">
              {price === 0 ? 'Miễn phí' : `${price.toLocaleString('vi-VN')}đ`}
            </span>
            {price > 0 && (
              <button
                onClick={handleAddToCart}
                className="flex items-center justify-center gap-1.5 rounded-lg bg-primary hover:bg-primary/90 text-white px-4 py-2 text-sm font-medium transition-colors"
              >
                <span className="material-symbols-outlined text-base">add_shopping_cart</span>
                <span>Mua</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}

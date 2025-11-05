'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { artworkService } from '../../lib/services/artworkService'
import { useAuth } from '../../lib/auth'
import type { Database } from '../../lib/supabase'

type Artwork = Database['public']['Tables']['artworks']['Row']

export default function GalleryPage() {
  const [artworks, setArtworks] = useState<Artwork[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedFilter, setSelectedFilter] = useState<string>('all')
  const { user } = useAuth()

  useEffect(() => {
    const fetchArtworks = async () => {
      try {
        const data = await artworkService.getPublishedArtworks()
        setArtworks(data)
      } catch (err) {
        console.error('Error fetching artworks:', err)
        setError('Không thể tải thư viện tác phẩm. Vui lòng thử lại sau.')
      } finally {
        setLoading(false)
      }
    }

    fetchArtworks()
  }, [])

  const filters = [
    { key: 'all', label: 'Tất cả' },
    { key: 'recent', label: 'Mới nhất' },
    { key: 'popular', label: 'Nổi bật nhất' },
    { key: 'basic', label: 'Cơ bản' },
    { key: 'advanced', label: 'Nâng cao' }
  ]

  const getFilteredArtworks = () => {
    let filtered = [...artworks]

    switch (selectedFilter) {
      case 'recent':
        filtered.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
        break
      case 'popular':
        filtered.sort((a, b) => (b.likes_count || 0) - (a.likes_count || 0))
        break
      case 'basic':
        filtered = filtered.filter(artwork =>
          artwork.techniques?.some(tech =>
            ['French Knot', 'Satin Stitch', 'Backstitch', 'Stem Stitch'].includes(tech)
          )
        )
        break
      case 'advanced':
        filtered = filtered.filter(artwork =>
          artwork.techniques?.some(tech =>
            ['Thread Painting', 'Goldwork', 'Beadwork', '3D Padded'].includes(tech)
          )
        )
        break
      default:
        // 'all' - no filtering
        break
    }

    return filtered
  }

  const filteredArtworks = getFilteredArtworks()

  if (loading) {
    return (
      <div className="flex min-h-screen w-full flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-gray-600 dark:text-gray-400">Đang tải thư viện tác phẩm...</p>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex min-h-screen w-full flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl mb-4">⚠️</div>
            <h1 className="text-2xl font-bold mb-4">Có lỗi xảy ra</h1>
            <p className="text-gray-600 dark:text-gray-400 mb-8">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-base font-bold text-white hover:opacity-90 transition-opacity"
            >
              Thử lại
            </button>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 to-accent-light/10 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-[-0.033em] text-text-light dark:text-text-dark mb-6">
                Thư Viện Tác Phẩm
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
                Cùng chiêm ngưỡng những tác phẩm thêu tay tuyệt đẹp được tạo nên bởi sự chăm chỉ và sáng tạo của các học viên tại Hang Khoa Art.
              </p>
              {user && (
                <Link
                  href="/gallery/upload"
                  className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-4 text-lg font-bold text-white hover:opacity-90 transition-opacity"
                >
                  Chia sẻ tác phẩm của bạn
                </Link>
              )}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-black text-primary mb-2">{artworks.length}+</div>
                <div className="text-gray-600 dark:text-gray-400">Tác phẩm</div>
              </div>
              <div>
                <div className="text-3xl font-black text-primary mb-2">500+</div>
                <div className="text-gray-600 dark:text-gray-400">Lượt thích</div>
              </div>
              <div>
                <div className="text-3xl font-black text-primary mb-2">50+</div>
                <div className="text-gray-600 dark:text-gray-400">Học viên</div>
              </div>
              <div>
                <div className="text-3xl font-black text-primary mb-2">24/7</div>
                <div className="text-gray-600 dark:text-gray-400">Cộng đồng</div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em] text-text-light dark:text-text-dark mb-4">
                Tác Phẩm Học Viên
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
                Mỗi tác phẩm là kết quả của sự kiên trì, sáng tạo và tình yêu nghệ thuật thêu tay.
              </p>

              {/* Filter Buttons */}
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                {filters.map((filter) => (
                  <button
                    key={filter.key}
                    onClick={() => setSelectedFilter(filter.key)}
                    className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedFilter === filter.key
                        ? 'bg-primary text-white'
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                    }`}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            </div>

            {filteredArtworks.length === 0 ? (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🎨</div>
                <h3 className="text-2xl font-bold mb-4">
                  {selectedFilter === 'all' ? 'Chưa có tác phẩm nào' : `Không có tác phẩm trong danh mục "${filters.find(f => f.key === selectedFilter)?.label}"`}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                  {selectedFilter === 'all'
                    ? 'Hãy là người đầu tiên chia sẻ tác phẩm của bạn!'
                    : 'Hãy chọn danh mục khác hoặc xem tất cả tác phẩm.'
                  }
                </p>
                {selectedFilter !== 'all' && (
                  <button
                    onClick={() => setSelectedFilter('all')}
                    className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-base font-bold text-white hover:opacity-90 transition-opacity mr-4"
                  >
                    Xem tất cả
                  </button>
                )}
                {user ? (
                  <Link
                    href="/gallery/upload"
                    className="inline-flex items-center justify-center rounded-lg bg-accent-light text-text-light px-6 py-3 text-base font-bold hover:opacity-90 transition-colors"
                  >
                    Chia sẻ tác phẩm
                  </Link>
                ) : (
                  <Link
                    href="/auth"
                    className="inline-flex items-center justify-center rounded-lg bg-accent-light text-text-light px-6 py-3 text-base font-bold hover:opacity-90 transition-colors"
                  >
                    Đăng nhập để chia sẻ
                  </Link>
                )}
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredArtworks.map((artwork) => (
                  <Link
                    key={artwork.id}
                    href={`/gallery/${artwork.id}`}
                    className="group relative block overflow-hidden rounded-xl"
                  >
                    <div className="aspect-[3/4] bg-gray-200 dark:bg-gray-700">
                      {artwork.image_url ? (
                        <Image
                          src={artwork.image_url}
                          alt={artwork.title}
                          width={300}
                          height={400}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-400">
                          <span className="material-symbols-outlined text-4xl">image</span>
                        </div>
                      )}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-4 text-white">
                      <h3 className="text-base font-bold leading-tight line-clamp-2 mb-1">
                        {artwork.title}
                      </h3>
                      <div className="flex items-center gap-2 text-sm opacity-90">
                        <span className="material-symbols-outlined text-sm">favorite</span>
                        <span>{artwork.likes_count || 0}</span>
                      </div>
                      {artwork.techniques && artwork.techniques.length > 0 && (
                        <div className="flex flex-wrap gap-1 mt-2">
                          {artwork.techniques.slice(0, 2).map((technique, index) => (
                            <span
                              key={index}
                              className="inline-block bg-white/20 text-xs px-2 py-1 rounded-full"
                            >
                              {technique}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            )}

            {/* Load More Button */}
            {filteredArtworks.length > 0 && (
              <div className="flex justify-center mt-12">
                <button className="inline-flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800 px-6 py-3 text-base font-medium text-text-light dark:text-text-dark hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                  Tải thêm tác phẩm
                </button>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em] text-white mb-6">
              Bạn cũng có thể tạo nên tác phẩm của riêng mình
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Tham gia cộng đồng sáng tạo của chúng tôi và bắt đầu hành trình thêu tay của bạn ngay hôm nay. Không cần kinh nghiệm, chỉ cần đam mê.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/courses"
                className="inline-flex items-center justify-center rounded-lg bg-white text-primary px-8 py-4 text-lg font-bold hover:bg-gray-100 transition-colors"
              >
                Khám phá khóa học
              </Link>
              {user ? (
                <Link
                  href="/gallery/upload"
                  className="inline-flex items-center justify-center rounded-lg border-2 border-white bg-transparent text-white px-8 py-4 text-lg font-bold hover:bg-white hover:text-primary transition-colors"
                >
                  Chia sẻ tác phẩm
                </Link>
              ) : (
                <Link
                  href="/auth"
                  className="inline-flex items-center justify-center rounded-lg border-2 border-white bg-transparent text-white px-8 py-4 text-lg font-bold hover:bg-white hover:text-primary transition-colors"
                >
                  Đăng ký ngay
                </Link>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

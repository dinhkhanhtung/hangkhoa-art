'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import VideoCard from '../../components/VideoCard'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { videoService } from '../../lib/services/videoService'
import type { Database } from '../../lib/supabase'

type StandaloneVideo = Database['public']['Tables']['standalone_videos']['Row']

export default function VideosPage() {
  const [videos, setVideos] = useState<StandaloneVideo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const data = await videoService.getPublishedVideos()
        setVideos(data)
      } catch (err) {
        console.error('Error fetching videos:', err)
        setError('Không thể tải danh sách video. Vui lòng thử lại sau.')
      } finally {
        setLoading(false)
      }
    }

    fetchVideos()
  }, [])

  const categories = ['all', ...Array.from(new Set(videos.map(v => v.category).filter((c): c is string => c !== null)))]

  const filteredVideos = selectedCategory === 'all'
    ? videos
    : videos.filter(v => v.category === selectedCategory)

  if (loading) {
    return (
      <div className="flex min-h-screen w-full flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-gray-600 dark:text-gray-400">Đang tải video...</p>
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
        <section className="relative w-full bg-surface-light dark:bg-surface-dark border-b border-border-light dark:border-border-dark">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <span className="material-symbols-outlined text-3xl text-primary">play_circle</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-light dark:text-text-dark">
                Thư Viện Video Hướng Dẫn
              </h1>
              <p className="text-xl text-muted-light dark:text-muted-dark max-w-3xl mx-auto">
                Khám phá bộ sưu tập video hướng dẫn chi tiết về nghệ thuật thêu tay. Từ kỹ thuật cơ bản đến nâng cao, 
                tất cả đều được trình bày rõ ràng và dễ hiểu.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="#videos"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors shadow-lg"
                >
                  <span>Xem tất cả video</span>
                  <span className="material-symbols-outlined ml-2">arrow_forward</span>
                </Link>
                <Link
                  href="/courses"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-lg bg-surface-light dark:bg-surface-dark text-text-light dark:text-text-dark border border-border-light dark:border-border-dark hover:border-primary dark:hover:border-primary transition-colors shadow-lg"
                >
                  Khóa học đầy đủ
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="w-full py-12 md:py-16 bg-white dark:bg-black/20 border-b border-border-light dark:border-border-dark">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center space-y-2">
                <div className="text-4xl font-bold text-primary">{videos.length}+</div>
                <p className="text-sm text-muted-light dark:text-muted-dark">Video hướng dẫn</p>
              </div>
              <div className="text-center space-y-2">
                <div className="text-4xl font-bold text-primary">{categories.length - 1}</div>
                <p className="text-sm text-muted-light dark:text-muted-dark">Chủ đề đa dạng</p>
              </div>
              <div className="text-center space-y-2">
                <div className="text-4xl font-bold text-primary">24/7</div>
                <p className="text-sm text-muted-light dark:text-muted-dark">Học mọi lúc, mọi nơi</p>
              </div>
              <div className="text-center space-y-2">
                <div className="text-4xl font-bold text-primary">FHD</div>
                <p className="text-sm text-muted-light dark:text-muted-dark">Chất lượng cao</p>
              </div>
            </div>
          </div>
        </section>

        {/* Videos Section */}
        <section id="videos" className="w-full py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-8 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-text-light dark:text-text-dark">
                Thư Viện Video
              </h2>
              <p className="text-lg text-muted-light dark:text-muted-dark">
                Lựa chọn video phù hợp với kỹ thuật bạn muốn học. Mỗi video được thiết kế với hướng dẫn chi tiết và ví dụ thực tế.
              </p>

              {/* Category Filter */}
              <div className="flex flex-wrap justify-center gap-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all ${
                      selectedCategory === category
                        ? 'bg-primary text-white shadow-lg scale-105'
                        : 'bg-surface-light dark:bg-surface-dark text-text-light dark:text-text-dark border border-border-light dark:border-border-dark hover:border-primary dark:hover:border-primary'
                    }`}
                  >
                    {category === 'all' ? 'Tất cả' : category}
                  </button>
                ))}
              </div>
            </div>

            {filteredVideos.length === 0 ? (
              <div className="max-w-lg mx-auto text-center py-16">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                  <span className="material-symbols-outlined text-3xl text-primary">videocam_off</span>
                </div>
                <h3 className="text-2xl font-bold text-text-light dark:text-text-dark mb-4">
                  {selectedCategory === 'all' ? 'Chưa có video nào' : `Không có video trong chủ đề "${selectedCategory}"`}
                </h3>
                <p className="text-muted-light dark:text-muted-dark mb-8">
                  {selectedCategory === 'all'
                    ? 'Chúng tôi đang chuẩn bị những video tuyệt vời. Hãy quay lại sau nhé!'
                    : 'Hãy thử chọn chủ đề khác hoặc xem tất cả video của chúng tôi.'
                  }
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  {selectedCategory !== 'all' && (
                    <button
                      onClick={() => setSelectedCategory('all')}
                      className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors"
                    >
                      Xem tất cả video
                    </button>
                  )}
                  <Link
                    href="/"
                    className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-lg border border-border-light dark:border-border-dark hover:border-primary dark:hover:border-primary transition-colors"
                  >
                    Về trang chủ
                  </Link>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredVideos.map((video) => (
                  <VideoCard
                    key={video.id}
                    id={video.id}
                    title={video.title}
                    description={video.description || undefined}
                    price={video.price}
                    videoId={video.video_id}
                    duration="5:00" // This would come from video metadata
                    category={video.category || undefined}
                  />
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-16 md:py-24 bg-surface-light dark:bg-surface-dark border-y border-border-light dark:border-border-dark">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-8 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-text-light dark:text-text-dark">
                Tại Sao Chọn Video Của Chúng Tôi?
              </h2>
              <p className="text-lg text-muted-light dark:text-muted-dark">
                Trải nghiệm học tập được thiết kế tỉ mỉ để đảm bảo hiệu quả cao nhất cho người học
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-3xl text-primary">school</span>
                </div>
                <h3 className="text-xl font-semibold text-text-light dark:text-text-dark">
                  Hướng Dẫn Chi Tiết
                </h3>
                <p className="text-muted-light dark:text-muted-dark">
                  Mỗi kỹ thuật được giải thích rõ ràng với hình ảnh chất lượng cao và hướng dẫn từng bước chi tiết.
                </p>
              </div>

              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-3xl text-primary">timer</span>
                </div>
                <h3 className="text-xl font-semibold text-text-light dark:text-text-dark">
                  Thời Lượng Phù Hợp
                </h3>
                <p className="text-muted-light dark:text-muted-dark">
                  Video được thiết kế ngắn gọn, dễ theo dõi, giúp bạn học được nhiều kỹ thuật trong thời gian ngắn.
                </p>
              </div>

              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-3xl text-primary">verified</span>
                </div>
                <h3 className="text-xl font-semibold text-text-light dark:text-text-dark">
                  Chất Lượng Đảm Bảo
                </h3>
                <p className="text-muted-light dark:text-muted-dark">
                  Video được thực hiện bởi các nghệ nhân thêu tay chuyên nghiệp với nhiều năm kinh nghiệm.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-16 md:py-24 bg-gradient-to-br from-primary/90 to-primary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-3xl md:text-5xl font-bold text-white">
                Muốn Học Sâu Hơn?
              </h2>
              <p className="text-xl text-white/90">
                Khám phá các khóa học đầy đủ của chúng tôi, bao gồm hàng trăm video hướng dẫn chi tiết, tài liệu tham khảo 
                phong phú, và cộng đồng học viên năng động sẵn sàng hỗ trợ lẫn nhau.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/courses"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-lg bg-white text-primary hover:bg-white/90 transition-colors shadow-lg"
                >
                  <span>Xem Khóa Học</span>
                  <span className="material-symbols-outlined ml-2">arrow_forward</span>
                </Link>
                <Link
                  href="/gallery"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-lg bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-colors"
                >
                  Xem Tác Phẩm
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

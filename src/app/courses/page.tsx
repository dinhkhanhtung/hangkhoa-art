'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import CourseCard from '../../components/CourseCard'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { courseService } from '../../lib/services/courseService'
import type { Database } from '../../lib/supabase'

type Course = Database['public']['Tables']['courses']['Row']

export default function CoursesPage() {
  const [courses, setCourses] = useState<Course[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const data = await courseService.getPublishedCourses()
        setCourses(data)
      } catch (err) {
        console.error('Error fetching courses:', err)
        setError('Không thể tải danh sách khóa học. Vui lòng thử lại sau.')
      } finally {
        setLoading(false)
      }
    }

    fetchCourses()
  }, [])

  if (loading) {
    return (
      <div className="flex min-h-screen w-full flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-gray-600 dark:text-gray-400">Đang tải khóa học...</p>
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
                <span className="material-symbols-outlined text-3xl text-primary">school</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-light dark:text-text-dark">
                Khóa Học Thêu Tay
              </h1>
              <p className="text-xl text-muted-light dark:text-muted-dark">
                Khám phá bộ sưu tập khóa học thêu tay từ cơ bản đến nâng cao. Học cùng các nghệ nhân hàng đầu và 
                tạo nên những tác phẩm nghệ thuật độc đáo của riêng bạn.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="#courses"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors shadow-lg"
                >
                  <span>Xem tất cả khóa học</span>
                  <span className="material-symbols-outlined ml-2">arrow_forward</span>
                </Link>
                <Link
                  href="/videos"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-lg bg-surface-light dark:bg-surface-dark text-text-light dark:text-text-dark border border-border-light dark:border-border-dark hover:border-primary dark:hover:border-primary transition-colors shadow-lg"
                >
                  Xem video lẻ
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
                <div className="text-4xl font-bold text-primary">{courses.length}+</div>
                <p className="text-sm text-muted-light dark:text-muted-dark">Khóa học</p>
              </div>
              <div className="text-center space-y-2">
                <div className="text-4xl font-bold text-primary">5,000+</div>
                <p className="text-sm text-muted-light dark:text-muted-dark">Học viên tin tưởng</p>
              </div>
              <div className="text-center space-y-2">
                <div className="text-4xl font-bold text-primary">4.8</div>
                <p className="text-sm text-muted-light dark:text-muted-dark">Đánh giá trung bình</p>
              </div>
              <div className="text-center space-y-2">
                <div className="text-4xl font-bold text-primary">24/7</div>
                <p className="text-sm text-muted-light dark:text-muted-dark">Hỗ trợ học viên</p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="w-full py-16 md:py-24 bg-surface-light dark:bg-surface-dark border-b border-border-light dark:border-border-dark">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="flex flex-col gap-6">
                <div className="inline-flex items-center justify-start gap-2 text-primary">
                  <span className="material-symbols-outlined">verified</span>
                  <span className="font-medium">Lợi ích khi tham gia khóa học</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-text-light dark:text-text-dark">
                  Trở Thành Nghệ Nhân Thêu Tay Chuyên Nghiệp
                </h2>
                <p className="text-lg text-muted-light dark:text-muted-dark">
                  Khóa học được thiết kế để giúp bạn tiếp cận nghệ thuật thêu tay một cách có hệ thống, 
                  từ những kiến thức cơ bản đến các kỹ thuật nâng cao.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary">video_library</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-text-light dark:text-text-dark mb-1">
                        Video Bài Giảng Chi Tiết
                      </h3>
                      <p className="text-muted-light dark:text-muted-dark">
                        Truy cập không giới hạn vào kho video hướng dẫn chất lượng cao
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary">forum</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-text-light dark:text-text-dark mb-1">
                        Hỗ Trợ 1-1
                      </h3>
                      <p className="text-muted-light dark:text-muted-dark">
                        Nhận hỗ trợ trực tiếp từ giảng viên khi gặp khó khăn
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary">workspace_premium</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-text-light dark:text-text-dark mb-1">
                        Chứng Chỉ Hoàn Thành
                      </h3>
                      <p className="text-muted-light dark:text-muted-dark">
                        Nhận chứng chỉ sau khi hoàn thành khóa học
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative aspect-square w-full rounded-2xl bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1452860606245-08befc0ff44b"
                  alt="Học viên thực hành thêu"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Course Grid */}
        <section id="courses" className="w-full py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-8 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-text-light dark:text-text-dark">
                Danh Sách Khóa Học
              </h2>
              <p className="text-lg text-muted-light dark:text-muted-dark">
                Chọn khóa học phù hợp với trình độ và sở thích của bạn. Mỗi khóa học được thiết kế chi tiết với
                lộ trình học tập rõ ràng và hướng dẫn từng bước.
              </p>
            </div>

            {courses.length === 0 ? (
              <div className="max-w-lg mx-auto text-center py-16">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                  <span className="material-symbols-outlined text-3xl text-primary">school</span>
                </div>
                <h3 className="text-2xl font-bold text-text-light dark:text-text-dark mb-4">
                  Chưa có khóa học nào
                </h3>
                <p className="text-muted-light dark:text-muted-dark mb-8">
                  Chúng tôi đang chuẩn bị những khóa học tuyệt vời. Hãy quay lại sau nhé!
                </p>
                <Link
                  href="/"
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors"
                >
                  Về trang chủ
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {courses.map((course) => (
                  <CourseCard
                    key={course.id}
                    id={course.id}
                    title={course.title}
                    slug={course.slug}
                    price={course.price}
                    coverImageUrl={course.cover_image_url || undefined}
                    instructor="Hang Khoa" // This would come from instructor data
                    rating={4.8}
                    reviewCount={125}
                  />
                ))}
              </div>
            )}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full py-16 md:py-24 bg-surface-light dark:bg-surface-dark border-y border-border-light dark:border-border-dark">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-8 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-text-light dark:text-text-dark">
                Câu Hỏi Thường Gặp
              </h2>
              <p className="text-lg text-muted-light dark:text-muted-dark">
                Những thắc mắc phổ biến về khóa học
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              <div className="p-6 rounded-xl bg-white dark:bg-black/20 border border-border-light dark:border-border-dark">
                <h3 className="text-lg font-semibold text-text-light dark:text-text-dark mb-2">
                  Tôi có thể học vào thời gian nào?
                </h3>
                <p className="text-muted-light dark:text-muted-dark">
                  Bạn có thể học mọi lúc, mọi nơi. Tất cả bài giảng đều được quay sẵn và bạn có thể xem lại không giới hạn.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-white dark:bg-black/20 border border-border-light dark:border-border-dark">
                <h3 className="text-lg font-semibold text-text-light dark:text-text-dark mb-2">
                  Tôi sẽ được hỗ trợ như thế nào khi gặp khó khăn?
                </h3>
                <p className="text-muted-light dark:text-muted-dark">
                  Bạn sẽ được hỗ trợ trực tiếp qua tin nhắn hoặc video call với giảng viên, đồng thời có thể trao đổi với cộng đồng học viên.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-white dark:bg-black/20 border border-border-light dark:border-border-dark">
                <h3 className="text-lg font-semibold text-text-light dark:text-text-dark mb-2">
                  Khóa học có thời hạn không?
                </h3>
                <p className="text-muted-light dark:text-muted-dark">
                  Sau khi mua khóa học, bạn sẽ có quyền truy cập vĩnh viễn vào nội dung khóa học và có thể xem lại bất cứ lúc nào.
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
                Sẵn Sàng Bắt Đầu Hành Trình?
              </h2>
              <p className="text-xl text-white/90">
                Tham gia cùng hơn 5,000 học viên đã tin tưởng và lựa chọn Hang Khoa Art để học thêu tay. 
                Khóa học của chúng tôi sẽ giúp bạn từng bước trở thành nghệ nhân thêu tay chuyên nghiệp.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/auth" 
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-lg bg-white text-primary hover:bg-white/90 transition-colors shadow-lg"
                >
                  <span>Đăng Ký Ngay</span>
                  <span className="material-symbols-outlined ml-2">arrow_forward</span>
                </Link>
                <Link 
                  href="/gallery" 
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-lg bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-colors"
                >
                  Xem Tác Phẩm Học Viên
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

import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CourseCard from '../components/CourseCard'
import VideoCard from '../components/VideoCard'

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative w-full min-h-[600px] md:min-h-[700px] overflow-hidden">
          {/* Background Image and Overlay */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=1920&h=1080&fit=crop&crop=center")'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60" />
          </div>

          {/* Content */}
          <div className="relative h-full">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full">
              <div className="flex flex-col items-center justify-center h-full pt-20 pb-12 text-center">
                <div className="max-w-4xl mx-auto space-y-8">
                  <h1 className="text-white font-black text-4xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight">
                    Khám Phá Nghệ Thuật Thêu Tay Cùng Hang Khoa Art
                  </h1>
                  <p className="text-gray-100 text-lg md:text-xl font-medium max-w-2xl mx-auto">
                    Nơi gặp gỡ của nghệ thuật thêu tay truyền thống và tinh thần sáng tạo đương đại. 
                    Hãy cùng chúng tôi khám phá và sáng tạo.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                    <Link 
                      href="/courses" 
                      className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-lg bg-primary text-background-dark hover:bg-primary/90 transition-colors shadow-lg"
                    >
                      <span>Khám Phá Khóa Học</span>
                      <span className="material-symbols-outlined ml-2">arrow_forward</span>
                    </Link>
                    <Link 
                      href="/videos" 
                      className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-lg bg-white/90 text-text-light hover:bg-white transition-colors shadow-lg"
                    >
                      Xem Video Miễn Phí
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="w-full py-12 md:py-16 bg-surface-light dark:bg-surface-dark border-y border-border-light dark:border-border-dark">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-4xl font-bold text-primary">5,000+</div>
                <p className="text-sm text-muted-light dark:text-muted-dark">Học viên tin tưởng</p>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-primary">50+</div>
                <p className="text-sm text-muted-light dark:text-muted-dark">Khóa học đa dạng</p>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-primary">100+</div>
                <p className="text-sm text-muted-light dark:text-muted-dark">Video hướng dẫn</p>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-primary">4.9</div>
                <p className="text-sm text-muted-light dark:text-muted-dark">Đánh giá trung bình</p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Courses Section */}
        <section className="w-full py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-8">
              <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-text-light dark:text-text-dark">
                  Khóa Học Nổi Bật
                </h2>
                <p className="text-muted-light dark:text-muted-dark text-lg max-w-2xl mx-auto">
                  Khám phá các khóa học được yêu thích nhất, được thiết kế để giúp bạn thành thạo nghệ thuật thêu tay
                </p>
              </div>

              {/* Course Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <CourseCard
                  id="1"
                  title="Khóa Học Thêu Cơ Bản"
                  slug="khoa-hoc-theu-co-ban"
                  price={1500000}
                  instructor="Nguyễn Thị Hằng"
                  coverImageUrl="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=225&fit=crop&crop=center"
                />
                <CourseCard
                  id="2"
                  title="Kỹ Thuật Thêu Nâng Cao"
                  slug="ky-thuat-theu-nang-cao"
                  price={2000000}
                  instructor="Trần Thị Mai"
                  coverImageUrl="https://images.unsplash.com/photo-1581299894007-aaa50297cf16?w=400&h=225&fit=crop&crop=center"
                />
                <CourseCard
                  id="3"
                  title="Thêu Chân Dung Nghệ Thuật"
                  slug="theu-chan-dung-nghe-thuat"
                  price={1800000}
                  instructor="Lê Thị Hương"
                  coverImageUrl="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=225&fit=crop&crop=center"
                />
              </div>

              <div className="text-center">
                <Link 
                  href="/courses"
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-lg text-primary border-2 border-primary hover:bg-primary/5 transition-colors"
                >
                  Xem Tất Cả Khóa Học
                  <span className="material-symbols-outlined ml-2">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Videos Section */}
        <section className="w-full py-16 md:py-24 bg-surface-light dark:bg-surface-dark border-y border-border-light dark:border-border-dark">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="flex flex-col gap-6">
                <h2 className="text-3xl md:text-4xl font-bold text-text-light dark:text-text-dark">
                  Video Hướng Dẫn Chi Tiết Cho Từng Kỹ Thuật
                </h2>
                <p className="text-lg text-muted-light dark:text-muted-dark">
                  Khám phá bộ sưu tập video hướng dẫn đa dạng của chúng tôi. Mỗi video tập trung vào một kỹ thuật cụ thể, 
                  giúp bạn nhanh chóng nắm bắt và thực hành hiệu quả.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary">smart_display</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-text-light dark:text-text-dark mb-1">
                        Hướng Dẫn Chi Tiết
                      </h3>
                      <p className="text-muted-light dark:text-muted-dark">
                        Video quay cận cảnh, hướng dẫn từng bước giúp bạn dễ dàng theo dõi và thực hành
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary">update</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-text-light dark:text-text-dark mb-1">
                        Học Theo Tốc Độ Của Bạn
                      </h3>
                      <p className="text-muted-light dark:text-muted-dark">
                        Xem lại không giới hạn, tạm dừng và thực hành theo nhịp độ phù hợp với bạn
                      </p>
                    </div>
                  </div>
                </div>
                <Link 
                  href="/videos" 
                  className="inline-flex items-center justify-center w-fit px-6 py-3 text-base font-medium rounded-lg bg-primary text-background-dark hover:bg-primary/90 transition-colors"
                >
                  Xem Tất Cả Video
                  <span className="material-symbols-outlined ml-2">arrow_forward</span>
                </Link>
              </div>

              {/* Video Cards */}
              <div className="relative">
                <div className="flex gap-4 overflow-x-auto pb-4 scroll-container snap-x">
                  <div className="snap-center">
                    <VideoCard
                      id="1"
                      title="Kỹ Thuật Thêu Nút Pháp"
                      description="Học cách thêu nút Pháp cơ bản"
                      price={50000}
                      videoId="french-knot"
                      duration="2:15"
                      category="Kỹ Thuật Cơ Bản"
                      thumbnailUrl="https://images.unsplash.com/photo-1578662996442-48f60103fc96"
                    />
                  </div>
                  <div className="snap-center">
                    <VideoCard
                      id="2"
                      title="Hoàn Thiện Mũi Thêu Satin"
                      description="Làm chủ kỹ thuật thêu mũi Satin"
                      price={50000}
                      videoId="satin-stitch"
                      duration="4:30"
                      category="Kỹ Thuật Cơ Bản"
                      thumbnailUrl="https://images.unsplash.com/photo-1581299894007-aaa50297cf16"
                    />
                  </div>
                  <div className="snap-center">
                    <VideoCard
                      id="3"
                      title="Phối Màu Trong Thêu"
                      description="Học cách phối màu chỉ thêu hiệu quả"
                      price={75000}
                      videoId="color-blending"
                      duration="5:02"
                      category="Kỹ Thuật Nâng Cao"
                      thumbnailUrl="https://images.unsplash.com/photo-1578662996442-48f60103fc96"
                    />
                  </div>
                </div>
                
                {/* Gradient Overlay */}
                <div className="absolute right-0 top-0 bottom-4 w-24 bg-gradient-to-l from-surface-light dark:from-surface-dark to-transparent pointer-events-none"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="w-full py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-text-light dark:text-text-dark">
                Tác Phẩm Từ Học Viên
              </h2>
              <p className="text-muted-light dark:text-muted-dark text-lg max-w-2xl mx-auto">
                Khám phá những tác phẩm tuyệt vời được tạo ra bởi cộng đồng học viên của chúng tôi
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="group relative overflow-hidden rounded-xl aspect-[3/4] bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark">
                <img
                  src="https://images.unsplash.com/photo-1578662996442-48f60103fc96"
                  alt="Tác phẩm học viên"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-white font-medium mb-2">Hoa Cúc Thêu Nổi</p>
                    <p className="text-gray-200 text-sm">bởi Nguyễn Thị Anh</p>
                  </div>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-xl aspect-[3/4] bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark">
                <img
                  src="https://images.unsplash.com/photo-1581299894007-aaa50297cf16"
                  alt="Tác phẩm học viên"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-white font-medium mb-2">Phong Cảnh Thu</p>
                    <p className="text-gray-200 text-sm">bởi Trần Văn Bình</p>
                  </div>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-xl aspect-[3/4] bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark">
                <img
                  src="https://images.unsplash.com/photo-1578662996442-48f60103fc96"
                  alt="Tác phẩm học viên"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-white font-medium mb-2">Chân Dung Gia Đình</p>
                    <p className="text-gray-200 text-sm">bởi Lê Thị Hương</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <Link 
                href="/gallery"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-lg text-primary border-2 border-primary hover:bg-primary/5 transition-colors"
              >
                Xem Thêm Tác Phẩm
                <span className="material-symbols-outlined ml-2">arrow_forward</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="w-full py-16 md:py-24 bg-gradient-to-br from-primary/90 to-primary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-3xl md:text-5xl font-bold text-white">
                Bắt Đầu Hành Trình Sáng Tạo Của Bạn
              </h2>
              <p className="text-lg md:text-xl text-white/90">
                Tham gia cùng hàng ngàn người sáng tạo và biến ý tưởng của bạn thành những tác phẩm nghệ thuật tuyệt vời. 
                Bài học đầu tiên của bạn chỉ cách một cú nhấp chuột.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/auth" 
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-lg bg-white text-primary hover:bg-white/90 transition-colors"
                >
                  Đăng Ký Ngay
                  <span className="material-symbols-outlined ml-2">arrow_forward</span>
                </Link>
                <Link 
                  href="/about" 
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-lg bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-colors"
                >
                  Tìm Hiểu Thêm
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <Link 
          href="/cart" 
          className="flex items-center justify-center w-14 h-14 rounded-full bg-white text-primary shadow-lg hover:shadow-xl transition-shadow border border-border-light dark:border-border-dark"
          aria-label="Giỏ hàng"
        >
          <span className="material-symbols-outlined text-2xl">shopping_cart</span>
        </Link>
        <Link 
          href="/support" 
          className="flex items-center justify-center w-14 h-14 rounded-full bg-primary text-white shadow-lg hover:shadow-xl transition-shadow"
          aria-label="Hỗ trợ"
        >
          <span className="material-symbols-outlined text-2xl">support_agent</span>
        </Link>
      </div>
    </div>
  )
}

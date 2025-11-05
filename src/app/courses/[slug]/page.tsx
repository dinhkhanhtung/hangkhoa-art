import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import { courseService } from '../../../lib/services/courseService'
import { instructorService } from '../../../lib/services/instructorService'

// This would normally fetch from the database
const sampleCourse = {
  id: '1',
  title: 'Khóa học thêu tay nghệ thuật',
  slug: 'khoa-hoc-theu-tay-nghe-thuat',
  full_description: 'Học các kỹ thuật thêu tay từ cơ bản đến nâng cao để tạo ra những tác phẩm nghệ thuật độc đáo của riêng bạn.',
  price: 1500000,
  cover_image_url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop&crop=center',
  instructor: {
    id: '1',
    name: 'Hằng Khoa',
    bio: 'Với hơn 10 năm kinh nghiệm, nghệ nhân Hằng Khoa đã truyền cảm hứng cho hàng ngàn học viên, giúp họ tìm thấy niềm vui và sự sáng tạo qua từng đường kim mũi chỉ.',
    avatar_url: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=center',
    specialty: 'Nghệ nhân thêu tay',
    experience_years: 10,
    course_count: 5,
    student_count: 2340
  },
  rating: 4.8,
  review_count: 125,
  student_count: 2345,
  lessons: [
    {
      id: '1',
      title: 'Giới thiệu dụng cụ và nguyên liệu',
      duration: 300,
      is_free_preview: true,
      order_index: 1
    },
    {
      id: '2',
      title: 'Kỹ thuật căng vải lên khung',
      duration: 450,
      is_free_preview: false,
      order_index: 2
    },
    {
      id: '3',
      title: 'Cách đi kim và xỏ chỉ cơ bản',
      duration: 600,
      is_free_preview: false,
      order_index: 3
    }
  ]
}

const courseFeatures = [
  { icon: 'design_services', title: '5+ Mũi thêu cơ bản', description: 'Thành thạo các mũi thêu nền tảng như French Knot, Satin Stitch, và Backstitch.' },
  { icon: 'palette', title: 'Kỹ thuật phối màu', description: 'Học cách chọn và kết hợp chỉ màu để tạo ra tác phẩm hài hòa, có chiều sâu.' },
  { icon: 'auto_awesome', title: 'Hoàn thiện sản phẩm', description: 'Bí quyết căng vải, xử lý mặt sau và hoàn thiện tác phẩm một cách chuyên nghiệp.' }
]

const reviews = [
  { id: 1, user: 'Nguyễn Thị A', rating: 5, comment: 'Khóa học rất chi tiết và dễ hiểu. Giáo viên hướng dẫn tận tình.', date: '2024-01-15' },
  { id: 2, user: 'Trần Văn B', rating: 5, comment: 'Tôi đã học được rất nhiều kỹ năng mới. Rất đáng tiền!', date: '2024-01-10' },
  { id: 3, user: 'Lê Thị C', rating: 4, comment: 'Nội dung tốt, chỉ có một số video chất lượng chưa cao.', date: '2024-01-05' }
]

const faqs = [
  { question: 'Khóa học này có phù hợp với người mới bắt đầu không?', answer: 'Tuyệt đối! Khóa học được thiết kế từ những kiến thức cơ bản nhất, dành cho cả những bạn chưa từng cầm kim thêu bao giờ.' },
  { question: 'Tôi có cần chuẩn bị dụng cụ gì trước khi học không?', answer: 'Trong bài học đầu tiên, chúng tôi sẽ hướng dẫn chi tiết về các dụng cụ cần thiết và gợi ý nơi mua uy tín. Bạn có thể bắt đầu với những vật dụng cơ bản nhất.' },
  { question: 'Chính sách hoàn tiền và bảo hành như thế nào?', answer: 'Chúng tôi cam kết hoàn tiền 100% trong vòng 7 ngày nếu bạn không hài lòng với chất lượng khóa học. Bạn có quyền truy cập khóa học trọn đời sau khi mua.' }
]

export default function CourseDetailPage({ params }: { params: { slug: string } }) {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="w-full py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Column */}
              <div className="flex flex-col gap-6">
                <p className="text-primary font-bold uppercase tracking-wider">KHÓA HỌC THÊU TAY</p>

                <div className="flex flex-col gap-3">
                  <h1 className="text-4xl lg:text-5xl font-black leading-tight">
                    {sampleCourse.title}
                  </h1>
                  <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                    {sampleCourse.full_description}
                  </p>
                </div>

                {/* Meta + Rating */}
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-primary">star</span>
                    <span className="font-medium">{sampleCourse.rating} ({sampleCourse.review_count} đánh giá)</span>
                  </div>
                  <span className="text-gray-400">|</span>
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined">group</span>
                    <span>{sampleCourse.student_count} học viên đã tham gia</span>
                  </div>
                </div>

                {/* Price + CTA */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4">
                  <h2 className="text-4xl font-bold">{sampleCourse.price.toLocaleString('vi-VN')}đ</h2>
                  <button className="flex items-center justify-center gap-2 px-8 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-colors">
                    <span className="material-symbols-outlined">add_shopping_cart</span>
                    <span>Mua Khóa Học</span>
                  </button>
                </div>
              </div>

              {/* Right Column */}
              <div className="aspect-video w-full">
                <iframe
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full rounded-xl shadow-lg"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Course Preview"
                />
              </div>
            </div>
          </div>
        </section>

        {/* What You'll Learn */}
        <section className="w-full py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">Bạn sẽ học được gì?</h2>
              <p className="mt-3 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Nắm vững các kỹ thuật thêu tay cần thiết để biến ý tưởng của bạn thành hiện thực.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {courseFeatures.map((feature, index) => (
                <div key={index} className="flex gap-4 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
                  <div className="text-primary rounded-full bg-primary/10 p-3 flex-shrink-0">
                    <span className="material-symbols-outlined text-2xl">{feature.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{feature.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content: Curriculum & Instructor */}
        <section className="w-full py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Left Column: Curriculum & Reviews */}
              <div className="lg:col-span-2">
                {/* Curriculum */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold mb-6">Nội dung khóa học</h2>
                  <div className="space-y-3">
                    {sampleCourse.lessons.map((lesson, index) => (
                      <details key={lesson.id} className="group rounded-lg bg-gray-50 dark:bg-gray-800 p-4 cursor-pointer">
                        <summary className="flex items-center justify-between font-bold text-lg list-none">
                          Chương {lesson.order_index}: {lesson.title}
                          <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180">
                            expand_more
                          </span>
                        </summary>
                        <div className="mt-4 space-y-3 pl-2 border-l-2 border-primary/50">
                          <div className="flex items-center justify-between pl-4">
                            <div className="flex items-center gap-3">
                              <span className={`material-symbols-outlined ${lesson.is_free_preview ? 'text-green-500' : 'text-gray-400'}`}>
                                {lesson.is_free_preview ? 'play_circle' : 'play_circle'}
                              </span>
                              <span>Giới thiệu chi tiết</span>
                            </div>
                            <button className={`text-sm font-bold px-3 py-1 rounded-md ${
                              lesson.is_free_preview
                                ? 'bg-green-100 text-green-700'
                                : 'bg-primary/20 text-primary'
                            }`}>
                              {lesson.is_free_preview ? 'Xem miễn phí' : 'Mua lẻ 50.000đ'}
                            </button>
                          </div>
                        </div>
                      </details>
                    ))}
                  </div>
                </div>

                {/* Reviews */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold mb-6">Đánh giá từ học viên</h2>

                  {/* Rating Summary */}
                  <div className="flex flex-col md:flex-row gap-8 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl mb-6">
                    <div className="flex flex-col items-center justify-center gap-2">
                      <p className="text-5xl font-black">{sampleCourse.rating}</p>
                      <div className="flex gap-1 text-primary">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="material-symbols-outlined">star</span>
                        ))}
                      </div>
                      <p className="text-sm text-gray-500">Từ {sampleCourse.review_count} đánh giá</p>
                    </div>

                    <div className="grid min-w-[200px] max-w-[400px] flex-1 grid-cols-[20px_1fr_40px] items-center gap-x-4 gap-y-3">
                      {[5, 4, 3, 2, 1].map((rating) => (
                        <div key={rating} className="contents">
                          <p className="text-sm font-medium">{rating}</p>
                          <div className="h-2 rounded-full bg-gray-200 dark:bg-gray-700">
                            <div
                              className="rounded-full bg-primary h-full"
                              style={{ width: rating === 5 ? '85%' : rating === 4 ? '10%' : '3%' }}
                            ></div>
                          </div>
                          <p className="text-sm text-right text-gray-500">
                            {rating === 5 ? '85%' : rating === 4 ? '10%' : rating === 3 ? '3%' : '2%'}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Individual Reviews */}
                  <div className="space-y-4">
                    {reviews.map((review) => (
                      <div key={review.id} className="p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <span className="font-medium">{review.user}</span>
                            <div className="flex gap-1 text-primary">
                              {[...Array(review.rating)].map((_, i) => (
                                <span key={i} className="material-symbols-outlined text-sm">star</span>
                              ))}
                            </div>
                          </div>
                          <span className="text-sm text-gray-500">{review.date}</span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300">{review.comment}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Instructor */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-md">
                  <h3 className="text-2xl font-bold mb-6">Giảng viên</h3>
                  <div className="flex flex-col items-center text-center">
                    <img
                      className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-primary/50"
                      src={sampleCourse.instructor.avatar_url}
                      alt={sampleCourse.instructor.name}
                    />
                    <h4 className="font-bold text-xl">{sampleCourse.instructor.name}</h4>
                    <p className="text-primary font-semibold">{sampleCourse.instructor.specialty}</p>
                    <p className="mt-4 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                      {sampleCourse.instructor.bio}
                    </p>
                    <a
                      href={`/instructors/${sampleCourse.instructor.id}`}
                      className="mt-6 text-sm font-bold text-primary hover:underline"
                    >
                      Xem hồ sơ chi tiết
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">Câu hỏi thường gặp</h2>
              <p className="mt-3 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Giải đáp các thắc mắc phổ biến để bạn yên tâm bắt đầu hành trình sáng tạo.
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <details key={index} className="group rounded-lg bg-white dark:bg-gray-800 p-5 cursor-pointer">
                  <summary className="flex items-center justify-between font-semibold text-lg list-none">
                    {faq.question}
                    <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180">
                      expand_more
                    </span>
                  </summary>
                  <p className="mt-4 text-gray-600 dark:text-gray-300">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

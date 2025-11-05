import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function AboutPage() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="w-full py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-center justify-center p-8 text-center" style={{
              backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=600&fit=crop&crop=center")'
            }}>
              <div className="flex flex-col gap-4 max-w-3xl">
                <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] md:text-6xl">
                  Thêu nên câu chuyện từ những sợi chỉ
                </h1>
                <h2 className="text-gray-200 text-base font-normal leading-normal md:text-lg">
                  Khám phá nghệ thuật thêu tay tinh xảo và đánh thức người nghệ sĩ bên trong bạn.
                </h2>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="w-full py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold leading-tight tracking-[-0.015em] mb-4">
                Sứ mệnh & Tầm nhìn
              </h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Tại Hang Khoa Art, chúng tôi tin rằng mỗi đường kim mũi chỉ không chỉ tạo ra một tác phẩm nghệ thuật mà còn kể một câu chuyện. Sứ mệnh của chúng tôi là bảo tồn và lan tỏa vẻ đẹp của nghệ thuật thêu tay truyền thống, trong khi tầm nhìn của chúng tôi là xây dựng một cộng đồng nơi sự sáng tạo được nuôi dưỡng và mọi người đều có thể trở thành nghệ sĩ.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex gap-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6">
                <div className="text-primary rounded-full bg-primary/10 p-3">
                  <span className="material-symbols-outlined text-2xl">favorite</span>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg font-bold">Sứ mệnh của chúng tôi</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Gìn giữ và phát huy nghệ thuật thêu tay Việt Nam, mang vẻ đẹp truyền thống vào cuộc sống hiện đại.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6">
                <div className="text-primary rounded-full bg-primary/10 p-3">
                  <span className="material-symbols-outlined text-2xl">public</span>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg font-bold">Tầm nhìn của chúng tôi</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Trở thành nguồn cảm hứng và là nơi kết nối cho những người yêu nghệ thuật thêu tay trên toàn thế giới.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Story Timeline Section */}
        <section className="w-full py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold leading-tight tracking-[-0.015em] text-center mb-12">
              Câu chuyện hình thành
            </h2>

            <div className="max-w-3xl mx-auto">
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="bg-primary/20 text-primary rounded-full p-3">
                      <span className="material-symbols-outlined">auto_awesome</span>
                    </div>
                  </div>
                  <div className="flex-1 pb-8">
                    <p className="text-gray-500 dark:text-gray-400 text-sm">2018</p>
                    <h3 className="text-lg font-semibold mb-2">Khởi đầu đam mê</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Từ tình yêu với những đường nét tinh xảo của nghệ thuật thêu tay, Hang Khoa Art được nhen nhóm với mong muốn chia sẻ vẻ đẹp này đến với mọi người.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="bg-primary/20 text-primary rounded-full p-3">
                      <span className="material-symbols-outlined">storefront</span>
                    </div>
                  </div>
                  <div className="flex-1 pb-8">
                    <p className="text-gray-500 dark:text-gray-400 text-sm">2020</p>
                    <h3 className="text-lg font-semibold mb-2">Xưởng thêu đầu tiên</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Một không gian sáng tạo nhỏ được thành lập, trở thành nơi những ý tưởng đầu tiên được hiện thực hóa và những tác phẩm nghệ thuật ra đời.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="bg-primary/20 text-primary rounded-full p-3">
                      <span className="material-symbols-outlined">school</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-500 dark:text-gray-400 text-sm">2022</p>
                    <h3 className="text-lg font-semibold mb-2">Ra mắt các khóa học online</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Vượt qua giới hạn không gian, chúng tôi mang nghệ thuật thêu đến gần hơn với cộng đồng qua các khóa học trực tuyến, kết nối những tâm hồn đồng điệu.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="w-full py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold leading-tight tracking-[-0.015em] mb-4">
                Gặp gỡ đội ngũ
              </h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Những nghệ nhân tâm huyết đứng sau các tác phẩm và khóa học, luôn sẵn sàng truyền cảm hứng và chia sẻ đam mê.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center gap-4">
                <img
                  className="w-48 h-48 rounded-full object-cover"
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=center"
                  alt="Nguyễn Thu Hằng"
                />
                <div>
                  <h3 className="font-bold text-lg">Nguyễn Thu Hằng</h3>
                  <p className="text-primary font-medium text-sm">Người sáng lập & Giảng viên chính</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                    Với hơn 10 năm kinh nghiệm, chị Hằng là linh hồn của Hang Khoa Art, mang đam mê và sự tỉ mỉ vào từng tác phẩm.
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center text-center gap-4">
                <img
                  className="w-48 h-48 rounded-full object-cover"
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=center"
                  alt="Trần Minh Khoa"
                />
                <div>
                  <h3 className="font-bold text-lg">Trần Minh Khoa</h3>
                  <p className="text-primary font-medium text-sm">Nghệ nhân thêu</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                    Anh Khoa là người thổi hồn vào những thiết kế phức tạp, với kỹ thuật điêu luyện và óc sáng tạo không ngừng.
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center text-center gap-4">
                <img
                  className="w-48 h-48 rounded-full object-cover"
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=center"
                  alt="Lê Phương Anh"
                />
                <div>
                  <h3 className="font-bold text-lg">Lê Phương Anh</h3>
                  <p className="text-primary font-medium text-sm">Hỗ trợ học viên</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                    Phương Anh luôn nhiệt tình hỗ trợ, đảm bảo mỗi học viên đều có trải nghiệm học tập tốt nhất tại Hang Khoa Art.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="w-full py-16 md:py-24 bg-primary/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 p-8 md:p-16 rounded-xl bg-accent/20">
              <div className="text-center lg:text-left">
                <h2 className="text-3xl font-bold mb-4">Bắt đầu hành trình sáng tạo của bạn</h2>
                <p className="text-gray-600 dark:text-gray-300 max-w-xl">
                  Tham gia cộng đồng của chúng tôi để học hỏi, chia sẻ và tạo ra những tác phẩm nghệ thuật độc đáo của riêng mình.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <a href="/courses" className="flex items-center justify-center px-6 py-3 bg-primary text-white font-bold rounded-lg hover:opacity-90 transition-opacity">
                  Khám phá khoá học
                </a>
                <a href="/gallery" className="flex items-center justify-center px-6 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-bold rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  Xem bộ sưu tập
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

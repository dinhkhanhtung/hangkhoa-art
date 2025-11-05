import Header from '../../../components/Header'
import Footer from '../../../components/Footer'

// Sample video data
const sampleVideo = {
  id: '1',
  title: 'Kỹ thuật Thêu Nổi 3D',
  description: 'Khám phá nghệ thuật thêu nổi 3D (Stumpwork) qua video hướng dẫn chi tiết này. Bạn sẽ được học từ những bước cơ bản nhất như chọn lựa vật liệu, căng vải, đến các kỹ thuật phức tạp để tạo ra những chi tiết nổi sống động như cánh hoa, côn trùng, và nhiều họa tiết khác.',
  price: 199000,
  duration: '45 phút',
  level: 'Trung bình',
  thumbnail: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop&crop=center',
  instructor: {
    name: 'Nguyễn Thu Hằng',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=center'
  }
}

const relatedVideos = [
  {
    id: '2',
    title: 'Thêu Hoạ Tiết Côn Trùng',
    price: 149000,
    thumbnail: 'https://images.unsplash.com/photo-1581299894007-aaa50297cf16?w=400&h=300&fit=crop&crop=center'
  },
  {
    id: '3',
    title: 'Nhập Môn Punch Needle',
    price: 129000,
    thumbnail: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&crop=center'
  },
  {
    id: '4',
    title: 'Thêu Chân Dung Cơ Bản',
    price: 249000,
    thumbnail: 'https://images.unsplash.com/photo-1581299894007-aaa50297cf16?w=400&h=300&fit=crop&crop=center'
  },
  {
    id: '5',
    title: 'Thêu Tranh Phong Cảnh',
    price: 219000,
    thumbnail: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&crop=center'
  }
]

export default function VideoDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />

      <main className="flex-grow">
        {/* Breadcrumbs */}
        <section className="w-full py-4 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center gap-2 text-sm">
              <a href="/" className="text-gray-500 hover:text-primary transition-colors">
                Trang Chủ
              </a>
              <span className="text-gray-400">/</span>
              <a href="/videos" className="text-gray-500 hover:text-primary transition-colors">
                Video Lẻ
              </a>
              <span className="text-gray-400">/</span>
              <span className="text-gray-900 dark:text-white">{sampleVideo.title}</span>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="w-full py-8 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
              {/* Left Column: Video and Description */}
              <div className="lg:col-span-2">
                {/* Video Player */}
                <div className="w-full mb-8">
                  <div className="relative aspect-video bg-black rounded-xl overflow-hidden">
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                      title={sampleVideo.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>

                {/* Tabs */}
                <div className="mb-8">
                  <div className="border-b border-gray-200 dark:border-gray-700">
                    <nav className="-mb-px flex space-x-8">
                      <button className="border-b-2 border-primary px-1 py-4 text-base font-semibold text-primary">
                        Mô tả
                      </button>
                      <button className="border-b-2 border-transparent px-1 py-4 text-base font-medium text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
                        Giảng viên
                      </button>
                    </nav>
                  </div>

                  <div className="py-8 text-gray-600 dark:text-gray-300 text-base leading-relaxed space-y-4">
                    <p>{sampleVideo.description}</p>
                    <p>Kết thúc video, bạn sẽ tự tin tạo ra một bức tranh thêu 3D của riêng mình, một món quà ý nghĩa hoặc một vật trang trí tinh xảo cho không gian sống.</p>
                  </div>
                </div>
              </div>

              {/* Right Column: Purchase Card */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm">
                  <h1 className="text-2xl md:text-3xl font-bold mb-2">{sampleVideo.title}</h1>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">Một câu tóm tắt hấp dẫn về nội dung video.</p>

                  <div className="mb-6">
                    <p className="text-4xl font-bold text-primary">{sampleVideo.price.toLocaleString('vi-VN')}₫</p>
                  </div>

                  <button className="w-full px-6 py-4 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-colors mb-6">
                    Mua Video {sampleVideo.price.toLocaleString('vi-VN')}₫
                  </button>

                  <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-primary">movie</span>
                      <span>Thời lượng: {sampleVideo.duration}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-primary">signal_cellular_alt</span>
                      <span>Cấp độ: {sampleVideo.level}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-primary">school</span>
                      <span>Truy cập trọn đời</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Videos */}
        <section className="w-full py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">Có thể bạn cũng thích</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {relatedVideos.map((video) => (
                <div key={video.id} className="group cursor-pointer">
                  <div className="aspect-video bg-cover bg-center rounded-lg overflow-hidden mb-4 group-hover:scale-105 transition-transform duration-300" style={{
                    backgroundImage: `url("${video.thumbnail}")`
                  }}></div>
                  <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-primary font-semibold">{video.price.toLocaleString('vi-VN')}₫</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

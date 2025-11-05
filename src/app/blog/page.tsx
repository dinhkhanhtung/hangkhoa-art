'use client'

import { useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const blogPosts = [
  {
    id: 1,
    title: '5 Mũi Thêu Cơ Bản Cho Người Mới Bắt Đầu',
    excerpt: 'Khám phá những mũi thêu nền tảng nhất để bắt đầu hành trình sáng tạo cùng chỉ và kim...',
    category: 'Kỹ thuật Thêu',
    date: '20/08/2023',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop&crop=center'
  },
  {
    id: 2,
    title: 'Cách Chọn Vải và Chỉ Thêu Hoàn Hảo',
    excerpt: 'Một hướng dẫn chi tiết giúp bạn lựa chọn chất liệu phù hợp nhất cho dự án của mình.',
    category: 'Mẹo & Thủ Thuật',
    date: '18/08/2023',
    image: 'https://images.unsplash.com/photo-1581299894007-aaa50297cf16?w=600&h=400&fit=crop&crop=center'
  },
  {
    id: 3,
    title: 'Cảm Hứng Từ Nghệ Thuật Thêu Cung Đình',
    excerpt: 'Tìm hiểu vẻ đẹp và sự tinh xảo trong các tác phẩm thêu tay hoàng gia xưa.',
    category: 'Cảm hứng',
    date: '15/08/2023',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop&crop=center'
  },
  {
    id: 4,
    title: 'Bảo Quản Tranh Thêu Tay Đúng Cách',
    excerpt: 'Những mẹo nhỏ giúp tác phẩm của bạn luôn bền đẹp với thời gian.',
    category: 'Mẹo & Thủ Thuật',
    date: '12/08/2023',
    image: 'https://images.unsplash.com/photo-1581299894007-aaa50297cf16?w=600&h=400&fit=crop&crop=center'
  },
  {
    id: 5,
    title: 'Xu Hướng Thêu Tay Hiện Đại Năm 2024',
    excerpt: 'Cập nhật những phong cách và ý tưởng thêu độc đáo đang thịnh hành.',
    category: 'Tin tức',
    date: '10/08/2023',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop&crop=center'
  },
  {
    id: 6,
    title: 'Câu Chuyện Về Đôi Bàn Tay Nghệ Nhân',
    excerpt: 'Lắng nghe chia sẻ về niềm đam mê và quá trình tạo nên một tác phẩm nghệ thuật.',
    category: 'Cảm hứng',
    date: '05/08/2023',
    image: 'https://images.unsplash.com/photo-1581299894007-aaa50297cf16?w=600&h=400&fit=crop&crop=center'
  }
]

const categories = ['Tất cả', 'Kỹ thuật Thêu', 'Mẹo & Thủ Thuật', 'Cảm hứng', 'Tin tức']

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('Tất cả')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'Tất cả' || post.category === selectedCategory
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative w-full bg-gradient-to-b from-primary/5 to-transparent dark:from-primary/10 dark:to-transparent">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="inline-flex items-center justify-center size-20 rounded-2xl bg-primary/10 text-primary mb-4">
                <span className="material-symbols-outlined text-4xl">news</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-text-light dark:text-text-dark">
                Tin Tức & Chia Sẻ
              </h1>
              <p className="text-xl text-muted-light dark:text-muted-dark max-w-2xl mx-auto">
                Khám phá những câu chuyện thú vị, kiến thức bổ ích và cảm hứng sáng tạo trong nghệ thuật thêu tay
              </p>
            </div>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="w-full py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-6 items-center bg-white dark:bg-black/20 p-6 rounded-2xl border border-border-light dark:border-border-dark">
              {/* Search Bar */}
              <div className="w-full md:flex-1">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Tìm kiếm bài viết..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full h-14 pl-14 pr-5 rounded-xl text-text-light dark:text-text-dark bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark placeholder:text-muted-light/60 dark:placeholder:text-muted-dark/60 focus:border-primary dark:focus:border-primary focus:ring-1 focus:ring-primary dark:focus:ring-primary transition-all"
                  />
                  <span className="absolute left-5 top-1/2 -translate-y-1/2 material-symbols-outlined text-muted-light/60 dark:text-muted-dark/60">
                    search
                  </span>
                </div>
              </div>

              {/* Category Filters */}
              <div className="flex gap-3 overflow-x-auto pb-2 md:pb-0">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-3 rounded-xl text-sm font-semibold whitespace-nowrap transition-all ${
                      selectedCategory === category
                        ? 'bg-primary text-white shadow-md'
                        : 'bg-surface-light dark:bg-surface-dark text-text-light dark:text-text-dark border border-border-light dark:border-border-dark hover:border-primary hover:text-primary'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="w-full py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 dark:from-primary/10 dark:via-primary/20 dark:to-primary/10 rounded-2xl overflow-hidden">
              <div className="grid md:grid-cols-5 gap-8 p-8">
                <div className="md:col-span-3 space-y-6">
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white text-sm font-medium rounded-xl">
                    <span className="material-symbols-outlined text-base">auto_awesome</span>
                    Nổi bật
                  </span>
                  <h2 className="text-3xl font-black text-text-light dark:text-text-dark">
                    {filteredPosts[0]?.title}
                  </h2>
                  <p className="text-lg text-muted-light dark:text-muted-dark">
                    {filteredPosts[0]?.excerpt}
                  </p>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-muted-light dark:text-muted-dark">
                      {filteredPosts[0]?.date}
                    </span>
                    <span className="text-sm text-primary font-medium">
                      {filteredPosts[0]?.category}
                    </span>
                  </div>
                  <button className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:gap-3 hover:bg-primary/90 transition-all">
                    Đọc ngay
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </button>
                </div>
                <div className="md:col-span-2">
                  <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                    <img 
                      src={filteredPosts[0]?.image}
                      alt={filteredPosts[0]?.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="w-full py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.slice(1).map((post) => (
                <article key={post.id} className="group bg-white dark:bg-black/20 rounded-2xl border border-border-light dark:border-border-dark overflow-hidden hover:shadow-lg transition-all">
                  <div className="aspect-[3/2] overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 rounded-lg bg-primary/10 text-primary text-sm font-medium">
                        {post.category}
                      </span>
                      <span className="text-sm text-muted-light dark:text-muted-dark">{post.date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-text-light dark:text-text-dark group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted-light dark:text-muted-dark line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div>
                      <a
                        href="#"
                        className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
                      >
                        Đọc thêm
                        <span className="material-symbols-outlined text-base">arrow_forward</span>
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Pagination */}
        <section className="w-full py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center items-center gap-3">
              <button className="inline-flex items-center justify-center size-12 rounded-xl bg-white dark:bg-black/20 border border-border-light dark:border-border-dark text-muted-light dark:text-muted-dark hover:border-primary hover:text-primary transition-all">
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button className="inline-flex items-center justify-center size-12 rounded-xl bg-primary text-white font-semibold border border-primary">
                1
              </button>
              <button className="inline-flex items-center justify-center size-12 rounded-xl bg-white dark:bg-black/20 border border-border-light dark:border-border-dark text-muted-light dark:text-muted-dark hover:border-primary hover:text-primary transition-all">
                2
              </button>
              <button className="inline-flex items-center justify-center size-12 rounded-xl bg-white dark:bg-black/20 border border-border-light dark:border-border-dark text-muted-light dark:text-muted-dark hover:border-primary hover:text-primary transition-all">
                3
              </button>
              <button className="inline-flex items-center justify-center size-12 rounded-xl bg-white dark:bg-black/20 border border-border-light dark:border-border-dark text-muted-light dark:text-muted-dark hover:border-primary hover:text-primary transition-all">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="w-full py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 dark:from-primary/10 dark:via-primary/20 dark:to-primary/10 rounded-2xl p-8 md:p-12">
              <div className="max-w-3xl mx-auto text-center space-y-8">
                <div className="inline-flex items-center justify-center size-16 rounded-xl bg-primary/10 text-primary">
                  <span className="material-symbols-outlined text-3xl">mail</span>
                </div>
                <div className="space-y-4">
                  <h2 className="text-3xl font-black text-text-light dark:text-text-dark">
                    Đăng ký nhận tin mới
                  </h2>
                  <p className="text-lg text-muted-light dark:text-muted-dark">
                    Cập nhật những xu hướng mới nhất và các mẹo hữu ích trong nghệ thuật thêu tay
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                  <input
                    type="email"
                    placeholder="Email của bạn"
                    className="flex-1 h-14 px-5 rounded-xl text-text-light dark:text-text-dark bg-white dark:bg-black/20 border border-border-light dark:border-border-dark placeholder:text-muted-light/60 dark:placeholder:text-muted-dark/60 focus:border-primary dark:focus:border-primary focus:ring-1 focus:ring-primary dark:focus:ring-primary transition-all"
                  />
                  <button className="h-14 px-8 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-colors">
                    Đăng ký
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

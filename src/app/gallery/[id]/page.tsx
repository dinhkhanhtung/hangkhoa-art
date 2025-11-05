'use client'

import { useState } from 'react'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'

// Sample artwork data
const sampleArtwork = {
  id: '1',
  title: 'Bức tranh Mùa Thu',
  artist: 'Nguyễn Vân Anh',
  image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=1000&fit=crop&crop=center',
  techniques: ['Thêu Nổi', 'Xoắn Thừng', 'Mũi Tám'],
  likes: 1287,
  isLiked: false
}

const comments = [
  {
    id: 1,
    user: 'Lê Minh Anh',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=center',
    text: 'Tác phẩm đẹp quá! Màu sắc hài hòa và đường thêu rất tỉ mỉ. Chúc mừng bạn nhé!',
    time: '2 giờ trước'
  },
  {
    id: 2,
    user: 'Trần Hoàng',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=center',
    text: 'Mình cũng đang học kỹ thuật thêu nổi, nhìn tác phẩm của bạn mình có thêm nhiều động lực. Cảm ơn bạn đã chia sẻ.',
    time: 'Hôm qua'
  },
  {
    id: 3,
    user: 'Phạm Thu Hà',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=center',
    text: 'Rất nghệ thuật!',
    time: '3 ngày trước'
  }
]

export default function ArtworkDetailPage({ params }: { params: { id: string } }) {
  const [isLiked, setIsLiked] = useState(sampleArtwork.isLiked)
  const [likesCount, setLikesCount] = useState(sampleArtwork.likes)
  const [newComment, setNewComment] = useState('')

  const handleLike = () => {
    setIsLiked(!isLiked)
    setLikesCount(prev => isLiked ? prev - 1 : prev + 1)
  }

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (newComment.trim()) {
      // Handle comment submission
      setNewComment('')
    }
  }

  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />

      <main className="flex-grow">
        {/* Main Content */}
        <section className="w-full py-8 md:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
              {/* Main Image */}
              <div className="lg:col-span-2">
                <div
                  className="w-full aspect-[4/5] bg-cover bg-center rounded-xl shadow-sm"
                  style={{
                    backgroundImage: `url("${sampleArtwork.image}")`
                  }}
                ></div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1 space-y-6">
                {/* Title and Artist */}
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold mb-2">{sampleArtwork.title}</h1>
                  <p className="text-gray-600 dark:text-gray-400 text-lg">
                    Tác giả: <a href="#" className="font-medium text-primary hover:underline">{sampleArtwork.artist}</a>
                  </p>
                </div>

                {/* Techniques */}
                <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                  <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                    Kỹ thuật sử dụng
                  </h3>
                  <div className="flex gap-3 flex-wrap">
                    {sampleArtwork.techniques.map((technique, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
                      >
                        {technique}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Like Button */}
                <div className="flex items-center gap-4 pt-2">
                  <button
                    onClick={handleLike}
                    className={`flex items-center justify-center gap-2 px-4 py-2 rounded-xl transition-colors ${
                      isLiked
                        ? 'bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400'
                        : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
                    }`}
                  >
                    <span
                      className={`material-symbols-outlined ${isLiked ? 'text-red-500' : ''}`}
                      style={{ fontVariationSettings: isLiked ? "'FILL' 1" : "'FILL' 0" }}
                    >
                      favorite
                    </span>
                    <span className="font-medium text-sm">Thích</span>
                  </button>
                  <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">
                    {likesCount.toLocaleString('vi-VN')} lượt thích
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comments Section */}
        <section className="w-full py-12 md:py-16 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-6">Bình luận ({comments.length})</h2>

            {/* Comment Form */}
            <div className="flex items-start gap-4 mb-8">
              <img
                className="w-10 h-10 rounded-full object-cover"
                src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=center"
                alt="Your avatar"
              />
              <div className="flex-1">
                <form onSubmit={handleCommentSubmit}>
                  <textarea
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    className="w-full rounded-xl bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                    placeholder="Viết bình luận của bạn..."
                    rows={3}
                  />
                  <button
                    type="submit"
                    className="mt-3 px-5 py-2 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-colors"
                  >
                    Gửi
                  </button>
                </form>
              </div>
            </div>

            {/* Comments List */}
            <div className="space-y-6">
              {comments.map((comment) => (
                <div key={comment.id} className="flex items-start gap-4">
                  <img
                    className="w-10 h-10 rounded-full object-cover"
                    src={comment.avatar}
                    alt={comment.user}
                  />
                  <div className="flex-1">
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-4">
                      <div className="flex items-center justify-between mb-1">
                        <p className="font-semibold text-sm">{comment.user}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{comment.time}</p>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">{comment.text}</p>
                    </div>
                  </div>
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

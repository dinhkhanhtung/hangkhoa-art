'use client'

import { useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const courseLessons = [
  { id: 1, title: 'Introduction to Embroidery', completed: true, current: false },
  { id: 2, title: 'The French Knot', completed: false, current: true },
  { id: 3, title: 'The Stem Stitch', completed: false, current: false },
  { id: 4, title: 'Creating a Simple Flower', completed: false, current: false },
  { id: 5, title: 'Project: Embroidered Hoop Art', completed: false, current: false },
  { id: 6, title: 'Finishing & Care', completed: false, current: false },
]

export default function LearningPage() {
  const [currentLesson, setCurrentLesson] = useState(2)

  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />

      <main className="flex-grow bg-surface-light dark:bg-surface-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content Area */}
            <div className="w-full lg:w-3/5 flex flex-col gap-8">
              {/* Breadcrumbs */}
              <div className="flex flex-wrap items-center gap-2 text-sm">
                <a href="/courses" className="text-muted-light dark:text-muted-dark hover:text-primary transition-colors">
                  Khóa học: Basic Embroidery
                </a>
                <span className="text-muted-light/40 dark:text-muted-dark/40">/</span>
                <span className="text-text-light dark:text-text-dark">
                  Bài {currentLesson}: {courseLessons.find(l => l.id === currentLesson)?.title}
                </span>
              </div>

              {/* Video Player */}
              <div className="w-full">
                <div className="relative aspect-video bg-black rounded-2xl overflow-hidden border border-border-light dark:border-border-dark shadow-lg">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="Embroidery Tutorial"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>

              {/* Lesson Info */}
              <div className="bg-white dark:bg-black/20 rounded-2xl border border-border-light dark:border-border-dark p-8">
                <div className="space-y-6">
                  {/* Title & Progress */}
                  <div className="flex items-start justify-between gap-4">
                    <h1 className="text-2xl sm:text-3xl font-black text-text-light dark:text-text-dark">
                      Bài {currentLesson}: {courseLessons.find(l => l.id === currentLesson)?.title}
                    </h1>
                    <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-xl text-sm font-medium">
                      <span className="material-symbols-outlined text-base">schedule</span>
                      <span>45 phút</span>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="space-y-4">
                    <h2 className="text-lg font-semibold text-text-light dark:text-text-dark">
                      Mô tả bài học
                    </h2>
                    <p className="text-muted-light dark:text-muted-dark text-base leading-relaxed">
                      Bài học này sẽ giới thiệu về mục tiêu, các dụng cụ cần thiết và những lưu ý quan trọng để thực hiện thành thạo mũi thêu French Knot.
                      Hãy thực hành theo hướng dẫn để học cách tạo ra mũi thêu đẹp và linh hoạt, hoàn hảo cho việc tạo điểm nhấn và chi tiết cho các dự án thêu của bạn.
                    </p>
                  </div>

                  {/* Materials Needed */}
                  <div className="space-y-4">
                    <h2 className="text-lg font-semibold text-text-light dark:text-text-dark">
                      Dụng cụ cần chuẩn bị
                    </h2>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <li className="flex items-center gap-3 text-muted-light dark:text-muted-dark">
                        <span className="material-symbols-outlined text-primary">check_circle</span>
                        Kim thêu số 7-9
                      </li>
                      <li className="flex items-center gap-3 text-muted-light dark:text-muted-dark">
                        <span className="material-symbols-outlined text-primary">check_circle</span>
                        Chỉ thêu cotton 6 sợi
                      </li>
                      <li className="flex items-center gap-3 text-muted-light dark:text-muted-dark">
                        <span className="material-symbols-outlined text-primary">check_circle</span>
                        Vải cotton trắng
                      </li>
                      <li className="flex items-center gap-3 text-muted-light dark:text-muted-dark">
                        <span className="material-symbols-outlined text-primary">check_circle</span>
                        Khung thêu tròn 15cm
                      </li>
                    </ul>
                  </div>

                  {/* Resources */}
                  <div className="space-y-4">
                    <h2 className="text-lg font-semibold text-text-light dark:text-text-dark">
                      Tài liệu học tập
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <a 
                        href="#" 
                        className="flex items-center gap-3 p-4 bg-surface-light dark:bg-surface-dark rounded-xl border border-border-light dark:border-border-dark hover:border-primary transition-all group"
                      >
                        <div className="flex-shrink-0 size-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                          <span className="material-symbols-outlined">description</span>
                        </div>
                        <div className="flex-grow min-w-0">
                          <p className="font-medium text-text-light dark:text-text-dark truncate group-hover:text-primary transition-colors">
                            Hướng dẫn thực hành.pdf
                          </p>
                          <p className="text-sm text-muted-light dark:text-muted-dark">
                            1.2 MB
                          </p>
                        </div>
                      </a>
                      <a 
                        href="#" 
                        className="flex items-center gap-3 p-4 bg-surface-light dark:bg-surface-dark rounded-xl border border-border-light dark:border-border-dark hover:border-primary transition-all group"
                      >
                        <div className="flex-shrink-0 size-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                          <span className="material-symbols-outlined">image</span>
                        </div>
                        <div className="flex-grow min-w-0">
                          <p className="font-medium text-text-light dark:text-text-dark truncate group-hover:text-primary transition-colors">
                            Mẫu tham khảo.jpg
                          </p>
                          <p className="text-sm text-muted-light dark:text-muted-dark">
                            2.5 MB
                          </p>
                        </div>
                      </a>
                    </div>
                  </div>

                  {/* Completion Button */}
                  <div className="pt-4">
                    <button className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-colors">
                      <span className="material-symbols-outlined">task_alt</span>
                      <span>Đánh dấu hoàn thành</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="w-full lg:w-2/5">
              <div className="bg-white dark:bg-black/20 rounded-2xl border border-border-light dark:border-border-dark p-6 sticky top-24">
                <div className="flex items-center justify-between gap-4 mb-6">
                  <h3 className="text-xl font-bold text-text-light dark:text-text-dark">
                    Nội dung khóa học
                  </h3>
                  <div className="text-sm font-medium text-muted-light dark:text-muted-dark">
                    2/6 bài học
                  </div>
                </div>
                <div className="space-y-2">
                  {courseLessons.map((lesson) => (
                    <button
                      key={lesson.id}
                      onClick={() => setCurrentLesson(lesson.id)}
                      className={`w-full flex items-center gap-4 p-4 rounded-xl text-left transition-all ${
                        lesson.current
                          ? 'bg-primary/10 ring-1 ring-primary'
                          : 'hover:bg-surface-light dark:hover:bg-surface-dark'
                      }`}
                    >
                      <div className={`flex-shrink-0 size-10 rounded-lg flex items-center justify-center ${
                        lesson.completed
                          ? 'bg-green-500/10 text-green-500'
                          : lesson.current
                            ? 'bg-primary/10 text-primary'
                            : 'bg-muted-light/10 dark:bg-muted-dark/10 text-muted-light dark:text-muted-dark'
                      }`}>
                        <span className="material-symbols-outlined">
                          {lesson.completed ? 'task_alt' : lesson.current ? 'play_circle' : 'lock'}
                        </span>
                      </div>
                      <div>
                        <p className={`font-medium ${
                          lesson.current
                            ? 'text-primary'
                            : lesson.completed
                              ? 'text-text-light dark:text-text-dark'
                              : 'text-muted-light dark:text-muted-dark'
                        }`}>
                          Bài {lesson.id}
                        </p>
                        <p className={`text-sm ${
                          lesson.current
                            ? 'text-primary'
                            : 'text-muted-light dark:text-muted-dark'
                        }`}>
                          {lesson.title}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

'use client'

import { useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState('profile')

  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />

      <main className="flex-grow bg-surface-light dark:bg-surface-dark">
        <div className="container mx-auto p-4 sm:p-6 lg:p-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <aside className="w-full lg:w-80 flex-shrink-0">
              <div className="bg-white dark:bg-black/20 rounded-2xl border border-border-light dark:border-border-dark p-6 sticky top-24">
                <div className="flex flex-col gap-6">
                  {/* User Info */}
                  <div className="flex gap-4 items-center p-4 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 dark:from-primary/10 dark:via-primary/20 dark:to-primary/10 rounded-xl">
                    <div
                      className="bg-center bg-no-repeat aspect-square bg-cover rounded-xl size-16 ring-4 ring-white dark:ring-black/20"
                      style={{
                        backgroundImage: 'url("https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=center")'
                      }}
                    ></div>
                    <div className="flex flex-col">
                      <h1 className="text-lg font-bold text-text-light dark:text-text-dark">Thuỳ Anh</h1>
                      <div className="flex items-center gap-2">
                        <div className="flex-shrink-0 size-5 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="material-symbols-outlined text-primary text-sm">stars</span>
                        </div>
                        <p className="text-sm text-muted-light dark:text-muted-dark">Nghệ nhân tập sự</p>
                      </div>
                    </div>
                  </div>

                  {/* Navigation */}
                  <div className="flex flex-col gap-2">
                    <button
                      onClick={() => setActiveTab('profile')}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all ${
                        activeTab === 'profile'
                          ? 'bg-primary text-white shadow-md'
                          : 'hover:bg-surface-light dark:hover:bg-surface-dark text-text-light dark:text-text-dark'
                      }`}
                    >
                      <span className="material-symbols-outlined">person</span>
                      <span className="font-medium">Thông tin cá nhân</span>
                    </button>

                    <button
                      onClick={() => setActiveTab('courses')}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all ${
                        activeTab === 'courses'
                          ? 'bg-primary text-white shadow-md'
                          : 'hover:bg-surface-light dark:hover:bg-surface-dark text-text-light dark:text-text-dark'
                      }`}
                    >
                      <span className="material-symbols-outlined">import_contacts</span>
                      <span className="font-medium">Khóa học của tôi</span>
                    </button>

                    <button
                      onClick={() => setActiveTab('transactions')}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all ${
                        activeTab === 'transactions'
                          ? 'bg-primary text-white shadow-md'
                          : 'hover:bg-surface-light dark:hover:bg-surface-dark text-text-light dark:text-text-dark'
                      }`}
                    >
                      <span className="material-symbols-outlined">receipt_long</span>
                      <span className="font-medium">Lịch sử giao dịch</span>
                    </button>

                    <button
                      onClick={() => setActiveTab('settings')}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all ${
                        activeTab === 'settings'
                          ? 'bg-primary text-white shadow-md'
                          : 'hover:bg-surface-light dark:hover:bg-surface-dark text-text-light dark:text-text-dark'
                      }`}
                    >
                      <span className="material-symbols-outlined">settings</span>
                      <span className="font-medium">Cài đặt</span>
                    </button>
                  </div>

                  {/* Progress */}
                  <div className="p-4 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 dark:from-primary/10 dark:via-primary/20 dark:to-primary/10 rounded-xl">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-sm font-medium text-text-light dark:text-text-dark">Tiến độ học tập</h3>
                      <span className="text-sm text-primary font-medium">1,250 XP</span>
                    </div>
                    <div className="h-2 bg-surface-light dark:bg-surface-dark rounded-full overflow-hidden">
                      <div className="h-full w-3/4 bg-primary rounded-full"></div>
                    </div>
                    <p className="text-xs text-muted-light dark:text-muted-dark mt-2">
                      Còn 750 XP nữa để lên cấp độ tiếp theo
                    </p>
                  </div>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1">
              {activeTab === 'profile' && (
                <div className="space-y-8">
                  {/* Profile Stats */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white dark:bg-black/20 rounded-2xl border border-border-light dark:border-border-dark p-6">
                      <div className="flex items-center gap-4">
                        <div className="flex-shrink-0 size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                          <span className="material-symbols-outlined">school</span>
                        </div>
                        <div>
                          <p className="text-sm text-muted-light dark:text-muted-dark">Khóa học</p>
                          <p className="text-2xl font-bold text-text-light dark:text-text-dark">2</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white dark:bg-black/20 rounded-2xl border border-border-light dark:border-border-dark p-6">
                      <div className="flex items-center gap-4">
                        <div className="flex-shrink-0 size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                          <span className="material-symbols-outlined">timer</span>
                        </div>
                        <div>
                          <p className="text-sm text-muted-light dark:text-muted-dark">Giờ học</p>
                          <p className="text-2xl font-bold text-text-light dark:text-text-dark">24</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white dark:bg-black/20 rounded-2xl border border-border-light dark:border-border-dark p-6">
                      <div className="flex items-center gap-4">
                        <div className="flex-shrink-0 size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                          <span className="material-symbols-outlined">workspace_premium</span>
                        </div>
                        <div>
                          <p className="text-sm text-muted-light dark:text-muted-dark">Chứng chỉ</p>
                          <p className="text-2xl font-bold text-text-light dark:text-text-dark">1</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Personal Information Form */}
                  <div className="bg-white dark:bg-black/20 rounded-2xl border border-border-light dark:border-border-dark">
                    <div className="flex items-center justify-between p-6 border-b border-border-light dark:border-border-dark">
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-primary">edit</span>
                        <h2 className="text-xl font-bold text-text-light dark:text-text-dark">Thông tin cá nhân</h2>
                      </div>
                    </div>
                    <form className="p-6 space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="flex items-center gap-2 text-sm font-medium text-text-light dark:text-text-dark mb-2">
                            <span className="material-symbols-outlined text-base">person</span>
                            Họ và tên
                          </label>
                          <input
                            className="w-full h-12 rounded-xl text-text-light dark:text-text-dark bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark px-4 placeholder:text-muted-light/60 dark:placeholder:text-muted-dark/60 focus:border-primary dark:focus:border-primary focus:ring-1 focus:ring-primary dark:focus:ring-primary transition-all"
                            type="text"
                            defaultValue="Thuỳ Anh"
                          />
                        </div>
                        <div>
                          <label className="flex items-center gap-2 text-sm font-medium text-text-light dark:text-text-dark mb-2">
                            <span className="material-symbols-outlined text-base">mail</span>
                            Email
                          </label>
                          <input
                            className="w-full h-12 rounded-xl text-text-light dark:text-text-dark bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark px-4 placeholder:text-muted-light/60 dark:placeholder:text-muted-dark/60 focus:border-primary dark:focus:border-primary focus:ring-1 focus:ring-primary dark:focus:ring-primary transition-all"
                            type="email"
                            defaultValue="thuyanh.artist@email.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="flex items-center gap-2 text-sm font-medium text-text-light dark:text-text-dark mb-2">
                          <span className="material-symbols-outlined text-base">lock</span>
                          Mật khẩu
                        </label>
                        <div className="relative">
                          <input
                            className="w-full h-12 rounded-xl text-text-light dark:text-text-dark bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark px-4 pr-12 placeholder:text-muted-light/60 dark:placeholder:text-muted-dark/60 focus:border-primary dark:focus:border-primary focus:ring-1 focus:ring-primary dark:focus:ring-primary transition-all"
                            type="password"
                            defaultValue="********"
                          />
                          <button
                            className="absolute inset-y-0 right-0 flex items-center px-3 text-muted-light dark:text-muted-dark hover:text-primary transition-colors"
                            type="button"
                          >
                            <span className="material-symbols-outlined">visibility</span>
                          </button>
                        </div>
                      </div>

                      <div>
                        <label className="flex items-center gap-2 text-sm font-medium text-text-light dark:text-text-dark mb-2">
                          <span className="material-symbols-outlined text-base">notifications</span>
                          Thông báo
                        </label>
                        <div className="space-y-3">
                          <label className="flex items-center">
                            <input type="checkbox" className="form-checkbox text-primary rounded border-border-light dark:border-border-dark" />
                            <span className="ml-2 text-muted-light dark:text-muted-dark">Nhận thông báo về khóa học mới</span>
                          </label>
                          <label className="flex items-center">
                            <input type="checkbox" className="form-checkbox text-primary rounded border-border-light dark:border-border-dark" />
                            <span className="ml-2 text-muted-light dark:text-muted-dark">Nhận thông báo về ưu đãi và khuyến mãi</span>
                          </label>
                        </div>
                      </div>

                      <div className="flex justify-end gap-4 pt-4">
                        <button
                          type="button"
                          className="px-6 py-3 bg-surface-light dark:bg-surface-dark text-text-light dark:text-text-dark font-medium rounded-xl border border-border-light dark:border-border-dark hover:border-primary hover:text-primary transition-all"
                        >
                          Hủy
                        </button>
                        <button
                          type="submit"
                          className="px-6 py-3 bg-primary text-white font-medium rounded-xl hover:bg-primary/90 transition-colors"
                        >
                          Lưu thay đổi
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              )}

              {activeTab === 'courses' && (
                <div className="bg-white dark:bg-black/20 rounded-2xl border border-border-light dark:border-border-dark p-8">
                  <div className="flex items-center justify-between gap-4 mb-8">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-primary">import_contacts</span>
                      <h2 className="text-xl font-bold text-text-light dark:text-text-dark">Khóa học của tôi</h2>
                    </div>
                    <a 
                      href="/courses"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-surface-light dark:bg-surface-dark text-text-light dark:text-text-dark font-medium rounded-xl border border-border-light dark:border-border-dark hover:border-primary hover:text-primary transition-all"
                    >
                      <span className="material-symbols-outlined text-base">add</span>
                      Tìm khóa học
                    </a>
                  </div>
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="flex-shrink-0 size-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                      <span className="material-symbols-outlined text-3xl">school</span>
                    </div>
                    <h3 className="text-lg font-medium text-text-light dark:text-text-dark mb-2">
                      Chưa có khóa học nào
                    </h3>
                    <p className="text-muted-light dark:text-muted-dark max-w-md">
                      Hãy khám phá các khóa học của chúng tôi và bắt đầu hành trình học tập của bạn ngay hôm nay
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'transactions' && (
                <div className="bg-white dark:bg-black/20 rounded-2xl border border-border-light dark:border-border-dark p-8">
                  <div className="flex items-center gap-3 mb-8">
                    <span className="material-symbols-outlined text-primary">receipt_long</span>
                    <h2 className="text-xl font-bold text-text-light dark:text-text-dark">Lịch sử giao dịch</h2>
                  </div>
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="flex-shrink-0 size-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                      <span className="material-symbols-outlined text-3xl">receipt</span>
                    </div>
                    <h3 className="text-lg font-medium text-text-light dark:text-text-dark mb-2">
                      Chưa có giao dịch nào
                    </h3>
                    <p className="text-muted-light dark:text-muted-dark">
                      Lịch sử giao dịch của bạn sẽ xuất hiện ở đây
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'settings' && (
                <div className="bg-white dark:bg-black/20 rounded-2xl border border-border-light dark:border-border-dark p-8">
                  <div className="flex items-center gap-3 mb-8">
                    <span className="material-symbols-outlined text-primary">settings</span>
                    <h2 className="text-xl font-bold text-text-light dark:text-text-dark">Cài đặt</h2>
                  </div>
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="flex-shrink-0 size-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                      <span className="material-symbols-outlined text-3xl">construction</span>
                    </div>
                    <h3 className="text-lg font-medium text-text-light dark:text-text-dark mb-2">
                      Đang phát triển
                    </h3>
                    <p className="text-muted-light dark:text-muted-dark">
                      Tính năng này sẽ sớm được cập nhật
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

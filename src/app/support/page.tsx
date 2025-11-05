import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function SupportPage() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative w-full bg-gradient-to-b from-primary/5 to-transparent dark:from-primary/10 dark:to-transparent py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="inline-flex items-center justify-center size-20 rounded-2xl bg-primary/10 text-primary mb-4">
                <span className="material-symbols-outlined text-4xl">support_agent</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-black tracking-tight text-text-light dark:text-text-dark">
                Hỗ Trợ & Liên Hệ
              </h1>
              <p className="text-xl text-muted-light dark:text-muted-dark max-w-2xl mx-auto">
                Chúng tôi luôn sẵn lòng lắng nghe và hỗ trợ bạn. Hãy để lại tin nhắn hoặc liên hệ trực tiếp với chúng tôi.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="w-full py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
              {/* Contact Form */}
              <div className="lg:col-span-3">
                <div className="bg-white dark:bg-black/20 rounded-2xl border border-border-light dark:border-border-dark p-8">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="flex-shrink-0 size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined">mail</span>
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-text-light dark:text-text-dark">Gửi tin nhắn</h2>
                      <p className="text-muted-light dark:text-muted-dark">Chúng tôi sẽ phản hồi trong vòng 24 giờ</p>
                    </div>
                  </div>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="flex items-center gap-2 text-sm font-medium text-text-light dark:text-text-dark mb-2">
                          <span className="material-symbols-outlined text-base">person</span>
                          Họ và Tên
                        </label>
                        <input
                          className="w-full h-12 rounded-xl text-text-light dark:text-text-dark bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark px-4 placeholder:text-muted-light/60 dark:placeholder:text-muted-dark/60 focus:border-primary dark:focus:border-primary focus:ring-1 focus:ring-primary dark:focus:ring-primary transition-all"
                          type="text"
                          placeholder="Nhập họ và tên của bạn"
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
                          placeholder="Nhập địa chỉ email"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="flex items-center gap-2 text-sm font-medium text-text-light dark:text-text-dark mb-2">
                        <span className="material-symbols-outlined text-base">subject</span>
                        Chủ đề
                      </label>
                      <input
                        className="w-full h-12 rounded-xl text-text-light dark:text-text-dark bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark px-4 placeholder:text-muted-light/60 dark:placeholder:text-muted-dark/60 focus:border-primary dark:focus:border-primary focus:ring-1 focus:ring-primary dark:focus:ring-primary transition-all"
                        type="text"
                        placeholder="Chủ đề tin nhắn của bạn"
                      />
                    </div>

                    <div>
                      <label className="flex items-center gap-2 text-sm font-medium text-text-light dark:text-text-dark mb-2">
                        <span className="material-symbols-outlined text-base">chat</span>
                        Nội dung tin nhắn
                      </label>
                      <textarea
                        className="w-full min-h-40 rounded-xl text-text-light dark:text-text-dark bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark p-4 placeholder:text-muted-light/60 dark:placeholder:text-muted-dark/60 focus:border-primary dark:focus:border-primary focus:ring-1 focus:ring-primary dark:focus:ring-primary transition-all resize-y"
                        placeholder="Nội dung bạn muốn gửi..."
                      />
                    </div>

                    <button
                      className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-all"
                      type="submit"
                    >
                      <span className="material-symbols-outlined">send</span>
                      Gửi tin nhắn
                    </button>
                  </form>
                </div>
              </div>

              {/* Contact Info & Map */}
              <div className="lg:col-span-2 space-y-8">
                <div className="bg-white dark:bg-black/20 rounded-2xl border border-border-light dark:border-border-dark p-8">
                  <h3 className="flex items-center gap-3 text-xl font-bold text-text-light dark:text-text-dark mb-6">
                    <span className="material-symbols-outlined">contact_page</span>
                    Thông tin liên hệ
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined">mail</span>
                      </div>
                      <div>
                        <p className="font-medium text-text-light dark:text-text-dark">Email</p>
                        <a
                          href="mailto:contact@hangkhoa.art"
                          className="text-muted-light dark:text-muted-dark hover:text-primary transition-colors"
                        >
                          contact@hangkhoa.art
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined">call</span>
                      </div>
                      <div>
                        <p className="font-medium text-text-light dark:text-text-dark">Số điện thoại</p>
                        <a
                          href="tel:+84123456789"
                          className="text-muted-light dark:text-muted-dark hover:text-primary transition-colors"
                        >
                          +84 123 456 789
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined">schedule</span>
                      </div>
                      <div>
                        <p className="font-medium text-text-light dark:text-text-dark">Giờ làm việc</p>
                        <p className="text-muted-light dark:text-muted-dark">
                          Thứ 2 - Thứ 6: 9:00 - 18:00<br />
                          Thứ 7: 9:00 - 12:00
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 dark:from-primary/10 dark:via-primary/20 dark:to-primary/10 rounded-2xl p-8">
                  <h3 className="flex items-center gap-3 text-xl font-bold text-text-light dark:text-text-dark mb-6">
                    <span className="material-symbols-outlined">support</span>
                    Hỗ trợ nhanh
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <a
                      href="tel:+84123456789"
                      className="flex items-center gap-2 p-4 bg-white dark:bg-black/20 rounded-xl border border-border-light dark:border-border-dark hover:border-primary hover:text-primary transition-all"
                    >
                      <span className="material-symbols-outlined">phone_in_talk</span>
                      <span className="font-medium">Gọi ngay</span>
                    </a>
                    <a
                      href="https://zalo.me/123456789"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 p-4 bg-white dark:bg-black/20 rounded-xl border border-border-light dark:border-border-dark hover:border-primary hover:text-primary transition-all"
                    >
                      <span className="material-symbols-outlined">chat</span>
                      <span className="font-medium">Chat Zalo</span>
                    </a>
                  </div>
                </div>

                <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=450&fit=crop&crop=center"
                    alt="Hand embroidery work"
                  />
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

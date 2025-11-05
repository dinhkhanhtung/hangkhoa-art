import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="w-full bg-surface-light dark:bg-surface-dark border-t border-border-light dark:border-border-dark">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="size-8 text-primary">
                  <svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2zM15 5v2m-6-2v2"/>
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-text-light dark:text-text-dark">Hang Khoa Art</h2>
              </div>
              <p className="text-muted-light dark:text-muted-dark text-base max-w-md">
                Khơi nguồn sáng tạo qua từng đường kim mũi chỉ. Nơi nghệ thuật thêu tay truyền thống gặp gỡ tinh thần sáng tạo đương đại.
              </p>
              <div className="flex gap-6 mt-2">
                <a href="#" className="text-muted-light dark:text-muted-dark hover:text-primary dark:hover:text-primary transition-colors" aria-label="Facebook">
                  <span className="material-symbols-outlined text-2xl">facebook</span>
                </a>
                <a href="#" className="text-muted-light dark:text-muted-dark hover:text-primary dark:hover:text-primary transition-colors" aria-label="Instagram">
                  <span className="material-symbols-outlined text-2xl">instagram</span>
                </a>
                <a href="#" className="text-muted-light dark:text-muted-dark hover:text-primary dark:hover:text-primary transition-colors" aria-label="Youtube">
                  <span className="material-symbols-outlined text-2xl">youtube</span>
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-text-light dark:text-text-dark">Khóa học</h3>
            <div className="flex flex-col gap-3">
              <Link href="/courses" className="text-muted-light dark:text-muted-dark hover:text-primary dark:hover:text-primary transition-colors">
                Tất cả khóa học
              </Link>
              <Link href="/videos" className="text-muted-light dark:text-muted-dark hover:text-primary dark:hover:text-primary transition-colors">
                Video lẻ
              </Link>
              <Link href="/blog" className="text-muted-light dark:text-muted-dark hover:text-primary dark:hover:text-primary transition-colors">
                Blog
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-text-light dark:text-text-dark">Về chúng tôi</h3>
            <div className="flex flex-col gap-3">
              <Link href="/about" className="text-muted-light dark:text-muted-dark hover:text-primary dark:hover:text-primary transition-colors">
                Giới thiệu
              </Link>
              <Link href="/gallery" className="text-muted-light dark:text-muted-dark hover:text-primary dark:hover:text-primary transition-colors">
                Thư viện tác phẩm
              </Link>
              <Link href="/instructors" className="text-muted-light dark:text-muted-dark hover:text-primary dark:hover:text-primary transition-colors">
                Giảng viên
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-text-light dark:text-text-dark">Hỗ trợ</h3>
            <div className="flex flex-col gap-3">
              <Link href="/support" className="text-muted-light dark:text-muted-dark hover:text-primary dark:hover:text-primary transition-colors">
                Liên hệ
              </Link>
              <Link href="/faq" className="text-muted-light dark:text-muted-dark hover:text-primary dark:hover:text-primary transition-colors">
                Câu hỏi thường gặp
              </Link>
              <Link href="/terms" className="text-muted-light dark:text-muted-dark hover:text-primary dark:hover:text-primary transition-colors">
                Điều khoản dịch vụ
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border-light dark:border-border-dark text-center">
          <p className="text-muted-light dark:text-muted-dark text-sm">
            © {new Date().getFullYear()} Hang Khoa Art. Bản quyền thuộc về Hang Khoa Art.
          </p>
        </div>
      </div>
    </footer>
  )
}

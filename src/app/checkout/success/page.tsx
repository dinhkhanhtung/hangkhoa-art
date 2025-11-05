import Link from 'next/link'

export default function CheckoutSuccessPage() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-border-light dark:border-border-dark px-4 sm:px-10 py-3">
        <div className="flex items-center gap-4 text-text-light dark:text-text-dark">
          <div className="size-6 text-primary">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2zM15 5v2m-6-2v2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
            </svg>
          </div>
          <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">Hang Khoa Art</h2>
        </div>
        <Link href="/" className="text-sm font-medium leading-normal hover:text-primary transition-colors">
          ← Về trang chủ
        </Link>
      </header>

      <main className="flex flex-1 items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md text-center">
          {/* Success Icon */}
          <div className="mb-8">
            <div className="mx-auto w-24 h-24 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center">
              <span className="material-symbols-outlined text-4xl text-green-600 dark:text-green-400">
                check_circle
              </span>
            </div>
          </div>

          {/* Success Message */}
          <div className="mb-8">
            <h1 className="text-3xl font-black leading-tight tracking-[-0.033em] text-text-light dark:text-text-dark mb-4">
              Thanh toán thành công!
            </h1>
            <p className="text-base text-gray-600 dark:text-gray-400">
              Cảm ơn bạn đã tin tưởng và lựa chọn Hang Khoa Art. Khóa học của bạn đã sẵn sàng để bắt đầu hành trình sáng tạo.
            </p>
          </div>

          {/* Order Details */}
          <div className="bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-xl p-6 mb-8">
            <h3 className="text-lg font-bold mb-4">Thông tin đơn hàng</h3>
            <div className="space-y-3 text-left">
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Mã đơn hàng</span>
                <span className="font-medium">#HK-{Date.now().toString().slice(-6)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Trạng thái</span>
                <span className="text-green-600 dark:text-green-400 font-medium">Đã hoàn thành</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Thời gian</span>
                <span className="font-medium">{new Date().toLocaleString('vi-VN')}</span>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="mb-8">
            <h3 className="text-lg font-bold mb-4">Bước tiếp theo</h3>
            <div className="space-y-3 text-left">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary mt-0.5">email</span>
                <div>
                  <p className="font-medium">Kiểm tra email</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Thông tin chi tiết đơn hàng đã được gửi đến email của bạn</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary mt-0.5">school</span>
                <div>
                  <p className="font-medium">Bắt đầu học</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Truy cập hồ sơ của bạn để bắt đầu các khóa học</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary mt-0.5">group</span>
                <div>
                  <p className="font-medium">Tham gia cộng đồng</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Kết nối với các học viên khác trong thư viện tác phẩm</p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <Link
              href="/profile"
              className="w-full flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-base font-bold text-white hover:opacity-90 transition-opacity"
            >
              Bắt đầu học ngay
            </Link>
            <Link
              href="/gallery"
              className="w-full flex items-center justify-center rounded-lg border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark px-6 py-3 text-base font-medium text-text-light dark:text-text-dark hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              Xem thư viện tác phẩm
            </Link>
          </div>

          {/* Support */}
          <div className="mt-8 pt-6 border-t border-border-light dark:border-border-dark">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Cần hỗ trợ? Liên hệ chúng tôi tại{' '}
              <a href="mailto:support@hangkhoa.art" className="text-primary hover:underline">
                support@hangkhoa.art
              </a>
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}

'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useAuth } from '../../lib/auth'

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const { signInWithEmail, signUpWithEmail, signInWithGoogle } = useAuth()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      if (isLogin) {
        const { error } = await signInWithEmail(email, password)
        if (error) throw error
        router.push('/')
      } else {
        const { error } = await signUpWithEmail(email, password)
        if (error) throw error
        // Show success message for signup
        setError('Đăng ký thành công! Vui lòng kiểm tra email để xác nhận.')
      }
    } catch (err: any) {
      setError(err.message || 'Có lỗi xảy ra')
    } finally {
      setLoading(false)
    }
  }

  const handleGoogleSignIn = async () => {
    setLoading(true)
    setError('')

    try {
      const { error } = await signInWithGoogle()
      if (error) throw error
    } catch (err: any) {
      setError(err.message || 'Có lỗi xảy ra')
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-border-light dark:border-border-dark px-4 sm:px-10 py-4 backdrop-blur-lg bg-white/80 dark:bg-black/80">
        <Link href="/" className="flex items-center gap-3 text-text-light dark:text-text-dark hover:text-primary transition-colors">
          <div className="size-8 text-primary">
            <svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2zM15 5v2m-6-2v2"/>
            </svg>
          </div>
          <h2 className="text-lg font-bold">Hang Khoa Art</h2>
        </Link>
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
        >
          <span className="material-symbols-outlined text-base">arrow_back</span>
          Quay lại trang chủ
        </Link>
      </header>

      <main className="flex flex-1 items-center justify-center min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-surface-light to-background-light dark:from-surface-dark dark:to-background-dark">
        <div className="w-full max-w-md space-y-8">
          {/* Page Heading */}
          <div className="text-center space-y-3">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-2">
              <span className="material-symbols-outlined text-3xl text-primary">lock_person</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-text-light dark:text-text-dark">
              {isLogin ? 'Chào Mừng Trở Lại!' : 'Tạo Tài Khoản Mới'}
            </h1>
            <p className="text-lg text-muted-light dark:text-muted-dark">
              Tham gia cộng đồng thêu tay nghệ thuật Hang Khoa Art
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-white dark:bg-black/20 shadow-lg rounded-2xl p-6 sm:p-8 space-y-8 border border-border-light dark:border-border-dark">
            {/* Segmented Buttons */}
            <div className="flex p-1">
              <div className="flex h-12 flex-1 items-center justify-center rounded-lg bg-surface-light dark:bg-surface-dark p-1">
                <label className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-4 has-[:checked]:bg-primary has-[:checked]:text-white has-[:checked]:shadow-md text-muted-light dark:text-muted-dark text-sm font-medium transition-all">
                  <span className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-base">login</span>
                    Đăng Nhập
                  </span>
                  <input
                    checked={isLogin}
                    onChange={() => setIsLogin(true)}
                    className="invisible w-0"
                    name="auth-toggle"
                    type="radio"
                    value="Đăng Nhập"
                  />
                </label>
                <label className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-4 has-[:checked]:bg-primary has-[:checked]:text-white has-[:checked]:shadow-md text-muted-light dark:text-muted-dark text-sm font-medium transition-all">
                  <span className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-base">person_add</span>
                    Đăng Ký
                  </span>
                  <input
                    checked={!isLogin}
                    onChange={() => setIsLogin(false)}
                    className="invisible w-0"
                    name="auth-toggle"
                    type="radio"
                    value="Đăng Ký"
                  />
                </label>
              </div>
            </div>

            {/* Form Fields */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <label className="flex flex-col">
                  <div className="flex items-center gap-2 text-sm font-medium pb-2 text-text-light dark:text-text-dark">
                    <span className="material-symbols-outlined text-base">mail</span>
                    Email
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-input w-full rounded-lg text-text-light dark:text-text-dark bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark h-12 px-4 text-base placeholder:text-muted-light/60 dark:placeholder:text-muted-dark/60 focus:border-primary dark:focus:border-primary focus:ring-1 focus:ring-primary dark:focus:ring-primary transition-all"
                    placeholder="Nhập email của bạn"
                    required
                  />
                </label>
                <label className="flex flex-col">
                  <div className="flex items-center justify-between pb-2">
                    <div className="flex items-center gap-2 text-sm font-medium text-text-light dark:text-text-dark">
                      <span className="material-symbols-outlined text-base">lock</span>
                      Mật khẩu
                    </div>
                    {isLogin && (
                      <a className="text-sm font-medium text-primary hover:text-primary/80 transition-colors" href="#">
                        Quên mật khẩu?
                      </a>
                    )}
                  </div>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-input w-full rounded-lg text-text-light dark:text-text-dark bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark h-12 px-4 text-base placeholder:text-muted-light/60 dark:placeholder:text-muted-dark/60 focus:border-primary dark:focus:border-primary focus:ring-1 focus:ring-primary dark:focus:ring-primary transition-all"
                    placeholder="Nhập mật khẩu của bạn"
                    required
                  />
                </label>
              </div>

              {error && (
                <div className="flex items-center justify-center gap-2 text-red-500 bg-red-50 dark:bg-red-500/10 rounded-lg p-3 text-sm">
                  <span className="material-symbols-outlined text-base">error</span>
                  {error}
                </div>
              )}

              <div>
                <button
                  type="submit"
                  disabled={loading}
                  className="relative flex w-full items-center justify-center gap-2 rounded-lg bg-primary py-3 px-4 text-base font-semibold text-white hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 dark:focus:ring-offset-black/20 transition-all disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-white/20 border-t-white"></div>
                      <span>Đang xử lý...</span>
                    </>
                  ) : (
                    <>
                      <span className="material-symbols-outlined text-base">
                        {isLogin ? 'login' : 'person_add'}
                      </span>
                      <span>{isLogin ? 'Đăng Nhập' : 'Đăng Ký'}</span>
                    </>
                  )}
                </button>
              </div>
            </form>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border-light dark:border-border-dark"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-surface-light dark:bg-surface-dark px-2 text-text-light/70 dark:text-text-dark/60">Hoặc tiếp tục với</span>
              </div>
            </div>

            {/* Social Login */}
            <div>
              <button
                onClick={handleGoogleSignIn}
                disabled={loading}
                className="group relative flex w-full items-center justify-center rounded-lg border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark py-3 px-4 text-sm font-medium text-text-light dark:text-text-dark hover:bg-background-light dark:hover:bg-background-dark focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 dark:focus:ring-offset-surface-dark transition-colors disabled:opacity-50"
              >
                <img
                  className="h-5 w-5 mr-3"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6pn76XWIV7DETTdmQRZhItc999t19ZBY2c4GXWwklylntpuZkFqjCGhBRWHqUOFkq1pTUqpto4rWQQ6B4mmqKupQySbk8FJoifQRv5PbHj-lkUHIHmRkeboSX5wqF2BccO5DyC4tucigeM96Wp8-XhYIAmlouwqUkGLy8fiy48KeBuJ9aQTtg0wjDx_PJp7Wzt8KW49ougmVqJQQz9pthHZauPlEx3hjDHdDEYV0yc9G0oqLxPkuS2TvlcNYtHzBqUo4dZq5FDR1j"
                  alt="Google logo"
                />
                Tiếp tục với Google
              </button>
            </div>
          </div>

          {/* Footer Link */}
          <p className="text-center text-sm text-muted-light dark:text-muted-dark">
            {isLogin ? 'Chưa có tài khoản?' : 'Đã có tài khoản?'}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="font-medium text-primary hover:text-opacity-80 transition-colors ml-1"
            >
              {isLogin ? 'Đăng ký ngay' : 'Đăng nhập'}
            </button>
          </p>
        </div>
      </main>
    </div>
  )
}

'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useAuth } from '../lib/auth'
import { useCartStore } from '../stores/cartStore'

export default function Header() {
  const { user, isAuthenticated, signOut } = useAuth()
  const { getItemCount } = useCartStore()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [itemCount, setItemCount] = useState(0)

  useEffect(() => {
    setItemCount(getItemCount())
  }, [getItemCount])

  return (
    <header className="sticky top-0 z-50 flex justify-center border-b border-border-light dark:border-border-dark bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
      <div className="flex w-full flex-col max-w-7xl">
        <div className="flex items-center justify-between whitespace-nowrap px-4 sm:px-10 py-3">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-3 text-text-light dark:text-text-dark">
            <div className="w-6 h-6 text-primary">
              <svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2zM15 5v2m-6-2v2"/>
              </svg>
            </div>
            <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">Hang Khoa Art</h2>
          </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              <Link href="/courses" className="text-sm font-medium text-text-light/70 dark:text-text-dark/70 hover:text-primary dark:hover:text-primary transition-colors">
                Khoá học
              </Link>
              <Link href="/videos" className="text-sm font-medium text-text-light/70 dark:text-text-dark/70 hover:text-primary dark:hover:text-primary transition-colors">
                Video Lẻ
              </Link>
              <Link href="/gallery" className="text-sm font-medium text-text-light/70 dark:text-text-dark/70 hover:text-primary dark:hover:text-primary transition-colors">
                Thư viện
              </Link>
              <Link href="/instructors" className="text-sm font-medium text-text-light/70 dark:text-text-dark/70 hover:text-primary dark:hover:text-primary transition-colors">
                Giảng viên
              </Link>
              <Link href="/about" className="text-sm font-medium text-text-light/70 dark:text-text-dark/70 hover:text-primary dark:hover:text-primary transition-colors">
                Giới thiệu
              </Link>
              <Link href="/blog" className="text-sm font-medium text-text-light/70 dark:text-text-dark/70 hover:text-primary dark:hover:text-primary transition-colors">
                Blog
              </Link>
              <Link href="/faq" className="text-sm font-medium text-text-light/70 dark:text-text-dark/70 hover:text-primary dark:hover:text-primary transition-colors">
                FAQ
              </Link>
            </nav>
          </div>

          <div className="flex flex-1 justify-end items-center gap-4">
            {/* Search */}
            <label className="hidden md:flex flex-col min-w-40 h-10 max-w-64">
              <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
                <div className="flex items-center justify-center bg-subtle-light dark:bg-subtle-dark pl-4 rounded-l-lg">
                  <span className="material-symbols-outlined text-xl text-muted-light dark:text-muted-dark" style={{ fontVariationSettings: "'FILL' 0" }}>search</span>
                </div>
                <input
                  className="form-input flex w-full min-w-0 flex-1 overflow-hidden rounded-r-lg text-text-light dark:text-text-dark focus:ring-primary focus:border-primary border-subtle-light dark:border-subtle-dark bg-subtle-light dark:bg-subtle-dark h-full placeholder:text-muted-light dark:placeholder:text-muted-dark px-4 pl-2 text-sm font-normal leading-normal"
                  placeholder="Tìm kiếm"
                />
              </div>
            </label>

            {/* Auth & Cart */}
            <div className="flex gap-2 items-center">
              {isAuthenticated ? (
                <div className="flex items-center gap-2">
                  <Link href="/profile" className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
                    Hồ sơ
                  </Link>
                  <button
                    onClick={signOut}
                    className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-subtle-light dark:bg-subtle-dark text-text-light dark:text-text-dark gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5 hover:bg-border-light dark:hover:bg-border-dark transition-colors"
                  >
                    Đăng xuất
                  </button>
                </div>
              ) : (
                <Link href="/auth" className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
                  Đăng Nhập
                </Link>
              )}

              <Link href="/cart" className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-subtle-light dark:bg-subtle-dark text-text-light dark:text-text-dark gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5 hover:bg-border-light dark:hover:bg-border-dark transition-colors relative">
                <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 0" }}>shopping_cart</span>
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-subtle-light dark:bg-subtle-dark text-text-light dark:text-text-dark min-w-0 px-2.5 hover:bg-border-light dark:hover:bg-border-dark transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 0" }}>menu</span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border-light dark:border-border-dark py-4">
            <nav className="flex flex-col gap-4 px-4">
              <Link href="/courses" className="text-sm font-medium text-text-light/70 dark:text-text-dark/70 hover:text-primary dark:hover:text-primary transition-colors">
                Khoá học
              </Link>
              <Link href="/videos" className="text-sm font-medium text-text-light/70 dark:text-text-dark/70 hover:text-primary dark:hover:text-primary transition-colors">
                Video Lẻ
              </Link>
              <Link href="/gallery" className="text-sm font-medium text-text-light/70 dark:text-text-dark/70 hover:text-primary dark:hover:text-primary transition-colors">
                Thư viện
              </Link>
              <Link href="/instructors" className="text-sm font-medium text-text-light/70 dark:text-text-dark/70 hover:text-primary dark:hover:text-primary transition-colors">
                Giảng viên
              </Link>
              <Link href="/about" className="text-sm font-medium text-text-light/70 dark:text-text-dark/70 hover:text-primary dark:hover:text-primary transition-colors">
                Giới thiệu
              </Link>
              <Link href="/blog" className="text-sm font-medium text-text-light/70 dark:text-text-dark/70 hover:text-primary dark:hover:text-primary transition-colors">
                Blog
              </Link>
              <Link href="/faq" className="text-sm font-medium text-text-light/70 dark:text-text-dark/70 hover:text-primary dark:hover:text-primary transition-colors">
                FAQ
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

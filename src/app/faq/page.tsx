'use client'

import { useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const faqCategories = ['Chung', 'Khoá Học', 'Thanh Toán', 'Kỹ Thuật']

const faqData = {
  'Chung': [
    {
      question: 'Làm thế nào để đăng ký một khoá học?',
      answer: 'Để đăng ký, hãy truy cập trang chi tiết khóa học bạn quan tâm và nhấp vào nút \'Đăng ký ngay\'. Sau đó, bạn sẽ được hướng dẫn qua quy trình thanh toán để hoàn tất việc đăng ký.'
    },
    {
      question: 'Tôi có cần kinh nghiệm thêu trước khi tham gia không?',
      answer: 'Hoàn toàn không cần! Chúng tôi có các khóa học được thiết kế cho mọi cấp độ, từ người mới bắt đầu chưa từng cầm kim chỉ cho đến những người đã có kinh nghiệm muốn nâng cao kỹ năng.'
    },
    {
      question: 'Tôi có thể xem lại video bài giảng bao nhiêu lần?',
      answer: 'Sau khi đăng ký, bạn sẽ có quyền truy cập vĩnh viễn vào tất cả các video bài giảng của khóa học. Bạn có thể xem lại bao nhiêu lần tùy thích, bất cứ lúc nào và ở bất cứ đâu.'
    }
  ],
  'Khoá Học': [
    {
      question: 'Khóa học kéo dài bao lâu?',
      answer: 'Thời gian hoàn thành khóa học phụ thuộc vào tiến độ học tập của bạn. Hầu hết học viên hoàn thành trong 4-8 tuần với việc học 2-3 giờ mỗi tuần.'
    },
    {
      question: 'Tôi có thể học trên thiết bị di động không?',
      answer: 'Có, nền tảng của chúng tôi tương thích hoàn toàn với điện thoại và máy tính bảng. Bạn có thể học mọi lúc mọi nơi.'
    }
  ],
  'Thanh Toán': [
    {
      question: 'Tôi có thể thanh toán bằng những hình thức nào?',
      answer: 'Chúng tôi chấp nhận nhiều hình thức thanh toán bao gồm thẻ tín dụng/ghi nợ (Visa, Mastercard), chuyển khoản ngân hàng, và ví điện tử phổ biến như Momo, ZaloPay.'
    },
    {
      question: 'Chính sách hoàn trả học phí ra sao?',
      answer: 'Bạn có thể yêu cầu hoàn học phí trong vòng 7 ngày kể từ ngày đăng ký nếu bạn chưa xem quá 20% nội dung khóa học. Vui lòng xem chi tiết tại trang "Chính sách và Điều khoản".'
    }
  ],
  'Kỹ Thuật': [
    {
      question: 'Tôi cần chuẩn bị dụng cụ gì?',
      answer: 'Trong bài học đầu tiên của mỗi khóa, chúng tôi sẽ hướng dẫn chi tiết về các dụng cụ cần thiết. Bạn có thể bắt đầu với bộ dụng cụ cơ bản và bổ sung dần theo nhu cầu.'
    },
    {
      question: 'Tôi có thể nhận chứng chỉ sau khi hoàn thành không?',
      answer: 'Có, bạn sẽ nhận được chứng chỉ hoàn thành khóa học sau khi làm xong tất cả bài tập và dự án cuối khóa.'
    }
  ]
}

export default function FAQPage() {
  const [selectedCategory, setSelectedCategory] = useState('Chung')
  const [openItems, setOpenItems] = useState<Set<number>>(new Set([0]))

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index)
    } else {
      newOpenItems.add(index)
    }
    setOpenItems(newOpenItems)
  }

  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative w-full bg-gradient-to-b from-primary/5 to-transparent dark:from-primary/10 dark:to-transparent py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              {/* Breadcrumbs */}
              <div className="flex flex-wrap items-center justify-center gap-2 text-sm">
                <a href="/" className="text-muted-light dark:text-muted-dark hover:text-primary transition-colors">
                  Trang chủ
                </a>
                <span className="text-muted-light/40 dark:text-muted-dark/40">/</span>
                <span className="text-text-light dark:text-text-dark">Câu hỏi thường gặp</span>
              </div>

              <div className="inline-flex items-center justify-center size-20 rounded-2xl bg-primary/10 text-primary mb-4">
                <span className="material-symbols-outlined text-4xl">help</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-black tracking-tight text-text-light dark:text-text-dark">
                Các Câu Hỏi Thường Gặp
              </h1>
              <p className="text-xl text-muted-light dark:text-muted-dark max-w-2xl mx-auto">
                Tìm hiểu thông tin chi tiết về các khóa học và giải đáp những thắc mắc phổ biến
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="w-full py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              {/* Category Filters */}
              <div className="bg-white dark:bg-black/20 rounded-2xl border border-border-light dark:border-border-dark p-4 mb-8">
                <div className="flex gap-3 overflow-x-auto pb-2">
                  {faqCategories.map((category) => (
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

              {/* FAQ Accordions */}
              <div className="space-y-4">
                {faqData[selectedCategory as keyof typeof faqData].map((faq, index) => (
                  <div 
                    key={index} 
                    className="bg-white dark:bg-black/20 rounded-2xl border border-border-light dark:border-border-dark overflow-hidden transition-all hover:shadow-md"
                  >
                    <button
                      onClick={() => toggleItem(index)}
                      className="w-full flex items-center justify-between gap-6 p-6 text-left"
                    >
                      <h3 className="text-lg font-semibold text-text-light dark:text-text-dark pr-8">{faq.question}</h3>
                      <span className={`material-symbols-outlined text-primary transition-transform duration-300 ${
                        openItems.has(index) ? 'rotate-180' : ''
                      }`}>
                        expand_more
                      </span>
                    </button>

                    <div className={`transition-all duration-300 ${
                      openItems.has(index) ? 'max-h-96' : 'max-h-0'
                    }`}>
                      <div className="px-6 pb-6">
                        <div className="pt-4 border-t border-border-light dark:border-border-dark">
                          <p className="text-muted-light dark:text-muted-dark leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 dark:from-primary/10 dark:via-primary/20 dark:to-primary/10 rounded-2xl p-8 md:p-12">
                <div className="max-w-2xl mx-auto text-center space-y-6">
                  <div className="inline-flex items-center justify-center size-16 rounded-xl bg-primary/10 text-primary">
                    <span className="material-symbols-outlined text-3xl">support_agent</span>
                  </div>
                  <h2 className="text-3xl font-black text-text-light dark:text-text-dark">
                    Bạn vẫn còn thắc mắc?
                  </h2>
                  <p className="text-lg text-muted-light dark:text-muted-dark">
                    Đừng ngần ngại liên hệ với chúng tôi để được hỗ trợ và giải đáp mọi câu hỏi một cách nhanh chóng nhất.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center">
                    <a
                      href="/support"
                      className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-all"
                    >
                      <span className="material-symbols-outlined">contact_support</span>
                      Liên Hệ Hỗ Trợ
                    </a>
                    <a
                      href="tel:0123456789"
                      className="inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-black/20 text-text-light dark:text-text-dark font-semibold rounded-xl border border-border-light dark:border-border-dark hover:border-primary hover:text-primary transition-all"
                    >
                      <span className="material-symbols-outlined">call</span>
                      Gọi Ngay
                    </a>
                  </div>
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

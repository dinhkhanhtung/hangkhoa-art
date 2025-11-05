'use client'

import { useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const cartItems = [
  {
    id: '1',
    name: 'Khoá học thêu tay cơ bản',
    description: '1 video',
    price: 1200000,
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&h=200&fit=crop&crop=center'
  },
  {
    id: '2',
    name: 'Kỹ thuật thêu nổi nâng cao',
    description: '1 video',
    price: 850000,
    image: 'https://images.unsplash.com/photo-1581299894007-aaa50297cf16?w=200&h=200&fit=crop&crop=center'
  }
]

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState('credit-card')
  const [discountCode, setDiscountCode] = useState('')

  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0)
  const discount = discountCode.toLowerCase() === 'save50' ? 50000 : 0
  const total = subtotal - discount

  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />

      <main className="flex-grow bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Main Content */}
            <div className="flex-grow lg:w-3/5">
              <div className="flex flex-col gap-8">
                {/* Header */}
                <div className="flex flex-wrap justify-between gap-3">
                  <h1 className="text-4xl font-black">Thanh toán</h1>
                </div>

                {/* Progress */}
                <div className="flex flex-col gap-3">
                  <div className="flex gap-6 justify-between">
                    <p className="text-base font-medium">Bước 2/3: Phương thức thanh toán</p>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '66%' }}></div>
                  </div>
                </div>

                {/* Payment Form */}
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
                  <h2 className="text-2xl font-bold mb-6">Phương thức thanh toán</h2>

                  {/* Payment Methods */}
                  <div className="flex flex-col gap-3 mb-8">
                    <label className="flex items-center gap-4 rounded-xl border border-gray-200 dark:border-gray-600 p-4 cursor-pointer hover:border-primary transition-colors">
                      <input
                        type="radio"
                        name="payment-method"
                        value="credit-card"
                        checked={paymentMethod === 'credit-card'}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="w-5 h-5 text-primary focus:ring-primary"
                      />
                      <div className="flex-grow">
                        <p className="text-sm font-medium">Thẻ Tín dụng/Ghi nợ</p>
                      </div>
                      <div className="flex gap-1">
                        <div className="text-xs text-gray-400">Visa</div>
                        <div className="text-xs text-gray-400">Mastercard</div>
                      </div>
                    </label>

                    <label className="flex items-center gap-4 rounded-xl border border-gray-200 dark:border-gray-600 p-4 cursor-pointer hover:border-primary transition-colors">
                      <input
                        type="radio"
                        name="payment-method"
                        value="bank-transfer"
                        checked={paymentMethod === 'bank-transfer'}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="w-5 h-5 text-primary focus:ring-primary"
                      />
                      <div className="flex-grow">
                        <p className="text-sm font-medium">Chuyển khoản ngân hàng</p>
                      </div>
                    </label>

                    <label className="flex items-center gap-4 rounded-xl border border-gray-200 dark:border-gray-600 p-4 cursor-pointer hover:border-primary transition-colors">
                      <input
                        type="radio"
                        name="payment-method"
                        value="e-wallet"
                        checked={paymentMethod === 'e-wallet'}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="w-5 h-5 text-primary focus:ring-primary"
                      />
                      <div className="flex-grow">
                        <p className="text-sm font-medium">Ví điện tử</p>
                      </div>
                    </label>
                  </div>

                  {/* Payment Form */}
                  <h2 className="text-2xl font-bold mb-6">Thông tin thanh toán</h2>
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2" htmlFor="card-number">
                        Số thẻ
                      </label>
                      <input
                        className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent"
                        id="card-number"
                        type="text"
                        placeholder="**** **** **** ****"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2" htmlFor="card-holder">
                        Họ tên trên thẻ
                      </label>
                      <input
                        className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent"
                        id="card-holder"
                        type="text"
                        placeholder="NGUYEN VAN A"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2" htmlFor="expiry-date">
                          Ngày hết hạn
                        </label>
                        <input
                          className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent"
                          id="expiry-date"
                          type="text"
                          placeholder="MM/YY"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2" htmlFor="cvv">
                          CVV
                        </label>
                        <input
                          className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent"
                          id="cvv"
                          type="text"
                          placeholder="123"
                        />
                      </div>
                    </div>

                    <button
                      className="w-full mt-6 px-6 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-colors"
                      type="submit"
                    >
                      Hoàn tất Thanh toán
                    </button>

                    <div className="flex items-center justify-center gap-2 pt-2 text-sm text-gray-500">
                      <span className="material-symbols-outlined text-base">lock</span>
                      <span>Thanh toán an toàn</span>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="w-full lg:w-2/5">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm sticky top-24">
                <h2 className="text-2xl font-bold mb-6">Tóm tắt đơn hàng</h2>

                {/* Cart Items */}
                <div className="space-y-4 mb-6 border-b border-gray-200 dark:border-gray-700 pb-4">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex items-center gap-4">
                      <img
                        className="w-16 h-16 rounded-lg object-cover"
                        src={item.image}
                        alt={item.name}
                      />
                      <div className="flex-grow">
                        <p className="font-medium text-sm">{item.name}</p>
                        <p className="text-xs text-gray-500">{item.description}</p>
                      </div>
                      <p className="font-bold text-sm">{item.price.toLocaleString('vi-VN')}₫</p>
                    </div>
                  ))}
                </div>

                {/* Discount Code */}
                <div className="mb-6 border-b border-gray-200 dark:border-gray-700 pb-4">
                  <label className="block text-sm font-medium mb-2" htmlFor="discount-code">
                    Mã giảm giá
                  </label>
                  <div className="flex gap-2">
                    <input
                      className="flex-grow rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-4 py-2 focus:ring-2 focus:ring-primary focus:border-transparent"
                      id="discount-code"
                      type="text"
                      placeholder="Nhập mã"
                      value={discountCode}
                      onChange={(e) => setDiscountCode(e.target.value)}
                    />
                    <button className="px-4 py-2 bg-primary/20 text-primary font-bold rounded-lg hover:bg-primary/30 transition-colors">
                      Áp dụng
                    </button>
                  </div>
                </div>

                {/* Order Summary */}
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Tạm tính</span>
                    <span>{subtotal.toLocaleString('vi-VN')}₫</span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between text-primary">
                      <span>Giảm giá</span>
                      <span>-{discount.toLocaleString('vi-VN')}₫</span>
                    </div>
                  )}
                  <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <span className="text-lg font-bold">Tổng cộng</span>
                    <span className="text-2xl font-black">{total.toLocaleString('vi-VN')}₫</span>
                  </div>
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

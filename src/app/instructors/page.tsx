import Header from '../../components/Header'
import Footer from '../../components/Footer'
import InstructorCard from '../../components/InstructorCard'
import { instructorService, type Instructor } from '../../lib/services/instructorService'

// This would normally fetch from the database
const sampleInstructors: Instructor[] = [
  {
    id: '1',
    name: 'Lê Thị Hằng',
    bio: 'Nghệ nhân thêu tay truyền thống với hơn 15 năm kinh nghiệm',
    avatar_url: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=600&fit=crop&crop=center',
    specialty: 'Nghệ nhân thêu tay truyền thống',
    experience_years: 15,
    course_count: 5,
    student_count: 2340,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  },
  {
    id: '2',
    name: 'Nguyễn Thu Khoa',
    bio: 'Chuyên gia thêu nổi hiện đại, sáng tạo các mẫu thêu ứng dụng',
    avatar_url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&crop=center',
    specialty: 'Chuyên gia thêu nổi hiện đại',
    experience_years: 12,
    course_count: 3,
    student_count: 1850,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  },
  {
    id: '3',
    name: 'Trần Minh Anh',
    bio: 'Nghệ sĩ thêu tranh phong cảnh với nhiều tác phẩm xuất sắc',
    avatar_url: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=600&fit=crop&crop=center',
    specialty: 'Nghệ sĩ thêu tranh phong cảnh',
    experience_years: 10,
    course_count: 4,
    student_count: 2100,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  },
  {
    id: '4',
    name: 'Phạm Bảo Trâm',
    bio: 'Chuyên gia phối màu chỉ thêu, tạo ra những tác phẩm sống động',
    avatar_url: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=600&fit=crop&crop=center',
    specialty: 'Chuyên gia phối màu chỉ thêu',
    experience_years: 8,
    course_count: 2,
    student_count: 1200,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  },
  {
    id: '5',
    name: 'Vũ Thanh Mai',
    bio: 'Người sáng tạo mẫu thêu ứng dụng cho thời trang và nội thất',
    avatar_url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=600&fit=crop&crop=center',
    specialty: 'Người sáng tạo mẫu thêu ứng dụng',
    experience_years: 9,
    course_count: 3,
    student_count: 1600,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  },
  {
    id: '6',
    name: 'Hoàng Kiều Oanh',
    bio: 'Nghệ nhân thêu họa tiết cổ điển, bảo tồn giá trị truyền thống',
    avatar_url: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=600&fit=crop&crop=center',
    specialty: 'Nghệ nhân thêu họa tiết cổ điển',
    experience_years: 14,
    course_count: 6,
    student_count: 2800,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  }
]

export default function InstructorsPage() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="w-full py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex min-w-72 flex-col gap-3">
              <h1 className="text-gray-900 dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">
                Gặp Gỡ Đội Ngũ Giảng Viên Của Chúng Tôi
              </h1>
              <p className="text-gray-600 dark:text-gray-400 text-base font-normal leading-normal">
                Khám phá đội ngũ nghệ nhân đầy tâm huyết, những người sẽ đồng hành cùng bạn trên con đường chinh phục nghệ thuật thêu tay.
              </p>
            </div>
          </div>
        </section>

        {/* View Toggle */}
        <section className="w-full pb-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-end flex-1">
              <div className="flex h-10 w-full max-w-64 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800 p-1">
                <label className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2 bg-white dark:bg-gray-900 shadow-sm text-gray-900 dark:text-white text-sm font-medium leading-normal gap-2">
                  <span className="material-symbols-outlined text-base">grid_view</span>
                  <span className="truncate">Grid View</span>
                  <input checked className="invisible w-0" name="view-toggle" type="radio" value="Grid View"/>
                </label>
                <label className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2 text-gray-600 dark:text-gray-400 text-sm font-medium leading-normal gap-2">
                  <span className="material-symbols-outlined text-base">view_list</span>
                  <span className="truncate">List View</span>
                  <input className="invisible w-0" name="view-toggle" type="radio" value="List View"/>
                </label>
              </div>
            </div>
          </div>
        </section>

        {/* Instructors Grid */}
        <section className="w-full pb-16 md:pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {sampleInstructors.map((instructor) => (
                <InstructorCard key={instructor.id} instructor={instructor} />
              ))}
            </div>
          </div>
        </section>

        {/* Pagination */}
        <section className="w-full pb-16 md:pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center gap-2">
              <button className="flex size-10 items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full">
                <span className="material-symbols-outlined text-base">chevron_left</span>
              </button>
              <button className="text-sm font-bold leading-normal tracking-[0.015em] flex size-10 items-center justify-center text-white bg-primary rounded-full">
                1
              </button>
              <button className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full">
                2
              </button>
              <button className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full">
                3
              </button>
              <span className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-gray-700 dark:text-gray-300 rounded-full">
                ...
              </span>
              <button className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full">
                8
              </button>
              <button className="flex size-10 items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full">
                <span className="material-symbols-outlined text-base">chevron_right</span>
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

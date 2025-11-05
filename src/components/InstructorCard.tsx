'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Instructor } from '../lib/services/instructorService'

interface InstructorCardProps {
  instructor: Instructor
}

export default function InstructorCard({ instructor }: InstructorCardProps) {
  return (
    <div className="group relative block">
      <div className="w-full rounded-xl bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark hover:border-primary dark:hover:border-primary transition-colors duration-300 overflow-hidden">
        <div className="relative w-full aspect-[3/4] overflow-hidden">
          <Image 
            src={instructor.avatar_url} 
            alt={instructor.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-4 sm:p-6 flex flex-col gap-3">
          <h3 className="text-lg font-semibold text-text-light dark:text-text-dark group-hover:text-primary transition-colors">
            {instructor.name}
          </h3>
          <p className="text-sm text-muted-light dark:text-muted-dark">
            {instructor.specialty}
          </p>
          <Link
            href={`/instructors/${instructor.id}`}
            className="inline-flex items-center gap-1.5 text-primary hover:text-primary/90 font-medium transition-colors"
          >
            <span>Xem Khóa Học</span>
            <span className="material-symbols-outlined text-base">arrow_forward</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

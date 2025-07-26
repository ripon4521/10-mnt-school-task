'use client';
import Image from 'next/image';
import { useRef } from 'react';

// Define a TypeScript interface for your course data
interface Course {
  name: string;
  thumbnailSrc: string;
  alt: string;
  teachers: string;
  price: number;
  oldPrice?: number; // Optional old price
  href: string;
}

const RecomandedCourse: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Sample course data (replace with actual data fetched from an API in a real app)
  const courses: Course[] = [
    {
      name: 'IELTS LIVE Batch',
      thumbnailSrc: 'https://cdn.10minuteschool.com/images/thumbnails/batch-12-ielts-live-batch-thumbnails.jpg',
      alt: 'IELTS LIVE Batch',
      teachers: 'Zawad Hasan Adib, Saraf Samantha Khan, Salsabil Haque, Uttam Deb, Sharlin Ulfatt Bhuiyan',
      price: 8500,
      oldPrice: 10000,
      href: '/product/ielts-live-batch/?ref=ielts-live-batch&type=recommendation',
    },
    {
      name: 'ঘরে বসে Spoken English',
      thumbnailSrc: 'https://cdn.10minuteschool.com/images/thumbnails/skills/ghore-boshe-Spoken-English-course-thumbnail-by-Munzereen-Shahid-16x9.jpg',
      alt: 'ঘরে বসে Spoken English',
      teachers: 'Munzereen Shahid',
      price: 1950,
      href: '/product/ghore-boshe-spoken-english/?ref=ghore-boshe-spoken-english&type=recommendation',
    },
    {
      name: 'Email Marketing করে Freelancing',
      thumbnailSrc: 'https://cdn.10minuteschool.com/images/catalog/media/16x9_1732445853307.jpg',
      alt: 'Email Marketing করে Freelancing',
      teachers: 'Tisat Fatema Tia',
      price: 1950,
      href: '/product/email-marketing-course/?ref=email-marketing-course&type=recommendation',
    },
    {
      name: 'Complete English Grammar Course',
      thumbnailSrc: 'https://cdn.10minuteschool.com/images/thumbnails/complete-grammar-course-thumbnail.jpg',
      alt: 'Complete English Grammar Course',
      teachers: 'Munzereen Shahid',
      price: 1950,
      href: '/product/english-grammar-course/?ref=english-grammar-course&type=recommendation',
    },
    {
      name: 'YouTube Marketing করে Freelancing',
      thumbnailSrc: 'https://cdn.10minuteschool.com/images/thumbnails/skills/youtube-marketing-course-thumbnail.jpg',
      alt: 'YouTube Marketing করে Freelancing',
      teachers: 'Md. Sabbir Hossain',
      price: 2500,
      href: '/product/youtube-marketing-course/?ref=youtube-marketing-course&type=recommendation',
    },
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300; // Adjust as needed
      if (direction === 'left') {
        scrollContainerRef.current.scrollLeft -= scrollAmount;
      } else {
        scrollContainerRef.current.scrollLeft += scrollAmount;
      }
    }
  };

  return (
    <div className="container w-full mt-6 mb-10 md:my-10 mx-auto">
      <h2 className="mb-3 text-xl font-semibold md:mb-6 md:text-2xl">আপনার জন্য আরও কিছু কোর্স</h2>
      <div className="relative">
        <div className="tenms-carousel relative light right">
          <div className="w-full overflow-hidden">
            {/* Right Scroll Button */}
            <div
              className="cursor-pointer float-right mb-4 ml-4"
              onClick={() => scroll('right')}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="33"
                height="32"
                fill="none"
                viewBox="0 0 33 32"
                className="xl:mr-[-40px]"
              >
                <path
                  fill="#000"
                  fillOpacity="0.5"
                  fillRule="evenodd"
                  d="M16.757 32c8.836 0 16-7.163 16-16s-7.164-16-16-16c-8.837 0-16 7.163-16 16s7.163 16 16 16zM15.064 8.893a1 1 0 00-1.415 1.415L19.342 16l-5.693 5.692a1 1 0 001.415 1.415l6.4-6.4a1 1 0 000-1.414l-6.4-6.4z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            {/* Left Scroll Button */}
            <div
              className="cursor-pointer float-right mb-4 pointer-events-none opacity-10"
              onClick={() => scroll('left')}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="33"
                height="32"
                fill="none"
                viewBox="0 0 33 32"
                className="rotate-180 xl:ml-[-40px]"
              >
                <path
                  fill="#000"
                  fillOpacity="0.5"
                  fillRule="evenodd"
                  d="M16.757 32c8.836 0 16-7.163 16-16s-7.164-16-16-16c-8.837 0-16 7.163-16 16s7.163 16 16 16zM15.064 8.893a1 1 0 00-1.415 1.415L19.342 16l-5.693 5.692a1 1 0 001.415 1.415l6.4-6.4a1 1 0 000-1.414l-6.4-6.4z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
          <div
            ref={scrollContainerRef}
            className="scrollbar-hide relative flex flex-nowrap gap-4 overflow-x-scroll scroll-smooth snap-x snap-mandatory"
          >
            {courses.map((course, index) => (
              <a href={course.href} key={index}>
                <div className="border border-[#E5E7EB] my-0 flex h-full min-w-[200px] max-w-[200px] cursor-pointer flex-col overflow-hidden rounded transition-colors hover:border-green md:min-w-[272px] md:rounded-[6px]">
                  <div className="undefined opacity-0 transition-opacity duration-300 ease-in-out" style={{ fontSize: '0px', opacity: 1 }}>
                    <Image
                  
                      alt={course.alt}
                      src={course.thumbnailSrc}
                      loading="lazy"
                      width={272}
                      height={152}
                      decoding="async"
                      // data-nimg="1" // next/image handles this internally
                      // style="color: transparent;" // next/image handles this internally
                    />
                  </div>
                  <div className="flex min-w-0 flex-1 flex-col justify-between gap-2 p-[14px]">
                    <div>
                      <h2 className="mb-1 line-clamp-2 max-h-14 text-sm font-semibold md:text-lg ">
                        {course.name}
                      </h2>
                      <h3 className="max-h-[50px] overflow-hidden truncate text-xs text-[#6B7280] md:text-sm">
                        {course.teachers}
                      </h3>
                    </div>
                    <div>
                      <div className="flex items-center">
                        <p className="text-sm font-[600] text-[#1DAB55] md:text-lg">
                          ৳ {course.price}
                        </p>
                        {course.oldPrice && <del className="ml-2">৳{course.oldPrice}</del>}
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecomandedCourse;
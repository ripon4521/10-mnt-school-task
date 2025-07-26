'use client'; // This component uses useState, so it must be a client component.

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Banner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) {
    return null; // Don't render if not visible
  }

  return (
    <div className="relative z-[2] aspect-auto">
      <div style={{ background: '#02090B' }}>
        <div className="relative">
          <div>
            {/* Main banner link */}
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSfX6YBGXnY8YxNlVZOEP6Y9GVCWVo9Qe-aeCuGM_4NV5Hu30Q/viewform"
              target="_blank"
              rel="noreferrer noopener" // Added noopener for security best practices
              className="relative z-[1] flex items-center justify-center"
            >
              {/* Desktop banner image */}
              <Image
                alt="banner image"
                src="https://cdn.10minuteschool.com/images/dasktop_banner_1753270611489.png?w=1800"
                loading="lazy"
                width={1800} // Explicit width required by next/image
                height={150} // Explicit height required by next/image
                decoding="async"
                className="hidden w-auto sm:block" // Tailwind classes for responsiveness
                style={{ color: 'transparent' }}
              />

              {/* Mobile banner image */}
              <Image
                alt="banner image"
                src="https://cdn.10minuteschool.com/images/mobile_banner_1753355543677.png?w=768"
                loading="lazy"
                width={768} // Explicit width required by next/image
                height={143} // Explicit height required by next/image
                decoding="async"
                className="w-auto sm:hidden" // Tailwind classes for responsiveness
                style={{ color: 'transparent', backgroundSize: 'cover', backgroundPosition: '50% 50%', backgroundRepeat: 'no-repeat' }}
                // Note: The `background-image:url(...)` for blurred placeholder is typically handled automatically by Next.js if you configure `image.quality` and `image.formats` in next.config.js, or by a custom blurDataURL. I've kept the inline style but it might be redundant with Next.js image optimization.
              />
            </Link>

            {/* Close button (link) */}
            {/* Added onClick to hide the banner, keeping original href for fallback/context */}
            <Link
              href="/product/ielts-course/?banner=false"
              onClick={(e) => {
                e.preventDefault(); // Prevent navigation when clicking close
                setIsVisible(false);
              }}
              aria-label="Close banner" // Added for accessibility
              className="absolute right-2 top-1 z-10 h-2 w-2 cursor-pointer md:top-2 md:h-3 md:w-3"
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.410704 0.410734C0.736141 0.0852972 1.26378 0.0852972 1.58921 0.410734L5.99996 4.82148L10.4107 0.410734C10.7361 0.0852972 11.2638 0.0852972 11.5892 0.410734C11.9147 0.736171 11.9147 1.26381 11.5892 1.58925L7.17847 5.99999L11.5892 10.4107C11.9147 10.7362 11.9147 11.2638 11.5892 11.5892C11.2638 11.9147 10.7361 11.9147 10.4107 11.5892L5.99996 7.1785L1.58921 11.5892C1.26378 11.9147 0.736141 11.9147 0.410704 11.5892C0.0852667 11.2638 0.0852667 0.736171 0.410704 1.58925C0.0852667 1.26381 0.0852667 0.736171 0.410704 0.410734Z"
                  fill="white"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
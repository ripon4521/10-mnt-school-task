import Image from 'next/image';
import type { FC } from 'react';

type CourseProps = {
  data: any; 
};


interface CourseFeature {
  color: string;
  icon: string;
  id: string;
  list_page_visibility: boolean;
  text: string;
}


interface VideoThumbnail {
  src: string;
  hasPlayIcon: boolean;
  isSelected: boolean;
}

interface VideoPlayerProps {
  forMobile?: boolean;
}

const Course: FC<CourseProps> = (data) => {
 
  const videoThumbnails: VideoThumbnail[] = [
    { src: 'https://cdn.10minuteschool.com/images/thumbnails/IELTS_new_16_9.png', hasPlayIcon: true, isSelected: true },
    { src: 'https://cdn.10minuteschool.com/images/catalog/media/PDP_Banner-1_1726737298483.png', hasPlayIcon: false, isSelected: false },
    { src: 'https://cdn.10minuteschool.com/images/catalog/media/PDP_Banner-2_1726736040872.png', hasPlayIcon: false, isSelected: false },
    { src: 'https://cdn.10minuteschool.com/images/catalog/media/introduction_1706097447220.jpg', hasPlayIcon: true, isSelected: false },
    { src: 'https://cdn.10minuteschool.com/images/catalog/media/QBz8FX4GE_w-HD_1718880944063.jpg', hasPlayIcon: true, isSelected: false },
    { src: 'https://cdn.10minuteschool.com/images/catalog/media/AvB2ibYd1z4-HD_1707647843136.jpg', hasPlayIcon: true, isSelected: false },
  ];

 
  
  const VideoPlayer: FC<VideoPlayerProps> = ({ forMobile = false }) => (




    <>
      <div className="relative overflow-hidden  youtube-video aspect-video">
        <div className="relative">
          <span className="absolute left-1/2 top-1/2 z-[2] -translate-x-1/2 -translate-y-1/2 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="none" viewBox="0 0 56 56">
              <circle cx="28" cy="28" r="28" fill="#fff" fillOpacity="0.5"></circle>
              <circle cx="27.999" cy="28" r="25.415" fill="#fff"></circle>
              <path fill="#1CAB55" d="M37.492 26.268c1.334.77 1.334 2.694 0 3.464l-12.738 7.355c-1.334.77-3-.193-3-1.732v-14.71c0-1.539 1.666-2.501 3-1.732l12.738 7.355z"></path>
            </svg>
          </span>
          <div className="thumb-wrap">
              <Image
                alt={forMobile ? "image" : "IELTS Course by Munzereen Shahid"}
                src="https://cdn.10minuteschool.com/images/thumbnails/IELTS_new_16_9.png"
                priority
                width={867}
                height={480}
                className="w-full"
              />
          </div>
        </div>
      </div>
      <div className="flex gap-4 p-4 overflow-x-auto"> {/* Assuming 'hideScrollbar' is a custom utility */}
        {videoThumbnails.map((thumb, index) => (
          <div key={index} className="flex-shrink-0">
            <div className={`relative w-[55px] rounded cursor-pointer ${thumb.isSelected ? 'overflow-hidden outline outline-[2px] outline-[#1CAB55]' : 'border-0'}`}>
                <Image
                  alt="preview_gallery"
                  src={thumb.src}
                  loading="lazy"
                  width={86}
                  height={50}
                />
              {thumb.hasPlayIcon && (
                <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                    <Image
                      alt="Play The Video"
                      src="https://10minuteschool.com/images/annual_exam/play_icon_2.svg"
                      priority
                      width={20}
                      height={20}
                    />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      {forMobile && (
        <div className="block md:hidden">
            <h1 className="text-gray mb-3 mt-3 text-[21px] font-semibold md:text-4xl"></h1>
            <div className="mb-4 text-sm font-normal"></div>
        </div>
      )}
    </>
  );

  return (
    <div
      style={{ backgroundImage: 'url("https://cdn.10minuteschool.com/images/ui_%281%29_1716445506383.jpeg")' }}
      className=" h-80"
    >
      <div className="container relative flex flex-col gap-4 mx-auto md:flex-row md:gap-12 pb-6 md:py-10 ">
        
        {/* Left Side Content */}
        <div className="order-1 flex flex-col  flex-1 md:order-1 md:max-w-[calc(100%_-_348px)] lg:max-w-[calc(100%_-_448px)] ">
          <div className="block mt-4 md:mt-0 md:hidden">
            <VideoPlayer forMobile={true} />
          </div>
          <h1 className="text-white mb-2 text-[21px] font-semibold md:text-4xl">{data?.data?.title}</h1>
          <div className="mb-2">
            <button className="flex flex-row flex-wrap items-center gap-2 text-white">
              <span className="inline-block">
                <Image
                  className="md:w-[130px] w-[100px]"
                  src="https://cdn.10minuteschool.com/images/Dev_Handoff_Q1_24_Frame_2_1725444418666.png"
                  alt="Rating"
                  width={130}
                  height={24}
                />
              </span>
              <span className="inline-block text-sm md:text-base">(82.6% শিক্ষার্থী কোর্স শেষে ৫ রেটিং দিয়েছেন)</span>
            </button>
          </div>
          <div>
            <div className="text-gray-400" style={{ overflow: 'hidden', height: 'auto' }}>
           <div
  className="text-gray-400"
  style={{ overflow: 'hidden', height: 'auto' }}
  dangerouslySetInnerHTML={{ __html: data?.data?.description || "" }}
></div>

            </div>
          </div>
        </div>

        {/* Right Side Card (Sidebar) */}
        <section className="w-full md:max-w-[330px] lg:max-w-[400px] order-2 bg-white md:relative">
          <div className="md:sticky md:top-[112px]">
            <div className="md:border">
              <div className="hidden p-1 md:block">
                <VideoPlayer />
              </div>

              {/* Price and Purchase Button */}
              <div className="hidden md:block">
                <div className="w-full p-4">
                  <div className="flex flex-col w-full">
                    <div className="flex items-center justify-between md:flex-col md:items-start">
                      <div className="md:mb-3">
                        <div className="inline-block text-2xl font-semibold">৳3850</div>
                        <span className="inline-flex items-center">
                          <del className="ml-2 text-base font-normal text-gray-500 md:text-xl">৳5000</del>
                          <div className="inline-block ml-2 px-2 py-1 text-xs font-semibold text-green-700 bg-green-100 rounded-full">
                            <p>1150 ৳ ছাড়</p>
                          </div>
                        </span>
                      </div>
                    </div>
                    <button className="bg-[#1CAB55] text-white whitespace-nowrap button primary text-center md:w-full py-3 px-4 rounded-lg mt-3 font-semibold hover:bg-green-700 transition-colors">
{data?.data?.cta_text?.name}                    </button>
                  </div>
                </div>
              </div>

              {/* Course Features */}
            <div className="hidden md:block">
      <div className="grid py-2 md:p-4">
        <p className="mb-4 text-xl font-semibold">এই কোর্সে যা থাকছে</p>
        {data?.data?.checklist.map((feature :CourseFeature) => (
          <div className="flex items-center mb-3 leading-5">
            <div className="inline-block h-[20px] w-[20px]">
              <Image
                alt="icon"
                src={feature.icon}
                loading="lazy"
                width={20}
                height={20}
              />
            </div>
            <h4 className="mb-0 inline-block pl-4 tracking-[0.005em] text-[#111827]">
              {feature.text}
            </h4>
          </div>
        ))}
      </div>
    </div>
            </div>
            
            {/* Contact Info */}
            <p className="justify-between hidden mt-4 text-sm text-center text-gray-500 md:flex md:flex-col lg:flex lg:flex-row">
              <span>কোর্সটি সম্পর্কে বিস্তারিত জানতে</span>
              <span className="flex items-center justify-center ml-2 underline cursor-pointer text-green-600">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path>
                </svg>
                <span className="ml-1">ফোন করুন (16910)</span>
              </span>
            </p>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Course;
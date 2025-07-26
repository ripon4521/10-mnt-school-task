import Image from 'next/image';
import Link from 'next/link'; // Use Link for internal navigation
import type { NextPage } from 'next'; // Import NextPage type for page components

// Define the type for the IELTSCoursePage component.
// Since it doesn't take any props currently, we can use NextPage or React.FC<object>
const CourseDetails: NextPage = () => {
    return (
        <main className="container mx-auto flex-col gap-4 md:flex-row md:gap-12">
            <section className="order-2 flex-1 md:order-1 md:max-w-[calc(100%_-_348px)] lg:max-w-[calc(100%_-_448px)]">
                <div>
                    {/* Sticky Navigation - This would typically be its own component */}
                    <div className="sticky top-[65px] z-20 hidden bg-white md:block">
                        <div className="tenms-carousel relative light right">
                            <div className="w-full overflow-hidden">
                                {/* Navigation Arrows */}
                                <div className="cursor-pointer absolute right-0 top-1/2 z-[3] block -translate-y-1/2 cursor-pointer mx-lg:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" fill="none" viewBox="0 0 33 32" className="xl:mr-[-40px]">
                                        <path fill="#000" fillOpacity="0.5" fillRule="evenodd" d="M16.757 32c8.836 0 16-7.163 16-16s-7.164-16-16-16c-8.837 0-16 7.163-16 16s7.163 16 16 16zM15.064 8.893a1 1 0 00-1.415 1.415L19.342 16l-5.693 5.692a1 1 0 001.415 1.415l6.4-6.4a1 1 0 000-1.414l-6.4-6.4z" clipRule="evenodd"></path>
                                    </svg>
                                </div>
                                <div className="cursor-pointer absolute left-0 top-1/2 z-[2] block -translate-y-1/2 cursor-pointer mx-lg:hidden pointer-events-none opacity-10">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" fill="none" viewBox="0 0 33 32" className="rotate-180 xl:ml-[-40px]">
                                        <path fill="#000" fillOpacity="0.5" fillRule="evenodd" d="M16.757 32c8.836 0 16-7.163 16-16s-7.164-16-16-16c-8.837 0-16 7.163-16 16s7.163 16 16 16zM15.064 8.893a1 1 0 00-1.415 1.415L19.342 16l-5.693 5.692a1 1 0 001.415 1.415l6.4-6.4a1 1 0 000-1.414l-6.4-6.4z" clipRule="evenodd"></path>
                                    </svg>
                                </div>
                            </div>
                            <div className="scrollbar-hide relative flex flex-nowrap gap-4 overflow-x-scroll scroll-smooth snap-x snap-mandatory">
                                <ul className="flex my-4 border-b flex-nowrap">
                                    <li className="text-nowrap p-2 text-base text-gray-600">
                                        <button></button>
                                    </li>
                                    <li className="text-nowrap p-2 text-base text-gray-600">
                                        <button></button>
                                    </li>
                                    <li className="text-nowrap p-2 text-base text-gray-600">
                                        <button>কোর্স ইন্সট্রাক্টর</button>
                                    </li>
                                    <li className="text-nowrap p-2 text-base text-gray-600">
                                        <button>কোর্সটি যেভাবে সাজানো হয়েছে</button>
                                    </li>
                                    <li className="text-nowrap p-2 text-base text-gray-600">
                                        <button></button>
                                    </li>
                                    <li className="text-nowrap p-2 text-base text-gray-600">
                                        <button>কোর্সটি করে যা শিখবেন</button>
                                    </li>
                                    <li className="text-nowrap p-2 text-base text-gray-600">
                                        <button>কোর্স সম্পর্কে বিস্তারিত</button>
                                    </li>
                                    <li className="text-nowrap p-2 text-base text-gray-600">
                                        <button>কোর্স এক্সক্লুসিভ ফিচার</button>
                                    </li>
                                    <li className="text-nowrap p-2 text-base text-gray-600">
                                        <button>এই কোর্সের সাথে ফ্রি পাচ্ছেন–</button>
                                    </li>
                                    <li className="text-nowrap p-2 text-base text-gray-600">
                                        <button>শিক্ষার্থীরা যা বলছে</button>
                                    </li>
                                    <li className="text-nowrap p-2 text-base text-gray-600">
                                        <button>সচরাচর জিজ্ঞাসা</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="pt-[140px] -mt-[140px]">
                        <div></div>
                        <div>
                            <div></div>
                        </div>

                        {/* Course Instructor Section */}
                        <div id="instructors">
                            <div className="mb-7 xs:bg-[#EEF2F4] xs:pt-2">
                                <div className="pt-4 pb-2 bg-white">
                                    <h2 className="mb-4 text-xl font-semibold md:text-2xl">কোর্স ইন্সট্রাক্টর</h2>
                                    <div className="flex items-center md:rounded-md md:border md:p-5">
                                        <div>
                                            {/* Use Next.js Image component for optimized images */}
                                            {/* Removed inline style object: style={{ fontSize: '0px', opacity: 1 }} and decoding="async}" as they are not standard JSX props for Image or have TypeScript conflicts with the type */}
                                            <div className="rounded-[50%] overflow-hidden opacity-0 transition-opacity duration-300 ease-in-out" style={{ opacity: 1 }}>
                                                <Image  alt="Instructor Munzereen Shahid" src="https://cdn.10minuteschool.com/images/skills/lp/ms_onset.jpg" loading="lazy" width={73} height={73} style={{ color: 'transparent' }} />
                                            </div>
                                        </div>
                                        <div className="flex-1 ml-4">
                                            <h3 className="text-lg">
                                                {/* Use Link component for internal navigation */}
                                                <Link className="flex items-center hover:text-green" href="/skills/instructors/munzereen-shahid/">
                                                    Munzereen Shahid
                                                    <span className="ml-2 pb-[2px]">
                                                        <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M1.49994 11C1.36833 11.0008 1.23787 10.9755 1.11603 10.9258C0.994195 10.876 0.883379 10.8027 0.789939 10.71C0.696211 10.617 0.621816 10.5064 0.571048 10.3846C0.520279 10.2627 0.494141 10.132 0.494141 9.99999C0.494141 9.86798 0.520279 9.73727 0.571048 9.61541C0.621816 9.49355 0.696211 9.38295 0.789939 9.28999L4.09994 5.99999L0.919939 2.68999C0.733688 2.50263 0.629147 2.24918 0.629147 1.98499C0.629147 1.7208 0.733688 1.46735 0.919939 1.27999C1.0129 1.18626 1.1235 1.11187 1.24536 1.0611C1.36722 1.01033 1.49793 0.984192 1.62994 0.984192C1.76195 0.984192 1.89266 1.01033 2.01452 1.0611C2.13638 1.11187 2.24698 1.18626 2.33994 1.27999L6.19994 5.27999C6.38317 5.46692 6.4858 5.71824 6.4858 5.97999C6.4858 6.24174 6.38317 6.49306 6.19994 6.67999L2.19994 10.68C2.11018 10.7769 2.00211 10.8551 1.88196 10.91C1.76181 10.965 1.63197 10.9955 1.49994 11Z" fill="#6B7280"></path>
                                                        </svg>
                                                    </span>
                                                </Link>
                                            </h3>
                                            <div className="text-sm">
                                                <p>MSc (English), University of Oxford (UK);<br />BA, MA (English), University of Dhaka;<br />IELTS: 8.5</p>
                                                <p>&nbsp;</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Course Structure Section */}
                        <div>
                            <div id="features">
                                <div className="flex flex-col gap-3">
                                    <h2 className="text-xl font-semibold leading-[30px] text-black">কোর্সটি যেভাবে সাজানো হয়েছে</h2>
                                    <div className="mb-16 grid grid-cols-1 gap-4 rounded-md border bg-[#111827] p-6 md:grid-cols-2 md:gap-8">
                                        {/* Feature 1 */}
                                        <div className="flex flex-row items-start gap-3 m-1">
                                            <div>
                                                {/* Removed inline style object from Image's parent div */}
                                                <div className="mb-4 mx-auto opacity-0 transition-opacity duration-300 ease-in-out" style={{ opacity: 1 }}>
                                                    <Image  alt="৫০+ ভিডিও লেকচার" src="https://s3.ap-southeast-1.amazonaws.com/cdn.10minuteschool.com/images/Group_1116604651_1684834874567.png" loading="lazy" width={36} height={36} style={{ color: 'transparent' }} />
                                                </div>
                                            </div>
                                            <div className="flex flex-col flex-1 gap-2">
                                                <h2 className="text-[18px] font-[500px] leading-[26px] text-white">৫০+ ভিডিও লেকচার</h2>
                                                <h2 className="text-[14px] font-[400px] leading-[22px] text-[#9CA3AF]">IELTS Academic ও General Training এর Overview, Format ও প্রশ্নের ধরন নিয়ে in-depth আলোচনা</h2>
                                            </div>
                                        </div>
                                        {/* Feature 2 */}
                                        <div className="flex flex-row items-start gap-3 m-1">
                                            <div>
                                                {/* Removed inline style object from Image's parent div */}
                                                <div className="mb-4 mx-auto opacity-0 transition-opacity duration-300 ease-in-out" style={{ opacity: 1 }}>
                                                    <Image  alt="৩৮টি লেকচার শিট" src="https://s3.ap-southeast-1.amazonaws.com/cdn.10minuteschool.com/images/Group_1116604649_1684919669537.png" loading="lazy" width={36} height={36} style={{ color: 'transparent' }} />
                                                </div>
                                            </div>
                                            <div className="flex flex-col flex-1 gap-2">
                                                <h2 className="text-[18px] font-[500px] leading-[26px] text-white">৩৮টি লেকচার শিট</h2>
                                                <h2 className="text-[14px] font-[400px] leading-[22px] text-[#9CA3AF]">Reading, Writing, Listening ও Speaking এর প্রতিটি প্রশ্নের উত্তর করার স্ট্র্যাটেজি এবং 600+ Vocabulary</h2>
                                            </div>
                                        </div>
                                        {/* Feature 3 */}
                                        <div className="flex flex-row items-start gap-3 m-1">
                                            <div>
                                                {/* Removed inline style object from Image's parent div */}
                                                <div className="mb-4 mx-auto opacity-0 transition-opacity duration-300 ease-in-out" style={{ opacity: 1 }}>
                                                    <Image alt="রিডিং এন্ড লিসিনিং মক টেস্ট" src="https://s3.ap-southeast-1.amazonaws.com/cdn.10minuteschool.com/images/Group_1116604652_1684919731714.png" loading="lazy" width={36} height={36} style={{ color: 'transparent' }} />
                                                </div>
                                            </div>
                                            <div className="flex flex-col flex-1 gap-2">
                                                <h2 className="text-[18px] font-[500px] leading-[26px] text-white">রিডিং এন্ড লিসিনিং মক টেস্ট</h2>
                                                <h2 className="text-[14px] font-[400px] leading-[22px] text-[#9CA3AF]">10 Reading ও 10 Listening Mock Tests এর মাধ্যমে প্রস্তুতি যাচাই</h2>
                                            </div>
                                        </div>
                                        {/* Feature 4 */}
                                        <div className="flex flex-row items-start gap-3 m-1">
                                            <div>
                                                {/* Removed inline style object from Image's parent div */}
                                                <div className="mb-4 mx-auto opacity-0 transition-opacity duration-300 ease-in-out" style={{ opacity: 1 }}>
                                                    <Image  alt="ডাউট সল্ভিং লাইভ ক্লাস" src="https://s3.ap-southeast-1.amazonaws.com/cdn.10minuteschool.com/images/Group_1116604649_%281%29_1684919813933.png" loading="lazy" width={36} height={36} style={{ color: 'transparent' }} />
                                                </div>
                                            </div>
                                            <div className="flex flex-col flex-1 gap-2">
                                                <h2 className="text-[18px] font-[500px] leading-[26px] text-white">ডাউট সল্ভিং লাইভ ক্লাস</h2>
                                                <h2 className="text-[14px] font-[400px] leading-[22px] text-[#9CA3AF]">সাপ্তাহিক জুম ক্লাসে এক্সপার্ট টিচারের কাছে প্রবলেম সলভিং এর সুযোগ</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Free PDF Download Section */}
                        <div>
                            <div id="group_join_engagement">
                                <div style={{ backgroundImage: 'url(https://cdn.10minuteschool.com/images/Free_class_card_BG_1722414654287.png)', backgroundSize: 'cover' }} className="flex gap-4 p-4 mb-8 overflow-hidden md:p-8 rounded-xl md:mb-12">
                                    <div className="w-full md:w-1/2">
                                        <Image src="https://cdn.10minuteschool.com/images/catalog/product/pointer/467478234_1276985680016189_8175110495169425888_n_1732621150265.png" style={{ height: '40px' }} className="mb-4" alt="IELTS Confirm 7+ Score (Guideline) icon" width={40} height={40} />
                                        <h2 className="text-xl font-semibold" style={{ color: '#ffffff' }}>IELTS Confirm 7+ Score (Guideline)</h2>
                                        <p className="mt-2 text-base" style={{ color: '#ededed' }}>IELTS ভালো score করার সেরা Strategies জানুন সেরাদের গাইডলাইনে ।</p>
                                        <button className="mt-6 button primary">ফ্রি PDF Download করুন</button>
                                    </div>
                                    <div className="items-center hidden w-1/2 md:flex">
                                        <Image src="https://cdn.10minuteschool.com/images/catalog/product/pointer/Thumbnail_for_IELTS_Course_by_MS_1732621023962.jpg" height={200} alt="Thumbnail for IELTS Course by MS" width={300} /> {/* Adjust width as needed */}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* What You'll Learn Section */}
                        <div>
                            <div id="pointers">
                                <div className="mb-6 md:mb-10 relative bg-[#E5E7EB] py-2 md:bg-white md:py-0">
                                    <div className="pt-6 pb-6 bg-white md:pb-0 md:pt-0">
                                        <div className="">
                                            <h2 className="mb-4 text-xl font-semibold md:text-2xl">কোর্সটি করে যা শিখবেন</h2>
                                            <div className="rounded-md md:border">
                                                <div className="pt-2 md:p-6">
                                                    <ul className="grid grid-cols-1 gap-2 md:grid-cols-[1fr_1fr] md:gap-4">
                                                        <li className="flex items-start gap-2 mb-2">
                                                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 20 20" aria-hidden="true" className="mr-1 mt-[2px]" style={{ color: '#6294F8' }} height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                                            </svg>
                                                            <div className="flex-1">IELTS পরীক্ষার প্রত্যেক সেকশনের প্রশ্ন ও উত্তরের ধরন, টাইম ম্যানেজমেন্ট সম্পর্কিত গুরুত্বপূর্ণ টিপস, ট্রিকস ও স্ট্র্যাটেজি</div>
                                                        </li>
                                                        <li className="flex items-start gap-2 mb-2">
                                                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 20 20" aria-hidden="true" className="mr-1 mt-[2px]" style={{ color: '#6294F8' }} height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                                            </svg>
                                                            <div className="flex-1">IELTS Writing Task 1 ও IELTS Writing Task 2 এর ক্ষেত্রে ভালো স্কোর পেতে সহায়ক Structure ও Essay type</div>
                                                        </li>
                                                        <li className="flex items-start gap-2 mb-2">
                                                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 20 20" aria-hidden="true" className="mr-1 mt-[2px]" style={{ color: '#6294F8' }} height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                                            </svg>
                                                            <div className="flex-1">IELTS Speaking test-এ Advanced/ Power Words ব্যবহার করে যেকোনো টপিকে নির্ভুলভাবে কথা বলার পদ্ধতি</div>
                                                        </li>
                                                        <li className="flex items-start gap-2 mb-2">
                                                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 20 20" aria-hidden="true" className="mr-1 mt-[2px]" style={{ color: '#6294F8' }} height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                                            </svg>
                                                            <div className="flex-1">সেরা IELTS প্রস্তুতি নিতে প্রতিটি মডিউলের নিয়ম-কানুনসহ খুঁটিনাটি বিষয়াদি নিয়ে বিস্তারিত ধারণা</div>
                                                        </li>
                                                        <li className="flex items-start gap-2 mb-2">
                                                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 20 20" aria-hidden="true" className="mr-1 mt-[2px]" style={{ color: '#6294F8' }} height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                                            </svg>
                                                            <div className="flex-1">IELTS পরীক্ষা চলাকালে নির্ধারিত সময়ের সঠিক ব্যবহারের মাধ্যমে ভালো স্কোর অর্জনের কৌশল</div>
                                                        </li>
                                                        <li className="flex items-start gap-2 mb-2">
                                                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 20 20" aria-hidden="true" className="mr-1 mt-[2px]" style={{ color: '#6294F8' }} height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                                            </svg>
                                                            <div className="flex-1">IELTS Reading এবং IELTS Listening Mock Test এর মাধ্যমে IELTS পরীক্ষার রিয়েল এক্সপেরিয়েন্স ও Band Score সম্বন্ধে পরিপূর্ণ ধারণা</div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Content Preview Section */}
                        <div className=''>
                            <div id="content_preview">
                                <div className="mb-6">
                                    <div className="flex justify-between w-full">
                                        <h2 className="mb-2 text-xl font-semibold md:mb-4">কন্টেন্ট প্রিভিউ</h2>
                                    </div>
                                    <div className="relative mb-20">
                                        <div className="rounded-md md:border md:px-5">
                                            <details open className="border-b border-dashed last:border-0">
                                                <summary className="py-4 font-medium cursor-pointer">
                                                    <h3 className="font-semibold">Introduction</h3>
                                                </summary>
                                                <ul>
                                                    <li className="mb-4 flex cursor-pointer hover:text-green">
                                                        <span className="mr-4">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20" className="text-green">
                                                                <path fill="currentColor" d="M10 20c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10z"></path>
                                                                <path fill="#fff" d="M14.217 10.886c.503-.448.503-1.324 0-1.772a17.547 17.547 0 00-5.024-3.166l-.33-.135c-.633-.26-1.3.234-1.386.987a28.617 28.617 0 000 6.4c.085.753.753 1.246 1.386.987l.33-.135a17.548 17.548 0 005.024-3.166z"></path>
                                                            </svg>
                                                        </span>
                                                        <h4 className="flex-1 text-sm text-gray-500">Video: IELTS: Introduction</h4>
                                                        <span className="text-green">ফ্রি দেখুন</span>
                                                    </li>
                                                    <li className="mb-4 flex cursor-pointer hover:text-green">
                                                        <span className="mr-4">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20" className="text-green">
                                                                <path fill="currentColor" d="M10 20c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10z"></path>
                                                                <path fill="#fff" d="M14.217 10.886c.503-.448.503-1.324 0-1.772a17.547 17.547 0 00-5.024-3.166l-.33-.135c-.633-.26-1.3.234-1.386.987a28.617 28.617 0 000 6.4c.085.753.753 1.246 1.386.987l.33-.135a17.548 17.548 0 005.024-3.166z"></path>
                                                            </svg>
                                                        </span>
                                                        <h4 className="flex-1 text-sm text-gray-500">Video: IELTS: Overview</h4>
                                                        <span className="text-green">ফ্রি দেখুন</span>
                                                    </li>
                                                    <li className="mb-4 flex cursor-pointer hover:text-green">
                                                        <span className="mr-4">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20" className="text-green">
                                                                <path fill="currentColor" d="M10 20c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10z"></path>
                                                                <path fill="#fff" d="M14.217 10.886c.503-.448.503-1.324 0-1.772a17.547 17.547 0 00-5.024-3.166l-.33-.135c-.633-.26-1.3.234-1.386.987a28.617 28.617 0 000 6.4c.085.753.753 1.246 1.386.987l.33-.135a17.548 17.548 0 005.024-3.166z"></path>
                                                            </svg>
                                                        </span>
                                                        <h4 className="flex-1 text-sm text-gray-500">Video: How to Prepare for IELTS?</h4>
                                                        <span className="text-green">ফ্রি দেখুন</span>
                                                    </li>
                                                    <li className="mb-4 flex cursor-pointer hover:text-green">
                                                        <span className="mr-4">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20" className="text-green">
                                                                <path fill="currentColor" d="M10 20c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10z"></path>
                                                                <path fill="#fff" d="M14.217 10.886c.503-.448.503-1.324 0-1.772a17.547 17.547 0 00-5.024-3.166l-.33-.135c-.633-.26-1.3.234-1.386.987a28.617 28.617 0 000 6.4c.085.753.753 1.246 1.386.987l.33-.135a17.548 17.548 0 005.024-3.166z"></path>
                                                            </svg>
                                                        </span>
                                                        <h4 className="flex-1 text-sm text-gray-500">Video: Making a Daily Routine</h4>
                                                        <span className="text-green">ফ্রি দেখুন</span>
                                                    </li>
                                                    <li className="mb-4 flex">
                                                        <span className="mr-4">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20" className="text-[#9CA3AF]">
                                                                <path fill="currentColor" d="M10 20c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10z"></path>
                                                                <path fill="#fff" d="M14.217 10.886c.503-.448.503-1.324 0-1.772a17.547 17.547 0 00-5.024-3.166l-.33-.135c-.633-.26-1.3.234-1.386.987a28.617 28.617 0 000 6.4c.085.753.753 1.246 1.386.987l.33-.135a17.548 17.548 0 005.024-3.166z"></path>
                                                            </svg>
                                                        </span>
                                                        <h4 className="flex-1 text-sm text-gray-500">Video: Different Sentence Structures to Improve Writing</h4>
                                                    </li>
                                                    <li className="mb-4 flex">
                                                        <span className="mr-4">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20" className="text-[#9CA3AF]">
                                                                <circle cx="10" cy="10" r="10" fill="currentColor"></circle>
                                                                <path fill="#fff" fillRule="evenodd" d="M7.855 5h4.19c1.545 0 2.405.89 2.405 2.415v5.165c0 1.55-.86 2.42-2.404 2.42H7.855c-1.52 0-2.405-.87-2.405-2.42V7.415C5.45 5.89 6.335 5 7.855 5zm.135 2.33v-.005h1.494a.392.392 0 010 .785H7.99a.39.39 0 010-.78zm0 3.04h3.92a.39.39 0 000-.78H7.99a.39 0 000 .78zm0 2.285h3.92c.2-.02.35-.19.35-.39a.392.392 0 00-.35-.395H7.99a.397.397 0 00-.375.605c.08.125.225.2.375.18z" clipRule="evenodd"></path>
                                                            </svg>
                                                        </span>
                                                        <h4 className="flex-1 text-sm text-gray-500">IELTS General Facts</h4>
                                                    </li>
                                                    <li className="mb-4 flex">
                                                        <span className="mr-4">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20" className="text-[#9CA3AF]">
                                                                <circle cx="10" cy="10" r="10" fill="currentColor"></circle>
                                                                <path fill="#fff" fillRule="evenodd" d="M7.855 5h4.19c1.545 0 2.405.89 2.405 2.415v5.165c0 1.55-.86 2.42-2.404 2.42H7.855c-1.52 0-2.405-.87-2.405-2.42V7.415C5.45 5.89 6.335 5 7.855 5zm.135 2.33v-.005h1.494a.392.392 0 010 .785H7.99a.39.39 0 010-.78zm0 3.04h3.92a.39.39 0 000-.78H7.99a.39 0 000 .78zm0 2.285h3.92c.2-.02.35-.19.35-.39a.392.392 0 00-.35-.395H7.99a.397.397 0 00-.375.605c.08.125.225.2.375.18z" clipRule="evenodd"></path>
                                                            </svg>
                                                        </span>
                                                        <h4 className="flex-1 text-sm text-gray-500">IELTS Vocabulary</h4>
                                                    </li>
                                                </ul>
                                            </details>
                                            <details className="border-b border-dashed last:border-0">
                                                <summary className="py-4 font-medium cursor-pointer">
                                                    <h3 className="font-semibold">IELTS Course by Munzereen Shahid | Exclusive Support Group</h3>
                                                </summary>
                                            </details>
                                            <details className="border-b border-dashed last:border-0">
                                                <summary className="py-4 font-medium cursor-pointer">
                                                    <h3 className="font-semibold">Academic Reading</h3>
                                                </summary>
                                            </details>
                                            <details className="border-b border-dashed last:border-0">
                                                <summary className="py-4 font-medium cursor-pointer">
                                                    <h3 className="font-semibold">Academic Reading Mock Test</h3>
                                                </summary>
                                            </details>
                                            <details className="border-b border-dashed last:border-0">
                                                <summary className="py-4 font-medium cursor-pointer">
                                                    <h3 className="font-semibold">Listening</h3>
                                                </summary>
                                            </details>
                                        </div>
                                        <button className="absolute bottom-[-15px] left-1/2 flex translate-x-[-50%] items-center gap-2 rounded-full bg-white px-4 py-1 text-sm text-gray-500 shadow-[0px_0px_17.0361px_#E7EAF7] hover:bg-gray-50 hover:text-gray-700">
                                            সকল কন্টেন্ট
                                            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="18" width="18" xmlns="http://www.w3.org/2000/svg">
                                                <polyline points="6 9 12 15 18 9"></polyline>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* About Course Section */}
                        <div className=''>
                            <div id="about">
                                <div className="mb-6 md:mb-10 mt-4 max-w-[900px] md:mt-[42px]">
                                    <div className="mt-10 md:mt-0">
                                        <h2 className="text-xl font-semibold md:mb-4 md:text-2xl">কোর্স সম্পর্কে বিস্তারিত</h2>
                                        <div className="rounded-lg py-2 md:border md:px-5">
                                            <details open className="mb-0 border-b border-dashed last:border-none">
                                                <summary className="py-4 cursor-pointer">
                                                    <div className="max-w-[90%] font-medium md:text-base mx-lg:text-sm">
                                                        <h2>
                                                            <b>IELTS Course-টি যাদের জন্য</b>
                                                        </h2>
                                                    </div>
                                                </summary>
                                                <div className="px-0 pb-2 text-gray-500">
                                                    <div className="prose prose-ul:pl-4">
                                                        <li>যারা উচ্চশিক্ষা, মাইগ্রেশন বা চাকরির জন্য বিদেশে যেতে চান।</li>
                                                        <li>যারা উচ্চশিক্ষা শেষে বা দেশে বসবাসরত অবস্থায় বিদেশে স্থায়ীভাবে বসবাসের জন্য আবেদন করতে চান।</li>
                                                        <li>IELTS পরীক্ষা যাদের জন্য ভীতিকর, কিংবা যারা IELTS প্রস্তুতি কোথা থেকে শুরু করবেন তা জানেন না।</li>
                                                        <li>যারা আগে পরীক্ষা দিয়েছেন কিন্তু নিজের IELTS Band Score বাড়াতে চান।</li>
                                                        <li>যারা চাকরি বা ব্যবসার কাজে কিংবা ব্যক্তিগত আগ্রহে নিজেদের reading, writing, listening এবং speaking দক্ষতা বাড়াতে চান।</li>
                                                        <li> স্টুডেন্ট কিংবা চাকরিজীবীদের মধ্যে যারা ব্যস্ততার কারনে ঘরে বসেই IELTS এর জন্য সেরা প্রস্তুতি নিতে চান।</li>
                                                    </div>
                                                </div>
                                            </details>
                                            <details className="mb-0 border-b border-dashed last:border-none">
                                                <summary className="py-4 cursor-pointer">
                                                    <div className="max-w-[90%] font-medium md:text-base mx-lg:text-sm">
                                                        <h2>
                                                            <b>IELTS Course-টি কোর্স সম্পর্কে</b>
                                                        </h2>
                                                    </div>
                                                </summary>
                                                <div className="px-0 pb-2 text-gray-500">
                                                    <div className="prose prose-ul:pl-4">
                                                        <p>যুক্তরাষ্ট্রের ৩,৪০০ প্রতিষ্ঠানসহ পৃথিবীর ১১ হাজারেরও বেশি প্রতিষ্ঠানে IELTS exam score এর গ্রহণযোগ্যতা রয়েছে। এই পরীক্ষায় অত্যন্ত সুনিপুণভাবে পরীক্ষার্থীর ইংরেজি বলা, পড়া, শোনা ও লেখার ক্ষমতাকে যাচাই করা হয়।</p>
                                                        <br />
                                                        <p>বিদেশি ভাষা হওয়ায় অনেকেই ইংরেজি গ্রামার নিয়ে ভয়ে থাকেন। তবে আনন্দের কথা হলো, IELTS পরীক্ষাটি ব্যাকরণভিত্তিক নয়। এটি মূলত একটি ভাষাভিত্তিক নিরীক্ষা পদ্ধতি। কাঙ্ক্ষিত স্কোর অর্জনের জন্য ইংরেজি ভাষার চারটি দক্ষতা আপনার প্রয়োজন: পড়তে পারা, লিখতে পারা, শুনে বুঝতে পারা, ও বলতে পারা। এই চারটি ক্ষেত্রে যিনি যত দক্ষ হবেন, IELTS পরীক্ষায় তিনি তত ভালো স্কোর পাবেন।</p>
                                                        <br />
                                                        <p>ইংরেজি ভাষার এই চারটি অত্যাবশ্যক দক্ষতা বাড়াতে টেন মিনিট স্কুল নিয়ে এসেছে <Link href="https://10minuteschool.com/ielts" style={{ color: 'blue' }}>IELTS</Link> পরীক্ষার্থীদের জন্য বিশেষভাবে সাজানো এই IELTS Course-টি কোর্সটির শিক্ষক মুনজেরিন শহীদ (IELTS ব্যান্ড স্কোর 8.5/9) ইংল্যান্ডের বিশ্বখ্যাত অক্সফোর্ড বিশ্ববিদ্যালয়ের Department of Education হতে Applied Linguistics and Second Language Acquisition বিষয়ে স্নাতকোত্তর ডিগ্রী গ্রহণ করেছেন।</p>
                                                        <br />
                                                    </div>
                                                </div>
                                            </details>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default CourseDetails;
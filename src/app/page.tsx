import Banner from "@/components/Banner";
import Course from "@/components/Course";
import CourseDetails from "@/components/CourseDetails";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import RecomandedCourse from "@/components/RecomandedCourse";

const page = async () => {
  const res = await fetch("https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course?lang=bn&=", {
    method: "GET",
    headers: {
      "X-TENMS-SOURCE-PLATFORM": "web",
      "accept": "application/json",
    },
    cache: "no-store", 
  });

  const apiData = await res.json();
  // console.log(apiData)

  return (
    <div>
      <Navbar />
      <Banner />
      <Course data={apiData?.data} />
      <CourseDetails data={apiData?.data} />
      <RecomandedCourse />
      <Footer />
    </div>
  );
};

export default page;

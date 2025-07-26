import Banner from "@/components/Banner";
import Course from "@/components/Course";
import CourseDetails from "@/components/CourseDetails";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import RecomandedCourse from "@/components/RecomandedCourse";



const page = () => {
  return (
    <div>
  <Navbar/>
  <Banner/>
  <Course/>
  <CourseDetails/>
  <RecomandedCourse/>
  <Footer/>
    </div>
  );
};

export default page;
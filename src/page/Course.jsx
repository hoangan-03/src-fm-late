import React from "react";
import { HashLink } from "react-router-hash-link";
import a1 from "../assets/pic/1.jpg"
import a2 from "../assets/pic/2.jpg"
import CourseList from "../components/CourseList";
import data from "../components/mockdata";
const Course = ({containerData}) => {
  return (
    <section className="bg-sky-100">
      <section id="hero" className="w-screen h-screen flex flex-row airbnb ">
        <div className="w-1/2 h-full flex flex-col gap-8 justify-center items-start pl-24 py-2">
          <h1>
            Tìm những khóa học phù hợp với nhu cầu của bạn với{" "}
            <span className="text-sky-800 border-teal-400 border-2 px-4 rounded-full py-1">
              SRC-FM
            </span>{" "}
            
          </h1>
          <HashLink className="w-auto h-auto px-6 py-4 rounded-[40px] text-white text-3xl bg-sky-800 hover:bg-gray-100 hover:text-sky-700" >
            Tìm hiểu ngay
          </HashLink>
        </div>

        <div className="w-1/2 h-full flex flex-row items-center gap-8 relative">
          <div className="absolute top-[120px] z-[200] bg-white shadow-xl  left-10 text-2xl text-black rounded-[60px] px-8 py-3 w-[420px] h-auto"><span className="text-white rounded-2xl w-auto text-center text-3xl bg-sky-800 px-2 py-1">10+</span> Khóa học đã được SRC-FM triển khai</div>

          <div className="w-1/3 h-[70%]  bg-black rounded-[140px] translate-y-[60px]">
            <img className="w-full h-full rounded-[140px] object-cover" alt='' src={a1}></img>
          </div>
          <div className="w-1/3 h-[60%]  bg-black rounded-[140px] -translate-y-[60px]">

            <img className="w-full h-full rounded-[140px] object-cover" alt='' src={a2}></img>
          </div>
        </div>
      </section>
      {/* <section className="w-screen h-screen flex flex-col gap-3 px-[200px] py-[200px]">
        <h1 className="text-3xl font-bold uppercase text-sky-700 ">Hệ tuần hoàn</h1>
        <h1 className="text-4xl text-black mb-8 ">Bắt đầu học ngay hôm nay</h1>
        <CourseList containerList={data} containersPerPage={4}/>
 

      </section> */}
      <section className="w-screen h-screen flex flex-col gap-3 px-[200px] py-[200px]">
        <h1 className="text-3xl font-bold uppercase text-sky-700 ">Y đa khoa - Cơ sở ngành</h1>
        <h1 className="text-4xl text-black mb-8 ">Bắt đầu học ngay hôm nay</h1>
        <CourseList containerList={data} containersPerPage={4}/>
 

      </section>
      Course
    </section>
  );
};

export default Course;
import React from "react";
import { School } from "@mui/icons-material";
import backgoodd from "../assets/pic/backgoodd.jpeg"
import lock from "../assets/pic/lock.png"
// import { HashLink } from "react-router-hash-link";
function CourseContainer({ imageSrc, heading, description, price }) {
  return (
    <div
      className={`relative shadow-2xl shadow-sky-700 hover:scale-125 transition-all duration-300 hover:z-[100] bg-sky-100 rounded-2xl border-2 md:w-[280px] justify-center text-black items-center  md:h-[350px] flex flex-col md:flex-col gap-2`}
    >

      <div className="absolute bg-black/30 w-full h-full rounded-2xl flex justify-center items-center">
        <img src={lock} alt="Lock" className="w-[70px] object-cover" />
      </div>
      <div className="h-[100px] w-full rounded-tl-xl rounded-tr-xl md:w-full md:h-[200px] md:min-h-[150px]">
        <img
          src={backgoodd}
          alt="Container"
          className="object-cover h-full w-full rounded-tl-xl rounded-tr-xl "
        />
      </div>
      <h2 className="rounded-b-md text-[12px] md:text-[17px] w-full h-auto text-start merry block font-semibold ml-6">
        {heading}
      </h2>

      <h3 className="w-[80%] h-[100px] text-start text-[9px] md:text-[12px]">
        {description}
      </h3>
      <div className="flex flex-row h-[30px] justify-start gap-4 w-full items-center ml-12 mb-3 mr-4">
        <h2
          className={` text-xl self-center font-semibold text-center text-cyan-800`}
        >
          {price}{"đ"}
        </h2>

        <div className="px-4 py-2 text-base flex flex-row justify-center h-full items-center gap-2 rounded-2xl text-white bg-sky-700 font-bold ">
          <h2 className="text-sm">Đăng kí ngay</h2>

          <School />
        </div>
      </div>
    </div>
  );
}

export default CourseContainer;

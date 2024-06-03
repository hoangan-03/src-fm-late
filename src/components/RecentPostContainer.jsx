import React from "react";
import datee from "../assets/pic/date.png";
function RecentPostContainer({ imageSrc, heading, date, p, category }) {
  return (
    <div
      className={`container relative lg:w-full justify-center text-black items-center lg:h-[auto] flex flex-col lg:flex-row gap-2`}
    >
      <img
        src={imageSrc}
        alt="Container"
        className="object-cover  h-auto aspect-square w-2/3 rounded-xl lg:w-[150px] lg:h-auto"
      />
      <div
        className={`flex flex-col gap-2 lg:w-[700px] w-2/3 pr-[20%] 
        `}
      >
        <h2 className="rounded-b-md text-[12px] lg:text-[17px] w-full h-1/2 text-start merry block font-semibold">
          {heading}
        </h2>
        <div className="flex flex-row  gap-2 justify-end w-full items-center">
          <div className="w-[50px] mt-[2px] h-[2px] bg-black/30"></div>
          <h2
            className={` text-sm self-center font-semibold text-center ${
              category === "Thông báo" ? "text-blue-700" : "text-cyan-700"
            }`}
          >
            {category}
          </h2>
          <div className="w-[40px] mt-[2px] h-[2px] bg-black/30"></div>
        </div>
        <div className="flex flex-row gap-1 justify-end w-full items-center">
          <img
            alt=""
            className="w-[12px] h-[12px] object-cover"
            src={datee}
          ></img>
          <h2
            className={` text-xs self-center  font-semibold text-center text-gray-600 `}
          >
            {date.substring(8)}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default RecentPostContainer;

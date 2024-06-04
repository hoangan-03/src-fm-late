import React, { useState } from "react";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";
import RecentPost from "./RecentPost";
import closewhite from "../assets/pic/closewhite.png";
import arrowleft from "../assets/pic/left.png";
const PictureInfo = ({ pictures }) => {
  const { id } = useParams();
  const [show, setshow] = useState(false);
  const handleClick = () => {
    setshow(!show);
  };
  if (!pictures || pictures.length === 0) {
    return null;
  }
  const picture = pictures[id];

  return (
    <div
      className="picture-info bg-sky-100 w-[100vw] h-auto flex flex-row justify-center "
      id="top"
    >
      <div className="w-auto h-auto flex flex-col items-center justify-center">
        <h2 className="text-[25px] lg:text-[32px] merry w-[90%] leading-[120%] text-left  mt-[160px] lg:mt-[200px] font-bold mb-[80px]">
          {picture.heading}
        </h2>

        <div className="h-auto relative lg:h-[515px] w-[90%]">
          <h1 className="text-lg right-0 merry absolute h-[39px] top-[-39px] w-auto px-4 py-2 text-start bg-gray-800 text-gray-200 rounded-tr-xl rounded-tl-xl">
            {picture.date}
          </h1>
          <h3
            className={`absolute text-lg top-[-38px] h-[38px] px-4 py-2 text-center left-0 text-white rounded-tr-xl rounded-tl-xl airbnb ${
              picture.category === "Thông báo" ? "bg-blue-700" : "bg-cyan-700"
            }`}
          >
            {picture.category}
          </h3>

          <img
            src={picture.image}
            alt=""
            className="w-full h-full border-black border-2 object-cover"
          />
        </div>
        <p className="text-[32px] text-justify leading-[110%] lg:leading-[160%] merry w-[90%] mb-[70px] mt-[25px] lg:mt-[60px] custom-text ">
          {parse(picture.p)}
        </p>
      </div>

      <div
        className={`w-[600px] gap-6 h-auto flex flex-col mt-[160px]  lg:mt-[200px] transition duration-500 ${
          show ? "right-0" : "absolute right-[-616px]"
        }`}
      >
        <button
          className={`w-auto h-[25px]  lg:h-[50px]  rounded-lg lg:rounded-2xl bg-sky-800 flex flex-row px-1 py-1 gap-4 justify-start items-center ${
            show
              ? "w-[25px] lg:w-[50px] -translate-x-0 justify-center"
              : "w-auto -translate-x-10 lg:-translate-x-14"
          }`}
          onClick={() => handleClick()}
        >
          <img
            src={arrowleft}
            className={`object-cover w-4 h-4 lg:w-10 lg:h-10 ${show ? "hidden" : "block"}  `}
            alt=""
          ></img>
          <img
            src={closewhite}
            className={`object-cover w-2 h-2 lg:w-5 lg:h-5 ${show ? "block" : "hidden"}  `}
            alt=""
          ></img>
        </button>
        <h2 className="text-base lg:text-2xl pl-2 font-bold text-black">Bài viết gần đây</h2>
        <RecentPost containerList={pictures} />
      </div>
    </div>
  );
};

export default PictureInfo;

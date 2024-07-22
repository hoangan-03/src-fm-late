/* eslint-disable react/prop-types */
import  { useState } from "react";
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
      className="picture-info bg-sky-100 w-screen overflow-hidden h-auto flex flex-row justify-center "
      id="top"
    >
      <div className="w-auto h-auto flex flex-col items-center justify-center">
        <h2 className="text-[25px] lg:text-[32px] merry w-[90%] leading-[120%] text-left  mt-[160px] lg:mt-[200px] font-bold mb-[80px]">
          {picture.heading}
        </h2>

        <div className="h-auto relative lg:h-[515px] w-[90%]">
          <h1 className="text-xs lg:text-lg right-0 merry absolute h-[26px] lg:h-[39px] top-[-26px] lg:top-[-39px] w-auto px-2 lg:px-4 py-2 text-start bg-gray-800 text-gray-200 rounded-tr-xl rounded-tl-xl">
            {picture.date}
          </h1>
          <h3
            className={`absolute text-xs lg:text-lg top-[-26px] lg:top-[-38px] h-[26px] lg:h-[38px] px-2 lg:px-4 py-2 text-center left-0 text-white rounded-tr-xl rounded-tl-xl airbnb ${
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
      <button
          className={`absolute top-[120px] right-0 w-[25px] lg:w-[50px] h-[25px] lg:h-[50px]  rounded-l-lg lg:rounded-l-2xl bg-sky-800 flex flex-row px-1 py-1 gap-4 justify-start items-center ${
            show
              ? "  justify-center"
              :  ""
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

      <div
        className={`w-[600px] gap-6 h-auto flex flex-col mt-[160px]  lg:mt-[200px] transition duration-500 ${
          show ? "right-0" : "absolute right-[-616px] hidden  "
        }`}
      >
        
        <h2 className={`text-base lg:text-2xl pl-2 font-bold text-black ${show ? "" : "hidden"}`}>Bài viết gần đây</h2>
        <div  className={` ${show ? "block" : "hidden"}  `}>
        <RecentPost containerList={pictures}  />
        </div>
      </div>
    </div>
  );
};

export default PictureInfo;

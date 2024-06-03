import React from "react";
import { ArrowRightAltRounded } from "@mui/icons-material";
import { HashLink } from "react-router-hash-link";
import { Circle } from "@mui/icons-material";
import { ArrowOutwardTwoTone } from "@mui/icons-material";
import { Add } from "@mui/icons-material";
import { useMediaQuery } from 'react-responsive';

const Annoucement = ({ containerData }) => {
  const isLargeScreen = useMediaQuery({ minDeviceWidth: 1024 });
  if (!containerData || containerData.length === 0) {
    return null;
  }
  const reversedContainers = [...containerData].reverse();

  function transform(paragraph) {
    function removeHeadingTags(inputString) {
      return inputString.replace(/<\/?(h[1-3])>/gi, "");
    }
    const contentWithoutPTags = paragraph.replace(/<\/?p>/g, "");
    const stringWithoutNbsp = contentWithoutPTags.replace(/&nbsp;/g, " ");
    const contentWithoutHeadings = removeHeadingTags(stringWithoutNbsp);
    const contentWithoutImgTags = contentWithoutHeadings.replace(
      /<img\b[^>]*>/i,
      ""
    );
    const words = contentWithoutImgTags.split(" ");
    const first30WordsArray = words.slice(0, 20);
    const strippedFirst30WordsArray = first30WordsArray.map((word) =>
      word.replace(/<\/?strong>/g, "")
    );
    const first30Words = strippedFirst30WordsArray.join(" ");
    const truncatedFirst30Words = `${first30Words}...`;
    return truncatedFirst30Words;
  }
  return (
    <section className="w-screen h-screen airbnb pt-0 lg:pt-[100px] bg-sky-100 px-5 lg:px-[150px] pb-[50px] airbnb">
      
      <div className="w-full h-full flex flex-col lg:flex-row gap-5">
        <div className="w-full lg:w-[60%] h-full flex flex-col gap-3">
          <div className="w-full h-[200px] flex flex-row items-end justify-between">
            <h2 className="text-start font-semibold text-black text-base lg:text-3xl ">
              Tin tức - Sự kiện
            </h2>
            <HashLink
              className="w-auto flex flex-row gap-2 hover:bg-gray-300/20 p-1 lg:p-2 rounded-xl"
              to="../ViewAllPost"
            >
              <h3 className="text-sm lg:text-lg font-thin italic">Tất cả bài viết</h3>
              <ArrowRightAltRounded />
            </HashLink>
          </div>
          <div className="w-full h-full relative">
            <div className="absolute top-2 lg:top-10 left-10 flex flex-col gap-1 ">
              <div className=" bg-white text-black text-xs lg:text-base w-auto h-auto rounded-3xl px-2 lg:px-5 py-2 lg:py-3">
                {reversedContainers[0].date}
              </div>
              <div className="bg-transparent backdrop-blur-lg max-w-[120px] w-auto flex flex-row justify-center items-center h-auto border-white gap-3 rounded-3xl px-3 py-2">
                <Circle style={{ fontSize: 10, color: "white" }} />
                <h2 className="text-white text-sm">
                  {reversedContainers[0].category}
                </h2>
              </div>
            </div>
            <div className="absolute top-20 bg-white/70 backdrop-blur-lg py-4 rounded-2xl lg:top-10 right-0 lg:right-10 px-5 text-base lg:text-3xl font-bold w-full lg:w-[50%] leading-[3rem] ">
              <span className="text-blacktext-center">
                {reversedContainers[0].heading}
              </span>
            </div>
            <HashLink
              to={`/ViewAllPost/${reversedContainers.length - 1}#top`}
              className="absolute bottom-10 right-10 w-[70px] h-[70px] hover:scale-125 border-white hover:border-2 transition-all duration-200 rounded-full bg-white flex justify-center items-center"
            >
              <ArrowOutwardTwoTone  style={{ fontSize: isLargeScreen ? 60 : 30, color: "black" }}  />
            </HashLink>

            <img
              className="w-full h-full object-cover rounded-3xl"
              src={
                reversedContainers.length > 0 || !reversedContainers
                  ? reversedContainers[0].image
                  : "No heading available"
              }
              alt=""
            ></img>
          </div>
        </div>

        <div className="w-[40%] h-full flex flex-col gap-7">
          <div className="w-full h-2/3 rounded-3xl bg-gray-400 relative">
            <div className="absolute top-2 left-10 flex flex-col gap-4 ">
              <div className="bg-transparent backdrop-blur-lg max-w-[150px] w-auto flex flex-row justify-center items-center h-auto border-white gap-3 rounded-3xl px-3 py-2">
                <Circle style={{ fontSize: 10, color: "white" }} />
                <h2 className="text-white text-sm">
                  {reversedContainers[0].category}
                </h2>
              </div>
            </div>

            <div className="absolute top-12 left-6 bg-white/60 backdrop-blur-lg py-2 rounded-2xl px-5 text-xl font-bold w-[70%] leading-[2rem]">
              <span className="text-black text-center">
                {reversedContainers[1].heading}
              </span>
            </div>
            <div className="absolute top-[14rem] left-10 py-2 px-2 text-sm font-bold w-[80%] text-white bg-black/40 backdrop-blur-lg rounded-3xl ">
              {transform(reversedContainers[1].p)}
            </div>
            <div className="absolute top-2 right-2 py-2 px-2 font-bold w-auto h-auto rounded-full backdrop-blur-md bg-white/40 ">
              <Add style={{ fontSize: 30, color: "black" }} />
            </div>
            <HashLink
              to={`/ViewAllPost/${reversedContainers.length - 2}#top`}
              className="absolute bottom-2 right-2 font-bold w-auto h-auto bg-sky-200 text-black px-4 py-2 rounded-2xl hover:text-white hover:bg-gray-700"
            >
              <h2 className=" underline text-sm">Tìm hiểu thêm</h2>
            </HashLink>
            <img
              className="w-full h-full object-cover rounded-3xl"
              src={
                reversedContainers.length > 0 || !reversedContainers
                  ? reversedContainers[1].image
                  : "No heading available"
              }
              alt=""
            ></img>
          </div>
          <div className="w-full h-1/2 rounded-3xl bg-gray-400 flex relative justify-center items-end">
            <img
              className="w-full h-full object-cover rounded-3xl absolute top-0 left-0"
              src={
                reversedContainers.length > 0 || !reversedContainers
                  ? reversedContainers[2].image
                  : "No heading available"
              }
              alt=""
            ></img>
            <HashLink
              to="../ViewAllPost"
              className="text-xl font-semibold w-auto h-auto bg-white-200 text-black px-6 py-1 rounded-[40px] bg-white justify-center items-center flex flex-row z-[200] mb-2 hover:translate-x-9 transition-all duration-200 origin-center  hover:rotate-12"
            >
              Xem tất cả
              <ArrowRightAltRounded style={{ fontSize: 50 }} />
            </HashLink>
            <div className="absolute top-2 right-2 py-2 px-2 text-4xl font-bold w-[40px] h-[40px] aspect-square rounded-full flex justify-center items-center border-white border-2  ">
              <h2 className="text-2xl text-white">{reversedContainers.length}</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Annoucement;

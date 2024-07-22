/* eslint-disable react/prop-types */

import datee from "../assets/pic/date.png";
import parse from "html-react-parser";

function Container({ imageSrc, heading, date, p, category,editMode }) {
  function removeHeadingTags(inputString) {
    return inputString.replace(/<\/?(h[1-3])>/gi, "");
  }
  const contentWithoutPTags = p.replace(/<\/?p>/g, "");
  const contentWithoutHeadings = removeHeadingTags(contentWithoutPTags);
  const contentWithoutImgTags = contentWithoutHeadings.replace(
    /<img\b[^>]*>/i,
    ""
  );
  const words = contentWithoutImgTags.split(" ");
  const first30WordsArray = words.slice(0, 60);
  const strippedFirst30WordsArray = first30WordsArray.map((word) =>
    word.replace(/<\/?strong>/g, "")
  );
  const first30Words = strippedFirst30WordsArray.join(" ");
  const truncatedFirst30Words = `${first30Words}...`;

  return (
    <div
      className={`container relative  md:w-[975px] justify-center text-black items-center md:h-[224px] p-5 mt-3 flex flex-col md:flex-row gap-4 border-black border-b-[1px] `}
    >
      <img
        src={imageSrc}
        alt="Container"
        className="object-cover rounded-xl rounded-tl-none h-auto aspect-video w-2/3 md:w-auto md:h-full"
      />
      <div
        className={`flex flex-col gap-2 md:w-[700px] w-2/3 
        `}
      >
        <h2 className="rounded-b-md text-[12px] md:text-[18px] w-full h-1/2 text-start merry block font-semibold">
          {heading}
        </h2>
        <h3 className="w-full h-1/2 text-start text-[9px] md:text-[12px]  con merry">
          {parse(truncatedFirst30Words)}
        </h3>
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
      <div className={`ml-5 hidden  absolute left-0 md:flex  top-0 w-auto h-[20px]  rounded-tl-lg rounded-tr-lg ${category === "Thông báo" ? "bg-blue-700" : "bg-cyan-700"} `}>
        <h2 className="text-xs lg:text-xs font-serif text-center py-1 px-3 uppercase airbnb text-white font-thin whitespace-pre-line">
          {category}
        </h2>
      </div>
     
    </div>
  );
}

export default Container;

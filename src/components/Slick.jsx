import { useEffect, useState } from "react";
import sce2 from "../assets/pic/3right.jpg";
import sce1 from "../assets/pic/3left.jpg";
import sce4 from "../assets/pic/7right.jpg";
import sce3 from "../assets/pic/7left.jpg";
import sce6 from "../assets/pic/5right.jpg";
import sce5 from "../assets/pic/5left.jpg";
import "./animation.css"

const Slick = () => {
  const [current, setCurrent] = useState("blue");
  const [leftTransform, setLeftTransform] = useState("0");
  const [rightTransform, setRightTransform] = useState("-200");

  useEffect(() => {
    const intervalId = setInterval(() => {
      next();
    }, 2000);

    return () => {
      clearInterval(intervalId);
    };
  });
  const next = () => {
    switch (current) {
      case "red":
        setLeftTransform("0");
        setRightTransform("-200");
        setCurrent("blue");
        break;
      case "blue":
        setLeftTransform("-200");
        setRightTransform("0");
        setCurrent("gold");
        break;
      case "gold":
        setLeftTransform("-100");
        setRightTransform("-100");
        setCurrent("red");
        break;
      default:
        break;
    }
  };

  /*
  const prev = () => {
    switch (current) {
      case "red":
        setLeftTransform("-200");
        setRightTransform("0");
        setCurrent("gold");
        break;
      case "blue":
        setLeftTransform("-100");
        setRightTransform("-100");
        setCurrent("red");
        break;
      case "gold":
        setLeftTransform("0");
        setRightTransform("-200");
        setCurrent("blue");
        break;
      default:
        break;
    }
  };
*/
  // CLB Nghiên cứu Khoa học - Khoa Y
  return (
    <div className="columns-container">
      <div className="overflow-hidden h-screen">
        <div className="absolute bottom-0 left-[50%] w-[90vw] sm:w-[70vw] lg:w-auto  translate-x-[-50%] translate-y-[-50%] h-auto z-[2001] py-2 lg:py-4 px-4 lg:px-8 bg-white/70 backdrop-blur-md flex justify-center text-center items-center rounded-[30px] lg:rounded-[60px]">
          <div className={`text-base lg:text-2xl airbnb text-black hidden sm:block`}>
            <div className="animate three">
              <span>C</span><span>L</span><span>B</span>&nbsp;
              <span>N</span><span>G</span><span>H</span><span>I</span><span>Ê</span><span>N</span>&nbsp;
              <span>C</span><span>Ứ</span><span>U</span>&nbsp;
              <span>K</span><span>H</span><span>O</span><span>A</span>&nbsp;
              <span>H</span><span>Ọ</span><span>C</span>&nbsp;
              <span>-</span>&nbsp;
              <span>K</span><span>H</span><span>O</span><span>A</span>&nbsp;
              <span>Y</span>&nbsp;
             
            </div>
          </div>
          <div className={`text-sm uppercase airbnb text-black block sm:hidden`}>
            <h3>CLB Nghiên cứu Khoa học </h3>
            <h3>Khoa y</h3>

          </div>
        </div>
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[80%] h-[100px] z-[2001] flex flex-col justify-center items-center">
          <div
            className={`w-full h-[400px] bg-red flex text-white flex-col airbnb-thin gap-8 justify-center overflow-hidden items-center `}
          >
            <div
              className={`text-2xl lg:text-6xl transition-all duration-300 tracking-wider text-uppercase font-bold ${current === "red" ? "translate-y-[100px]" : "translate-y-0"
                }`}
            >
              CHỦ ĐỘNG
            </div>
            <div
              className={`text-2xl lg:text-6xl transition-all duration-300 tracking-wider text-uppercase font-bold ${current === "blue" ? "translate-y-[30px] lg:translate-y-0" : "-translate-y-[100px] lg:-translate-y-[150px]"
                }`}
            >
              SÁNG TẠO
            </div>
            <div
              className={`text-2xl lg:text-6xl transition-all duration-300 tracking-wider text-uppercase font-bold ${current === "gold" ? "-translate-y-[40px] lg:-translate-y-[100px]" : "translate-y-[50px] lg:translate-y-0"
                }`}
            >
              CHUYÊN NGHIỆP
            </div>
          </div>
        </div>
        <div className="absolute w-auto bg-transparent h-auto right-2 lg:right-16 top-[35vh] z-[2001] py-1 px-2 gap-2 flex flex-col items-center justify-center">
          <div
            className={` ${current === "red"
              ? "bg-gray-700 scale-[130%] border-double border-white border-2"
              : "bg-white backdrop-blur-lg"
              } transition-all duration-200 w-4 lg:w-5 h-4 lg:h-5 rounded-full`}
          ></div>
          <div className="w-[2px] h-3 bg-white/60"></div>
          <div className="w-[2px] h-3 bg-white/60"></div>
          <div className="w-[2px] h-3 bg-white/60"></div>
          <div className="w-[2px] h-3 bg-white/60"></div>
          <div className="w-[2px] h-3 bg-white/60"></div>
          <div className="w-[2px] h-3 bg-white/60"></div>
          <div
            className={` ${current === "blue"
              ? "bg-gray-700 scale-[130%] border-double border-white border-2"
              : "bg-white backdrop-blur-lg"
              }  transition-all duration-200 w-5 h-5 rounded-full`}
          ></div>
          <div className="w-[2px] h-3 bg-white/60"></div>
          <div className="w-[2px] h-3 bg-white/60"></div>
          <div className="w-[2px] h-3 bg-white/60"></div>
          <div className="w-[2px] h-3 bg-white/60"></div>
          <div className="w-[2px] h-3 bg-white/60"></div>
          <div className="w-[2px] h-3 bg-white/60"></div>
          <div
            className={` ${current === "gold"
              ? "bg-gray-700 scale-[130%] border-double border-white border-2"
              : "bg-white backdrop-blur-lg"
              } transition-all duration-200  w-5 h-5 rounded-full`}
          ></div>
        </div>
        <div className="w-screen h-[300vh] flex flex-row box-content m-auto">
          <div
            className="flex flex-col transition-all duration-500 ease-in relative w-1/2 translate-y-[-200vh]"
            style={{ transform: `translateY(${leftTransform}vh)` }}
          >
            <div className="pic third">
              <img src={sce1} alt=""></img>
            </div>
            <div className="pic second">
              <img src={sce5} alt=""></img>
            </div>
            <div className="pic first">
              <img src={sce3} alt=""></img>
            </div>
          </div>
          <div
            className="w-1/2 translate-y-[-200vh] flex flex-col transition-all duration-500 ease-in relative"
            style={{ transform: `translateY(${rightTransform}vh)` }}
          >
            <div className="pic first">
              <img src={sce4} alt=""></img>
            </div>
            <div className="pic second">
              <img src={sce6} alt=""></img>
            </div>
            <div className="pic third">
              <img src={sce2} alt=""></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slick;

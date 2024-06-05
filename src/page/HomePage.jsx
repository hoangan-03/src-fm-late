import React, { useState, useEffect } from "react";
import Slick from "../components/Slick";
import Scroll from "../components/Scroll";
//import { useSpring } from "react-spring";
import spon1 from "../assets/pic/sponsor1.png";

import a1 from "../assets/pic/1.jpg";
// Remove unused imports
// import a2 from "../assets/pic/2.jpg";
// import a3 from "../assets/pic/3.jpg";
import a4 from "../assets/pic/4.jpg";
import a5 from "../assets/pic/5.jpg";
import a6 from "../assets/pic/6.jpg";
// import a7 from "../assets/pic/7.jpg";
// import a8 from "../assets/pic/8.jpg";
// import a9 from "../assets/pic/9.jpg";
// import a10 from "../assets/pic/10.jpg";
import dna from "../assets/pic/dna.jpeg"
import backgood from "../assets/pic/backgoodd.jpeg"
import { HashLink } from "react-router-hash-link";
import Footer from "../components/Footer";

const HomePage = ({ containerData }) => {
  const [scrollY, setScrollY] = useState(0);
  const [isHover, setHover] = useState(false);

  const handleHover = () => {
    setHover(!isHover);
  };
  const [order, setOrder] = useState(1);
  useEffect(() => {
    const handleScroll = () => {
      let sections = document.querySelectorAll("section.animate,div.animate");
      let windowHeight = window.innerHeight;
      let scrollY = window.scrollY;

      sections.forEach((sec) => {
        let offset = sec.offsetTop + 200;
        let height = sec.offsetHeight;

        if (scrollY + windowHeight >= offset && scrollY < offset + height) {
          sec.classList.add("show-animate");
        } else {
          sec.classList.remove("show-animate");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollYInVH = scrollY;
  const oneVHInPixels = window.innerHeight;
  const at2vh = oneVHInPixels * 1;
  const at3vh = oneVHInPixels * 2;
  const at4vh = oneVHInPixels * 3;
  const at5vh = oneVHInPixels * 4;
  const at6vh = oneVHInPixels * 5;

  useEffect(() => {
    const calculateSource = () => {
      if (scrollYInVH >= at2vh && scrollYInVH < at3vh) {
        setOrder(2);
      } else if (scrollYInVH >= at3vh && scrollYInVH < at4vh) {
        setOrder(3);
      } else if (scrollYInVH >= at4vh && scrollYInVH < at5vh) {
        setOrder(4);
      } else if (scrollYInVH >= at5vh && scrollYInVH < at6vh) {
        setOrder(5);
      }
    };
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    calculateSource();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  /*
  const heroStyles = useSpring({
    transform: `translate3d( 0, ${-scrollY * 0.5}px, 0)`,
  });
  const heStyles = useSpring({
    transform: `translate3d( 0, ${scrollY * 0.5}px, 0)`,
  });
  */

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
    <section className="w-[100vw] overflow-hidden h-[650vh] flex flex-col" id="hero">
      <div className="w-screen h-[100vh]">
        <div className="w-screen h-screen top-0 bg-black/30 z-[2000] absolute"></div>
        <Scroll />
        <Slick />
        {/*
        <div className="landing w-screen mt-[88px] justify-start items-center gap-1  h-screen flex flex-col airbnb">
          <div className="wavy rounded-2xl w-screen 2xl:w-[1400px] min-w-[300px] h-auto lg:h-[70%] origin-bottom  rotate6 z-20">
            <img src={pic} className="object-cover w-full h-full " alt="" />
          </div>
          <div className="flex flex-col w-[400px] md:w-[40%]   text-center  overflow-y-hidden">
            <div
              className="w-auto h-[120px] p-1 relative flex justify-center items-center"
              style={heroStyles}
            >
              <p
                className="w-full text-xl  lg:text-3xl text-center  absolute  z-30 text-black "
                style={heStyles}
              >
                CLB Nghiên cứu Khoa học
              </p>
              <img
                src={bgtext}
                className=" lg:object-contain w-[500px] h-[90px] z-20 overflow-hidden"
                alt=""
              ></img>
            </div>
          </div>
        </div>
        */}
      </div>

      <div
        className="bg-sky-100 h-[510vh]   w-screen px-[1%]  lg:px-[30px] flex flex-row"
        id="start"
      >
        <div className="w-full lg:w-[70%] h-full pic-wrap flex flex-col pt-[25vh] pb-[25vh] gap-y-[50vh] ">
          <div
            className="flex flex-col gap-3 lg:gap-10 px-6 w-full text-white h-auto floatsection  animate "
            id="section1"
          >
            <div className="w-full h-[40px] lg:h-[60px] mt-[20px]  flex flex-row justify-end ">
              <HashLink
                to="/About#mission"
                smooth
                className="w-auto  hover:bg-white hover:text-cyan-800 rounded-[30px] mt-0 lg:mt-4 airbnb h-full py-2 px-6 text-sm lg:text-xl flex justify-center items-center text-white bg-cyan-800"
              >
                Về chúng tôi
              </HashLink>
            </div>
            <div className="flex flex-col lg:flex-row  h-[500px]  gap-4">
              <div className="relative w-full h-[105px] lg:w-1/3 lg:h-full bg-cyan-800 text-center items-center flex flex-col gap-2 shadow-red-700 shadow-2xl border-b-8 border-red-800">
                <div className="w-full lg:w-[330px] h-[100px] lg:h-[420px] relative flex justify-center items-center  ">
                  <img
                    className="w-full lg:w-[80%] h-[100px] lg:h-[90%] object-cover z-30"
                    src={a1}
                    alt=""
                  ></img>
                  <div className="hidden lg:block absolute w-[80%] h-[90%] top-0  border-white border-4 z-20 translate-x-4 translate-y-9"></div>
                </div>
                <HashLink
                  to="/About#mission"
                  smooth
                  className="absolute lg:relative z-30 top-[30px] lg:top-0 text-sm lg:text-2xl rounded-lg lg:rounded-2xl text-center bg-red-800 w-auto airbnb py-2 px-4  uppercase text-white hover:text-red-800 hover:bg-white "
                >
                  Sứ mệnh
                </HashLink>
              </div>
              <div className="relative w-full h-[105px] lg:w-1/3 lg:h-full bg-cyan-800 text-center items-center flex flex-col gap-2 shadow-green-700 shadow-2xl border-b-8 border-green-800">
                <div className="w-full lg:w-[330px] h-[200px] lg:h-[420px] relative flex justify-center items-center ">
                  <img
                    className="w-full lg:w-[80%] h-[100px] lg:h-[90%] object-cover z-30"
                    src={a5}
                    alt=""
                  ></img>
                  <div className="hidden lg:block absolute w-[80%] h-[90%] top-0  border-white border-4 z-20 translate-x-4 translate-y-9"></div>
                </div>
                <HashLink
                  to="/About#vision"
                  smooth
                  className="absolute   lg:relative z-30 top-[30px] lg:top-0 text-sm lg:text-2xl rounded-lg lg:rounded-2xl text-center bg-green-800 w-auto airbnb py-2 px-4 uppercase text-white hover:text-green-800 hover:bg-white "
                >
                  Mục tiêu
                </HashLink>
              </div>
              <div className="relative w-full h-[105px] lg:w-1/3 lg:h-full bg-cyan-800 text-center items-center flex flex-col gap-2 shadow-blue-700 shadow-2xl border-b-8 border-blue-800">
                <div className="w-full lg:w-[330px] h-[200px]  lg:h-[420px] relative flex justify-center items-center ">
                  <img
                    className="w-full lg:w-[80%] h-[100px] lg:h-[90%] object-cover z-30"
                    src={a6}
                    alt=""
                  ></img>
                  <div className="hidden lg:block absolute w-[80%] h-[90%] top-0  border-white border-4 z-20 translate-x-4 translate-y-9"></div>
                </div>
                <HashLink
                  to="/About#organization"
                  smooth
                  className="absolute lg:relative z-30 top-[30px] lg:top-0 text-sm lg:text-2xl rounded-lg lg:rounded-2xl text-center bg-blue-800 w-auto airbnb py-2 px-4 uppercase text-white hover:text-blue-800 hover:bg-white "
                >
                  Tổ chức
                </HashLink>
              </div>
            </div>
          </div>
          <div
            className="flex flex-col gap-2 px-6 w-full text-white h-auto  floatsection  animate"
            id="section2"
          >
            <div className="w-full h-auto mb-3 flex flex-row justify-end">
              <HashLink
                smooth
                to="/Annoucement#hero"
                className="w-auto hover:bg-white hover:text-sky-800 rounded-[30px]  mt-0 lg:mt-4 airbnb h-full py-2 px-6 text-sm lg:text-xl flex justify-center items-center text-white bg-sky-800"
              >
                Tin tức - Sự kiện
              </HashLink>{" "}
            </div>
            <HashLink
              className="w-full h-[80px] lg:h-[250px] flex flex-row bg-sky-800 shadow-2xl shadow-black rounded-2xl hover:scale-110 transition-all duration-300"
              to={`/ViewAllPost/${containerData.length - 1}#top`}
              key={containerData.length - 1}
            >
              <div className="w-[60%] h-full">
                <img
                  className="w-full h-full object-cover rounded-tl-2xl rounded-bl-2xl"
                  src={
                    containerData.length > 0 || !containerData
                      ? containerData[containerData.length - 1].image
                      : "No heading available"
                  }
                  alt=""
                ></img>
              </div>
              <div className="w-[40%] h-full airbnb flex flex-col px-2 py-3  lg:px-3 lg:py-4 gap-2">
                <h2 className="text-xs lg:text-2xl  h-auto w-full text-white">
                  {containerData.length > 0 || !containerData
                    ? containerData[containerData.length - 1].heading
                    : "No heading available"}
                </h2>
                <h4 className="hidden lg:block text-sm h-auto w-full text-gray-200">
                  {containerData.length > 0 || !containerData
                    ? containerData[containerData.length - 1].date.substring(8, 20)
                    : "No date available"}
                </h4>
                <p className="hidden lg:block w-full h-auto text-sm text-gray-100 ">
                  {containerData.length > 0 || !containerData
                    ? transform(containerData[containerData.length - 1].p)
                    : "No para available"}
                </p>
              </div>
            </HashLink>
            <div className="w-full h-[250px] flex flex-col lg:flex-row gap-2 ">
              {[2, 3, 4].map((offset) => {
                if (containerData.length < offset) {
                  return (
                    <div className="w-full h-[80px] lg:w-1/3 lg:h-full airbnb bg-sky-800 shadow-2xl shadow-black rounded-2xl flex flex-row lg:flex-col hover:scale-125 transition-all duration-300"></div>
                  );
                }
                const currentItem = containerData[containerData.length - offset];
                const truncateHeading = (heading) => {
                  const words = heading.split(" ");
                  if (words.length > 10) {
                    return words.slice(0, 10).join(" ") + "...";
                  }
                  return heading;
                };
                return (
                  <HashLink
                    key={containerData.length - offset}
                    className="w-full h-[80px] lg:w-1/3 lg:h-full airbnb bg-sky-800 shadow-2xl shadow-black rounded-2xl flex flex-row lg:flex-col hover:scale-125 transition-all duration-300"
                    to={`/ViewAllPost/${containerData.length - offset}#top`}
                  >
                    <div className="w-[60%] h-full lg:w-full lg:h-1/3">
                      <img
                        className="w-full h-full object-cover rounded-tl-2xl rounded-bl-2xl lg:rounded-bl-none lg:rounded-tr-2xl"
                        src={currentItem.image}
                        alt=""
                      />
                    </div>
                    <div className="w-[40%] h-full lg:w-full flex flex-col gap-1 pt-2 px-3">
                      <h2 className="text-xs lg:text-sm h-auto w-full text-white">
                        {truncateHeading(currentItem.heading)}
                      </h2>
                      <h4 className="hidden lg:block text-xs h-auto w-full text-gray-200">
                        {currentItem.date.substring(8, 20)}
                      </h4>
                      <p className="hidden lg:block w-full h-auto text-xs text-gray-100">
                        {transform(currentItem.p)}
                      </p>
                    </div>
                  </HashLink>
                );
              })}
            </div>
          </div>
          <div
            className="flex flex-col gap-2 px-6 w-full text-white h-auto  floatsection  animate "
            id="section3"
          >
            <div className="w-full h-auto mb-3 flex flex-row justify-end">
              <HashLink
                smooth
                to="/Course#hero"
                onClick={handleHover}
                className="w-auto hover:bg-white hover:text-sky-800  rounded-[30px]  mt-0 lg:mt-4 airbnb h-full py-2 px-6 text-sm lg:text-xl flex justify-center items-center text-gray-800 bg-sky-300  "
              >
                Khóa học - Dự án
              </HashLink>{" "}
            </div>
            <HashLink
              to="/Course#hero"
              className="w-full h-[120px] lg:h-[250px] flex flex-row bg-sky-300  shadow-2xl shadow-black rounded-2xl hover:scale-110 transition-all duration-300 "
            >
              <div className="w-[60%] h-full">
                <img
                  className="w-full h-full object-cover rounded-tl-2xl rounded-bl-2xl"
                  src={dna}
                  alt=""
                ></img>
              </div>
              <div className="w-[40%] h-full airbnb flex flex-col  px-3 py-4 gap-2  ">
                <h2 className="text-base lg:text-2xl  h-auto w-full text-black">
                  Y đa khoa
                </h2>

                <p className="hidden lg:block w-full h-auto text-sm text-gray-800 ">
                  Chương trình y đa khoa được thiết kế dành riêng cho việc học trực tuyến thông qua video và tài liệu, nhằm trang bị sinh viên với kiến thức và kỹ năng cần thiết cho sự nghiệp y học.
                </p>
              </div>
            </HashLink>
            <HashLink
              to="/Course#hero"
              className="w-full h-[129px] lg:h-[250px] flex flex-row bg-sky-300  rounded-2xl shadow-2xl shadow-black hover:scale-110 ransition-all duration-300"
            >
              <div className="w-[40%] h-full airbnb flex flex-col  px-3 py-4 gap-2">
                <h2 className="text-base lg:text-2xl  h-auto w-full text-black">
                  Cơ sở ngành
                </h2>

                <p className="hidden lg:block w-full h-auto text-sm text-gray-800 ">
                  Các môn học cơ sở ngành, với nền móng là Giải Phẫu, Sinh Lý và Sinh Lý bệnh, là nền tảng kiến thức vững chắc cho một sinh viên y trước khi tiếp cận những tình huống lâm sàng, cũng như giải quyết các vấn đề nghiên cứu. Chương trình học Y Đa Khoa sẽ lần lượt dắt chúng ta qua các module cơ sở ngành của từng hệ cơ quan khác nhau như Huyết Học, Cơ Xương Khớp, Hệ Thần Kinh và Hành Vi, Y Học Sinh Sản,..
                </p>
              </div>
              <div className="w-[60%] h-full">
                <img
                  className="w-full h-full object-cover rounded-tr-2xl rounded-br-2xl"
                  src={backgood}
                  alt=""
                ></img>
              </div>
            </HashLink>
          </div>
          <div
            className="flex flex-col gap-2 px-6 w-full text-white h-full  floatsection  animate"
            id="section4"
          >
            <div className="w-full h-auto mb-3 flex flex-row justify-end">
              <HashLink
                smooth
                to="/Partners#partners"
                className="w-auto hover:bg-black hover:text-white rounded-[30px]  mt-0 lg:mt-4 airbnb h-full py-2 px-6 text-sm lg:text-xl flex justify-center items-center text-black bg-white"
              >
                Hợp tác - Đối tác
              </HashLink>{" "}
            </div>
            <div className="h-[250px] w-full flex flex-row bg-white">
              <img className="h-full w-1/2 object-cover" alt="" src={dna}></img>
              <img className="h-full w-1/2 object-cover" alt="" src={backgood}></img>
            </div>
            <div className="h-[250px] lg:h-full w-full flex flex-col justify-center items-center bg-white">

              <img
                className="object-cover h-[255px] w-[255px] p-8 hover:scale-125 transition-all duration-200"
                src={spon1}
                alt=""
              ></img>
            </div>
          </div>
        </div>
        <div className="w-1/2 h-full work-wrap start hidden lg:block ">
          <div className="sticky top-[5vh] flex justify-center  items-center h-screen w-full">
            <div
              className={`h-[50vh] lg:h-[80vh] w-full lg:w-[80%] shadow-black shadow-2xl flex justify-center rounded-3xl transition-all duration-500 items-center ${order === 2
                ? "bg-cyan-800"
                : order === 3
                  ? "bg-sky-800"
                  : order === 4
                    ? "bg-sky-300 "
                    : "bg-white"
                }    "overflow-hidden" `}
            >
              <div className="w-full h-full flex items-center justify-center ">
                <img
                  className={`object-cover absolute w-[95%] lg:w-[70%]  transition-all duration-500 h-[45%] lg:h-[70%] rounded-3xl ${order === 2 ? "opacity-100" : "opacity-0"
                    } `}
                  src={a1}
                  alt=""
                ></img>
                <img
                  className={`object-cover absolute  w-[95%] lg:w-[70%]   transition-all duration-500  h-[45%] lg:h-[70%] rounded-3xl ${order === 3 ? "opacity-100" : "opacity-0"
                    } `}
                  src={
                    containerData.length > 0 || !containerData
                      ? containerData[containerData.length - 1].image
                      : "No heading available"
                  }
                  alt=""
                ></img>
                <img
                  className={`object-cover absolute  w-[95%] lg:w-[70%] transition-all duration-500  h-[45%] lg:h-[70%] rounded-3xl ${order === 4 ? "opacity-100" : "opacity-0"
                    } `}
                  src={a6}
                  alt=""
                ></img>
                <img
                  className={`object-cover absolute  w-[95%] lg:w-[70%] transition-all duration-500  h-[45%] lg:h-[70%] rounded-3xl ${order === 5 ? "opacity-100" : "opacity-0"
                    } `}
                  src={a4}
                  alt=""
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};
export default HomePage;

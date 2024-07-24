import mouseup from "../assets/pic/mouse-cursor (1).png";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Masonry from "../components/Masonry";
// import a2 from "../assets/pic/2.jpg";
import a3 from "../assets/pic/3.jpg";
// import a4 from "../assets/pic/4.jpg";
// import a5 from "../assets/pic/5.jpg";
// import a6 from "../assets/pic/6.jpg";
import a7 from "../assets/pic/7.jpg";
// import a8 from "../assets/pic/8.jpg";
// import a9 from "../assets/pic/9.jpg";
// import a10 from "../assets/pic/10.jpg";
import taichinh from "../assets/pic/taichinh.jpg"
import haucan from "../assets/pic/haucan.jpg"
import chunhiem from "../assets/pic/chunhiem.jpg"
import noidung from "../assets/pic/noidung.jpg"
import prit from "../assets/pic/prit.jpeg"
import Scroll from "../components/Scroll";
import "../components/animation.css";
export default function Aboutus() {
  const location = useLocation();

  const addShowOnLoadClass = () => {
    let sections = document.querySelectorAll("[id*='float1'], [id*='float2']");
    sections.forEach((section) => {
      section.classList.add("show-on-load");
    });
  };

  useEffect(() => {
    addShowOnLoadClass();
  }, [location]);

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

  return (
    <div className="w-screen h-auto overflow-hidden gra bg-white  ">
      <Scroll />
      <section
        id="mission"
        className="w-screen h-auto lg:h-screen relative  flex pt-[100px] flex-col gap-[60px]">
        <div className="w-full h-auto lg:h-[200px] justify-center ">
          <div className="w-[auto] h-full flex flex-col lg:flex-row gap-0 lg:gap-[200px]  justify-center bg-gray-200 mt-[20px] lg:mt-0 items-center text-center ">
            <div className="flex flex-col items-center lg:items-start animate gap-[8px] lg:gap-[20px] m-0 lg:ml-[200px]  lg:mt-[20px]">
              <div className="h-[5px] bg-red-700 w-[50px]"></div>

              <h3 className=" h-[50px] lg:h-[100px]  z-[20] relative w-auto text-2xl lg:text-4xl airbnb uppercase text-black">
                Sứ mệnh
              </h3>
            </div>
            <div className="w-[85vw] lg:w-[900px]  rounded-2xl border-2 border-dashed border-black h-auto lg:h-full airbnb text-xs lg:text-xl text-start flex items-center px-3 py-2">
              CLB Nghiên Cứu Khoa Học – Khoa Y (SRC-FM) là câu lạc bộ học thuật
              trực thuộc Đoàn – Hội Sinh viên Khoa Y, Đại học Y Dược Thành phố
              Hồ Chí Minh. Với sứ mệnh kết nối và chia sẻ kiến thức, kĩ năng
              cũng như tạo động lực cho sinh viên Y khoa tham gia hoạt động
              nghiên cứu khoa học
            </div>
          </div>
        </div>
        <Masonry />
        {/*
        <div className="w-[1500px] h-auto lg:h-[450px] flex flex-col lg:flex-row gap-[60px] px-[15%] justify-center">
          <div
            id="float1"
            className="h-full w-[220px] min-w-[270px] animate gap-[10px] flex flex-col"
          >
            <div className="h-1/2  w-full">
              <img
                src={mission}
                className="w-full h-[225px] rounded-2xl object-cover"
                alt=""
              ></img>
            </div>
            <div className="h-[60px] lg:h-[200px] w-full  path1 bg-blue-300 flex justify-center items-center">
              <h3 className="text-blue-800 uppercase text-4xl airbnb">TRUST</h3>
            </div>
            <div className="h-1/2 w-full">
              <img
                src={bck}
                className="w-full h-[113px] rounded-2xl object-cover"
                alt=""
              ></img>
            </div>
          </div>
          <div
            id="float2"
            className=" animate h-full w-[220px] min-w-[270px] flex flex-col gap-[10px] "
          >
            <div className="w-full h-[60px] lg:h-[30%] rounded-[120px] bg-amber-400 flex justify-center items-center">
              <h3 className="text-blue-800 uppercase text-4xl airbnb">
                success
              </h3>
            </div>
            <div className="w-full h-full">
              <img
                src={bc}
                className="w-full h-full object-cover rounded-2xl"
                alt=""
              ></img>
            </div>
          </div>
          <div
            id="float1"
            className="animate h-full w-[220px] min-w-[270px] flex flex-col gap-[10px] "
          >
            <div className="w-full h-full">
              <img
                src={neon}
                className="w-full h-full object-cover rounded-2xl"
                alt=""
              ></img>
            </div>
            <div className="w-full h-[60px] lg:h-[30%] rounded-[20px] bg-rose-400 flex justify-center items-center">
              <h3 className="text-blue-800 uppercase text-4xl airbnb">
                innovation
              </h3>
            </div>
          </div>
          <div
            id="float2"
            className="animate h-full w-[220px] min-w-[270px] flex flex-col gap-[10px] "
          >
            <div className="w-full h-[60px] lg:h-[30%] path2  bg-teal-400 flex justify-center items-center">
              <h3 className="text-blue-800 uppercase text-4xl airbnb ">
                diversity
              </h3>
            </div>
            <div className="w-full h-full">
              <img
                src={dna}
                className="w-full h-full object-cover rounded-2xl"
                alt=""
              ></img>
            </div>
          </div>
        </div>
  */}
        <div className="absolute wrapperr w-[800px] self-center rounded-2xl backdrop-blur-2xl bg-sky-100/90 h-auto bottom-[10px] px-3 text-white text-base lg:text-4xl text-center airbnb flex justify-center items-center ">
          <div className="special-text">Khơi nguồn tri thức - Kiến tạo tương lai</div>
        </div>
      </section>
      <section className="w-screen h-[600px] lg:h-screen relative animate  " id="vision1">
        <div className="w-screen h-full flex justify-center   flex-col items-center gap-8">
          <div className="w-full h-auto justify-center mt-[10px] mb-[20px] lg:mb-0 lg:gap-8">
            <div className="w-[auto] h-auto flex flex-row gap-[100px]  justify-center items-center text-center ">
              <div className="flex flex-col gap-[20px] items-center justify-center ">
                <div className="h-[5px] bg-cyan-800 w-[50px]"></div>

                <h3 className="  h-auto  z-[20] relative w-auto text-2xl lg:text-4xl airbnb uppercase text-black">
                  Mục tiêu
                </h3>
              </div>
            </div>
          </div>
          <div className="w-screen lg:w-[1200px] h-[450px]  flex flex-col lg:flex-row justify-center ">
            <div className="flex flex-col w-full lg:w-1/2 h-full gap-2 lg:gap-8 px-[25px] lg:px-[40px] pt-2 airbnb ">
              <h3 className="text-base lg:text-2xl">
                Tạo dựng môi trường cởi mở, hỗ trợ phát triển, hiện thực hóa các
                ý tưởng nghiên cứu của sinh viên Y khoa. Đưa nghiên cứu khoa học
                đến gần hơn với sinh viên, từng bước phát triển các hoạt động
                nghiên cứu phục vụ cho sinh viên và nhà trường.
              </h3>
            </div>
            <div className="w-full px-[20px] lg:px-0  lg:w-[60%] h-full relative">
              <img
                src={a3}
                className="w-full z-20 h-full relative object-cover"
                alt=""
              ></img>
              <div className="absolute w-full  z-10 top-0 left-0 blur-lg h-full translate-x-10 translate-y-10 bg-teal-300/60"></div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="w-screen h-[600px] lg:h-screen flex justify-center animate   flex-col items-center gap-8"
        id="vision2"
      >
        <div className="w-screen lg:w-[1200px] h-[450px] flex flex-col lg:flex-row mb-[20px] lg:mb-0 lg:gap-8">
          <div className="w-full px-[20px] lg:px-0 lg:w-[60%] h-full relative">
            <img
              src={a7}
              className="w-full z-20 h-full relative object-cover"
              alt=""
            ></img>
            <div className="absolute w-full  z-10 top-0 left-0 blur-lg h-full translate-x-10 -translate-y-10 bg-teal-300/60"></div>
          </div>
          <div className="flex flex-col w-full lg:w-1/2 h-full gap-2 lg:gap-8 px-[25px] lg:px-[40px] pt-2 airbnb mt-[40px] ">
            <h3 className="text-base lg:text-2xl">
              Đồng thời, xây dựng đội ngũ sinh viên chuyên nghiệp và chất lượng
              trong hoạt động nghiên cứu khoa học của khoa, tiến tới trở thành
              đơn vị tiên phong trong các hoạt động nghiên cứu khoa học và hỗ
              trợ nghiên cứu.
            </h3>
          </div>
        </div>
      </section>
      <section
        className="w-screen overflow-auto h-auto lg:h-[120vh] relative bg-blue-200 flex pt-[20px] pb-[220px] lg:pb-[60px] flex-col gap-2 justify-center items-center"
        id="organization"
      >
        <a
          className="absolute right-12 bottom-8 w-[50px] animate-bounce  h-[75px]"
          href="#mission"
        >
          <img
            className="w-full h-full object-cover"
            src={mouseup}
            alt=""
          ></img>
        </a>
        <div className="w-full h-[60px] lg:h-[120px] justify-center mt-[50px] ">
          <div className="w-[auto] h-auto flex flex-row gap-[100px]  justify-center items-center text-center ">
            <div className="flex flex-col gap-[20px] items-center justify-center ">
              <div className="h-[5px] bg-blue-800 w-[50px]"></div>

              <h3 className="  h-auto  z-[20] relative w-auto text-2xl lg:text-4xl airbnb uppercase text-black">
                Tổ chức
              </h3>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row h-[1300px] w-screen lg:w-[1200px] lg:h-full gap-6 justify-center items-start px-5 lg:px-0">
          <div className="w-full lg:w-[20%] h-1/5 lg:h-1/2 relative">
            <img
              src={prit}
              className=" absolute rounded-2xl object-cover w-full h-full"
              alt=""
            ></img>
            <div className="absolute airbnb h-auto backdrop-blur-[1px] text-white w-full flex justify-center items-center bg-black/20 pl-2 bottom-2 lg:bottom-4 flex-col">
              <h2 className="text-xl ">Cao Niên Kỷ</h2>
              <h2 className="text-base  ">Trưởng ban PR-IT</h2>
            </div>
          </div>
          <div className="w-full lg:w-[20%] h-1/5 lg:h-1/2 relative">
            <img
              src={noidung}
              className=" absolute rounded-2xl object-cover w-full h-full"
              alt=""
            ></img>
            <div className="absolute airbnb h-auto backdrop-blur-[1px] text-white w-full flex justify-center items-center bg-black/20 pl-2  bottom-2 lg:bottom-4 flex-col">
              <h2 className="text-base ">Đặng Lê Minh Khang</h2>
              <h2 className="text-base ">Phó chủ nhiệm - Trưởng ban Nội Dung</h2>
            </div>
          </div>
          <div className="w-full lg:w-[20%] h-1/5 lg:h-1/2 relative">
            <img
              src={chunhiem}
              className=" absolute rounded-2xl object-cover w-full h-full"
              alt=""
            ></img>
            <div className="absolute airbnb h-auto backdrop-blur-[1px] text-white w-full flex justify-center items-center bg-black/20 pl-2  bottom-2 lg:bottom-4 flex-col">
              <h2 className="text-xl">Lê Hoàng Thiên Ân</h2>
              <h2 className="text-base  ">Chủ nhiệm</h2>
            </div>
          </div>
          <div className="w-full lg:w-[20%] h-1/5 lg:h-1/2 relative">
            <img
              src={haucan}
              className=" absolute rounded-2xl object-cover w-full h-full"
              alt=""
            ></img>
            <div className="absolute airbnb h-auto backdrop-blur-[1px] text-white w-full flex justify-center items-center bg-black/20 pl-2  bottom-2 lg:bottom-4 flex-col">
              <h2 className="text-base ">Thạch Đặng Minh Uyên</h2>
              <h2 className="text-base  ">Phó chủ nhiệm - Trưởng ban Hậu Cần</h2>
            </div>
          </div>
          <div className="w-full lg:w-[20%] h-1/5 lg:h-1/2 relative">
            <img
              src={taichinh}
              className=" absolute rounded-2xl object-cover w-full h-full"
              alt=""
            ></img>
            <div className="absolute airbnb h-auto backdrop-blur-[1px] text-white w-full flex justify-center items-center bg-black/20 pl-2  bottom-2 lg:bottom-4 flex-col">
              <h2 className="text-xl ">Võ Tường Vi</h2>
              <h2 className="text-base  ">Trưởng ban Tài Chính</h2>
            </div>
          </div>



          {/* <div className="flex flex-col w-[25%] gap-5 h-full ">
            <div className="w-full h-1/3 relative">
              <img
                src={sample}
                className=" absolute rounded-2xl object-cover w-full h-full"
                alt=""
              ></img>
              <div className="w-auto absolute airbnb h-auto backdrop-blur-[1px] text-white ml-2 mt-1 left-4 bottom-5 flex flex-col">
                <h2 className="text-2xl ">Nguyen Van A</h2>
                <h2 className="text-xl  ">Chủ nhiệm</h2>
              </div>
            </div>
            <div className="w-full h-1/3 relative">
              <img
                src={sample2}
                className=" absolute rounded-2xl object-cover w-full h-full"
                alt=""
              ></img>
              <div className="w-auto absolute airbnb h-auto backdrop-blur-[1px] text-white ml-2 mt-1 left-4 bottom-5 flex flex-col">
                <h2 className="text-2xl ">Nguyen Hoai C</h2>
                <h2 className="text-xl  ">Thư kí</h2>
              </div>
            </div>

            <div className="w-full h-1/3 relative">
              <img
                src={sample}
                className=" absolute rounded-2xl object-cover w-full h-full"
                alt=""
              ></img>
              <div className="w-auto absolute airbnb h-auto backdrop-blur-[1px] text-white ml-2 mt-1 left-4 bottom-5 flex flex-col">
                <h2 className="text-2xl ">Nguyen Van A</h2>
                <h2 className="text-xl  ">Chủ nhiệm</h2>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-[25%] gap-5 h-full mt-[200px] ">
            <div className="w-full h-1/3 relative">
              <img
                src={sample}
                className=" absolute rounded-2xl object-cover w-full h-full"
                alt=""
              ></img>
              <div className="w-auto absolute airbnb h-auto backdrop-blur-[1px] text-white ml-2 mt-1 left-4 bottom-5 flex flex-col">
                <h2 className="text-2xl ">Nguyen Van A</h2>
                <h2 className="text-xl  ">Chủ nhiệm</h2>
              </div>
            </div>
            <div className="w-full h-1/3 relative">
              <img
                src={sample2}
                className=" absolute rounded-2xl object-cover w-full h-full"
                alt=""
              ></img>
              <div className="w-auto absolute airbnb h-auto backdrop-blur-[1px] text-white ml-2 mt-1 left-4 bottom-5 flex flex-col">
                <h2 className="text-2xl ">Nguyen Hoai C</h2>
                <h2 className="text-xl  ">Thư kí</h2>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-[25%] gap-5 h-full mt-[140px] ">
            <div className="w-full h-1/3 relative">
              <img
                src={sample}
                className=" absolute rounded-2xl object-cover w-full h-full"
                alt=""
              ></img>
              <div className="w-auto absolute airbnb h-auto backdrop-blur-[1px] text-white ml-2 mt-1 left-4 bottom-5 flex flex-col">
                <h2 className="text-2xl ">Nguyen Van A</h2>
                <h2 className="text-xl  ">Chủ nhiệm</h2>
              </div>
            </div>
            <div className="w-full h-1/3 relative">
              <img
                src={sample2}
                className=" absolute rounded-2xl object-cover w-full h-full"
                alt=""
              ></img>
              <div className="w-auto absolute airbnb h-auto backdrop-blur-[1px] text-white ml-2 mt-1 left-4 bottom-5 flex flex-col">
                <h2 className="text-2xl ">Nguyen Hoai C</h2>
                <h2 className="text-xl  ">Thư kí</h2>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-[25%] gap-5 h-full ">
            <div className="w-full h-1/3 relative">
              <img
                src={sample}
                className=" absolute rounded-2xl object-cover w-full h-full"
                alt=""
              ></img>
              <div className="w-auto absolute airbnb h-auto backdrop-blur-[1px] text-white ml-2 mt-1 left-4 bottom-5 flex flex-col">
                <h2 className="text-2xl ">Nguyen Van A</h2>
                <h2 className="text-xl  ">Chủ nhiệm</h2>
              </div>
            </div>
            <div className="w-full h-1/3 relative">
              <img
                src={sample2}
                className=" absolute rounded-2xl object-cover w-full h-full"
                alt=""
              ></img>
              <div className="w-auto absolute airbnb h-auto backdrop-blur-[1px] text-white ml-2 mt-1 left-4 bottom-5 flex flex-col">
                <h2 className="text-2xl ">Nguyen Hoai C</h2>
                <h2 className="text-xl  ">Thư kí</h2>
              </div>
            </div>

            <div className="w-full h-1/3 relative">
              <img
                src={sample}
                className=" absolute rounded-2xl object-cover w-full h-full"
                alt=""
              ></img>
              <div className="w-auto absolute airbnb h-auto backdrop-blur-[1px] text-white ml-2 mt-1 left-4 bottom-5 flex flex-col">
                <h2 className="text-2xl ">Nguyen Van A</h2>
                <h2 className="text-xl  ">Chủ nhiệm</h2>
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </div>
  );
}

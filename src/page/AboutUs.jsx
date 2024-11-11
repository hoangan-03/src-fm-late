import mouseup from "../assets/pic/mouse-cursor (1).png";
import { useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import Masonry from "../components/Masonry";
import a3 from "../assets/pic/3.jpg";
import a7 from "../assets/pic/7.jpg";
import chunhiem from "../assets/pic/chunhiem.jpg";
import phochunhiem1 from "../assets/pic/phochunhiem1.jpg";
import phochunhiem2 from "../assets/pic/phochunhiem2.jpg";
import chuyenmon from "../assets/pic/chuyenmon.jpg";
import truyenthong from "../assets/pic/truyenthong.jpg";
import haucan from "../assets/pic/haucan.jpg";
import Scroll from "../components/Scroll";
import "../components/animation.css";
import Footer from "../components/Footer";

export default function Aboutus() {
  const location = useLocation();
  const [shouldShuffle, setShouldShuffle] = useState(true);
  const masonryRef = useRef(null);

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

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setShouldShuffle(width >= 600 && width <= 1500);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldShuffle(true);
          } else {
            setShouldShuffle(false);
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentMasonryRef = masonryRef.current;

    if (currentMasonryRef) {
      observer.observe(currentMasonryRef);
    }

    return () => {
      if (currentMasonryRef) {
        observer.unobserve(currentMasonryRef);
      }
    };
  }, []);

  return (
    <div className="w-screen h-auto overflow-hidden gra bg-white">
      <Scroll />
      <section
        id="mission"
        className="w-screen h-auto lg:h-screen relative flex pt-10 lg:pt-[100px] flex-col gap-2 lg:gap-[60px]"
      >
        <div className="w-full h-auto lg:h-[200px] justify-center">
          <div className="w-[auto] h-full flex flex-col lg:flex-row gap-0 lg:gap-[200px] justify-center bg-gray-200 py-5 lg:py-0 mt-[20px] lg:mt-0 items-center text-center">
            <div className="flex flex-col items-center lg:items-start animate gap-[8px] lg:gap-[20px] m-0 lg:ml-[200px] lg:mt-[20px]">
              <div className="h-[5px] bg-red-700 w-[50px]"></div>

              <h3 className="h-[50px] lg:h-[100px] z-[20] relative w-auto text-2xl lg:text-4xl airbnb uppercase text-black">
                Sứ mệnh
              </h3>
            </div>
            <div className="w-[85vw] lg:w-[900px] rounded-2xl border-2 border-dashed border-black h-auto lg:h-full airbnb text-xs lg:text-xl text-start flex items-center px-3 py-2">
              CLB Nghiên Cứu Khoa Học – Khoa Y (SRC-FM) là câu lạc bộ học thuật
              trực thuộc Đoàn – Hội Sinh viên Khoa Y, Đại học Y Dược Thành phố
              Hồ Chí Minh. Với sứ mệnh kết nối và chia sẻ kiến thức, kĩ năng
              cũng như tạo động lực cho sinh viên Y khoa tham gia hoạt động
              nghiên cứu khoa học
            </div>
          </div>
        </div>
        <div ref={masonryRef}>
          <Masonry shouldShuffle={shouldShuffle} />
        </div>
        <div className="absolute wrapperr w-[90%] lg:w-[800px] self-center rounded-2xl backdrop-blur-2xl bg-sky-100/90 h-auto bottom-[-50px] lg:bottom-[10px] text-white text-center airbnb flex justify-center items-center">
          <div className="special-text text-sm lg:text-3xl lg:px-4 lg:py-2">
            Khơi nguồn tri thức - Kiến tạo tương lai
          </div>
        </div>
      </section>
      <section
        className="w-screen h-[600px] lg:h-screen mt-16 lg:mt-0 relative animate"
        id="vision1"
      >
        <div className="w-screen h-full flex justify-center flex-col items-center gap-8">
          <div className="w-full h-auto justify-center mt-[10px] mb-[20px] lg:mb-0 lg:gap-8">
            <div className="w-[auto] h-auto flex flex-row gap-[100px] justify-center items-center text-center">
              <div className="flex flex-col gap-[20px] items-center justify-center">
                <div className="h-[5px] bg-cyan-800 w-[50px]"></div>

                <h3 className="h-auto z-[20] relative w-auto text-2xl lg:text-4xl airbnb uppercase text-black">
                  Mục tiêu
                </h3>
              </div>
            </div>
          </div>
          <div className="w-screen lg:w-[1200px] h-[450px] flex flex-col lg:flex-row justify-center">
            <div className="flex flex-col w-full lg:w-1/2 h-full gap-2 lg:gap-8 px-[25px] lg:px-[40px] pt-2 airbnb">
              <h3 className="text-base lg:text-2xl">
                Tạo dựng môi trường cởi mở, hỗ trợ phát triển, hiện thực hóa các
                ý tưởng nghiên cứu của sinh viên Y khoa. Đưa nghiên cứu khoa học
                đến gần hơn với sinh viên, từng bước phát triển các hoạt động
                nghiên cứu phục vụ cho sinh viên và nhà trường.
              </h3>
            </div>
            <div className="w-full px-[20px] lg:px-0 lg:w-[60%] h-full relative">
              <img
                src={a3}
                className="w-full z-20 h-full relative object-cover"
                alt=""
                loading="lazy"
              ></img>
              <div className="absolute w-full z-10 top-0 left-0 blur-lg h-full translate-x-10 translate-y-10 bg-teal-300/60"></div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="w-screen h-[600px] lg:h-screen flex justify-center animate flex-col items-center gap-8"
        id="vision2"
      >
        <div className="w-screen lg:w-[1200px] h-[450px] flex flex-col lg:flex-row mb-[20px] lg:mb-0 lg:gap-8">
          <div className="w-full px-[20px] lg:px-0 lg:w-[60%] h-full relative">
            <img
              src={a7}
              className="w-full z-20 h-full relative object-cover"
              alt=""
              loading="lazy"
            ></img>
            <div className="absolute w-full z-10 top-0 left-0 blur-lg h-full translate-x-10 -translate-y-10 bg-teal-300/60"></div>
          </div>
          <div className="flex flex-col w-full lg:w-1/2 h-full gap-2 lg:gap-8 px-[25px] lg:px-[40px] pt-2 airbnb mt-[40px]">
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
        className="w-screen overflow-auto h-auto lg:h-[180vh] relative bg-blue-200 flex pt-[20px] pb-[260px] flex-col gap-8 lg:gap-2 justify-center items-center"
        id="organization"
      >
        <a
          className="absolute right-2 lg:right-12 bottom-8 w-[60px] lg:w-[90px] animate-bounce h-auto"
          href="#mission"
        >
          <img
            className="w-full h-full object-cover"
            src={mouseup}
            alt=""
            loading="lazy"
          ></img>
        </a>
        <div className="w-full h-[60px] lg:h-[120px] justify-center mt-[50px]">
          <div className="w-[auto] h-auto flex flex-row gap-[100px] justify-center items-center text-center">
            <div className="flex flex-col gap-[20px] items-center justify-center">
              <div className="h-[5px] bg-blue-800 w-[50px]"></div>

              <h3 className="h-auto z-[20] relative w-auto text-2xl lg:text-4xl airbnb uppercase text-black">
                Tổ chức
              </h3>
            </div>
          </div>
        </div>
        <div className=" flex flex-col h-[2800px] w-screen lg:w-[1600px] max-w-full lg:h-full gap-6 justify-center items-start px-12 lg:px-0">
          <div className="flex overflow-x-hidden flex-col lg:flex-row w-full h-1/2 gap-6 justify-start lg:justify-center items-start">
            <div className="w-full lg:w-[20%] h-1/3 lg:h-full relative">
              <img
                src={phochunhiem1}
                className="absolute rounded-2xl object-cover w-full h-full"
                alt=""
                loading="lazy"
              ></img>
              <div className="absolute airbnb py-2 h-auto backdrop-blur-sm text-black w-full flex justify-center items-center bg-white/80 pl-2 bottom-2 lg:bottom-4 flex-col">
                <h2 className="text-xl font-extrabold uppercase">
                  Võ Tường Vi
                </h2>
                <h2 className="text-sm font-thin">Phó chủ nhiệm</h2>
              </div>
            </div>

            <div className="w-full lg:w-[20%] h-1/3 lg:h-full relative">
              <img
                src={chunhiem}
                className="absolute rounded-2xl object-cover w-full h-full"
                alt=""
                loading="lazy"
              ></img>
              <div className="absolute airbnb py-2 h-auto backdrop-blur-sm text-black w-full flex justify-center items-center bg-white/80 pl-2 bottom-2 lg:bottom-4 flex-col">
                <h2 className="text-xl font-extrabold uppercase">
                  Thạch Đặng Minh Uyên
                </h2>
                <h2 className="text-sm font-thin">Chủ nhiệm</h2>
              </div>
            </div>
            <div className="w-full lg:w-[20%] h-1/3 lg:h-full relative">
              <img
                src={phochunhiem2}
                className="absolute rounded-2xl object-cover w-full h-full"
                alt=""
                loading="lazy"
              ></img>
              <div className="absolute airbnb py-2 h-auto backdrop-blur-sm text-black w-full flex justify-center items-center bg-white/80 pl-2 bottom-2 lg:bottom-4 flex-col">
                <h2 className="text-xl font-extrabold uppercase">
                  Đặng Lê Minh Khang
                </h2>
                <h2 className="text-sm font-thin">Phó chủ nhiệm</h2>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row w-full h-1/2 gap-6 justify-start lg:justify-center items-start">
            <div className="w-full lg:w-[20%] h-1/3 lg:h-full relative">
              <img
                src={truyenthong}
                className="absolute rounded-2xl object-cover w-full h-full"
                alt=""
                loading="lazy"
              ></img>
              <div className="absolute airbnb py-2 h-auto backdrop-blur-sm text-black w-full flex justify-center items-center bg-white/80 pl-2 bottom-2 lg:bottom-4 flex-col">
                <h2 className="text-xl font-extrabold uppercase">
                  Tô Hữu Thiện
                </h2>
                <h2 className="text-sm font-thin">Trưởng ban Truyền thông</h2>
              </div>
            </div>
            <div className="w-full lg:w-[20%] h-1/3 lg:h-full relative">
              <img
                src={chuyenmon}
                className="absolute rounded-2xl object-cover w-full h-full"
                alt=""
                loading="lazy"
              ></img>
              <div className="absolute airbnb py-2 h-auto backdrop-blur-sm text-black w-full flex justify-center items-center bg-white/80 pl-2 bottom-2 lg:bottom-4 flex-col">
                <h2 className="text-xl font-extrabold uppercase">
                  Nguyễn Hoàng Minh Trị
                </h2>
                <h2 className="text-sm font-thin">Trưởng ban Chuyên môn</h2>
              </div>
            </div>
            <div className="w-full lg:w-[20%] h-1/3 lg:h-full relative">
              <img
                src={haucan}
                className="absolute rounded-2xl object-cover w-full h-full"
                alt=""
                loading="lazy"
              ></img>
              <div className="absolute airbnb py-2 h-auto backdrop-blur-sm text-black w-full flex justify-center items-center bg-white/80 pl-2 bottom-2 lg:bottom-4 flex-col">
                <h2 className="text-xl font-extrabold uppercase">
                  Huỳnh Nguyên Nhật Vũ
                </h2>
                <h2 className="text-sm font-thin">
                  Trưởng ban Hậu cần - Sự kiện
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
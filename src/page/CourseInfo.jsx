/* eslint-disable react/prop-types */
import { Bolt, PlayArrowRounded, Star } from "@mui/icons-material";
import FlareIcon from "@mui/icons-material/Flare";
import { HashLink } from "react-router-hash-link";
import { PlayArrow } from "@mui/icons-material";
import Scroll from "../components/Scroll";
import duration from "../assets/pic/repeat.png";
import video from "../assets/pic/video.png";
import chapter from "../assets/pic/chapter.png";
import quiz from "../assets/pic/quiz.png";
import level from "../assets/pic/signal.png";
import numpeople from "../assets/pic/numpeople.png";
import like from "../assets/pic/like.png";
import star from "../assets/pic/star.png";
import "../components/animation.css";

const InfoItem = ({ src, text }) => (
    <div className="flex flex-row gap-3 justify-center items-center">
        <img
            src={src}
            alt=""
            className="w-8 h-8 object-cover flex justify-center items-center"
        />
        <h2 className="text-base text-black">{text}</h2>
    </div>
);
const infoItems = [
    { src: level, text: 'Trình độ Cơ bản' },
    { src: duration, text: '160 giờ' },
    { src: chapter, text: '7 chương' },
    { src: video, text: '49 video' },
    { src: quiz, text: '3 bài test' },
    { src: numpeople, text: '44 lượt đăng kí' },
];
export const CourseInfo = () => {
    const chapterName = [
        "Introduction to Hematology",
        "Structure and Function of Blood",
        "The Hematopoietic System",
        "Blood Disorders",
        "Hematology Testing Techniques",
        "Treatment and Management of Hematological Diseases",
        "Clinical Hematology and Research",
    ];
    return (
        <section className="airbnb w-screen bg-sky-100 h-[300vh]">
            <Scroll />
            <section
                className="w-screen h-screen flex flex-col gap-5 mt-[120px]"
                id="hero"
            >
                <div className="w-full h-auto flex flex-row gap-[100px]  ">
                    <div className="w-[20%] h-auto"></div>
                    <div className="w-[20vw] h-auto text-sky-800 text-6xl fixed uppercase leading-[80px] ml-[110px] self-center z-[20]">
                        huyết học
                    </div>

                    <div className="w-full h-full flex flex-col gap-8 mx-[100px]">
                        {/* <div className="text-6xl text-black archares font-bold">
                            Tất cả những{" "}
                           kiến thức cốt lõi 
                            của Huyết học mà một bác sĩ cần biết
                        </div> */}
                        <div className="w-full h-auto bg-sky-200 flex px-6 py-5 gap-3 justify-center items-start  flex-col">
                            <h1 className="text-xl text-black">
                                <span className="text-teal-800">Huyết học</span> là phân ngành y
                                học quan tâm đến việc nghiên cứu, chẩn đoán, điều trị và phòng
                                các bệnh liên qua đến máu
                            </h1>
                            <a
                                href="https://vi.wikipedia.org/wiki/Huy%E1%BA%BFt_h%E1%BB%8Dc"
                                className="flex flex-row w-full gap-2 text-teal-800"
                            >
                                <PlayArrowRounded />
                                <h2 className="text-xl">Wikipedias</h2>
                            </a>
                        </div>
                        <div className="flex flex-row gap-4 items-center">
                            <button className="w-auto px-6 py-3 text-white bg-sky-800 hover:bg-teal-800 text-xl rounded-[60px]">
                                Đăng kí ngay
                            </button>
                            <h2 className="text-base text-sky-800">
                                Khóa học khả dụng đến 2/2026
                            </h2>
                        </div>
                        <div className="flex flex-row gap-10 items-center">
                            {infoItems.map((item, index) => (
                                <InfoItem key={index} src={item.src} text={item.text} />
                            ))}
                        </div>
                        <div className="flex flex-row gap-20 items-center">
                            <div className="flex flex-row gap-3 justify-center items-center border-r-2 border-black pr-20">
                                <h2 className="text-base text-black">4.9</h2>
                                <img
                                    src={star}
                                    alt=""
                                    className="w-8 h-8 object-cover flex justify-center items-center"
                                ></img>
                                <h2 className="text-sm text-gray-800">(22 lượt reviews)</h2>
                            </div>
                            <div className="flex flex-row gap-3 justify-center items-center">
                                <img
                                    src={like}
                                    alt=""
                                    className="w-6 h-6 object-cover flex justify-center items-center"
                                ></img>
                                <h2 className="text-base text-black">91%</h2>
                            </div>
                        </div>
                    </div>
                    <div className="absolute bottom-0 h-[220px] bg-white w-full pl-[25%] flex flex-col py-[20px] gap-[20px]">
                        <p className="text-3xl">
                            Bạn sẽ <strong>học được</strong>
                        </p>
                        <div className="flex flex-row gap-16">
                            <div className="flex flex-col h-full w-auto gap-4">
                                <div className="w-[60px] h-[60px] rounded-full flex justify-center items-center bg-sky-100">
                                    <FlareIcon style={{ fontSize: 40 }} />
                                </div>

                                <h1 className="w-[300px] h-auto text-xl">Kĩ năng cần thiết</h1>
                            </div>
                            <div className="flex flex-col h-full w-auto gap-4">
                                <div className="w-[60px] h-[60px] rounded-full flex justify-center items-center bg-sky-100">
                                    <Star style={{ fontSize: 40 }} />
                                </div>

                                <h1 className="w-[300px] h-auto text-xl">Kiến thức nền tảng</h1>
                            </div>
                            <div className="flex flex-col h-full w-auto gap-4">
                                <div className="w-[60px] h-[60px] rounded-full flex justify-center items-center bg-sky-100">
                                    <Bolt style={{ fontSize: 40 }} />
                                </div>

                                <h1 className="w-[300px] h-auto text-xl">Mẹo làm đề thi</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-screen pl-[25%] h-screen flex flex-col gap-7 pr-[200px]">
                <div className="text-7xl text-black archares font-bold">
                    Nội dung xem trước
                </div>

                <div className="text-xl text-black airbnb-thin font-semibold">
                    <span className="airbnb text-teal-800">
                        The course is broken into 7 chapters
                    </span>{" "}
                    — each includes a video with advice, lessons, and stories from my own
                    freelance practice. Some chapters also include external resources and
                    bonus content to help you along. The live office hour sessions are an
                    opportunity to ask questions, get advice, and hear from other guest
                    freelancers who join the calls! You can go through the lessons at your
                    own pace - you’ll always have access.
                </div>

                <div className="flex flex-col items-start justify-center w-full">
                    {[1, 2, 3, 4, 5, 6, 7].map((chapter) => (
                        <HashLink
                            key={chapter}
                            className="flex flex-row border-t-[1px] justify-between py-5 border-gray-400 hover:bg-white hover:px-6 transition-all duration-300  w-full"
                        >
                            <div className="flex flex-row  gap-[200px] justify-start items-center">
                                <div className="text-2xl text-teal-800 w-[150px]">Chương {chapter}</div>
                                <div className="text-4xl text-black w-[400px]">{chapterName[chapter - 1]}</div>
                            </div>

                            <div className="flex flex-row  gap-[20px] justify-start items-center">
                                <div className="text-2xl text-teal-800">7:35</div>
                                <div className="w-[40px] h-[40px] rounded-full bg-teal-800 flex justify-center items-center text-black">
                                    <PlayArrow style={{ fontSize: 25, color: "white" }} />
                                </div>
                            </div>
                        </HashLink>
                    ))}
                </div>
            </section>
        </section>
    );
};

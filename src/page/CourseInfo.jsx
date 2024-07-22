import { Bolt, PlayArrowRounded, Star } from "@mui/icons-material";
import FlareIcon from "@mui/icons-material/Flare";
import { HashLink } from "react-router-hash-link";
import { PlayArrow } from "@mui/icons-material";
import Scroll from "../components/Scroll";
export const CourseInfo = () => {
    return (
        <section className="airbnb w-screen bg-sky-100 h-[300vh]">
            <Scroll />
            <section className="w-screen h-screen flex flex-col gap-5 mt-[120px]" id="hero">
                <div className="w-full h-auto flex flex-row gap-[100px] ">
                    <div className="w-[20%] h-auto"></div>
                    <div className="w-[20vw] h-auto text-sky-800 text-6xl fixed leading-[80px] mx-[60px] z-[20]">
                        Y Học Sinh Sản
                    </div>

                    <div className="w-full h-full flex flex-col gap-5 mx-[100px]">
                        <div className="text-6xl text-black archares font-bold">
                            Tất cả những{" "}
                           kiến thức cốt lõi 
                            của Y Học Sinh Sản mà một bác sĩ cần biết
                        </div>
                        <div className="w-full h-auto bg-sky-200 flex px-6 py-5 gap-3 justify-center items-start  flex-col">
                            <h1 className="text-xl text-black">
                                <span className="text-teal-800">Y học sinh sản</span> là một
                                nhánh của y học liên quan đến các vấn đề phòng ngừa, chẩn đoán và quản lý sinh sản.
                            </h1>
                            <div className="flex flex-row w-full gap-2 text-teal-800">
                                <PlayArrowRounded />
                                <h2 className="text-xl">Wikipedias</h2>
                            </div>
                        </div>
                        <div className="flex flex-row gap-4 items-center">
                            <button className="w-auto px-6 py-3 text-white bg-sky-800 hover:bg-teal-800 text-xl rounded-[60px]">
                                Đăng kí ngay
                            </button>
                            <h2 className="text-base text-sky-800">
                                Khóa học khả dụng đến 2/2026
                            </h2>
                        </div>
                    </div>
                    <div className="absolute bottom-0 h-[220px] bg-white w-full pl-[25%] flex flex-col py-[20px] gap-[20px]">
                        <h1 className="text-3xl ">
                            You will{" "}
                            <span className="bg-emerald-800 text-white py-1">learn</span>{" "}
                        </h1>
                        <div className="flex flex-row gap-16">
                            <div className="flex flex-col h-full w-auto gap-4">
                                <div className="w-[60px] h-[60px] rounded-full flex justify-center items-center bg-sky-100">
                                    <FlareIcon style={{ fontSize: 40 }} />
                                </div>

                                <h1 className="w-[300px] h-auto text-xl">
                                    Essential mindset for independent work
                                </h1>
                            </div>
                            <div className="flex flex-col h-full w-auto gap-4">
                                <div className="w-[60px] h-[60px] rounded-full flex justify-center items-center bg-sky-100">
                                    <Star style={{ fontSize: 40 }} />
                                </div>

                                <h1 className="w-[300px] h-auto text-xl">
                                    Practical frameworks to run your business
                                </h1>
                            </div>
                            <div className="flex flex-col h-full w-auto gap-4">
                                <div className="w-[60px] h-[60px] rounded-full flex justify-center items-center bg-sky-100">
                                    <Bolt style={{ fontSize: 40 }} />
                                </div>

                                <h1 className="w-[300px] h-auto text-xl">
                                    Management tips based on real-world interactions
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-screen pl-[25%] h-screen flex flex-col gap-7 pr-[200px]">
                <div className="text-7xl text-black archares font-bold">
                    Tất cả những video học tập mà bạn cần cho khóa học này
                </div>

                <div className="text-xl text-black airbnb-thin font-semibold">
                    <span className="airbnb text-teal-800">
                        The course is broken into 7 chapters
                    </span>{" "}
                    — each includes a video with advice, lessons, and stories from my own freelance practice. Some chapters also include external resources and bonus content to help you along. The live office hour sessions are an opportunity to ask questions, get advice, and hear from other guest freelancers who join the calls! You can go through the lessons at your own pace - you’ll always have access.
                </div>

                <div className="flex flex-col items-start justify-center w-full">
                    {[1, 2, 3, 4, 5, 6, 7].map((chapter) => (
                        <HashLink
                            key={chapter}
                            className="flex flex-row border-t-[1px] justify-between py-5 border-gray-400 hover:bg-white hover:px-6 transition-all duration-300  w-full"
                        >
                            <div className="flex flex-row  gap-[200px] justify-start items-center">
                                <div className="text-2xl text-teal-800">Chapter {chapter}</div>
                                <div className="text-4xl text-black">Introduction</div>
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

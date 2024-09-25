import logo from "../assets/pic/logo.png";
import { HashLink } from "react-router-hash-link";
function Header() {


    return (
        <HashLink to="/Home#hero"
            className={`fixed z-[50000] gray-w top-0 justify-start pl-2 md:pl-10 xl:pl-[200px] backdrop-blur-sm items-center h-[50px] lg:h-[78px] w-screen flex flex-row transition-all duration-300 `}
        >
            <div className="h-[40px] w-[40px] lg:h-[70px] lg:w-[70px] border-r-2 lg:border-r-[3px] pr-[2px] flex justify-center items-center md:pr-[10px] border-black">
                <img src={logo} alt="" className="object-cover h-[80%] w-auto"></img>
            </div>
            <div className="w-auto h-full pl-2 md:pl-6 py-2 flex flex-col gap-2">
                <h2 className="airbnb text-xs lg:text-xl uppercase text-black border-black border-b-[1px] lg:border-b-2">
                    CLB Nghiên cứu Khoa học - Khoa Y
                </h2>
                <h2 className="airbnb text-xs lg:text-xl uppercase text-black">
                   Đại học Y dược TPHCM
                </h2>
            </div>
            <div className="w-auto h-[25px] lg:h-[30px] absolute bottom-[-25px] lg:bottom-[-30px] rounded-bl-lg lg:rounded-bl-2xl  bg-black">
                <h2 className="airbnb text-sm lg:text-xl uppercase text-a px-2 lg:px-4 py-0 lg:py-2  w-full h-full flex items-center justify-center ">
                    {" "}
                    src-fm
                </h2>
            </div>

           
        </HashLink>
    );
}
export default Header;
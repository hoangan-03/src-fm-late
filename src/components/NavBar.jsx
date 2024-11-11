import { useState } from "react";
import lines from "../assets/pic/three.png";
import facebook from "../assets/pic/icons8-facebook-420 (1).png";
import close from "../assets/pic/close.png";
import down from "../assets/pic/down-arrow.png";
import profile from "../assets/pic/profile-user.png";
import { HashLink } from "react-router-hash-link";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Logout, Settings } from "@mui/icons-material";
// import { DarkModeRounded } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function NavBar() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const [fullname, setFullname] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");

  useEffect(() => {

    const fetchUserData = async () => {
      if (user) {
        try {
          const response = await axios.get(`${baseUrl}/users/${user.name}`);
          if (response.status === 200) {
            const userData = response.data[0];
            if (userData) {
              setFullname(userData.fullname);
              setAvatarUrl(userData.avatarurl);
            }
          } else {
            console.log(
              "Error retrieving user data:",
              response.status,
              response.data
            );
          }
        } catch (error) {
          console.error("Error retrieving user data:", error);
        }
      }
    };
    fetchUserData();
  }, [baseUrl, user]);
  const [isActive, setIsActive] = useState(false);
  const [modal, setModal] = useState(false);
  const handleClick = () => {
    setIsActive(!isActive);
    setModal(false);
  };
  const handleModal = () => {
    setModal(!modal);
  };
  const location = useLocation();
  const [activePage, setActivePage] = useState("");

  useEffect(() => {
    setActivePage(location.pathname);
  }, [location]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return (
    <div
      className={`right-0 flex z-[1900000] fixed h-[100vh] w-[170px] lg:w-[270px] airbnb  ${isActive ? " visible   " : "  invisible"
        }  `}
    >
      <div
        className={`absolute w-full top-0 h-full z-50 bg-white/70  backdrop-blur-xl `}
      >
        <div className="w-full gap-2 flex flex-col z-20">
          <div className="w-full gap-3 h-auto text-white pt-[7px] lg:pt-[20px]  uppercase flex justify-start pl-[12px] lg:pl-[30px]  text-2xl mb-[60px] ">
            <HashLink
              to="/Auth"
              className={`w-auto mt-1 h-auto px-2 lg:px-4 py-2 text-white bg-sky-800 text-xs lg:text-sm rounded-2xl airbnb hover:bg-cyan-800 ${user ? "hidden" : "block"
                }`}
              onClick={() => { setIsActive(false); }}
            >
              Đăng nhập
            </HashLink>

            <button
              className={`rounded-full relative flex justify-center items-center ${user ? "block" : "hidden"
                }`}
              onClick={() => handleModal()}
            >
              <div
                className={`open absolute left-0 flex flex-col justify-center items-start gap-1 px-1 lg:px-3 py-5 lg:py-8 top-[42px] w-[150px] lg:w-[220px] h-auto bggray rounded-xl z-[20] ${modal ? "block" : "hidden"
                  }`}
              >
                <div className="cursor-default flex flex-row gap-1 lg:gap-3 rounded-lg w-full pl-2 h-[40px] hover:bg-sky-800 py-1 items-center">
                  <div className="relative w-8 h-8">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500"></div>
                    <div className="w-7 h-7 flex justify-center items-center rounded-full bg-gray-200/20 absolute top-[0.125rem] left-[0.125rem]">
                      <img
                        className="w-full h-full object-cover rounded-full"
                        src={avatarUrl || profile}
                        alt=""
                        loading="lazy"
                      ></img>
                    </div>
                  </div>
                  <h1 className="text-xs text-white font-bold w-auto max-w-20 lg:max-w-full leading-4">
                    {fullname.length > 16
                      ? fullname.substring(0, 16)
                      : fullname}
                  </h1>
                </div>
                <HashLink
                  to="/Account"
                  className="flex flex-row gap-3 rounded-lg w-full pl-2 h-[40px] hover:bg-sky-800 py-1 items-center"
                >
                  <div className="w-8 h-8 flex justify-center items-center rounded-full p-1 bg-gray-200/20 ">
                    <Settings style={{ color: "white", fontSize: "18" }} />
                  </div>

                  <h1 className="text-xs text-white font-bold w-auto max-w-20 lg:max-w-full leading-4">
                    Cài đặt tài khoản
                  </h1>
                </HashLink>

                {/* <div className="flex flex-row gap-3 rounded-lg w-full pl-2 h-[40px] hover:bg-sky-800 py-1 items-center">
                  <div className="w-8 h-8 flex justify-center items-center rounded-full p-1 bg-gray-200/20 ">
                    <DarkModeRounded
                      style={{ color: "white", fontSize: "18" }}
                    />
                  </div>

                  <h1 className="text-xs text-white font-bold w-auto max-w-20 lg:max-w-full leading-4">
                    Trợ năng
                  </h1>
                </div> */}

                <button
                  className="flex flex-row gap-3 rounded-lg w-full pl-2 h-[40px] hover:bg-sky-800 py-1 items-center"
                  onClick={() => {
                    localStorage.removeItem("user");
                    navigate("/Home#hero");
                    setModal(!modal);
                  }}
                >
                  <div className="w-8 h-8 flex justify-center items-center rounded-full p-1 bg-gray-200/20 ">
                    <Logout style={{ color: "white", fontSize: "18" }} />
                  </div>

                  <h1 className="text-xs text-white font-bold  max-w-20 lg:max-w-full leading-4">
                    Đăng xuất
                  </h1>
                </button>
              </div>

              <div className="relative w-11 h-11">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500"></div>
                <div className="w-10 h-10 flex justify-center items-center rounded-full bg-gray-200/20 absolute top-[0.125rem] left-[0.125rem]">
                  <img
                    className="w-full h-full object-cover rounded-full"
                    src={avatarUrl || profile}
                    alt=""
                    loading="lazy"
                  ></img>
                </div>
              </div>
              <div className="w-4 h-4 absolute bottom-[-1px] p-1 right-0 bg-black rounded-full">
                <img
                  className="object-cover w-full h-full invert "
                  alt=""
                  src={down}
                ></img>
              </div>
            </button>
          </div>
          <nav className="flex flex-col text-sm lg:text-base 2xl:text-xl gap-1 lg:gap-2 text-center uppercase items-center   text-black  justify-start ">
            <HashLink
              smooth
              className={`self-start h-[30px]  lg:h-[50px] w-full flex items-center  hover:bg-blue-500 hover:text-white pl-[15px] md:pl-[30px] cursor-pointer ${activePage === "/Home"
                ? "bg-blue-500 text-white"
                : "bg-transparent"
                }`}
              to="/Home#hero"
            >
              Trang chủ
            </HashLink>
            <div
              className={`self-start h-[30px] relative lg:h-[50px] w-full flex items-center  hover:bg-blue-500 hover:text-white pl-[15px] md:pl-[30px] cursor-pointer ${activePage === "/About"
                ? "bg-blue-500 text-white"
                : "bg-transparent"
                }`}
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <HashLink
                smooth
                className=""
                to="/About#mission"
              >
                Về chúng tôi
              </HashLink>
              {isDropdownOpen && (
                <div
                  className="absolute left-0 top-[30px]  lg:top-[50px] w-full bg-gray-100 shadow-xl"
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  <HashLink
                    smooth
                    className="block px-4 py-2 text-xs lg:text-base h-[30px] lg:h-[40px] text-black hover:bg-sky-700 hover:text-white"
                    to="/About#mission"
                  >
                    Sứ mệnh
                  </HashLink>
                  <HashLink
                    smooth
                    className="block px-4 py-2 text-xs lg:text-base h-[30px] lg:h-[40px] text-black hover:bg-sky-700 hover:text-white"
                    to="/About#vision1"
                  >
                    Tầm nhìn
                  </HashLink>
                  <HashLink
                    smooth
                    className="block px-4 py-2 text-xs lg:text-base h-[30px] lg:h-[40px] text-black hover:bg-sky-700 hover:text-white"
                    to="/About#organization"
                  >
                    Tổ chức
                  </HashLink>
                  <HashLink
                    smooth
                    className="block px-4 py-2 text-xs lg:text-base h-[30px] lg:h-[40px] text-black hover:bg-sky-700 hover:text-white"
                    to="/Recruitment"
                  >
                    Tuyển thành viên
                  </HashLink>
                </div>
              )}
            </div>
            <HashLink
              smooth
              className={`self-start h-[30px]  lg:h-[50px] w-full flex items-center  hover:bg-blue-500 hover:text-white pl-[15px] md:pl-[30px] cursor-pointer ${activePage === "/Annoucement"
                ? "bg-blue-500 text-white"
                : "bg-transparent "
                }${isDropdownOpen ? "mt-[120px] lg:mt-[160px]" : ""}`}
              to="/Annoucement#hero"
              style={{ transition: 'margin 0.4s' }}
            >
              Tin tức - Sự kiện
            </HashLink>
            {/* <HashLink
              smooth
              className={`self-start h-[30px]  lg:h-[50px] w-full flex items-center  hover:bg-blue-500 hover:text-white pl-[15px] md:pl-[30px] cursor-pointer ${
                activePage === "/Course"
                  ? "bg-blue-500 text-white"
                  : "bg-transparent"
              }`}
              to="/Course"
            >
              Khóa học - Dự án
            </HashLink> */}

            <HashLink
              smooth
              className={`self-start h-[30px]  lg:h-[50px] w-full flex items-center  hover:bg-blue-500 hover:text-white pl-[15px] md:pl-[30px] cursor-pointer ${activePage === "/Partners"
                ? "bg-blue-500 text-white"
                : "bg-transparent "
                }`}
              to="/Partners#Partners"
            >
              Hợp tác - Đối tác
            </HashLink>
          </nav>
          <div className=" overflow-y-hidden absolute bottom-0 w-[270px] h-1/4 ml-[20px] lg:ml-[30px] border-t-2  border-t-gray-700 flex flex-row">
            <div className="w-3/5 h-full flex items-start justify-start flex-col ">
              <div className="w-full h-full flex flex-col gap-8 mt-8 ">
                <div className="w-full h-1/2 flex flex-col text-start text-black text-xs uppercase mt-2">
                  <h4 className=" w-full h-auto overflow-hidden ">
                    Powered by
                  </h4>
                  <h4 className="w-full h-auto overflow-hidden">
                    HCMUT.Anlaluot
                  </h4>
                </div>
              </div>
            </div>
            <div className="w-1/6 h-full mt-6 overflow-hidden pb-[30px] ml-[20px] rounded-2xl items-center justify-center flex flex-col gap-2 bg-black ">
              <a href="https://www.facebook.com/CLBNCKHKhoaY">
                <img
                  className="w-[30px] h-[30px] object-cover"
                  src={facebook}
                  alt=""
                ></img>
              </a>
            </div>
          </div>
        </div>
      </div>
      <img
        onClick={handleClick}
        alt="oh"
        className={`w-[30px] lg:w-[40px] top-[10px] lg:top-[20px] right-[10px] lg:right-[30px] bg-white p-2 rounded-full fixed h-[30px] lg:h-[40px] block cursor-pointer z-[1900] ${isActive ? "invert block visible " : "invert-0 hidden"
          }`}
        src={close}
      ></img>
      <img
        onClick={handleClick}
        alt="oh"
        className={`w-[30px] lg:w-[40px] top-[10px] lg:top-[20px]  right-[10px] lg:right-[30px] bg-white p-2  rounded-full fixed h-[30px] lg:h-[40px] block cursor-pointer z-[1900]    ${isActive ? "invert hidden" : "invert-0 block  visible"
          }`}
        src={lines}
      ></img>
    </div>
  );
}

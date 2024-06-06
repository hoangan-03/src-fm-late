import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import a1 from "../assets/pic/1.jpg";
import { FacebookRounded, GitHub, Google } from "@mui/icons-material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Modal from "@mui/material/Modal";
import tick from "../assets/pic/accept.png";
import info from "../assets/pic/info.png";
import close from "../assets/pic/close.png";
import { useGoogleLogin } from '@react-oauth/google';
const Auth = () => {
  const navigate = useNavigate();
  

  React.useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      navigate("/");
    }
  }, [navigate]);
  const [shouldNavigate, setShouldNavigate] = React.useState(false);

  React.useEffect(() => {
    if (shouldNavigate) {
      navigate("/");
    }
  }, [shouldNavigate]);
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const [isLogin, setIsLogin] = useState(true);
  const [name, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordReType, setPasswordReType] = useState("");
  const [checkedBox, setCheckedBox] = useState(false);
  const [apiKey, setApiKey] = useState("");
  const [open, setOpen] = useState(false);
  const [openlogin, setOpenLogin] = useState(false);
  const [registerError, setRegisterError] = useState("");
  const [loginError, setLoginError] = useState("");
  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const login = useGoogleLogin({
    onSuccess: async (response) => {
      try {
        const res = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${response.access_token}`,
            },
          }
        );
        
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    },
  });

  const switchMode = () => {
    setIsLogin((prevIsLogin) => !prevIsLogin);
  };
  const handleRegister = (event) => {
    event.preventDefault();
    if (password.length < 6 || password.length > 16) {
      setRegisterError("passwordlen");
      setOpen(true);
    } else if (password !== passwordReType) {
      setRegisterError("password");
      setOpen(true);
    } else if (apiKey !== import.meta.env.VITE_API_KEY && checkedBox) {
      setRegisterError("apikey");
      setOpen(true);
    } else {
      const user = {
        name,
        email,
        password,
        role: checkedBox ? "Admin" : "User",
        fullname: "",
        phonenumber: "",
        gender: "Other",
        yearofbirth: "",
        avatarurl: "",
      };

      axios
        .post(baseUrl + "/addUser", user)
        .then((res) => {
          setOpen(true);
          setRegisterError("");
          switchMode();
        })
        .catch((err) => {
          if (err.response) {
            if (err.response.status === 400) {
              setRegisterError("username");
              setOpen(true);
            } else if (err.response.status === 500) {
              console.error("Internal Server Error");
              console.error(err.response.data.message);
              console.error(err.response.data.stack);
            }
          } else {
            console.error(err);
          }
        });
    }
  };
  const handleLogin = (event) => {
    event.preventDefault();
    const user = {
      usernameOrEmail,
      password,
    };
    axios
      .post(baseUrl + "/login", user)
      .then((res) => {
        if (res.data.success) {
          localStorage.setItem("user", JSON.stringify(res.data.user));
          setOpenLogin(true);
          setLoginError("");
          setShouldNavigate(true);
        }
      })
      .catch((err) => {
        if (err.response) {
          console.log(err.response.data.message);
          if (err.response.status === 404) {
            setLoginError("nonexist");
          } else if (err.response.status === 403) {
            setLoginError("wrong");
          }
          setOpenLogin(true);
        } else {
          console.error(err);
        }
      });
  };
  const handleClose1 = () => {
    setOpen(false);
  };
  const handleClose2 = () => {
    setOpenLogin(false);
  };
  return (
    <section className="w-screen h-screen flex flex-row gap-2 airbnb justify-center items-center">
      <Modal
        open={openlogin}
        onClose={handleClose2}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div
          className={`absolute border-b-[8px] ${loginError === "" ? "border-b-green-500" : "border-b-amber-600"
            }  left-1/2 gap-1 top-1/2 flex h-[100px] w-[620px] -translate-x-[50%] -translate-y-[50%] flex-col items-center justify-center rounded-2xl bg-white`}
        >
          <div
            className={`flex flex-row gap-4 h-full w-full justify-between px-4`}
          >
            <div className="flex flex-row gap-4 h-full w-full">
              <div
                className={`h-[45px] w-[45px] p-1 self-center rounded-xl flex justify-center items-center ${loginError === "" ? "bg-green-500/20" : "bg-amber-600/20"
                  } `}
              >
                <img
                  className="w-[30px] h-[30px]"
                  alt=""
                  src={`${loginError === "" ? tick : info}`}
                ></img>
              </div>
              <div className="w-auto h-[70px] self-center flex flex-col text-start justify-center items-start">
                <h2
                  className={`  w-auto text-start items-start text-2xl  font-bold text-black`}
                >
                  {loginError === ""
                    ? "Đăng nhập thành công"
                    : "Đăng nhập thất bại"}
                </h2>
                <h1
                  className={`w-auto text-start items-start text-base font-semibold text-gray-700`}
                >
                  {loginError === ""
                    ? ""
                    : loginError === "nonexist"
                      ? "Tên tài khoản hoặc email không tồn tại"
                      : "Mật khẩu đăng nhập không chính xác"}
                </h1>
              </div>
            </div>
            <button
              onClick={() => handleClose2()}
              className="w-[40px] h-[40px] flex self-center rounded-full justify-center items-center p-3 hover:bg-gray-200/30"
            >
              <img
                alt=""
                className="w-full h-full object-cover"
                src={close}
              ></img>
            </button>
          </div>
        </div>
      </Modal>
      <Modal
        open={open}
        onClose={handleClose1}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div
          className={`absolute border-b-[8px] ${registerError === "" ? "border-b-green-500" : "border-b-amber-600"
            }  left-1/2 gap-1 top-1/2 flex h-[100px] w-[620px] -translate-x-[50%] -translate-y-[50%] flex-col items-center justify-center rounded-2xl bg-white`}
        >
          <div
            className={`flex flex-row gap-4 h-full w-full justify-between px-4`}
          >
            <div className="flex flex-row gap-4 h-full w-full">
              <div
                className={`h-[45px] w-[45px] p-1 self-center rounded-xl flex justify-center items-center ${registerError === "" ? "bg-green-500/20" : "bg-amber-600/20"
                  } `}
              >
                <img
                  className="w-[30px] h-[30px]"
                  alt=""
                  src={`${registerError === "" ? tick : info}`}
                ></img>
              </div>
              <div className="w-auto h-[70px] self-center flex flex-col text-start justify-center items-start">
                <h2
                  className={`  w-auto text-start items-start text-2xl  font-bold text-black`}
                >
                  {registerError === ""
                    ? "Đăng kí tài khoản thành công"
                    : "Đăng kí tài khoản thất bại"}
                </h2>
                <h1
                  className={`  w-auto text-start items-start text-base font-semibold text-gray-700`}
                >
                  {registerError === ""
                    ? "Tài khoản của bạn đã được chấp thuận"
                    : registerError === "passwordlen"
                      ? "Mật khẩu phải có độ dài từ 6 đến 16 kí tự"
                      : registerError === "password"
                        ? "Mật khẩu nhập lại không chính xác"
                        : registerError === "username"
                          ? "Tên tài khoản hoặc email đã tồn tại"
                          : "Mã API không chính xác"}
                </h1>
              </div>
            </div>
            <button
              onClick={() => handleClose1()}
              className="w-[40px] h-[40px] flex self-center rounded-full justify-center items-center p-3 hover:bg-gray-200/30"
            >
              <img
                alt=""
                className="w-full h-full object-cover"
                src={close}
              ></img>
            </button>
          </div>
        </div>
      </Modal>
      <div className="flex flex-col h-[400px] items-center justify-between  pl-0 lg:pl-[200px] w-1/2 ">
        {isLogin ? (
          <div className="w-[300px] lg:w-[420px] flex flex-col gap-2 justify-center items-center">
            <h2 className="text-xl lg:text-3xl font-bold mb-4">
              Chào mừng bạn trở lại
            </h2>
            <form className="flex flex-col w-full gap-3" onSubmit={handleLogin}>
              <input
                className=" px-7 py-2 border rounded-2xl "
                type="text"
                placeholder="Username or Email"
                required
                onChange={(e) => setUsernameOrEmail(e.target.value)}
              />
              <input
                className="px-7 py-2 border rounded-2xl"
                type="password"
                placeholder="Password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className="text-black text-sm text-end mb-6">
                Quên mật khẩu?
              </button>
              <button
                className="px-3 py-3 bg-sky-800 text-white text-sm lg:text-base rounded-3xl"
                type="submit"
              >
                Đăng nhập
              </button>
              <h2 className='text-black text-center text-sm mt-3 mb-3'>Hoặc tiếp tục bằng</h2>
              <div className='flex flex-row items-center justify-center gap-5 w-full'>
                <button onClick={() => login()} className='w-[40px] h-[40px] flex justify-center items-center bg-sky-800 rounded-full'>
                <Google style={{color: 'white'}} />
                </button>
                <button className='w-[40px] h-[40px] flex justify-center items-center bg-sky-800 rounded-full'>
                <FacebookRounded style={{color: 'white'}} />
                </button>
                <button className='w-[40px] h-[40px] flex justify-center items-center bg-sky-800 rounded-full '>
                <GitHub style={{color: 'white'}} />
                </button>
                
              </div>
            </form>
          </div>
        ) : (
          <div className="w-[300px] lg:w-[420px] flex flex-col gap-2 justify-center items-center">
            <h2 className="text-xl lg:text-3xl font-bold mb-4">
              Đăng kí tài khoản mới
            </h2>
            <form
              className="flex flex-col w-full gap-3"
              onSubmit={handleRegister}
            >
              <input
                className=" px-7 py-2 border rounded-2xl "
                type="text"
                placeholder="Tên tài khoản"
                required
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                className=" px-7 py-2 border rounded-2xl "
                type="email"
                placeholder="Email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="px-7 py-2 border rounded-2xl"
                type="password"
                placeholder="Mật khẩu"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                className="px-7 py-2 border rounded-2xl"
                type="password"
                placeholder="Nhập lại mật khẩu"
                required
                onChange={(e) => setPasswordReType(e.target.value)}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Đăng kí tài khoản quản trị viên"
                style={{ color: "black", fontWeight: "bold" }}
                onChange={(e) => setCheckedBox(e.target.checked)}
              />
              <input
                className={`px-7 py-2 border rounded-2xl ${checkedBox ? "block" : "hidden"
                  }`}
                type="text"
                placeholder="Mã API"
                onChange={(e) => setApiKey(e.target.value)}
              />
              <button
                className="px-3 py-3 bg-sky-800 text-white text-sm lg:text-base rounded-3xl"
                type="submit"
              >
                Đăng kí
              </button>
              {/* <h2 className='text-black text-center text-sm mt-3 mb-3'>Hoặc tiếp tục bằng</h2>
              <div className='flex flex-row items-center justify-center gap-5 w-full'>
                <button className='w-[40px] h-[40px] flex justify-center items-center bg-sky-800 rounded-full'>
                <Google style={{color: 'white'}} />
                </button>
                <button className='w-[40px] h-[40px] flex justify-center items-center bg-sky-800 rounded-full'>
                <FacebookRounded style={{color: 'white'}} />
                </button>
                <button className='w-[40px] h-[40px] flex justify-center items-center bg-sky-800 rounded-full '>
                <GitHub style={{color: 'white'}} />
                </button>
                
              </div> */}
            </form>
          </div>
        )}
        <h2 className=" text-black text-center text-sm mt-20">
          {isLogin ? "Không phải thành viên? " : "Đã có tài khoản? "}
          <button className="text-sky-700" onClick={switchMode}>
            {isLogin ? "Đăng kí ngay" : "Đăng nhập ngay"}
          </button>
        </h2>
      </div>
      <div className="w-1/2 h-full pt-[100px] pb-[50px] pr-[50px] rounded-3xl lg:block hidden">
        <img
          src={a1}
          className="w-full h-full object-cover rounded-3xl"
          alt=""
        ></img>
      </div>
    </section>
  );
};

export default Auth;

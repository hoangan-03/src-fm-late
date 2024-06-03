import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import a1 from "../assets/pic/1.jpg";
// import { FacebookRounded, GitHub, Google } from "@mui/icons-material";

const Auth = () => {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const [isLogin, setIsLogin] = useState(true);
  const [name, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const switchMode = () => {
    setIsLogin((prevIsLogin) => !prevIsLogin);
  };
  const handleRegister = (event) => {
    event.preventDefault();
    const user = {
      name,
      email,
      password,
      role: "User",
      fullname: "",
      phonenumber: "",
      gender: "Other",
      yearofbirth: "",
      avatarurl: "",
    };

    axios
      .post(baseUrl + "/addUser", user)
      .then((res) => {
        console.log("User created successfully");
        switchMode();
      })
      .catch((err) => {
        if (err.response) {
          if (err.response.status === 400) {
            console.log("User already exists");
          } else if (err.response.status === 500) {
            console.error("Internal Server Error");
            console.error(err.response.data.message);
            console.error(err.response.data.stack);
          }
        } else {
          console.error(err);
        }
      });
  };
  const handleLogin = (event) => {
    event.preventDefault();
    const user = {
      name,
      email,
      password,
      role: "User",
    };

    axios
      .post(baseUrl + "/login", user)
      .then((res) => {
        if (res.data.success) {
          localStorage.setItem("user", JSON.stringify(res.data.user));
          console.log(res.data.message);
          navigate("/");
        } else {
          console.log(res.data.message);
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <section className="w-screen h-screen flex flex-row gap-2 airbnb justify-center items-center">
      <div className="flex flex-col h-[400px] items-center justify-between  pl-0 lg:pl-[200px] w-1/2 ">
        {isLogin ? (
          <div className="w-[300px] lg:w-[420px] flex flex-col gap-2 justify-center items-center">
            <h2 className="text-xl lg:text-3xl font-bold mb-4">
              Chào mừng bạn trở lại
            </h2>
            <form className="flex flex-col w-full gap-3" onSubmit={handleLogin}>
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
                placeholder="Username"
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
                placeholder="Password"
                required
                onChange={(e) => setPassword(e.target.value)}
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

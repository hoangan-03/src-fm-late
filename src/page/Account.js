import { useState, useEffect, useRef } from "react";
import axios from "axios";
import React from "react";
import avatar from "../assets/pic/man.png";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { blue } from "@mui/material/colors";
import { styled } from "@mui/system";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import Modal from "@mui/material/Modal";
import tick from "../assets/pic/accept.png";
import info from "../assets/pic/info.png";
import close from "../assets/pic/close.png";
const BlueOutlinedTextField = styled(TextField)(() => ({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: blue[300],
    },
    "&:hover fieldset": {
      borderColor: blue[500],
    },
    "&.Mui-focused fieldset": {
      borderColor: blue[800],
    },
    "& input": {
      color: "black",
      fontWeight: "600",
    },
  },
  "& .MuiInputLabel-root": {
    fontWeight: "bold",
    color: "gray",
  },
}));
const Account = () => {
  const fileInputRef = useRef(null);
  const baseUrl = process.env.REACT_APP_BASEURL;
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user")) || {};
  const [fullname, setFullname] = useState("");
  const [role, setRole] = useState("");
  const [username, setUsername] = useState(user.name || "");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [gender, setGender] = useState("");
  const [yearofbirth, setYearOfBirth] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");
  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState(null);
  const handleState = (boole) => {
    setSuccess(boole);
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.post(baseUrl + "/api/users", {
          name: username,
        });
        if (response.status === 200) {
          const user = response.data[0];
          setFullname(user.fullname);
          setRole(user.role);
          setUsername(user.name);
          setEmail(user.email);
          setPassword(user.password);
          setPhonenumber(user.phonenumber);
          setGender(user.gender);
          setYearOfBirth(user.yearofbirth);
          setAvatarUrl(user.avatarurl);
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
    };
    fetchUserData();
  }, [username, baseUrl]);
  const [active, setActive] = useState(1);

  const changeActive = (index) => {
    setActive(index);
  };

  const handleFullnameChange = (event) => {
    setFullname(event.target.value);
  };
  const handlePhoneNumberChange = (event) => {
    setPhonenumber(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleYOBChange = (date) => {
    setYearOfBirth(date.format("YYYY-MM-DD"));
  };
  const handleImageUploaddd = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setAvatarUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const saveChanges = async () => {
    try {
      const response = await axios.put(baseUrl + `/updateUser/${username}`, {
        name: username,
        email: email,
        role: role,
        fullname: fullname,
        phonenumber: phonenumber,
        gender: gender,
        yearofbirth: yearofbirth,
        avatarurl: avatarUrl === avatar ? "" : avatarUrl,
        password: password,
      });
      if (response.status === 200) {
        console.log("User updated successfully:", response.data);
        handleState(true);
        setOpen(true);
      } else {
        console.log("Error updating user:", response.status, response.data);
        handleState(false);
        setOpen(true);
      }
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };
  useEffect(() => {
    const fileInput = fileInputRef.current;
    if (fileInput) {
      fileInput.addEventListener("change", handleImageUploaddd);
    }

    return () => {
      if (fileInput) {
        fileInput.removeEventListener("change", handleImageUploaddd);
      }
    };
  }, []);
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <section className="w-screen flex justify-center bg-sky-100 items-center h-screen pt-[50px]">
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div
          className={`absolute border-b-[8px] ${
            success ? "border-b-green-500" : "border-b-amber-600"
          }  left-1/2 gap-1 top-1/2 flex h-[100px] w-[620px] -translate-x-[50%] -translate-y-[50%] flex-col items-center justify-center rounded-2xl bg-white`}
        >
          <div
            className={`flex flex-row gap-4 h-full w-full justify-between px-4`}
          >
            <div className="flex flex-row gap-4 h-full w-full">
              <div
                className={`h-[45px] w-[45px] p-1 self-center rounded-xl flex justify-center items-center ${
                  success ? "bg-green-500/20" : "bg-amber-600/20"
                } `}
              >
                <img
                  className="w-[30px] h-[30px]"
                  alt=""
                  src={`${success ? tick : info}`}
                ></img>
              </div>
              <div className="w-auto h-[70px] self-center flex flex-col text-start justify-center items-start">
                <h2
                  className={`  w-auto text-start items-start text-2xl  font-bold text-black`}
                >
                  {active ? "Cập nhật thông tin thành công" : "Cập nhật thông tin thất bại"}
                </h2>
                <h1
                  className={`  w-auto text-start items-start text-base font-semibold text-gray-700`}
                >
                  {success
                    ? "Thông tin của bạn đã được cập nhật lên hệ thống"
                    : "Vui lòng thử lại sau, xin lỗi vì sự bất tiện này"}
                </h1>
              </div>
            </div>
            <button
              onClick={() => handleClose()}
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
      <div className="w-[900px] h-[90%] bg-white flex flex-row">
        <div className="w-[35%] flex flex-col ">
          <div className="w-full h-[30%] bg-gray-100 flex flex-col gap-4 justify-center items-center px-3 py-6">
            <div className="w-full flex flex-row gap-4 justify-center items-center">
              <div className="w-[40%] h-full flex flex-col gap-2 justify-start items-center ">
                <img
                  className="w-20 h-20 object-cover rounded-full"
                  src={avatarUrl || avatar}
                  alt=""
                ></img>
              </div>
              <div className="w-[60%] h-full flex flex-col justify-start items-start gap-3">
                <button
                  className="w-full h-auto text-sm font-bold bg-sky-800 hover:bg-sky-700 text-white px-2 py-2 flex justify-center items-center rounded-2xl"
                  onClick={() => fileInputRef.current.click()}
                >
                  Đổi ảnh đại diện
                </button>
                <input
                  type="file"
                  ref={fileInputRef}
                  accept="image/*"
                  style={{ display: "none" }}
                />
                <button
                  className="w-full h-auto text-sm font-bold bg-white text-red-700 hover:text-red-800 px-2 py-2 flex justify-center items-center rounded-2xl"
                  onClick={() => setAvatarUrl(avatar)}
                >
                  Xóa ảnh
                </button>
              </div>
            </div>
            <h1 className="text-lg font-bold">
              {fullname ? fullname : "Chưa biết"}
            </h1>
          </div>
          <div className="w-full h-[70%] bg-gray-200 flex flex-col justify-between items-center">
            <div className="h-auto w-full flex flex-col justify-start items-center">
              <div
                className={`flex cursor-pointer flex-row w-full pl-5 py-2 justify-start items-center border-l-4 gap-3  ${
                  active === 1
                    ? "bg-white border-sky-700"
                    : "hover:bg-white hover:border-black"
                } `}
                onClick={() => changeActive(1)}
              >
                <i
                  className={`fi w-auto h-auto flex justify-center items-center text-lg fi-rr-info text-center self-center ${
                    active === 1 ? "text-sky-700" : "text-black"
                  }`}
                ></i>
                <h1
                  className={`text-lg flex mb-1 justify-center items-center ${
                    active === 1 ? "font-bold text-sky-700" : "font-semibold"
                  }`}
                >
                  Thông tin cá nhân
                </h1>
              </div>
              <div
                className={`flex cursor-pointer flex-row w-full pl-5 py-2 justify-start items-center border-l-4 gap-3  ${
                  active === 2
                    ? "bg-white border-sky-700"
                    : "hover:bg-white hover:border-black"
                } `}
                onClick={() => changeActive(2)}
              >
                <i
                  className={`fi w-auto h-auto flex justify-center items-center text-lg fi-rr-shopping-cart-add text-center self-center ${
                    active === 2 ? "text-sky-700" : "text-black"
                  }`}
                ></i>
                <h1
                  className={`text-lg flex mb-1 justify-center items-center ${
                    active === 2 ? "font-bold text-sky-700" : "font-semibold"
                  }`}
                >
                  Quản lí đơn hàng
                </h1>
              </div>
              <div
                className={`flex cursor-pointer flex-row w-full pl-5 py-2 justify-start items-center border-l-4 gap-3 ${
                  active === 3
                    ? "bg-white border-sky-700"
                    : "hover:bg-white hover:border-black"
                } `}
                onClick={() => changeActive(3)}
              >
                <i
                  className={`fi w-auto h-auto flex justify-center items-center text-lg fi-rr-e-learning text-center self-center ${
                    active === 3 ? "text-sky-700" : "text-black"
                  }`}
                ></i>
                <h1
                  className={`text-lg flex mb-1 justify-center items-center ${
                    active === 3 ? "font-bold text-sky-700" : "font-semibold"
                  }`}
                >
                  Quản lí khóa học
                </h1>
              </div>
              <div
                className={`flex cursor-pointer flex-row w-full pl-5 py-2 justify-start items-center border-l-4 gap-3 ${
                  active === 4
                    ? "bg-white border-sky-700"
                    : "hover:bg-white hover:border-black"
                } `}
                onClick={() => changeActive(4)}
              >
                <i
                  className={`fi w-auto h-auto flex justify-center items-center text-lg fi-rr-credit-card text-center self-center ${
                    active === 4 ? "text-sky-700" : "text-black"
                  }`}
                ></i>
                <h1
                  className={`text-lg flex mb-1 justify-center items-center ${
                    active === 4 ? "font-bold text-sky-700" : "font-semibold"
                  }`}
                >
                  Phương thức thanh toán
                </h1>
              </div>
            </div>
            <div
              className={`flex cursor-pointer flex-row w-full pl-5 py-2 justify-start items-center border-l-4 gap-3 hover:bg-white hover:border-black`}
              onClick={() => {
                localStorage.removeItem("user");
                navigate("/Home#hero");
              }}
            >
              <i
                className={`fi w-auto h-auto flex justify-center items-center text-lg fi-rr-exit text-center self-center 
                text-black
                `}
              ></i>
              <h1
                className={`text-lg flex mb-1 justify-center items-center 
                  font-semibold
                `}
              >
                Đăng xuất
              </h1>
            </div>
          </div>
        </div>
        <div className="w-[70%] px-[40px] py-[20px]">
          <div className="flex flex-col gap-5 justify-start items-centers ">
            <div className="flex flex-row h-[60px] w-full justify-start items-center gap-6">
              <i
                className={`fi w-auto h-auto flex justify-center items-center text-3xl fi-rr-info text-center self-centertext-sky-700 text-black`}
              ></i>
              <h1 className="font-bold text-3xl mb-1">Thông tin cá nhân</h1>
            </div>
            <div className="w-full h-auto flex flex-col gap-4">
              <Box
                sx={{
                  width: "100%",
                  maxWidth: "100%",
                  borderColor: "blue",
                }}
              >
                <BlueOutlinedTextField
                  fullWidth
                  label="Họ và Tên"
                  id="fullWidth"
                  variant="outlined"
                  size="small"
                  value={fullname}
                  onChange={handleFullnameChange}
                />
              </Box>
              <Box
                sx={{
                  width: "100%",
                  maxWidth: "100%",
                  borderColor: "blue",
                }}
              >
                <BlueOutlinedTextField
                  fullWidth
                  label="Tên tài khoản"
                  id="fullWidth"
                  variant="outlined"
                  disabled
                  size="small"
                  value={username}
                />
              </Box>
              <Box
                sx={{
                  width: "100%",
                  maxWidth: "100%",
                  borderColor: "blue",
                }}
              >
                <BlueOutlinedTextField
                  fullWidth
                  label="Email"
                  id="fullWidth"
                  variant="outlined"
                  size="small"
                  value={email}
                  onChange={handleEmailChange}
                />
              </Box>
              <Box
                sx={{
                  width: "100%",
                  maxWidth: "100%",
                  borderColor: "blue",
                }}
              >
                <BlueOutlinedTextField
                  fullWidth
                  label="Quyền"
                  id="fullWidth"
                  variant="outlined"
                  size="small"
                  disabled
                  value={role === "User" ? "Người dùng" : "Quản trị viên"}
                />
              </Box>
              <Box
                sx={{
                  width: "100%",
                  maxWidth: "100%",
                  borderColor: "blue",
                }}
              >
                <BlueOutlinedTextField
                  fullWidth
                  label="Số điện thoại"
                  id="fullWidth"
                  variant="outlined"
                  size="small"
                  value={phonenumber}
                  onChange={handlePhoneNumberChange}
                />
              </Box>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label={<span className="work">Ngày sinh</span>}
                  value={dayjs(yearofbirth ? yearofbirth : "2000-01-01")}
                  onChange={handleYOBChange}
                  slotProps={{ textField: { size: "small" } }}
                  sx={{
                    ".MuiInputBase-input": {
                      color: "black",
                      fontWeight: "bold",
                    },
                    ".MuiInputLabel-root": {
                      color: "black",
                      fontWeight: "bold",
                    },
                  }}
                />
              </LocalizationProvider>
              <div className="flex flex-row h-[100px] gap-4">
                <div
                  onClick={() => setGender("Male")}
                  className={`w-[120px] cursor-pointer h-full flex flex-col justify-center gap-1 pt-3 items-center rounded-md   ${
                    gender === "Male"
                      ? "bg-sky-600 "
                      : "bg-white border-2 border-gray-200"
                  }`}
                >
                  <i
                    class={`text-4xl flex justify-center items-center fi fi-br-male ${
                      gender === "Male" ? "text-white" : "text-black"
                    }`}
                  ></i>
                  <h2
                    className={`text-xl ${
                      gender === "Male" ? "text-white" : "text-gray-700"
                    }`}
                  >
                    Nam
                  </h2>
                </div>
                <div
                  onClick={() => setGender("Female")}
                  className={`w-[120px] cursor-pointer h-full flex flex-col justify-center gap-1 pt-3 items-center rounded-md   ${
                    gender === "Female"
                      ? "bg-sky-600 "
                      : "bg-white border-2 border-gray-200"
                  }`}
                >
                  <i
                    class={`text-4xl flex justify-center items-center fi fi-br-female ${
                      gender === "Female" ? "text-white" : "text-black"
                    }`}
                  ></i>
                  <h2
                    className={`text-xl ${
                      gender === "Female" ? "text-white" : "text-gray-700"
                    }`}
                  >
                    Nữ
                  </h2>
                </div>
                <div
                  onClick={() => setGender("Other")}
                  className={`w-[120px] cursor-pointer h-full flex flex-col justify-center gap-1 pt-3 items-center rounded-md   ${
                    gender === "Other"
                      ? "bg-sky-600 "
                      : "bg-white border-2 border-gray-200"
                  }`}
                >
                  <i
                    class={`text-4xl flex justify-center items-center fi fi-br-question ${
                      gender === "Other" ? "text-white" : "text-black"
                    }`}
                  ></i>
                  <h2
                    className={`text-xl ${
                      gender === "Other" ? "text-white" : "text-gray-700"
                    }`}
                  >
                    Khác
                  </h2>
                </div>
              </div>
              <div className="flex flex-row gap-4 h-[40px] w-full items-center justify-start">
                <button
                  onClick={saveChanges}
                  className="h-full w-auto bg-sky-600 text-white rounded-lg font-bold flex justify-center items-center px-12 py-2 cursor-pointer hover:bg-sky-100 hover:text-sky-600"
                >
                  Lưu{" "}
                </button>
                <button className="h-full w-auto cursor-pointer bg-gray-100 text-black rounded-lg font-bold flex justify-center items-center px-12 py-2 hover:bg-gray-300">
                  Đặt lại{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Account;

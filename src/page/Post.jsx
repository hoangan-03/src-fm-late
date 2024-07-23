import  { useState, useEffect, useRef } from "react";
import axios from "axios";
import ReactQuill from "react-quill";
import Modal from "@mui/material/Modal";
import * as Emoji from "quill-emoji";
import Quill from "quill";
import "react-quill/dist/quill.snow.css";
import "quill-emoji/dist/quill-emoji.css";
import image from "../assets/pic/add-image.png";
import tick from "../assets/pic/accept.png";
import info from "../assets/pic/info.png";
import close from "../assets/pic/close.png";
Quill.register("modules/emoji", Emoji);
const TOOLBAR_OPTIONS = [
  ["bold", "italic", "underline", "strike"],
  ["blockquote", "code-block"],

  [{ header: 1 }, { header: 2 }],
  [{ list: "ordered" }, { list: "bullet" }],
  [{ script: "sub" }, { script: "super" }],
  [{ indent: "-1" }, { indent: "+1" }],
  [{ direction: "rtl" }],

  [{ size: ["small", false, "large", "huge"] }],
  [{ header: [1, 2, 3, 4, false] }],

  [{ color: [] }, { background: [] }],
  [{ font: [] }],
  [{ align: [] }],
  ["link", "image"],

  ["clean"],
];

const categoryOptions = ["Thông báo", "Sự kiện"];

const Post = () => {

  const baseUrl = import.meta.env.VITE_BASE_URL;
  const [active, setActive] = useState(null);
  const handleActive = (boole) => {
    setActive(boole);
  };
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Thông báo");
  const [imageUrl, setImageUrl] = useState("");
  const fileInputRef = useRef(null);
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const handlePublish = async () => {
    const dates = [
      "Thứ hai",
      "Thứ ba",
      "Thứ tư",
      "Thứ năm",
      "Thứ sáu",
      "Thứ bảy",
      "Chủ nhật",
    ];
    const currentDate = new Date();
    const day = currentDate.getDate();

    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();
    const date = dates[currentDate.getDay()];
    const formattedDate = `${date}, ${day}/${month+1}/${year}`;
    try {
      const newData = {
        heading: title,
        date: formattedDate,
        category: selectedCategory,
        p: value,
        image: imageUrl,
      };

      await axios.post(baseUrl + "/addPost", newData);
      setImageUrl(null);
      setTitle("");
      setValue(null);
      setSelectedCategory(null);
      handleActive(true);
      setOpen(true);
    } catch (error) {
      handleActive(false);
      setOpen(true);
    }
  };
  useEffect(() => {
    const fileInput = fileInputRef.current;
    if (fileInput) {
      fileInput.addEventListener("change", handleImageUpload);
    }

    return () => {
      if (fileInput) {
        fileInput.removeEventListener("change", handleImageUpload);
      }
    };
  }, []);
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <section className="w-screen h-auto flex flex-col justify-center items-center">
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div
          className={`absolute border-b-[8px] ${
            active ? "border-b-green-500" : "border-b-amber-600"
          }  left-1/2 gap-1 top-1/2 flex h-[100px] w-[620px] -translate-x-[50%] -translate-y-[50%] flex-col items-center justify-center rounded-2xl bg-white`}
        >
          <div
            className={`flex flex-row gap-4 h-full w-full justify-between px-4`}
          >
            <div className="flex flex-row gap-4 h-full w-full">
              <div
                className={`h-[45px] w-[45px] p-1 self-center rounded-xl flex justify-center items-center ${
                  active ? "bg-green-500/20" : "bg-amber-600/20"
                } `}
              >
                <img
                  className="w-[30px] h-[30px]"
                  alt=""
                  src={`${active ? tick : info}`}
                ></img>
              </div>
              <div className="w-auto h-[70px] self-center flex flex-col text-start justify-center items-start">
                <h2
                  className={`  w-auto text-start items-start text-2xl  font-bold text-black`}
                >
                  {active ? "Đăng tải thành công" : "Đăng tải thất bại"}
                </h2>
                <h1
                  className={`  w-auto text-start items-start text-base font-semibold text-gray-700`}
                >
                  {active
                    ? "Bài viết đã được đăng tải"
                    : "Đăng tải bài viết thất bại. Kiểm tra lại các mục cần được điền."}
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

      <div className="flex flex-col mb-[50px] w-[70vw]  h-auto gap-1 md:gap-3  justify-start ">
        <div className="w-[150px] h-[45px] md:h-[40px] mt-[120px] text-base md:text-base">
          <select
            className="w-full h-full border-[1px]  border-black p-1"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categoryOptions.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div className="w-full h-[35px] md:h-[50px] text-base md:text-xl">
          <input
            type="text"
            placeholder="Tiêu đề của bài viết"
            className="w-full h-full border-[1px]   border-black p-1 md:p-3"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
        </div>
        <input
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          ref={fileInputRef}
        />

        <div id="quill-editor">
          <ReactQuill
            theme="snow"
            placeholder="Viết gì đó ở đây"
            modules={{
              toolbar: {
                container: TOOLBAR_OPTIONS,
              },
              "emoji-toolbar": true,
              "emoji-textarea": false,
              "emoji-shortname": true,
            }}
            value={value}
            onChange={setValue}
          />
        </div>
        <div className="self-center flex justify-center  h-[50px] w-[50px]  cursor-pointer">
          <button onClick={() => fileInputRef.current.click()}>
            <label className="w-[50px] cursor-pointer overflow-hidden h-[50px]">
              <img
                className="w-full cursor-pointer overflow-hidden h-full"
                src={image}
                alt=""
              ></img>
            </label>
          </button>
        </div>
        <div
          className={`preview w-full h-[220px] flex flex-col aspect-video ${
            imageUrl ? "flex" : "hidden"
          }`}
        >
          <div className={`justify-center mt-3 flex `}>
            {imageUrl && (
              <img
                className="h-[200px] w-[355px] border-4 border-black"
                src={imageUrl}
                alt="Uploaded"
              />
            )}
          </div>
        </div>
        <div
          className={`w-full h-[35px]  flex flex-col  ${
            imageUrl ? "hidden" : "flex"
          }`}
        >
          <p className="text-sm md:text-base self-center font-semibold ">
            Tải hình nền lên (bắt buộc)
          </p>
        </div>

        <button
          className=" button-89 w-[170px] h-[60px] text-center text-sm md:text-base  self-center bt font-bold text-black"
          onClick={handlePublish}
        >
          Đăng bài viết
        </button>
      </div>
    </section>
  );
};

export default Post;

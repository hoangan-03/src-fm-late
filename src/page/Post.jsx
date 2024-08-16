/* eslint-disable no-constant-condition */
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import ReactQuill from "react-quill";
import * as Emoji from "quill-emoji";
import Quill from "quill";
import "react-quill/dist/quill.snow.css";
import "quill-emoji/dist/quill-emoji.css";
import image from "../assets/pic/add-image.png";
// import { resizeImage } from "../functions/resizeImage";
import ToolbarOptions from "../functions/ToolbarOptions";
import CustomModal from "../components/CustomModal";
Quill.register("modules/emoji", Emoji);

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
  const [error, setError] = useState("");
  const fileInputRef = useRef(null);
  const handleImageUpload = async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    try {
      const response = await axios.post(`${baseUrl}/upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      if (response.status === 200) {
        const uploadedImageUrl = response.data?.file?.path;
        setImageUrl(uploadedImageUrl);
        return uploadedImageUrl;
      } else {
        console.error('Failed to upload image', response.statusText);
        return null;
      }
    } catch (error) {
      console.error('Error uploading image:', error);
      return null;
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
    const formattedDate = `${date}, ${day}/${month + 1}/${year}`;
    try {
      const file = fileInputRef.current.files[0];
      let uploadedImageUrl = imageUrl;

      if (file && !uploadedImageUrl) {
        uploadedImageUrl = await handleImageUpload(file);
      }
      const newData = {
        heading: title,
        date: formattedDate,
        category: selectedCategory,
        p: value,
        image: uploadedImageUrl,
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
    const handleFileChange = async (event) => {
      const file = event.target.files[0];
      if (file) {
        if (file.size > 9 * 1024 * 1024) {
          setError("Kích thước ảnh vượt quá 10MB. Vui lòng thử ảnh khác");
          handleActive(false)
          setOpen(true);
          return;
        }
        const uploadedImageUrl = await handleImageUpload(file);
        setImageUrl(uploadedImageUrl);
      }
    };
    if (fileInput) {
      fileInput.addEventListener("change", handleFileChange);
    }
    return () => {
      if (fileInput) {
        fileInput.removeEventListener("change", handleFileChange);
      }
    };
  });
  const handleClose = () => {
    setOpen(false);
    setError("");
  };
  return (
    <section className="w-screen h-auto flex flex-col justify-center items-center">
      <CustomModal
        isSuccess={active}
        onClose={handleClose}
        open={open}
        action={"Đăng tải bài viết"}
        errorMes={error}
      />
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
            placeholder="Tiêu đề bài viết"
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
            placeholder="Nội dung bài viết"
            modules={{
              toolbar: {
                container: ToolbarOptions,
              },
              "emoji-toolbar": true,
              "emoji-textarea": false,
              "emoji-shortname": true,
            }}
            value={value}
            onChange={setValue}
          />
        </div>
        <div className="self-center flex justify-center mt-5 h-[50px] w-[50px]  cursor-pointer">
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
          className={`preview w-full h-[220px] flex flex-col aspect-video ${imageUrl ? "flex" : "hidden"
            }`}
        >
          <div className={`justify-center mt-3 flex `}>
            {imageUrl && (
              <img
                className="h-[200px] w-[355px] border-4 border-black object-cover"
                src={imageUrl}
                alt="Uploaded"
              />
            )}
          </div>
        </div>
        <div
          className={`w-full h-[35px]  flex flex-col  ${imageUrl ? "hidden" : "flex"
            }`}
        >
          <p className="text-sm md:text-base self-center font-semibold ">
            Tải hình nền lên (kích thước dưới 10MB)
          </p>
        </div>

        <button
          className=" button-89 w-auto h-[60px] text-center text-sm md:text-base  self-center bt font-bold text-black"
          onClick={handlePublish}
        >
          Đăng bài viết
        </button>
      </div>
    </section>
  );
};

export default Post;

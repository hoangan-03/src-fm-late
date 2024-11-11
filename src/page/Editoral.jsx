/* eslint-disable no-constant-condition */
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import ReactQuill from "react-quill";
import * as Emoji from "quill-emoji";
import Quill from "quill";
import "react-quill/dist/quill.snow.css";
import "quill-emoji/dist/quill-emoji.css";
import image from "../assets/pic/add-image.png";
import CustomModal from "../components/CustomModal";
import { useParams } from "react-router-dom";
import ToolbarOptions from "../functions/ToolbarOptions";
import { useNavigate } from "react-router-dom";
import { Edit } from "@mui/icons-material"; // Importing an icon from Material UI

Quill.register("modules/emoji", Emoji);

const categoryOptions = ["Thông báo", "Sự kiện"];
const Editoral = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const [currentData, setCurrentData] = useState({});
  useEffect(() => {
    axios
      .get(baseUrl + `/posts/${postId}`)
      .then((response) => {
        setCurrentData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [baseUrl, postId]);
  const [active, setActive] = useState(null);
  const handleActive = (boole) => {
    setActive(boole);
  };
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Sự kiện");
  const [imageUrl, setImageUrl] = useState(currentData?.image);
  useEffect(() => {
    if (currentData) {
      setValue(currentData.p || "");
      setTitle(currentData.heading || "");
      setSelectedCategory(currentData.category || "");
      setImageUrl(currentData.image || "");
    }
  }, [currentData]);
  const [error, setError] = useState("");
  const fileInputRef = useRef(null);
  const handleImageUpload = async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    try {
      const response = await fetch(`${baseUrl}/upload`, {
        method: 'POST',
        body: formData,
      });
      if (response.ok) {
        const data = await response.json();
        const uploadedImageUrl = data?.file?.path;
        setImageUrl(uploadedImageUrl);
        return uploadedImageUrl;
      } else {
        console.error('Failed to upload image', error);
        return null;
      }
    } catch (error) {
      console.error('Error uploading image:', error);
      return null;
    }
  };
  const handleEdit = async () => {
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
      const updatedPostData = {
        heading: title,
        date: formattedDate,
        category: selectedCategory,
        p: value,
        image: uploadedImageUrl,
      };
      await axios.put(`${baseUrl}/posts/updatePost/${postId}`, updatedPostData);
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
    navigate(`/ViewAllPost`);
    window.location.reload();
  };
  return (
    <section className="w-screen h-auto flex flex-col justify-center items-center bg-gray-100 py-32">
      <CustomModal
        isSuccess={active}
        onClose={handleClose}
        open={open}
        action={"Cập nhật bài viết"}
        errorMes={error}
      />
      <div className="flex flex-col mb-10 w-[90vw] lg:w-[70vw] bg-white shadow-lg rounded-lg p-6">
        <div className="flex items-center mb-6">
          <Edit className="text-xl mr-2" />
          <h2 className="text-xl font-semibold">Cập nhật bài viết</h2>
        </div>
        <div className="w-full mb-4">
          <select
            className="w-full h-12 border border-gray-300 rounded-lg p-2"
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
        <div className="w-full mb-4">
          <input
            type="text"
            placeholder="Tiêu đề bài viết"
            className="w-full h-12 border border-gray-300 rounded-lg p-2"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <input
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          ref={fileInputRef}
        />
        <div id="quill-editor" className="mb-4">
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
        <div className="self-center flex justify-center mt-5 h-12 w-12 cursor-pointer">
          <button onClick={() => fileInputRef.current.click()}>
            <label className="w-12 h-12 cursor-pointer overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={image}
                alt="Add"
              />
            </label>
          </button>
        </div>
        {imageUrl && (
          <div className="preview w-full h-auto flex flex-col items-center mt-4">
            <img
              className="h-48 w-64 border-4 border-gray-300 object-cover rounded-lg"
              src={imageUrl}
              loading="lazy"
              alt="Uploaded"
            />
          </div>
        )}
        {!imageUrl && (
          <div className="w-full h-auto flex flex-col items-center mt-4">
            <p className="text-sm font-semibold text-gray-600">
              Tải hình nền (kích thước dưới 10MB)
            </p>
          </div>
        )}
        <button className="mt-10 button-89 w-auto h-[60px] text-center text-sm md:text-base  self-center bt font-bold text-black" onClick={handleEdit}>Cập nhật bài viết</button>
      </div>
    </section>
  );
};

export default Editoral;
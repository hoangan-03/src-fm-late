/* eslint-disable react/prop-types */
import { useState } from "react";
import datee from "../assets/pic/date.png";
import parse from "html-react-parser";
import edit from "../assets/pic/edit.png";
import deleteIcon from "../assets/pic/delete.png";
import axios from "axios";
import { HashLink } from 'react-router-hash-link';
import CustomModal from "./CustomModal"
import { useNavigate } from 'react-router-dom';
function Container({ imageSrc, heading, date, p, category, editMode, postId, index }) {
  function removeHeadingTags(inputString) {
    return inputString.replace(/<\/?(h[1-3])>/gi, "");
  }
  const contentWithoutPTags = p.replace(/<\/?p>/g, "");
  const contentWithoutHeadings = removeHeadingTags(contentWithoutPTags);
  const contentWithoutImgTags = contentWithoutHeadings.replace(
    /<img\b[^>]*>/i,
    ""
  );
  const words = contentWithoutImgTags.split(" ");
  const first30WordsArray = words.slice(0, 60);
  const strippedFirst30WordsArray = first30WordsArray.map((word) =>
    word.replace(/<\/?strong>/g, "")
  );
  const first30Words = strippedFirst30WordsArray.join(" ");
  const truncatedFirst30Words = `${first30Words}...`;
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const handleDelete = async (postId) => {
    try {
      await axios.delete(
        `${baseUrl}/posts/deletePost/${postId}`,
      );
      setOpenModal(true);

    } catch (error) {
      console.error(error);
    }
  };
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const handleCloseModal = () => {
    setOpenModal(false);
    window.location.reload();
  };
  return (
    <div className="relative">
      <CustomModal open={openModal} isSuccess={true} action="Xóa bài viết" onClose={handleCloseModal} errorMes={""} />
      <HashLink key={postId} to={`/ViewAllPost/${index}#top`}
        className={`container relative  md:w-[975px] justify-center text-black items-center md:h-[224px] p-5 mt-3 flex flex-col md:flex-row gap-4 border-black border-b-[1px] `}
      >
        <div className={`w-[50px] h-auto flex flex-col bg-white hover:bg-none  ${category === "Thông báo" ? "md:hover:bg-blue-700" : "md:hover:bg-cyan-700"} gap-3 absolute right-0 md:right-[-50px] top-2 px-2 py-2 rounded-tr-xl rounded-br-xl ${editMode ? "block" : "hidden"}`}>
          <img onClick={(event) => {
            event.preventDefault();
            event.stopPropagation();
            navigate(`/ViewAllPost/Edit/${postId}`);
          }} className="w-7 h-7 object-cover hover:invert-0 md:hover:invert " alt="Edit" src={edit}></img>
          <img onClick={(event) => {
            event.preventDefault();
            event.stopPropagation();
            handleDelete(postId);
          }} className="w-7 h-7 object-cover hover:invert-0 md:hover:invert " alt="Delete" src={deleteIcon}></img>
        </div>
        <img
          src={imageSrc}
          alt="Container"
          loading="lazy"
          className="object-cover rounded-xl rounded-tl-none h-auto aspect-video w-2/3 md:w-auto md:h-full"
        />
        <div
          className={`flex flex-col gap-2 md:w-[700px] w-2/3 
        `}
        >
          <h2 className="rounded-b-md text-[12px] md:text-[18px] w-full h-1/2 text-start merry block font-semibold">
            {heading}
          </h2>
          <h3 className="w-full h-1/2 text-start text-[9px] md:text-[12px]  con merry">
            {parse(truncatedFirst30Words)}
          </h3>
          <div className="flex flex-row gap-1 justify-end w-full items-center">
            <img
              alt=""
              className="w-[12px] h-[12px] object-cover"
              src={datee}
            ></img>
            <h2
              className={` text-xs self-center  font-semibold text-center text-gray-600 `}
            >
              {date.substring(8)}
            </h2>
          </div>
        </div>
        <div className={`ml-5 hidden  absolute left-0 md:flex  top-0 w-auto h-[20px]  rounded-tl-lg rounded-tr-lg ${category === "Thông báo" ? "bg-blue-700" : "bg-cyan-700"} `}>
          <h2 className="text-xs lg:text-xs font-serif text-center py-1 px-3 uppercase airbnb text-white font-thin whitespace-pre-line">
            {category}
          </h2>
        </div>

      </HashLink>
    </div>
  );
}

export default Container;

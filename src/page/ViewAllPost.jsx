/* eslint-disable react/prop-types */
import { useState } from "react";
import PictureGrid from "../components/PictureGrid";
import Scroll from "../components/Scroll";
import TextField from "@mui/material/TextField";
import { HashLink } from "react-router-hash-link";

const ViewAllPost = ({ containerData }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
  const [isEditMode, setEditMode] = useState(false);
 

  return (
    <div
      className={`bg-sky-100 w-[100vw] h-auto min-h-screen perspective flex-col  flex items-center gap-9 justify-center absolute top-0`}
      id="hero"
    >
      <Scroll />
      
      <div className="w-full flex justify-center  mt-[150px] h-auto items-center gap-5 flex-row">
        <button
          className={`button-54 h-[60px] bg-white text-black  ${
            user && user.role === "Admin" ? "block" : "hidden"
          } `}
        >
          <HashLink
            className={`h-full w-full px-4 flex items-center text-center no-underline`}
            to="./post"
          >
            <h2 className="text-xl font-semibold ">{"Đăng bài viết"}</h2>
          </HashLink>
        </button>
        <button
          className={`button-54 h-[60px] bg-white text-black  ${
            user && user.role === "Admin" ? "block" : "hidden"
          } `}
        >
          <HashLink
            className={`h-full w-full px-4 flex items-center text-center no-underline`}
            onClick={() => setEditMode(!isEditMode)}
          >
            <h2 className="text-xl font-semibold ">{!isEditMode ? "Chế độ xem" : "Chế độ chỉnh sửa"}</h2>
          </HashLink>
        </button>
      </div>
      <div
        className={`search w-[60%] xl:w-[60%] mt-0"
        }`}
      >
        <TextField
          id="outlined-basic"
          onChange={inputHandler}
          variant="outlined"
          fullWidth
          label={"Tìm kiếm"}
          InputLabelProps={{
            style: { fontWeight: "bold", fontSize: "20px"},
          }}
          InputProps={{
            classes: {
              notchedOutline: "thicker-outline",
            },
            style: {
              color: "black",
              fontWeight: "bold",
              fontSize: "20px",
            },
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "28px",
              paddingLeft: "15px",
              paddingRight: "15px",
              backgroundColor: "white",
            },
          }}
        />
      </div>

      <PictureGrid
        containersPerPage={10}
        containerList={containerData}
        input={inputText}
        editMode={isEditMode}
      />
    </div>
  );
};
export default ViewAllPost;

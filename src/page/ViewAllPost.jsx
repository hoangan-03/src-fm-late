import React from "react";
import { useState } from "react";
import PictureGrid from "../components/PictureGrid";
import Scroll from "../components/Scroll";
import TextField from "@mui/material/TextField";
// import { HashLink } from "react-router-hash-link";
import { useTranslation } from "react-i18next";
import { HashLink } from "react-router-hash-link";
const ViewAllPost = ({ containerData }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  const { t } = useTranslation();

  return (
    <div
      className={`bg-sky-100 w-[100vw] h-auto min-h-screen perspective flex-col  flex items-center gap-9 justify-center absolute top-0`}
      id="hero"
    >
      <Scroll />
      <button
        className={`button-54 h-[60px] mt-[150px] text-black  ${
          user && user.role === "Admin" ? "block" : "hidden"
        } `}
      >
        <HashLink
          className={`h-[50px] text-xl text-center font-semibold w-[250px] no-underline`}
          to="./post"
        >
          {"Đăng bài viết"}
        </HashLink>
      </button>

      <div
        className={`search w-[60%] xl:w-[60%]  ${
          user && user.role === "Admin" ? "mt-0" : "mt-[150px]"
        }  `}
      >
        <TextField
          id="outlined-basic"
          onChange={inputHandler}
          variant="outlined"
          fullWidth
          label={t("search")}
          InputLabelProps={{
            style: { fontWeight: "bold" },
          }}
          InputProps={{
            classes: {
              notchedOutline: "thicker-outline",
            },
            style: {
              color: "black",
              fontWeight: "bold",
            },
          }}
        />
      </div>

      <PictureGrid
        containersPerPage={10}
        containerList={containerData}
        input={inputText}
      />
    </div>
  );
};
export default ViewAllPost;

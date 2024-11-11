/* eslint-disable react/prop-types */
import { useState } from "react";
import PictureGrid from "../components/PictureGrid";
import Scroll from "../components/Scroll";
import TextField from "@mui/material/TextField";
import { HashLink } from "react-router-hash-link";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

const ViewAllPost = ({ containerData = [] }) => {
  const userLocalStorage = JSON.parse(localStorage.getItem("user"));
  let userRole = false;
  if (userLocalStorage && userLocalStorage.role === "Admin") {
    userRole = true;
  }

  const [inputText, setInputText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortOrder, setSortOrder] = useState("newest");

  const inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };

  // Get unique categories from containerData
  const categories =
    containerData && containerData.length > 0
      ? [...new Set(containerData.map((item) => item.category))]
      : [];

  return (
    <div
      className={`bg-sky-100 w-[100vw] h-auto min-h-screen perspective flex-col flex items-center gap-9 justify-center absolute top-0`}
      id="hero"
    >
      <Scroll />
      <div className="w-full flex justify-center mt-[150px] h-auto items-center gap-5 flex-row">
        <button
          className={`button-54 h-[60px] bg-white text-black  ${userRole ? "block" : "hidden"
            } `}
        >
          <HashLink
            className={`h-full w-full px-4 flex items-center text-center no-underline`}
            to="./post"
          >
            <h2 className="text-base lg:text-xl font-semibold ">
              {"Đăng bài viết"}
            </h2>
          </HashLink>
        </button>
      </div>
      <div className={`search w-[90%] lg:w-[60%] xl:w-[60%] mt-0`}>
        <TextField
          id="outlined-basic"
          onChange={inputHandler}
          variant="outlined"
          fullWidth
          label={"Tìm kiếm"}
          InputLabelProps={{
            style: { fontWeight: "bold", fontSize: "20px" },
          }}
          InputProps={{
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

      <div className="w-full flex flex-col lg:flex-row gap-4 items-center justify-center mt-4">
        <FormControl
          variant="outlined"
          sx={{ minWidth: 200, backgroundColor: "white", borderRadius: "28px" }}
        >
          <InputLabel id="category-label" style={{ fontWeight: 600 }}>Lọc theo loại</InputLabel>
          <Select
            labelId="category-label"
            id="category-select"
            value={selectedCategory}
            onChange={handleCategoryChange}
            label="Chọn danh mục"
            style={{ borderRadius: "28px", fontWeight: 600 }}
          >
            <MenuItem style={{ fontWeight: 600 }} value="">
              {'Tất cả'}
            </MenuItem>
            {categories.map((category) => (
              <MenuItem style={{ fontWeight: 600 }} value={category} key={category}>
                {category}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl
          variant="outlined"
          sx={{ minWidth: 200, backgroundColor: "white", borderRadius: "28px" }}
        >
          <InputLabel id="sort-label" style={{ fontWeight: 600 }}>Sắp xếp</InputLabel>
          <Select
            labelId="sort-label"
            id="sort-select"
            value={sortOrder}
            onChange={handleSortChange}
            label="Sắp xếp"
            style={{ borderRadius: "28px", fontWeight: 600 }}
          >
            <MenuItem style={{ fontWeight: 600 }} value="newest">Mới nhất</MenuItem>
            <MenuItem style={{ fontWeight: 600 }} value="oldest">Cũ nhất</MenuItem>
          </Select>
        </FormControl>
      </div>

      <PictureGrid
        containersPerPage={10}
        containerList={containerData}
        input={inputText}
        editMode={userRole}
        selectedCategory={selectedCategory}
        sortOrder={sortOrder}
      />
    </div>
  );
};
export default ViewAllPost;
/* eslint-disable react/prop-types */
import { useState } from "react";
import PictureGrid from "../components/PictureGrid";
import Scroll from "../components/Scroll";
import { HashLink } from "react-router-hash-link";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import SortIcon from '@mui/icons-material/Sort';
import IconButton from '@mui/material/IconButton';
import { Box, Popover, Collapse } from "@mui/material";

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
      '&:focus': {
        width: '30ch',
      },
    },
  },
}));

const ViewAllPost = ({ containerData = [] }) => {
  const userLocalStorage = JSON.parse(localStorage.getItem("user"));
  let userRole = false;
  if (userLocalStorage && userLocalStorage.role === "Admin") {
    userRole = true;
  }

  const [inputText, setInputText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortOrder, setSortOrder] = useState("newest");
  const [searchOpen, setSearchOpen] = useState(false);
  const [filterAnchorEl, setFilterAnchorEl] = useState(null);
  const [sortAnchorEl, setSortAnchorEl] = useState(null);

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

  const handleFilterClick = (event) => {
    setFilterAnchorEl(event.currentTarget);
  };

  const handleSortClick = (event) => {
    setSortAnchorEl(event.currentTarget);
  };

  const handleFilterClose = () => {
    setFilterAnchorEl(null);
  };

  const handleSortClose = () => {
    setSortAnchorEl(null);
  };

  const isFilterOpen = Boolean(filterAnchorEl);
  const isSortOpen = Boolean(sortAnchorEl);

  return (
    <div
      className={`bg-sky-100 w-[100vw] h-auto min-h-screen perspective flex-col flex items-center gap-9 justify-center absolute top-0`}
      id="hero"
    >
      <Scroll />
      <div className={`w-full flex justify-center h-auto items-center gap-5 flex-row ${userRole ? "mt-[120px]" : "mt-[80px]"}`}>
        <button
          className={`button-54 h-[60px] bg-white text-black ${userRole ? "block" : "hidden"
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

      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 4 }}>
        <IconButton onClick={() => setSearchOpen(!searchOpen)}>
          <SearchIcon />
        </IconButton>
        <IconButton onClick={handleFilterClick}>
          <FilterListIcon />
        </IconButton>
        <IconButton onClick={handleSortClick}>
          <SortIcon />
        </IconButton>
      </Box>

      {/* Collapsible Search Bar */}
      <Collapse in={searchOpen} sx={{ width: '40%' }}>
        <Search sx={{ backgroundColor: 'rgba(255,255,255,0.8)', backdropFilter: "blur(10px)", boxShadow: 3, '&:hover': { backgroundColor: 'rgba(255,255,255,0.8)' } }}>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Tìm kiếm…"
            fullWidth
            inputProps={{ 'aria-label': 'search' }}
            onChange={inputHandler}
          />
        </Search>
      </Collapse>

      {/* Filter Popover */}
      <Popover
        open={isFilterOpen}
        anchorEl={filterAnchorEl}
        onClose={handleFilterClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        PaperProps={{
          sx: { width: 300, borderRadius: "4px", backdropFilter: "blur(1px)", backgroundColor: "rgba(255, 255, 255, 0.1)" }
        }}
      >
        <Box sx={{ p: 2 }}>
          <FormControl fullWidth variant="outlined" size="small"
            sx={{
              backgroundColor: "white", borderRadius: "28px",
              "& .MuiOutlinedInput-root": {
                borderRadius: "28px",
              },
              "& .MuiSelect-select": {
                fontWeight: 600,
              }
            }}
          >
            <InputLabel id="category-label" style={{ fontWeight: 600 }}>Lọc theo loại</InputLabel>
            <Select
              labelId="category-label"
              id="category-select"
              value={selectedCategory}
              onChange={handleCategoryChange}
              label="Lọc theo loại"
            >
              <MenuItem value="" style={{ fontWeight: 600 }}>
                {'Tất cả'}
              </MenuItem>
              {categories.map((category) => (
                <MenuItem style={{ fontWeight: 600 }} value={category} key={category}>
                  {category}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </Popover>

      {/* Sort Popover */}
      <Popover
        open={isSortOpen}
        anchorEl={sortAnchorEl}
        onClose={handleSortClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        PaperProps={{
          sx: { width: 300, borderRadius: "4px", backdropFilter: "blur(1px)", backgroundColor: "rgba(255, 255, 255, 0.1)" }
        }}
      >
        <Box sx={{ p: 2 }}>
          <FormControl fullWidth variant="outlined" size="small"
            sx={{
              backgroundColor: "white", borderRadius: "28px",
              "& .MuiOutlinedInput-root": {
                borderRadius: "28px",
              },
              "& .MuiSelect-select": {
                fontWeight: 600,
              }
            }}
          >
            <InputLabel id="sort-label" style={{ fontWeight: 600 }}>Sắp xếp</InputLabel>
            <Select
              labelId="sort-label"
              id="sort-select"
              value={sortOrder}
              onChange={handleSortChange}
              label="Sắp xếp"
            >
              <MenuItem value="newest" style={{ fontWeight: 600 }}>Mới nhất</MenuItem>
              <MenuItem value="oldest" style={{ fontWeight: 600 }}>Cũ nhất</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Popover>

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
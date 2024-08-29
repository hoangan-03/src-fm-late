import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Aboutus from "./page/AboutUs";
import HomePage from "./page/HomePage";
import Annoucement from "./page/Annoucement";
import NavBar from "./components/NavBar";
import Post from "./page/Post";
import PictureInfo from "./components/PictureInfo";
import { useState, useEffect } from "react";
import axios from "axios";
import Error from "./components/Error";
import { CourseInfo } from "./page/CourseInfo";
import Partners from "./page/Partners";
import Course from "./page/Course";
import ViewAllPost from "./page/ViewAllPost";
import Auth from "./page/Auth";
import Header from "./components/Header";
import Account from "./page/Account";
import Edit from "./page/Editoral";

function App() {
  const baseUrl = import.meta.env.VITE_BASE_URL;

  const refreshAccessToken = async () => {
    const refreshToken = localStorage.getItem('refreshToken');
    if (!refreshToken) {
      console.log('No refresh token found. Redirecting to login...');
      return;
    }

    try {
      const response = await axios.post(baseUrl + '/auth/refreshToken', { refreshToken });
      if (response.status === 200) {
        localStorage.setItem('accessToken', response.data.accessToken);

      } else {
        console.log('Error refreshing access token:', response.data.message);
      }
    } catch (error) {
      console.error('Error refreshing access token:', error);
    }
  };

  useEffect(() => {
    refreshAccessToken();
    const intervalId = setInterval(refreshAccessToken, 555555);
    return () => clearInterval(intervalId);
  });

  axios.interceptors.request.use(
    (config) => {
      if (!config.url.startsWith('https://www.googleapis.com/')) {
        const token = localStorage.getItem('accessToken');
        if (token) {
          config.headers['Authorization'] = `Bearer ${token}`;
        }
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  const [containerData, setContainerData] = useState([]);
  useEffect(() => {
    axios
      .get(baseUrl + "/posts")
      .then((response) => {
        setContainerData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [baseUrl]);

  return (
    <div className="App flex justify-center w-screen ">
      <BrowserRouter className="flex flex-col w-full ">
        <NavBar />
        <Header />
        <Routes>
          <Route
            path="/"
            element={<HomePage containerData={containerData} />}
          />
          <Route
            path="/Home"
            element={<HomePage containerData={containerData} />}
          />
          <Route path="/About" element={<Aboutus />} />
          <Route
            path="/ViewAllPost"
            element={<ViewAllPost containerData={containerData} />}
          />
          <Route path="/Annoucement" element={<Annoucement containerData={containerData} />} />
          <Route
            path="/ViewAllPost/:id"
            element={<PictureInfo pictures={containerData} />}
          />
          <Route path="/ViewAllPost/Post" element={<Post />} />
          <Route path="/ViewAllPost/Edit/:postId" element={<Edit />} />
          <Route path="/ViewAllPost/Error" element={<Error />} />
          <Route path="/Course" element={<Course containerData={containerData} />} />
          <Route path="/Partners" element={<Partners />} />
          <Route path="/CourseInfo" element={<CourseInfo />} />
          <Route path="/Auth" element={<Auth />} />
          <Route path="/Account" element={<Account />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
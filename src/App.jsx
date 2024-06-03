import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Aboutus from "./page/AboutUs";
import HomePage from "./page/HomePage";
import Annoucement from "./page/Annoucement";
import NavBar from "./components/NavBar";
import Post from "./page/Post";
import PictureInfo from "./components/PictureInfo";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Error from "./components/Error";
import { CourseInfo } from "./page/CourseInfo";
import Partners from "./page/Partners";
import Course from "./page/Course";
import ViewAllPost from "./page/ViewAllPost";
import Auth from "./page/Auth";
import Header from "./components/Header";
import Account from "./page/Account";


function App() {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const [containerData, setContainerData] = useState([]);
  useEffect(() => {
  const source = axios.CancelToken.source(); 

  axios
    .post(baseUrl + "/api/datas", { cancelToken: source.token }) 
    .then((response) => {
      setContainerData(response.data);
    })
    .catch((error) => {
      if (axios.isCancel(error)) {
        console.log('Request canceled', error.message);
      } else {
        console.error(error);
      }
    });

  return () => {
    source.cancel('Operation canceled by the user.'); 
  };
}, [baseUrl]);

  return (
    <div className="App flex justify-center ">
      <BrowserRouter className="flex flex-col">
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

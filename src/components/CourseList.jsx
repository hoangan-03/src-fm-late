/* eslint-disable react/prop-types */
import  { useState } from "react";
import CourseContainer from "./CourseContainer";
// import { HashLink } from "react-router-hash-link";

const CourseList = ({ containersPerPage, containerList }) => {
  const [currentPage] = useState(1);
  const indexOfLastContainer = currentPage * containersPerPage;
  const indexOfFirstContainer = indexOfLastContainer - containersPerPage;
  const currentContainers = containerList.slice(
    indexOfFirstContainer,
    indexOfLastContainer
  );
  return (
    <div
      className={`w-screen flex justify-start  gap-6 items-start flex-row h-full`}
    >
      {currentContainers.map((containerData, index) => (
        <div
          to={`/CourseInfo#hero`}
          key={index + (currentPage - 1) * 10}
        >
          <CourseContainer
            key={index}
            imageSrc={containerData.imagesrc}
            heading={containerData.title}
            description={containerData.description}
            price={containerData.price}
          />
        </div>
      ))}
    </div>
  );
};

export default CourseList;

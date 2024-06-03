import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import Container from './Container'; // Assuming you have a Container component
import Pagination from './Pagination'; // Assuming you have a Pagination component

const PictureGrid = ({ containersPerPage, containerList, input }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(containerList.length / containersPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const filteredData = containerList.filter((el) => {
    if (input === "") {
      return el;
    } else {
      return el.heading.toLowerCase().includes(input);
    }
  });

  const reversedContainers = [...filteredData].reverse(); // Reverse the filtered data

  const indexOfLastContainer = currentPage * containersPerPage;
  const indexOfFirstContainer = Math.max(0, indexOfLastContainer - containersPerPage); // Adjust to ensure it doesn't go below 0
  const currentContainers = reversedContainers.slice(
    indexOfFirstContainer,
    indexOfLastContainer
  );

  return (
    <div className={`bg-white shadow-2xl rounded-2xl backdrop-blur-lg trans flex justify-center items-center flex-col `}>
      {currentContainers.map((containerData, index) => (
        <HashLink
          to={`/ViewAllPost/${containerList.length - index - 1}#top`} // Adjust the index calculation for reverse order
          key={containerList.length - index - 1}
        >
          <Container
            key={index}
            imageSrc={containerData.image}
            heading={containerData.heading}
            date={containerData.date}
            p={containerData.p}
            category={containerData.category}
          />
        </HashLink>
      ))}

      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default PictureGrid;

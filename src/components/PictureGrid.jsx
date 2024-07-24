/* eslint-disable react/prop-types */
import { useState } from 'react';
import Container from './Container'; 
import Pagination from './Pagination'; 

const PictureGrid = ({ containersPerPage, containerList, input, editMode }) => {
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
  const reversedContainers = [...filteredData].reverse();
  const indexOfLastContainer = currentPage * containersPerPage;
  const indexOfFirstContainer = Math.max(0, indexOfLastContainer - containersPerPage);
  const currentContainers = reversedContainers.slice(
    indexOfFirstContainer,
    indexOfLastContainer
  );

  return (
    <div className={`bg-white shadow-2xl rounded-3xl backdrop-blur-lg mb-10 trans flex justify-center items-center flex-col `}>
      {currentContainers.map((containerData, index) => (
        <div key={containerData._id}>
          <Container
            index={containerList.length - index - 1}
            editMode={editMode}
            postId={containerData._id}
            imageSrc={containerData.image}
            heading={containerData.heading}
            date={containerData.date}
            p={containerData.p}
            category={containerData.category}
          />
        </div>
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

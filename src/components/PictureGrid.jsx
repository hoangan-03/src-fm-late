/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import Container from './Container';
import Pagination from './Pagination';

const PictureGrid = ({
  containersPerPage,
  containerList = [],
  input,
  editMode,
  selectedCategory,
  sortOrder,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredAndSortedData, setFilteredAndSortedData] = useState([]);

  useEffect(() => {
    let data = containerList || [];

    // Filter by search input
    data = data.filter((el) => {
      if (input === "") {
        return true;
      } else {
        return el.heading.toLowerCase().includes(input);
      }
    });

    // Filter by category
    if (selectedCategory !== "") {
      data = data.filter((el) => el.category === selectedCategory);
    }

    // Sort by date
    data.sort((a, b) => {
      const dateA = new Date(a.date.replace(/-/g, '/'));
      const dateB = new Date(b.date.replace(/-/g, '/'));
      if (sortOrder === "newest") {
        return dateB - dateA;
      } else {
        return dateA - dateB;
      }
    });

    setFilteredAndSortedData(data);
    setCurrentPage(1); // Reset to first page when filters change
  }, [containerList, input, selectedCategory, sortOrder]);

  const totalPages = Math.ceil(filteredAndSortedData.length / containersPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastContainer = currentPage * containersPerPage;
  const indexOfFirstContainer = Math.max(0, indexOfLastContainer - containersPerPage);
  const currentContainers = filteredAndSortedData.slice(
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
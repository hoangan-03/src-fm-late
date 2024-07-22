/* eslint-disable react/prop-types */

import RecentPostContainer from "./RecentPostContainer";
import { HashLink } from "react-router-hash-link";

const RecentPost = ({ containerList }) => {

  const reversedContainers = [...containerList].reverse(); // Reverse the containerList

  return (
    <div className={`picture-grid w-full flex justify-center gap-8 items-center flex-col `}>
      {reversedContainers.map((containerData, index) => (
        <HashLink
          to={`/ViewAllPost/${reversedContainers.length - index - 1}#top`} // Adjust the index calculation for reverse order
          key={reversedContainers.length - index - 1}
          className="w-full"
        >
          <RecentPostContainer
            key={index}
            imageSrc={containerData.image}
            heading={containerData.heading}
            date={containerData.date}
            p={containerData.p}
            category={containerData.category}
          />
        </HashLink>
      ))}
    </div>
  );
};

export default RecentPost;

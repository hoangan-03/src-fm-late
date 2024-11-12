import { useState, useMemo } from "react";
import PropTypes from "prop-types";
import useMeasure from "react-use-measure";
import useMedia from "./useMedia";
import data from "./data";
import styles from "./styles.module.css";

const Masonry = () => {
  const columns = useMedia(
    ["(min-width: 1500px)", "(min-width: 1000px)", "(min-width: 600px)"],
    [5, 4, 3],
    2
  );
  const [ref, { width }] = useMeasure();
  const [items] = useState(data);

  const [heights, gridItems] = useMemo(() => {
    let heights = new Array(columns).fill(0);
    let gridItems = items.map((child) => {
      const column = heights.indexOf(Math.min(...heights));
      const x = (width / columns) * column;
      const y = (heights[column] += child.height / 2) - child.height / 2;
      return {
        ...child,
        x,
        y,
        width: width / columns,
        height: child.height / 2,
      };
    });
    return [heights, gridItems];
  }, [columns, width, items]);

  return (
    <div
      ref={ref}
      className={styles.list}
      style={{ height: Math.max(...heights), position: 'relative' }}
    >
      {gridItems.map((item) => (
        <div
          key={item.css}
          style={{
            position: "absolute",
            top: item.y,
            left: item.x,
            width: item.width,
            height: item.height,
            backgroundImage: `url(${item.css})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <img
            src={item.css}
            alt=""
            loading="lazy"
            style={{ display: "none" }}
          />
        </div>
      ))}
    </div>
  );
};

Masonry.propTypes = {
  shouldShuffle: PropTypes.bool.isRequired,
};

export default Masonry;
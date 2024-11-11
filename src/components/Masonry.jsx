import { useState, useEffect, useMemo } from "react";
import PropTypes from "prop-types";
import useMeasure from "react-use-measure";
import { useTransition, a } from "@react-spring/web";
import shuffle from "lodash.shuffle";
import useMedia from "./useMedia";
import data from "./data";
import styles from "./styles.module.css";

const Masonry = ({ shouldShuffle }) => {
  const columns = useMedia(
    ["(min-width: 1500px)", "(min-width: 1000px)", "(min-width: 600px)"],
    [5, 4, 3],
    2
  );
  const [ref, { width }] = useMeasure();
  const [items, set] = useState(data);

  useEffect(() => {
    let t;
    if (shouldShuffle) {
      t = setInterval(() => set(shuffle), 4000);
    }
    return () => clearInterval(t);
  }, [shouldShuffle]);

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
  }, [columns, items, width]);

  const transitions = useTransition(gridItems, {
    key: (item) => item.css,
    from: { opacity: 1 },
    enter: { opacity: 1 },
    update: ({ x, y, width, height }) => ({ x, y, width, height }),
    config: { mass: 5, tension: 700, friction: 200 },
    trail: 25,
  });

  return (
    <div
      ref={ref}
      className={styles.list}
      style={{ height: Math.max(...heights) }}
    >
      {transitions((style, item) => (
        <a.div style={style}>
          <div
            style={{
              backgroundImage: `url(${item.css})`,
            }}
          >
            <img
              src={item.css}
              alt=""
              loading="lazy"
              style={{ display: "none" }}
            />
          </div>
        </a.div>
      ))}
    </div>
  );
};
Masonry.propTypes = {
  shouldShuffle: PropTypes.bool.isRequired,
};

export default Masonry;
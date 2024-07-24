import  { useState, useEffect, useMemo } from "react";
import useMeasure from "react-use-measure";
import { useTransition, a } from "@react-spring/web";
import shuffle from "lodash.shuffle";
import useMedia from "./useMedia";
import data from "./data";
import styles from "./styles.module.css";
const MAX_WIDTH = 1920;
const MAX_HEIGHT = 1080;
const MAX_SIZE = 150000;

async function resize(img, type = 'jpeg') {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  ctx.drawImage(img, 0, 0);

  let width = img.width;
  let height = img.height;
  let start = 0;
  let end = 1;
  let last, accepted, blob;

  if (width > height) {
    if (width > MAX_WIDTH) {
      height *= MAX_WIDTH / width;
      width = MAX_WIDTH;
    }
  } else {
    if (height > MAX_HEIGHT) {
      width *= MAX_HEIGHT / height;
      height = MAX_HEIGHT;
    }
  }
  canvas.width = width;
  canvas.height = height;
  ctx.drawImage(img, 0, 0, width, height);

  accepted = blob = await new Promise(rs => canvas.toBlob(rs, 'image/' + type, 1));

  if (blob.size < MAX_SIZE)
    return blob;
  while (true) {
    const mid = Math.round(((start + end) / 2) * 100) / 100;
    if (mid === last) break;
    last = mid;
    blob = await new Promise(rs => canvas.toBlob(rs, 'image/' + type, mid));
    if (blob.size > MAX_SIZE) { end = mid; }
    if (blob.size < MAX_SIZE) { start = mid; accepted = blob; }
  }
  return accepted;
}
const Masonry = () => {
  const columns = useMedia(
    ["(min-width: 1500px)", "(min-width: 1000px)", "(min-width: 600px)"],
    [5, 4, 3],
    2
  );
  const [ref, { width }] = useMeasure();
  const [items, set] = useState(data);
  useEffect(() => {
    const t = setInterval(() => set(shuffle), 8000);
    return () => clearInterval(t);
  }, []);
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
    from: ({ x, y, width, height }) => ({ x, y, width, height, opacity: 0 }),
    enter: ({ x, y, width, height }) => ({ x, y, width, height, opacity: 1 }),
    update: ({ x, y, width, height }) => ({ x, y, width, height }),
    leave: { height: 0, opacity: 0 },
    config: { mass: 5, tension: 500, friction: 100 },
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
              backgroundImage: `url(${item.css}`,
            }}
          />
        </a.div>
      ))}
    </div>
  );
};

export default Masonry;

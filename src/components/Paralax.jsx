/* eslint-disable react/prop-types */

import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from "framer-motion";
import { wrap } from "@motionone/utils";

function ParallaxText({ children, baseVelocity = 1 }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 20
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  const x = useTransform(baseX, (v) => `${wrap(0, -80, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="parallax w-full">
      <motion.div className="scroller text-2xl jamaica text-a w-[200%]" style={{ x }}>
      <span className=" w-full">{children} </span>
        <span className=" w-full">{children} </span>
        <span className=" w-full">{children} </span>
        <span className=" w-full">{children} </span>
        <span className=" w-full">{children} </span>
        <span className=" w-full">{children} </span>
        <span className=" w-full">{children} </span>
        <span className=" w-full">{children} </span>
        <span className=" w-full">{children} </span>
        <span className=" w-full">{children} </span>
        <span className=" w-full">{children} </span>
        <span className=" w-full">{children} </span>
        <span className=" w-full">{children} </span>
      </motion.div>
    </div>
  );
}

export default function Slide() {
  return (
    <section>
      <ParallaxText baseVelocity={-3}>Sci. Research</ParallaxText>
      <ParallaxText baseVelocity={3}>Medical Club </ParallaxText>
    </section>
  );
}

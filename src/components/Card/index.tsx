import React, { ReactElement, useState } from "react";
import Image from "next/image";
import { Constellation } from "./types";
import { useSpring, animated } from "react-spring";

const Card = (constellation: Constellation) => {
  const [hoverProps, set] = useSpring(() => ({
    transform: `scale(1)`,
    from: { transform: `scale(0)` },
    config: {
      tension: 400,
      mass: 2,
      velocity: 5,
    },
  }));

  const updateHover = (hovering: boolean) => ({
    transform: `scale(${hovering ? 1.05 : 1})`,
  });

  return (
    <animated.div
      className="relative flex flex-col shadow-2xl cursor-pointer"
      style={hoverProps}
      onMouseEnter={() => set(updateHover(true))}
      onMouseLeave={() => set(updateHover(false))}
    >
      <Image
        src={constellation.image}
        alt="cassiopeia"
        //className="rounded-lg"
      />
      <div className="m-4 flex flex-col gap-2">
        <div className="text-lg font-bold">{constellation.name}</div>
        <div className="text-sm">{constellation.short}</div>
        <div className="text-slate-500 uppercase self-end text-xs">
          {constellation.readTime}
        </div>
      </div>
    </animated.div>
  );
};

// hover:-translate-y-2 hover:scale-[1.02]

export default Card;

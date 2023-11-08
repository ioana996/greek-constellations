import React, { MouseEventHandler, ReactElement, useState } from "react";
import Image from "next/image";
import { Constellation } from "./types";
import { useSpring, animated } from "react-spring";
import { useRouter } from "next/router";

const Card = (constellation: Constellation) => {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    router.push(`/${constellation.constellation}`);
  };

  const [hoverProps, set] = useSpring(() => ({
    transform: `scale(1)`,
    from: { transform: `scale(0)` },
    config: {
      tension: 800,
      mass: 2.5,
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
      onClick={handleClick}
    >
      <Image src={constellation.image} alt="cassiopeia" priority={true} />
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

export default Card;

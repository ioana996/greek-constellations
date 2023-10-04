import Link from "next/link";
import React from "react";
import Logo from "../Logo/Logo";

const Navigation = () => {
  return (
    <div className="w-full h-16 bg-[#001730]">
      <div className="w-16 h-16">
        <Logo />
      </div>
      <ul>
        <li>
          <Link href="/cassiopeia">
            <p>Constellation</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;

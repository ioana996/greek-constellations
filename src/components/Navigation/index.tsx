import Link from "next/link";
import React from "react";
import Logo from "../Logo/Logo";

const Navigation = () => {
  return (
    <nav className="h-16 bg-[#001424] sticky top-0 z-10">
      <div className="flex items-center container mx-auto gap-5">
        <div className="w-16 h-16">
          <Link href="/">
            <Logo />
          </Link>
        </div>
        <ul>
          <li>
            <Link href="/">
              <p className="text-[#f2be74]">Home</p>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;

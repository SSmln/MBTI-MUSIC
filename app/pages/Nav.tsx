import React from "react";
import Link from "next/link";

const Nav = () => {
  return (
    <div className="Nav">
      <div className="bg-purple-500 h-16 w-[100%] border-none">
        <Link href="/">
          <div className="text-white">Home</div>
        </Link>
      </div>
    </div>
  );
};

export default Nav;

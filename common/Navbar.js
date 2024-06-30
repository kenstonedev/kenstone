import Image from "next/image";
import React from "react";
import { IoSearch } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="w-full flex pt-3 pb-6 items-center justify-center">
      <div className="w-1/12 flex justify-center">
        <Image src="/kenstone-logo.png" alt="image" width={50} height={50} />
      </div>
      <div className="flex w-11/12 justify-between items-center">
        <div className="text-[#023A51] text-2xl font-bold ">Admin</div>
        <div className="mr-3 ml-3">

        <IoSearch size={30}/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

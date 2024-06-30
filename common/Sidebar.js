import Image from "next/image";
import React from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { VscBellDot } from "react-icons/vsc";

const Sidebar = () => {
  return (
    <div className="flex flex-col items-center space-y-6 mt-2">
      <Image src="/dashboard.svg" alt="image" width={40} height={40} />
      <div className="bg-white rounded-full max-w-fit p-2">
        <VscBellDot size={30} />
      </div>
      <div className="bg-white rounded-full max-w-fit p-2">
        <IoSettingsOutline size={30} />
      </div>
    </div>
  );
};

export default Sidebar;

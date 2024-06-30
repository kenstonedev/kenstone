import React from "react";
import Navbar from "../common/Navbar";
import Sidebar from "../common/Sidebar";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen p-1 bg-slate-100 flex flex-col w-full">
      {/* navbar */}
      <div>
        <Navbar />
      </div>
      {/* Side bar and main content  */}
      <div className="flex w-full">
        <div className="w-1/12">
          <Sidebar />
        </div>
        <div className="w-11/12 text-xl">main content here</div>
      </div>
    </div>
  );
};

export default AdminDashboard;

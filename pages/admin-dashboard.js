import Image from 'next/image';
import React from 'react';

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="flex items-center justify-between p-4 bg-white shadow rounded-lg">
        <div className="text-xl font-bold">Admin</div>
        <div className="flex items-center space-x-4">
          <Image
            className="rounded-full"
            src="https://via.placeholder.com/150"
            alt="Profile"
            height={200}
            width={200}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
        <div className="p-4 bg-white shadow rounded-lg">
          <div className="text-gray-500">Bank Managers</div>
          <div className="text-2xl font-bold">12</div>
        </div>
        <div className="p-4 bg-white shadow rounded-lg">
          <div className="text-gray-500">Chartered Accountants</div>
          <div className="text-2xl font-bold">13</div>
        </div>
        <div className="p-4 bg-white shadow rounded-lg">
          <div className="text-gray-500">Loan Agents</div>
          <div className="text-2xl font-bold">15</div>
        </div>
        <div className="p-4 bg-white shadow rounded-lg">
          <div className="text-gray-500">Total Clients</div>
          <div className="text-2xl font-bold">40</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
        <div className="p-4 bg-white shadow rounded-lg">
          <div className="text-gray-500">Current Closing Rates</div>
          <div className="flex justify-between mt-2">
            <div>
              <div className="text-gray-500">Bank Managers</div>
              <div className="font-bold">70%</div>
            </div>
            <div>
              <div className="text-gray-500">Chartered Accountants</div>
              <div className="font-bold">83%</div>
            </div>
            <div>
              <div className="text-gray-500">Loan Agents</div>
              <div className="font-bold">95%</div>
            </div>
          </div>
        </div>
/*chart.js*/
      </div>

      <div className="mt-4 p-4 bg-white shadow rounded-lg">
        <div className="text-gray-500">New Client List</div>
        <div className="mt-2">
          <div className="flex justify-between border-b py-2">
            <div>Anil Sharma</div>
            <div>23456 34567</div>
          </div>
          <div className="flex justify-between border-b py-2">
            <div>Feroz Shah</div>
            <div>23456 34567</div>
          </div>
          <div className="flex justify-between border-b py-2">
            <div>Muskan Singh</div>
            <div>23456 34567</div>
          </div>
          <div className="flex justify-between border-b py-2">
            <div>Preeti Sharma</div>
            <div>23456 34567</div>
          </div>
          <div className="flex justify-between py-2">
            <div>Anjali Kapoor</div>
            <div>23456 34567</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

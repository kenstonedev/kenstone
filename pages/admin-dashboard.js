import 'chart.js/auto'; // Importing Chart.js components automatically
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import Navbar from '../components/AdminNavbar';
import Sidebar from '../components/AdminSidebar';

const AdminDashboard = () => {
  const clients = [
    { name: 'Anil Sharma', phone: '23456 34567' },
    { name: 'Feroz Shah', phone: '23456 34567' },
    { name: 'Muskan Singh', phone: '23456 34567' },
    { name: 'Preeti Sharma', phone: '23456 34567' },
    { name: 'Anjali Kapoor', phone: '23456 34567' },
  ];

  const data = {
    labels: ['BM', 'CA', 'LA'],
    datasets: [
      {
        data: [30, 30, 40],
        backgroundColor: ['#1c64f2', '#a0aec0', '#4a5568'],
        hoverBackgroundColor: ['#1c64f2', '#a0aec0', '#4a5568'],
      },
    ],
  };

  const options = {
    cutout: '80%', // Use 'cutout' instead of 'cutoutPercentage'
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1">
        <Navbar />
        <div className="flex flex-col items-center justify-center p-4 space-y-4">
          <div className="w-full max-w-6xl">
            {/* New Accounts Closed Section */}
            <div className="bg-white shadow rounded-lg p-4 mb-4">
              <div className="font-bold text-lg mb-2">ACCOUNTS CLOSED</div>
              <div className="flex justify-between items-center space-x-4">
                <div className="flex flex-col items-center bg-gray-200 rounded-lg p-4 w-1/4">
                  <span className="text-2xl font-semibold">12</span>
                  <span className="text-gray-500">Bank Managers</span>
                </div>
                <div className="flex flex-col items-center bg-gray-200 rounded-lg p-4 w-1/4">
                  <span className="text-2xl font-semibold">13</span>
                  <span className="text-gray-500">Chartered Accountants</span>
                </div>
                <div className="flex flex-col items-center bg-gray-200 rounded-lg p-4 w-1/4">
                  <span className="text-2xl font-semibold">15</span>
                  <span className="text-gray-500">Loan Agents</span>
                </div>
                <div className="flex flex-col items-center bg-gray-800 text-white rounded-lg p-4 w-1/4">
                  <span className="text-2xl font-semibold">40</span>
                  <span className="text-gray-200">Total Clients</span>
                </div>
              </div>
            </div>

            {/* Existing Current Closing Rates Section */}
            <div className="bg-white shadow rounded-lg p-4 mb-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <span className="text-blue-500">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 22c5.421 0 10-4.579 10-10S17.421 2 12 2 2 6.579 2 12s4.579 10 10 10zm0-18a8 8 0 110 16 8 8 0 010-16zm-1 12h2v2h-2v-2zm0-10h2v8h-2V6z"></path>
                    </svg>
                  </span>
                  <span className="ml-2 text-gray-700 font-semibold">Current Closing Rates</span>
                </div>
                <span className="text-gray-700 font-semibold">85%</span>
              </div>
              <div className="mt-4 flex justify-between text-center">
                <div>
                  <p className="text-gray-700 font-semibold">70%</p>
                  <p className="text-gray-500">Bank Managers</p>
                </div>
                <div>
                  <p className="text-gray-700 font-semibold">83%</p>
                  <p className="text-gray-500">Chartered Accountants</p>
                </div>
                <div>
                  <p className="text-gray-700 font-semibold">95%</p>
                  <p className="text-gray-500">Loan Agents</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
              <div className="w-full md:w-1/2 bg-white shadow rounded-lg p-4 h-96">
                <div className="text-lg font-bold text-gray-700 mb-4">New Client List</div>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white">
                    <thead>
                      <tr>
                        <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Name</th>
                        <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Phone Number</th>
                      </tr>
                    </thead>
                    <tbody>
                      {clients.map((client, index) => (
                        <tr key={index}>
                          <td className="py-2 px-4 border-b border-gray-200">{client.name}</td>
                          <td className="py-2 px-4 border-b border-gray-200">{client.phone}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="w-full md:w-1/2 bg-white shadow rounded-lg p-4 h-96">
                <div className="text-lg font-bold text-gray-700 mb-4">Closing Rates</div>
                <div className="h-64">
                  <Doughnut data={data} options={options} />
                </div>
                <div className="mt-4 text-center">
                  <p className="text-sm text-gray-500">of all sectors</p>
                  <div className="flex justify-center space-x-4 mt-2">
                    <div className="flex items-center space-x-1">
                      <span className="w-3 h-3 bg-blue-600 inline-block rounded-full"></span>
                      <span className="text-xs">BM</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <span className="w-3 h-3 bg-gray-400 inline-block rounded-full"></span>
                      <span className="text-xs">CA</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <span className="w-3 h-3 bg-gray-700 inline-block rounded-full"></span>
                      <span className="text-xs">LA</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>  
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

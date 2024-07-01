import 'chart.js/auto';
import React, { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import Navbar from '../components/AdminNavbar';
import Sidebar from '../components/AdminSidebar';
import { db } from '../firebase'; // Ensure the path is correct
import { collection, getDocs } from 'firebase/firestore';

const AdminDashboard = () => {
  const [clients, setClients] = useState([]);
  const [users, setUsers] = useState([]);
  const [closingRates, setClosingRates] = useState({
    bmtotal: 0,
    bmcompleted: 0,
    catotal: 0,
    cacompleted: 0,
    latotal: 0,
    lacompleted: 0,
    total: 0,
    overall: 0,
  });

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const clientsSnapshot = await getDocs(collection(db, 'clients'));
        const fetchedClients = clientsSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));

        const usersSnapshot = await getDocs(collection(db, 'users'));
        const fetchedUsers = usersSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));

        setClients(fetchedClients);
        setUsers(fetchedUsers);

        calculateClosingRates(fetchedClients, fetchedUsers);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchClients();
  }, []);

  const calculateClosingRates = (clients, users) => {
    let totalClients = clients.length;

    const userRoles = users.reduce((acc, user) => {
      acc[user.emailId] = user.role;
      return acc;
    }, {});

    const roleCounts = {
      bmtotal: 0,
      bmcompleted: 0,
      catotal: 0,
      cacompleted: 0,
      latotal: 0,
      lacompleted: 0,
    };

    clients.forEach(client => {
      const userRole = userRoles[client.userEmail]; // assuming 'addedBy' contains user id
      if (userRole) {
        if (userRole === 'Bank Manager') {
          roleCounts.bmtotal++;
          if (client.status === 'Completed') roleCounts.bmcompleted++;
        }
        if (userRole === 'Chartered Accountant') {
          roleCounts.catotal++;
          if (client.status === 'Completed') roleCounts.cacompleted++;
        }
        if (userRole === 'Loan Agent') {
          roleCounts.latotal++;
          if (client.status === 'Completed') roleCounts.lacompleted++;
        }
      }
    });

    const cr = {
      bmcr: 0,
      cacr: 0,
      lacr: 0
    };

    cr.bmcr = ((roleCounts.bmcompleted/roleCounts.bmtotal) * 100 || 0).toFixed(2);
    cr.cacr = ((roleCounts.cacompleted/roleCounts.catotal) * 100 || 0).toFixed(2);
    cr.lacr = ((roleCounts.lacompleted/roleCounts.latotal) * 100 || 0).toFixed(2);

    const overall = totalClients ? ((roleCounts.bmcompleted + roleCounts.cacompleted + roleCounts.lacompleted) / clients.length) * 100 : 0;

    setClosingRates({
      ...roleCounts,
      ...cr,
      total: totalClients,
      overall,
    });
  };

  const data = {
    labels: ['BM', 'CA', 'LA'],
    datasets: [
      {
        data: [closingRates.bmcr, closingRates.cacr, closingRates.lacr],
        backgroundColor: ['#1c64f2', '#a0aec0', '#4a5568'],
        hoverBackgroundColor: ['#1c64f2', '#a0aec0', '#4a5568'],
      },
    ],
  };

  const options = {
    cutout: '80%',
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
                  <span className="text-2xl font-semibold">{closingRates.bmtotal}</span>
                  <span className="text-gray-500">Bank Managers</span>
                </div>
                <div className="flex flex-col items-center bg-gray-200 rounded-lg p-4 w-1/4">
                  <span className="text-2xl font-semibold">{closingRates.catotal}</span>
                  <span className="text-gray-500">Chartered Accountants</span>
                </div>
                <div className="flex flex-col items-center bg-gray-200 rounded-lg p-4 w-1/4">
                  <span className="text-2xl font-semibold">{closingRates.latotal}</span>
                  <span className="text-gray-500">Loan Agents</span>
                </div>
                <div className="flex flex-col items-center bg-gray-800 text-white rounded-lg p-4 w-1/4">
                  <span className="text-2xl font-semibold">{closingRates.total}</span>
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
                <span className="text-gray-700 font-semibold">{closingRates.overall.toFixed(2)}%</span>
              </div>
              <div className="mt-4 flex justify-between text-center">
                <div>
                  <p className="text-gray-700 font-semibold">{closingRates.bmcr}%</p>
                  <p className="text-gray-500">Bank Managers</p>
                </div>
                <div>
                  <p className="text-gray-700 font-semibold">{closingRates.cacr}%</p>
                  <p className="text-gray-500">Chartered Accountants</p>
                </div>
                <div>
                  <p className="text-gray-700 font-semibold">{closingRates.lacr}%</p>
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
                      {clients.slice(0, 5).map((client) => (
                        <tr key={client.id}>
                          <td className="py-2 px-4 border-b border-gray-200">{client.fullName}</td>
                          <td className="py-2 px-4 border-b border-gray-200">{client.phoneNumber}</td>
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
                  <div className="text-gray-500 mt-2">
                    {/* <span className="font-bold text-3xl text-gray-900">{closingRates.overall.toFixed(2)}%</span> */}
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

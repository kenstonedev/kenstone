import React from "react";
import { Container, Nav } from "react-bootstrap";
import DashboardHeader from "../components/DashboardHeader";
import ClientTable from "../components/ClientTable";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const clientsData = [
  {
    name: "Manish Paul",
    bank: "HDFC",
    email: "manish@gmail.com",
    phone: "98760 43567",
    status: "Processing",
    cibil: 567,
  },
  {
    name: "Alicia Keys",
    bank: "IDBI",
    email: "alicia@gmail.com",
    phone: "89763 56789",
    status: "Pending",
    cibil: 456,
  },
  {
    name: "John Doe",
    bank: "IOB",
    email: "john@gmail.com",
    phone: "7899 23456",
    status: "Completed",
    cibil: 567,
  },
  {
    name: "Tara Singh",
    bank: "ICICI",
    email: "tara@gmail.com",
    phone: "98657 34678",
    status: "Pending",
    cibil: 577,
  },
  {
    name: "Jagdish Singh",
    bank: "HDFC",
    email: "jagdish@gmail.com",
    phone: "98723 45678",
    status: "Pending",
    cibil: 345,
  },
  {
    name: "Mehul Vyas",
    bank: "HDFC",
    email: "mehul@gmail.com",
    phone: "97654 78934",
    status: "Completed",
    cibil: 467,
  },
  {
    name: "Dhruv Mukhrajee",
    bank: "IDBI",
    email: "dhruv@gmail.com",
    phone: "99871 23467",
    status: "Processing",
    cibil: 598,
  },
  {
    name: "Piyush Sharma",
    bank: "IOB",
    email: "piyush@gmail.com",
    phone: "99876 12334",
    status: "Completed",
    cibil: 543,
  },
  {
    name: "Jagdish Singh",
    bank: "HDFC",
    email: "jagdish@gmail.com",
    phone: "98723 45678",
    status: "Pending",
    cibil: 345,
  },
];

const UserDashboard = () => {
  const totalClients = clientsData.length;
  const processingClients = clientsData.filter(
    (client) => client.status === "Processing"
  ).length;
  const pendingClients = clientsData.filter(
    (client) => client.status === "Pending"
  ).length;
  const completedClients = clientsData.filter(
    (client) => client.status === "Completed"
  ).length;

  return (
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1">
        <Navbar/>
        <DashboardHeader
          total={totalClients}
          processing={processingClients}
          pending={pendingClients}
          completed={completedClients}
        />
        <ClientTable clients={clientsData} />
      </div>
    </div>
  );
};

export default UserDashboard;

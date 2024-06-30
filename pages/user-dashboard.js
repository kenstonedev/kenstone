import React from "react";
import { Container } from "react-bootstrap";
import DashboardHeader from "../components/DashboardHeader";
import ClientTable from "../components/ClientTable";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import useClientData from "../useClientData"; // Import the hook

const UserDashboard = () => {
    const { clients, currentUser } = useClientData(); // Destructure clients and currentUser from the hook

    const totalClients = clients.length;
    const processingClients = clients.filter(
        (client) => client.status === "processing"
    ).length;
    const pendingClients = clients.filter(
        (client) => client.status === "pending"
    ).length;
    const completedClients = clients.filter(
        (client) => client.status === "completed"
    ).length;

    return (
        <div className="d-flex">
            <Sidebar />
            <div className="flex-grow-1">
                <Navbar />
                <DashboardHeader
                    total={totalClients}
                    processing={processingClients}
                    pending={pendingClients}
                    completed={completedClients}
                />
                <ClientTable clients={clients} />{" "}
                {/* Use dynamic clients data */}
            </div>
        </div>
    );
};

export default UserDashboard;

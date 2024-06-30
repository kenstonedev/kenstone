import React, { useEffect, useState } from "react";
import { db } from "../firebase"; // Verify correct path to firebase.js
import { collection, getDocs } from "firebase/firestore";
import Navbar from "../components/AdminNavbar"; // Adjusted import path
import Sidebar from "../components/AdminSidebar"; // Adjusted import path

const ClientList = () => {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "users"));
        const clientData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setClients(clientData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching clients:", error);
        setLoading(false);
      }
    };

    fetchClients();
  }, []);

  return (
    <div className="d-flex">
      <Sidebar />
      <div style={{ flexGrow: 1 }}>
        <Navbar />
        <div style={{ padding: "20px" }} className="container">
          <h1>Client List</h1>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ul>
              {clients.map((client) => (
                <li key={client.id}>
                  {client.name} ({client.email}) - {client.role}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default ClientList;

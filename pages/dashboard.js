// pages/dashboard.js
import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import ClientList from "../components/ClientList";
import Statistics from "../components/Statistics";
import Charts from "../components/Charts";
import Link from "next/link"
import { db } from '../firebase';
import { collection, getDocs } from "firebase/firestore";


const Dashboard = () => {

  const [clients, setClients] = useState([]);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const clientsCollection = collection(db, "clients");
        const clientSnapshot = await getDocs(clientsCollection);
        const clientList = clientSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setClients(clientList);
      } catch (error) {
        console.error("Error fetching clients: ", error);
      }
    };

    fetchClients();
  }, []);

  return (
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1">
        <Navbar />
        <div className="p-3">
          <div className="row">
            <div className="col-md-3">
              <ClientList clients={clients}/>
            </div>
            <div className="col-md-9">
              <Link href="/user-dashboard" style={{textDecoration:"none"}}>
                <Statistics clients={clients}/>
              </Link>
              <Charts clients={clients}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

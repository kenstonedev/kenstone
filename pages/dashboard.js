// pages/dashboard.js
import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import ClientList from "../components/ClientList";
import Statistics from "../components/Statistics";
import Charts from "../components/Charts";
import Link from "next/link";
import { db } from "../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const Dashboard = () => {
  const [clients, setClients] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user.email);
      } else {
        // Redirect to login if not logged in
        window.location.href = "/login";
      }
    });
  }, []);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        if (currentUser) {
          const clientsCollection = collection(db, "clients");
          const q = query(clientsCollection, where("referral", "==", currentUser));
          const clientSnapshot = await getDocs(q);
          const clientList = clientSnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setClients(clientList);
        }
      } catch (error) {
        console.error("Error fetching clients: ", error);
      }
    };

    fetchClients();
  }, [currentUser]);

  return (
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1">
        <Navbar />
        <div className="p-3">
          <div className="row">
            <div className="col-md-3">
              <ClientList clients={clients} />
            </div>
            <div className="col-md-9">
              <Link href="/user-dashboard" style={{ textDecoration: "none" }}>
                <Statistics clients={clients} />
              </Link>
              <Charts clients={clients} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

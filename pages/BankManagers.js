import React, { useEffect, useState } from "react";
import { db } from "../firebase"; // Verify correct path to firebase.js
import { collection, query, getDocs } from "firebase/firestore";
import Navbar from "../components/AdminNavbar"; // Adjusted import path
import Sidebar from "../components/AdminSidebar"; // Adjusted import path

const BankManagers = () => {
  const [bankManagers, setBankManagers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBankManagers = async () => {
      try {
        const q = query(collection(db, "users"), where("role", "==", "bankManager"));
        const querySnapshot = await getDocs(q);
        const managerData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setBankManagers(managerData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching bank managers:", error);
        setLoading(false);
      }
    };

    fetchBankManagers();
  }, []);

  return (
    <div className="d-flex">
      <Sidebar />
      <div style={{ flexGrow: 1 }}>
        <Navbar />
        <div style={{ padding: "20px" }} className="container">
          <h1>Bank Managers</h1>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ul>
              {bankManagers.map((manager) => (
                <li key={manager.id}>
                  {manager.name} ({manager.email}) - {manager.branch}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default BankManagers;

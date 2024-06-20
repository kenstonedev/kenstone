// UserDashboard.js (React component using modular SDK syntax)

import { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useRouter } from "next/router";
import {db} from "../firebase"; // Import Firestore instance (db)
import { collection, query, where, getDocs } from "firebase/firestore";

const UserDashboard = () => {
  const { currentUser, logOut } = useAuth();
  const router = useRouter();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!currentUser) {
      router.push("/login");
      return;
    }

    const fetchUserData = async () => {
      try {
        const q = query(
          collection(db, "users"),
          where("email", "==", currentUser.email)
        );
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          const userData = querySnapshot.docs[0].data();
          setUserData(userData);
        } else {
          console.log("No matching documents.");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [currentUser, router]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>User Dashboard</h1>
      <button onClick={logOut} style={{ marginBottom: "20px" }}>
        Log Out
      </button>
      {userData && (
        <div>
          <h2>Welcome, {userData.name}</h2>
          <p>Email: {userData.email}</p>
          <p>Role: {userData.role}</p>
          {/* Add more user-specific information and actions here */}
        </div>
      )}
    </div>
  );
};

export default UserDashboard;

// pages/index.js

import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../firebase"; // Ensure correct import paths
import { collection, getDocs, query, where } from "firebase/firestore";
import { useAuth } from "../contexts/AuthContext";

const Home = () => {
  const { currentUser, setCurrentUser } = useAuth();
  const router = useRouter();

  useEffect(() => {
    const getUserRole = async (email) => {
      const q = query(collection(db, "users"), where("emailId", "==", email));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const userData = querySnapshot.docs[0].data();
        console.log(userData);
        if (userData.role === "admin") {
          router.push("/admin-dashboard");
        } else {
          router.push("/dashboard");
        }
      }
    };

    const unsubscribe = () => {
      if (!currentUser) {
        router.push("/login"); // Redirect to login page if not authenticated
      } else {
        // setCurrentUser(user); // Assuming useAuth provides setCurrentUser
        getUserRole(currentUser.email);
      }
    };

    unsubscribe();
  }, []);

  return (
    <div>
      <h1>Welcome to Our Website</h1>
      {currentUser && (
        <div>
          <p>Hello, {currentUser.email}</p>
        </div>
      )}
      {/* Additional content for the homepage */}
    </div>
  );
};

export default Home;

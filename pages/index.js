// pages/index.js

import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../contexts/AuthContext";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase"; // Make sure to import auth from your firebase.js file

const Home = () => {
  const { currentUser } = useAuth();
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push("/login"); // Redirect to login page if not authenticated
      }
    });

    return () => unsubscribe();
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  return (
    <div>
      <h1>Welcome to Your Website</h1>
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

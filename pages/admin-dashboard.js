import { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useRouter } from "next/router";
import {
  auth,
  db,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
} from "../firebase"; // Verify correct path to firebase.js
import { collection, query, where, getDocs, doc, updateDoc } from "firebase/firestore";
import "../firebase"; // Ensure correct initialization of Firebase app

const AdminDashboard = () => {
  const router = useRouter();
  const { currentUser, logOut } = useAuth();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!currentUser) {
      return;
    }

    const fetchUsers = async () => {
      try {
        const q = query(collection(db, "users")); // Reference to the "users" collection
        const querySnapshot = await getDocs(q); // Fetch the documents from the collection
        const userData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setUsers(userData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching users:", error);
        setLoading(false);
      }
    };

    fetchUsers();
  }, [currentUser]);

  const handleDisableAccount = async (userId) => {
    try {
      // Update document in Firestore
      const userRef = doc(db, "users", userId);
      await updateDoc(userRef, {
        disabled: true,
      });

      // Update local state
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.id === userId ? { ...user, disabled: true } : user
        )
      );
    } catch (error) {
      console.error("Error disabling account:", error);
    }
  };

  const generateRandomPassword = () => {
    const length = 8;
    const charset =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let password = "";
    for (let i = 0; i < length; ++i) {
      password += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    return password;
  };

  const handleSendInvite = async () => {
    try {
      const password = generateRandomPassword();

      // Fetch users with roles bankManager, CA, loanAgent
      const q = query(
        collection(db, "users"),
        where("role", "in", ["bankManager", "CA", "loanAgent"])
      );
      const querySnapshot = await getDocs(q);

      // Send invite to each user found
      querySnapshot.forEach(async (doc) => {
        const userData = doc.data();
        const userEmail = userData.email;

        // Implement your logic to send email with password reset link
        await createUserWithEmailAndPassword(auth, userEmail, password);
        await sendPasswordResetEmail(auth, userEmail);
        console.log(`Invite sent to ${userEmail} with a temporary password.`);
      });

      alert("Invites sent successfully.");
    } catch (error) {
      console.error("Error sending invites:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await logOut();
      router.push("/login"); // Redirect to login page after logout
    } catch (error) {
      console.error("Logout Error:", error);
      // Handle logout error gracefully, e.g., show error message
    }
  };

  if (!currentUser) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ padding: "20px" }} className="container">
      <div className="container">
        <h1>Admin Dashboard</h1>
        <button
          onClick={handleLogout}
          style={{ marginBottom: "20px" }}
          className="btn btn-primary"
        >
          Log Out
        </button>
      </div>
      <h2>Manage Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id} style={{ marginBottom: "10px" }}>
            {user.name} ({user.email}) - {user.role}
            {user.disabled ? (
              <span> - Account Disabled</span>
            ) : (
              <button
                onClick={() => handleDisableAccount(user.id)}
                style={{ marginLeft: "10px" }}
                className="btn btn-primary"
              >
                Disable Account
              </button>
            )}
          </li>
        ))}
      </ul>
      <button
        type="submit"
        className="btn btn-primary"
        onClick={handleSendInvite}
      >
        Invite All
      </button>
    </div>
  );
};

export default AdminDashboard;

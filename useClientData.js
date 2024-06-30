// useClientData.js

import { useState, useEffect } from "react";
import { db } from "./firebase"; // Adjust path as necessary
import { collection, query, where, getDocs } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const useClientData = () => {
    const [clients, setClients] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setCurrentUser(user.email);

                // Fetch clients where userEmail matches the authenticated user
                const fetchClients = async () => {
                    try {
                        const clientsRef = collection(db, "clients");
                        const q = query(
                            clientsRef,
                            where("userEmail", "==", user.email)
                        );
                        const querySnapshot = await getDocs(q);
                        const clientsData = querySnapshot.docs.map((doc) => ({
                            id: doc.id,
                            ...doc.data(),
                        }));
                        setClients(clientsData);
                    } catch (error) {
                        console.error("Error fetching clients: ", error);
                    }
                };

                fetchClients();
            } else {
                // Clear clients if not logged in
                setClients([]);
                setCurrentUser(null);
            }
        });

        return unsubscribe;
    }, []);

    return { clients, currentUser };
};

export default useClientData;

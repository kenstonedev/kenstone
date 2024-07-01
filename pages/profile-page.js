import { useEffect, useState } from "react";
import ProfileCard from "../components/ProfileCard";
import AppointmentInfo from "../components/AppointmentInfo";
import CurrentFunds from "../components/CurrentFunds";
import DocumentsRequired from "../components/DocumentsRequired";
import Graph from "../components/Graph";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useAuth } from "../contexts/AuthContext";
import { useRouter } from "next/router";
import { db } from "../firebase"; // Ensure the path is correct
import {
    collection,
    query,
    where,
    getDocs,
    updateDoc,
    doc,
} from "firebase/firestore";

const ProfilePage = () => {
    const { currentUser, logOut } = useAuth();
    const router = useRouter();
    const [userData, setUserData] = useState(null);
    const [newTag, setNewTag] = useState("");
    const [loading, setLoading] = useState(true);

    const fetchUserData = async (email) => {
        try {
            const q = query(
                collection(db, "users"),
                where("emailId", "==", email)
            );
            const querySnapshot = await getDocs(q);

            if (!querySnapshot.empty) {
                const userDoc = querySnapshot.docs[0];
                setUserData({ id: userDoc.id, ...userDoc.data() });
            } else {
                console.error("No such document!");
            }
        } catch (error) {
            console.error("Error fetching user data:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (currentUser) {
            fetchUserData(currentUser.email);
        }
    }, [currentUser]);

    const handleLogout = async () => {
        try {
            await logOut();
            router.push("/login");
        } catch (error) {
            console.error("Logout Error:", error);
        }
    };

    const handleAddTag = async () => {
        if (newTag && userData) {
            const updatedTags = [...(userData.tags || []), newTag];
            const userDocRef = doc(db, "users", userData.id);
            try {
                await updateDoc(userDocRef, { tags: updatedTags });
                setUserData((prevData) => ({ ...prevData, tags: updatedTags }));
                setNewTag("");
            } catch (error) {
                console.error("Error updating tags:", error);
            }
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!userData) {
        return <div>No user data found.</div>;
    }

    return (
        <div className="d-flex">
            <Sidebar />
            <div className="flex-grow-1">
                <Navbar />
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-lg-3">
                            <ProfileCard user={userData} />
                        </div>
                        <div className="col-lg-9">
                            <AppointmentInfo
                                date={userData.appointmentDate || "N/A"}
                            />
                            <div className="mb-3">
                                <CurrentFunds
                                    funds={
                                        userData.funds || {
                                            pendingPayments: 0,
                                            pendingAmount: "0",
                                        }
                                    }
                                />
                            </div>
                            <div className="d-flex">
                                <DocumentsRequired
                                    documents={userData.documents || []}
                                />
                                <Graph />
                            </div>
                            <div>
                               
                               
                            </div>
                        </div>
                        <button onClick={handleLogout}>LOGOUT</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;

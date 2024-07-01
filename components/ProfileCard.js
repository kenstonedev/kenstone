import React, { useState } from "react";
import Image from "next/image";
import { db } from "../firebase"; // Import db from firebase.js

const ProfileCard = ({ user }) => {
    const [newTag, setNewTag] = useState("");

    const handleAddTag = async () => {
        if (newTag.trim() !== "") {
            try {
                const userRef = db.collection("users").doc(user.id);
                await userRef.update({
                    tags: firebase.firestore.FieldValue.arrayUnion(
                        newTag.trim()
                    ),
                });
                setNewTag("");
                alert(`Tag '${newTag.trim()}' added successfully!`);
            } catch (error) {
                console.error("Error adding tag: ", error);
                alert("Failed to add tag. Please try again.");
            }
        }
    };

    return (
        <div className="card p-3">
            <div className="text-center">
                <Image
                    src={user.image}
                    alt="Profile Picture"
                    width={100}
                    height={100}
                    className="rounded-circle"
                />
            </div>
            <h5 className="text-center mt-2">{user.fullName}</h5>
            <p className="text-center text-muted">{user.homeAddress}</p>
            <div>
                <p>
                    <strong>Contact:</strong> {user.phoneNumber}
                </p>
                <p>
                    <strong>Email:</strong> {user.emailId}
                </p>
                <p>
                    <strong>Address:</strong> {user.homeAddress}
                </p>
            </div>
            {user.tags && user.tags.length > 0 && (
                <div className="d-flex flex-wrap">
                    
                        <span key={user.tags} className="badge bg-secondary m-1">
                            {user.tags}
                        </span>
                    
                    <button
                        className="btn btn-link p-0"
                        onClick={() => {
                            const newTag = prompt("Enter a new tag:");
                            if (newTag !== null) {
                                setNewTag(newTag);
                                handleAddTag();
                            }
                        }}
                    >
                        + Add tags
                    </button>
                </div>
            )}
        </div>
    );
};

export default ProfileCard;

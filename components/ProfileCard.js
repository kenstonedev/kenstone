import React from "react";
import Image from "next/image";

const ProfileCard = ({ user }) => {
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
      <h5 className="text-center mt-2">{user.name}</h5>
      <p className="text-center text-muted">{user.location}</p>
      <div>
        <p>
          <strong>Contact:</strong> {user.contact}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Address:</strong> {user.address}
        </p>
      </div>
      <div className="d-flex flex-wrap">
        {user.tags.map((tag) => (
          <span key={tag} className="badge bg-secondary m-1">
            {tag}
          </span>
        ))}
        <button className="btn btn-link p-0">+ Add tags</button>
      </div>
    </div>
  );
};

export default ProfileCard;

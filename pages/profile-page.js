import React from "react";
import ProfileCard from "../components/ProfileCard";
import AppointmentInfo from "../components/AppointmentInfo";
import CurrentFunds from "../components/CurrentFunds";
import DocumentsRequired from "../components/DocumentsRequired";
import Graph from "../components/Graph";

const user = {
  image: "/path/to/profile-pic.jpg",
  name: "Mr. Manish Shinde",
  location: "Indiranagar - Bangalore",
  contact: "+91 98765 34567",
  email: "manishs@gmail.com",
  address: "moonshine apt, Indiranagar, Bangalore",
  tags: ["Cibil Increase", "Home Loan", "Student Loan"],
};

const funds = {
  pendingPayments: 12,
  pendingAmount: "1,00,000",
};

const documents = [
  { name: "Financial Report", status: "Reviewed", uploadDate: "20.03.2024" },
  { name: "Tax Document", status: "Reviewed", uploadDate: "20.03.2024" },
  { name: "Audit Report", status: "Pending", uploadDate: "20.03.2024" },
  { name: "Compliance Report", status: "Reviewed", uploadDate: "20.03.2024" },
  { name: "Others", status: "Reviewed", uploadDate: "20.03.2024" },
];

const ProfilePage = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-3">
          <ProfileCard user={user} />
        </div>
        <div className="col-lg-9">
          <AppointmentInfo date="12.07.2024" />
          <div className="row">
            <div className="col-md-6">
              <CurrentFunds funds={funds} />
            </div>
            <div className="col-md-6">
              <Graph />
            </div>
          </div>
          <DocumentsRequired documents={documents} />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

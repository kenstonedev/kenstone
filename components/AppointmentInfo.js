import React from "react";

const AppointmentInfo = ({ date }) => {
  return (
    <div className="alert alert-primary text-center">
      Your monthly appointment with this client is set on{" "}
      <strong>{date}</strong>.
    </div>
  );
};

export default AppointmentInfo;

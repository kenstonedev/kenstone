import React from "react";

const CurrentFunds = ({ funds }) => {
  return (
    <div className="card p-3">
      <h5>Current Funds</h5>
      <div className="d-flex justify-content-between">
        <div>
          <p>
            <strong>Pending Payments:</strong> {funds.pendingPayments}
          </p>
        </div>
        <div>
          <p>
            <strong>Pending Amount:</strong> Rs. {funds.pendingAmount}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CurrentFunds;

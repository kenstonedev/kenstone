import React from "react";

const Graph = () => {
  return (
    <div className="card p-3">
      <h5>Lorem Ipsum</h5>
      <p>Graph for some details</p>
      <div className="text-center">
        {/* Placeholder for the graph */}
        <div
          className="pie-chart"
          style={{
            width: "200px",
            height: "200px",
            background:
              "conic-gradient(#007bff 25%, #6c757d 25% 50%, #ffc107 50% 75%, #28a745 75%)",
            borderRadius: "50%",
          }}
        ></div>
        <div className="d-flex justify-content-center mt-3">
          <span className="badge bg-primary mx-1">Mobile</span>
          <span className="badge bg-secondary mx-1">Desktop</span>
          <span className="badge bg-warning mx-1">Tablet</span>
          <span className="badge bg-success mx-1">Unknown</span>
        </div>
      </div>
    </div>
  );
};

export default Graph;

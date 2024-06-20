import React from "react";

const DocumentsRequired = ({ documents }) => {
  return (
    <div className="card p-3">
      <h5>Documents Required</h5>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Upload Date</th>
          </tr>
        </thead>
        <tbody>
          {documents.map((doc) => (
            <tr key={doc.name}>
              <td>{doc.name}</td>
              <td>{doc.status}</td>
              <td>{doc.uploadDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DocumentsRequired;

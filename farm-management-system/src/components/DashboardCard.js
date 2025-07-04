import React from "react";

function DashboardCard({ title, value }) {
  return (
    <div className="card">
      {title}
      <br />
      <span>{value}</span>
    </div>
  );
}

export default DashboardCard;

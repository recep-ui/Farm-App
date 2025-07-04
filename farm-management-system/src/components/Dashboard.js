import React from "react";
import DashboardCard from "./DashboardCard";

function Dashboard() {
  return (
    <>
      <h1>Dashboard</h1>
      <div className="dashboard-cards">
        <DashboardCard title="Animals" value="150" />
        <DashboardCard title="Production" value="1,200 L" />
        <DashboardCard title="Health Records" value="45" />
        <DashboardCard title="Employees" value="10" />
      </div>
      {/* Diğer içerikler buraya eklenecek */}
    </>
  );
}

export default Dashboard;

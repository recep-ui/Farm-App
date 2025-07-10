import React from 'react';
import DashboardCard from './DashboardCard';

function Dashboard() {
  const farmStatus = {
    animals: 150,
    alerts: 3,
    production: '1,200 L milk',
  };

  const recentActivities = [
    { id: 1, activity: "New cow 'Bessie' arrived.", date: '2024-07-04' },
    { id: 2, activity: 'Vaccinated all sheep.', date: '2024-07-03' },
    { id: 3, activity: 'Harvested 500 kg of wheat.', date: '2024-07-02' },
  ];

  return (
    <div>
      <h1>Dashboard</h1>
      <div className="dashboard-cards">
        <DashboardCard title="Total Animals" value={farmStatus.animals} />
        <DashboardCard title="Health Alerts" value={farmStatus.alerts} />
        <DashboardCard title="Daily Production" value={farmStatus.production} />
      </div>
      <div className="dashboard-section">
        <h2>Farm Status</h2>
        <p>A quick overview of your farm's current state.</p>
        <ul>
          <li>
            <strong>Total Animals:</strong> {farmStatus.animals}
          </li>
          <li>
            <strong>Health Alerts:</strong> {farmStatus.alerts}
          </li>
          <li>
            <strong>Daily Production:</strong> {farmStatus.production}
          </li>
        </ul>
      </div>
      <div className="dashboard-section">
        <h2>Recent Activities</h2>
        <p>A log of the most recent events on your farm.</p>
        <ul className="activity-list">
          {recentActivities.map((activity) => (
            <li key={activity.id}>
              <span>{activity.date}</span>: {activity.activity}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;

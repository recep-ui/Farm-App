import React from 'react';
import DashboardCard from './DashboardCard';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const summary = [
  { label: 'Animals', value: 120, color: '#388e3c' },
  { label: 'Employees', value: 14, color: '#4b8457' },
  { label: 'Production (L)', value: 3200, color: '#b5c99a' },
  { label: 'Barns', value: 6, color: '#33673b' },
];

const data = [
  { name: 'Jan', Production: 400 },
  { name: 'Feb', Production: 600 },
  { name: 'Mar', Production: 800 },
  { name: 'Apr', Production: 700 },
  { name: 'May', Production: 900 },
  { name: 'Jun', Production: 1000 },
];

function Dashboard() {
  return (
    <div className="main-content">
      <h1>Dashboard</h1>
      <div style={{display:'flex',gap:'24px',marginBottom:32}}>
        {summary.map((item) => (
          <div key={item.label} style={{background:'#fff',borderRadius:16,boxShadow:'0 2px 8px rgba(51,103,59,0.08)',padding:'24px 32px',minWidth:140,textAlign:'center',color:item.color,fontWeight:600}}>
            <div style={{fontSize:28,marginBottom:8}}>{item.value}</div>
            <div style={{fontSize:15}}>{item.label}</div>
          </div>
        ))}
      </div>
      <div style={{background:'#fff',borderRadius:16,boxShadow:'0 2px 8px rgba(51,103,59,0.08)',padding:'24px 32px',marginBottom:32}}>
        <h2 style={{marginBottom:18,color:'#33673b'}}>Monthly Production</h2>
        <ResponsiveContainer width="100%" height={260}>
          <BarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="Production" fill="#388e3c" radius={[8,8,0,0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div style={{display:'flex',flexWrap:'wrap',gap:'24px'}}>
        <DashboardCard title="Animals" link="/animals" />
        <DashboardCard title="Barns" link="/barns" />
        <DashboardCard title="Employees" link="/employees" />
        <DashboardCard title="Health Records" link="/health-records" />
        <DashboardCard title="Feeding Records" link="/feeding-records" />
        <DashboardCard title="Production" link="/production" />
        <DashboardCard title="Tasks" link="/tasks" />
      </div>
    </div>
  );
}

export default Dashboard;

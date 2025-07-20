// Örnek aktif görevler
const activeTasks = [
  { id: 1, title: 'Sabah Yemleme', assignedTo: 'Ahmet', due: 'Bugün 09:00' },
  { id: 2, title: 'Sağım Kontrolü', assignedTo: 'Zeynep', due: 'Bugün 11:00' },
  { id: 3, title: 'Ahır Temizliği', assignedTo: 'Mehmet', due: 'Bugün 14:00' },
];
import React from 'react';
import DashboardCard from './DashboardCard';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const summary = [
  { label: 'Animals', value: 120, color: '#388e3c' },
  { label: 'Employees', value: 14, color: '#4b8457' },
  { label: 'Production (L)', value: 3200, color: '#b5c99a' },
  { label: 'Barns', value: 6, color: '#33673b' },
];


const data = [
  { name: 'Jan', Production: 400, Feed: 320 },
  { name: 'Feb', Production: 600, Feed: 410 },
  { name: 'Mar', Production: 800, Feed: 500 },
  { name: 'Apr', Production: 700, Feed: 480 },
  { name: 'May', Production: 900, Feed: 600 },
  { name: 'Jun', Production: 1000, Feed: 650 },
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
        <h2 style={{marginBottom:18,color:'#33673b'}}>Aylık Üretim ve Yem Tüketimi</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data} margin={{ top: 20, right: 30, left: 10, bottom: 10 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" label={{ value: 'Aylar', position: 'insideBottom', offset: -5 }} />
            <YAxis label={{ value: 'Litre / Kg', angle: -90, position: 'insideLeft', offset: 10 }} />
            <Tooltip formatter={(value, name) => name === 'Production' ? [`${value} Litre`, 'Üretim'] : [`${value} Kg`, 'Yem Tüketimi']} />
            <Legend verticalAlign="top" height={36} />
            <Bar dataKey="Production" name="Üretim (Litre)" fill="#388e3c" radius={[8,8,0,0]} barSize={32} />
            <Bar dataKey="Feed" name="Yem Tüketimi (Kg)" fill="#b5c99a" radius={[8,8,0,0]} barSize={32} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div style={{background:'#fff',borderRadius:16,boxShadow:'0 2px 8px rgba(51,103,59,0.08)',padding:'24px 32px',marginBottom:32}}>
        <h2 style={{marginBottom:18,color:'#33673b'}}>Aktif Görevler</h2>
        <table style={{width:'100%',borderCollapse:'collapse'}}>
          <thead>
            <tr style={{background:'#eaf4e6'}}>
              <th style={{padding:'10px 12px',textAlign:'left',color:'#33673b'}}>Görev</th>
              <th style={{padding:'10px 12px',textAlign:'left',color:'#33673b'}}>Atanan</th>
              <th style={{padding:'10px 12px',textAlign:'left',color:'#33673b'}}>Zaman</th>
            </tr>
          </thead>
          <tbody>
            {activeTasks.map(task => (
              <tr key={task.id} style={{borderBottom:'1px solid #f0f0f0'}}>
                <td style={{padding:'10px 12px'}}>{task.title}</td>
                <td style={{padding:'10px 12px'}}>{task.assignedTo}</td>
                <td style={{padding:'10px 12px'}}>{task.due}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div style={{display:'flex',flexWrap:'wrap',gap:'32px',justifyContent:'flex-start'}}>
        <DashboardCard title="Animals" onClick={() => window.onDashboardCardClick && window.onDashboardCardClick("Animals")} />
        <DashboardCard title="Barns" onClick={() => window.onDashboardCardClick && window.onDashboardCardClick("Barns")} />
        <DashboardCard title="Employees" onClick={() => window.onDashboardCardClick && window.onDashboardCardClick("Employees")} />
        <DashboardCard title="Health Records" onClick={() => window.onDashboardCardClick && window.onDashboardCardClick("Health Records")} />
        <DashboardCard title="Feeding Records" onClick={() => window.onDashboardCardClick && window.onDashboardCardClick("Feeding Records")} />
        <DashboardCard title="Production" onClick={() => window.onDashboardCardClick && window.onDashboardCardClick("Production")} />
        <DashboardCard title="Tasks" onClick={() => window.onDashboardCardClick && window.onDashboardCardClick("Tasks")} />
      </div>
    </div>
  );
}

export default Dashboard;

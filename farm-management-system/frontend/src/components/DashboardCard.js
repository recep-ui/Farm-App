import React from 'react';
import { Link } from 'react-router-dom';

function DashboardCard({ title, link }) {
  return (
    <div className="card" style={{minWidth:220,padding:24,background:'#fff',borderRadius:12,boxShadow:'0 2px 8px rgba(51,103,59,0.08)',textAlign:'center'}}>
      <h2 style={{marginBottom:12}}>{title}</h2>
      <Link to={link} style={{textDecoration:'none',color:'#388e3c',fontWeight:600}}>Go to {title}</Link>
    </div>
  );
}

export default DashboardCard;

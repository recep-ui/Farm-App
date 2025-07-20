import React from 'react';

function Sidebar({ activePage, onPageChange }) {
  return (
    <div className="sidebar">
      <h2>Farm Management</h2>
      <nav>
        <ul>
          <li><button className={activePage==="Dashboard"?"active":''} onClick={()=>onPageChange("Dashboard")}>Dashboard</button></li>
          <li><button className={activePage==="Animals"?"active":''} onClick={()=>onPageChange("Animals")}>Animals</button></li>
          <li><button className={activePage==="Barns"?"active":''} onClick={()=>onPageChange("Barns")}>Barns</button></li>
          <li><button className={activePage==="Employees"?"active":''} onClick={()=>onPageChange("Employees")}>Employees</button></li>
          <li><button className={activePage==="Health Records"?"active":''} onClick={()=>onPageChange("Health Records")}>Health Records</button></li>
          <li><button className={activePage==="Feeding Records"?"active":''} onClick={()=>onPageChange("Feeding Records")}>Feeding Records</button></li>
          <li><button className={activePage==="Production"?"active":''} onClick={()=>onPageChange("Production")}>Production</button></li>
          <li><button className={activePage==="Tasks"?"active":''} onClick={()=>onPageChange("Tasks")}>Tasks</button></li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;

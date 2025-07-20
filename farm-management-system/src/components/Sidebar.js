import React from "react";

function Sidebar({ activePage, onPageChange }) {
  const menuItems = [
    "Dashboard",
    "Animals",
    "Barns",
    "Feeding Records",
    "Production",
    "Health Records",
    "Employees",
    "Tasks"
  ];

  return (
    <nav className="sidebar">
      <h2>Farm Management</h2>
      <ul>
        {menuItems.map((item) => (
          <li
            key={item}
            className={activePage === item ? "active" : ""}
            onClick={() => onPageChange(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Sidebar;

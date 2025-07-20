import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Animals from "./components/Animals";
import Production from "./components/Production";
import HealthRecords from "./components/HealthRecords";
import Employees from "./components/Employees";
import Barns from "./components/Barns";
import FeedingRecords from "./components/FeedingRecords";
import Tasks from "./components/Tasks";

function App() {
  const [activePage, setActivePage] = useState("Dashboard");

  const handlePageChange = (page) => {
    setActivePage(page);
  };

  const renderPage = () => {
    switch (activePage) {
      case "Animals":
        return <Animals />;
      case "Barns":
        return <Barns />;
      case "Feeding Records":
        return <FeedingRecords />;
      case "Production":
        return <Production />;
      case "Health Records":
        return <HealthRecords />;
      case "Employees":
        return <Employees />;
      case "Tasks":
        return <Tasks />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <BrowserRouter>
      <div className="app-container">
        <Sidebar activePage={activePage} onPageChange={handlePageChange} />
        <div className="main-content">
          {renderPage()}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
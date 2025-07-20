import UserManagement from "./components/UserManagement";
import React, { useState, useEffect } from "react";
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
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  const [activePage, setActivePage] = useState("Dashboard");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  // Demo için kullanıcılar localde tutuluyor
  const defaultUsers = [
    { username: "admin", firstName: "Admin", lastName: "Admin", email: "admin@admin.com", title: "Yönetici", password: "1234", approved: true }
  ];
  const [users, setUsers] = useState(() => {
    const stored = localStorage.getItem("users");
    return stored ? JSON.parse(stored) : defaultUsers;
  });
  // users değiştiğinde localStorage'a kaydet
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);
  const [currentUser, setCurrentUser] = useState(null);

  const handlePageChange = (page) => {
    setActivePage(page);
  };

  const handleLogin = (username, password) => {
    // Kullanıcıyı kontrol et (büyük/küçük harf duyarlı)
    const found = users.find(u => u.username === username && u.password === password);
    if (found) {
      if (!found.approved && !(found.username === "admin")) {
        return false;
      }
      setIsLoggedIn(true);
      setCurrentUser(found);
      setActivePage("Dashboard");
      setShowRegister(false);
      return true;
    }
    return false;
  };

  const handleRegister = (username, firstName, lastName, email, title, password) => {
    // Aynı kullanıcı adı veya e-posta var mı kontrol et
    if (users.some(u => u.username === username)) {
      return { success: false, message: "Bu kullanıcı adı zaten var!" };
    }
    if (users.some(u => u.email === email)) {
      return { success: false, message: "Bu e-posta zaten kayıtlı!" };
    }
    const newUsers = [...users, { username, firstName, lastName, email, title, password, approved: false }];
    setUsers(newUsers);
    setShowRegister(false);
    return { success: true };
  };

  const handleApproveUser = (username) => {
    const newUsers = users.map(u => u.username === username ? { ...u, approved: true } : u);
    setUsers(newUsers);
  };

  const handleDeleteUser = (username) => {
    const newUsers = users.filter(u => u.username !== username);
    setUsers(newUsers);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
    setActivePage("Dashboard");
  };

  const handleChangeAdminPassword = (oldPass, newPass) => {
    const admin = users.find(u => u.username === "admin");
    if (!admin || admin.password !== oldPass) {
      return { success: false, message: "Mevcut şifre yanlış!" };
    }
    const newUsers = users.map(u => u.username === "admin" ? { ...u, password: newPass } : u);
    setUsers(newUsers);
    return { success: true };
  };

  const renderPage = () => {
    const backButton = (
      <button
        style={{marginBottom:24,background:'#388e3c',color:'#fff',border:'none',borderRadius:8,padding:'8px 20px',fontWeight:600,fontSize:'1rem',cursor:'pointer'}}
        onClick={() => setActivePage("Dashboard")}
      >
        ⬅ Dashboard'a Dön
      </button>
    );
    switch (activePage) {
      case "Animals":
        return <><div>{backButton}</div><Animals /></>;
      case "Barns":
        return <><div>{backButton}</div><Barns /></>;
      case "Feeding Records":
        return <><div>{backButton}</div><FeedingRecords /></>;
      case "Production":
        return <><div>{backButton}</div><Production /></>;
      case "Health Records":
        return <><div>{backButton}</div><HealthRecords /></>;
      case "Employees":
        return <><div>{backButton}</div><Employees /></>;
      case "Tasks":
        return <><div>{backButton}</div><Tasks /></>;
      case "UserManagement":
        return <UserManagement users={users} onApprove={handleApproveUser} onDelete={handleDeleteUser} onChangeAdminPassword={handleChangeAdminPassword} />;
      default:
        window.onDashboardCardClick = handlePageChange;
        return <Dashboard />;
    }
  };

  if (!isLoggedIn) {
    if (showRegister) {
      return <Register
        onRegister={(username, firstName, lastName, email, title, password) => {
          const result = handleRegister(username, firstName, lastName, email, title, password);
          return result;
        }}
        onGoToLogin={() => setShowRegister(false)}
      />;
    } else {
      return <Login
        onLogin={(username, password) => handleLogin(username, password)}
        onGoToRegister={() => setShowRegister(true)}
        onPasswordReset={(updatedUsers) => setUsers(updatedUsers)}
      />;
    }
  }

  return (
    <BrowserRouter>
      <div className="app-container">
        <Sidebar
          activePage={activePage}
          onPageChange={handlePageChange}
          isAdmin={currentUser && currentUser.username === "admin"}
        />
        <div className="main-content">
          <button
            style={{position:'absolute',top:20,right:32,background:'#e53935',color:'#fff',border:'none',borderRadius:8,padding:'8px 20px',fontWeight:600,fontSize:'1rem',cursor:'pointer',zIndex:10}}
            onClick={handleLogout}
          >
            Çıkış Yap
          </button>
          {renderPage()}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
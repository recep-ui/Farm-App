-- Farm Management System MySQL Database Setup

CREATE DATABASE IF NOT EXISTS farm_management;
USE farm_management;

-- Barns Table
CREATE TABLE IF NOT EXISTS barns (
    Barn_id INT AUTO_INCREMENT PRIMARY KEY,
    Name TEXT NOT NULL,
    Capacity INT,
    Location TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Animals Table
CREATE TABLE IF NOT EXISTS animals (
    Animal_id INT AUTO_INCREMENT PRIMARY KEY,
    species TEXT NOT NULL,
    breed TEXT,
    Birth_date DATE,
    Gender TEXT,
    Tag_number TEXT UNIQUE,
    Mother_id INT,
    Father_id INT,
    Registration_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    Barn_id INT,
    Total_production REAL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (Barn_id) REFERENCES barns(Barn_id)
);

-- Employees Table
CREATE TABLE IF NOT EXISTS employees (
    Employee_id INT AUTO_INCREMENT PRIMARY KEY,
    First_name TEXT NOT NULL,
    Last_name TEXT NOT NULL,
    Position TEXT,
    Contact_info TEXT,
    Hire_date DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Health Records Table
CREATE TABLE IF NOT EXISTS health_records (
    HealthRecord_id INT AUTO_INCREMENT PRIMARY KEY,
    Animal_id INT,
    Date DATE,
    Diagnosis TEXT,
    Treatment_applied TEXT,
    Medications TEXT,
    Veterinarian_info TEXT,
    Notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (Animal_id) REFERENCES animals(Animal_id) ON DELETE CASCADE
);

-- Feeding Records Table
CREATE TABLE IF NOT EXISTS feeding_records (
    FeedingRecord_id INT AUTO_INCREMENT PRIMARY KEY,
    Animal_id INT,
    Date DATE,
    Feed_type TEXT,
    Quantity REAL,
    Unit TEXT,
    Notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (Animal_id) REFERENCES animals(Animal_id) ON DELETE CASCADE
);

-- Production Records Table
CREATE TABLE IF NOT EXISTS production_records (
    ProductionRecord_id INT AUTO_INCREMENT PRIMARY KEY,
    Animal_id INT,
    Date DATE,
    Product_type TEXT,
    Quantity REAL,
    Unit TEXT,
    Quality TEXT,
    Notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (Animal_id) REFERENCES animals(Animal_id) ON DELETE CASCADE
);

-- Tasks Table
CREATE TABLE IF NOT EXISTS tasks (
    Task_id INT AUTO_INCREMENT PRIMARY KEY,
    Title TEXT NOT NULL,
    Description TEXT,
    Assigned_employee_id INT,
    Creation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    Due_date DATE,
    Status TEXT,
    Completed_date TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (Assigned_employee_id) REFERENCES employees(Employee_id)
);

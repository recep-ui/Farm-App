-- Create the database
CREATE DATABASE IF NOT EXISTS farm_management;

-- Use the database
USE farm_management;

-- Create the Animals table
CREATE TABLE IF NOT EXISTS Animals (
    animal_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    species VARCHAR(255) NOT NULL,
    birth_date DATE,
    gender ENUM('Male', 'Female', 'Other')
);

-- Create the Employees table
CREATE TABLE IF NOT EXISTS Employees (
    employee_id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    position VARCHAR(255),
    hire_date DATE
);

-- Create the HealthRecords table
CREATE TABLE IF NOT EXISTS HealthRecords (
    record_id INT AUTO_INCREMENT PRIMARY KEY,
    animal_id INT,
    record_date DATE NOT NULL,
    description TEXT,
    treatment TEXT,
    FOREIGN KEY (animal_id) REFERENCES Animals(animal_id)
);

-- Create the Production table
CREATE TABLE IF NOT EXISTS Production (
    production_id INT AUTO_INCREMENT PRIMARY KEY,
    animal_id INT,
    product_type VARCHAR(255) NOT NULL,
    quantity DECIMAL(10, 2) NOT NULL,
    production_date DATE NOT NULL,
    FOREIGN KEY (animal_id) REFERENCES Animals(animal_id)
);

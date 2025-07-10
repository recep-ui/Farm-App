import React from 'react';

function Employees() {
  const employees = [
    { id: 1, name: 'John Doe', position: 'Farmhand', salary: 30000 },
    { id: 2, name: 'Jane Smith', position: 'Veterinarian', salary: 60000 },
    { id: 3, name: 'Peter Jones', position: 'Manager', salary: 75000 },
  ];

  return (
    <div>
      <h1>Employees</h1>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Position</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.position}</td>
              <td>${employee.salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Employees;
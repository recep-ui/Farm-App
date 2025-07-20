import React from 'react';

function Employees() {
  const employees = [
    {
      Employee_id: 1,
      First_name: 'John',
      Last_name: 'Doe',
      Position: 'Farmhand',
      Contact_info: '555-1234',
      Hire_date: '2022-01-10'
    },
    {
      Employee_id: 2,
      First_name: 'Jane',
      Last_name: 'Smith',
      Position: 'Veterinarian',
      Contact_info: '555-5678',
      Hire_date: '2023-03-15'
    }
  ];

  return (
    <div>
      <h1>Employees</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Position</th>
            <th>Contact Info</th>
            <th>Hire Date</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.Employee_id}>
              <td>{employee.Employee_id}</td>
              <td>{employee.First_name}</td>
              <td>{employee.Last_name}</td>
              <td>{employee.Position}</td>
              <td>{employee.Contact_info}</td>
              <td>{employee.Hire_date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Employees;
import React from 'react';

function HealthRecords() {
  const records = [
    { id: 1, animal: 'Bessie', date: '2023-10-26', notes: 'Annual checkup, all clear.' },
    { id: 2, animal: 'Clementine', date: '2023-11-15', notes: 'Vaccination for flu.' },
    { id: 3, animal: 'Dolly', date: '2024-01-05', notes: 'Treated for minor hoof injury.' },
  ];

  return (
    <div>
      <h1>Health Records</h1>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Animal</th>
            <th>Date</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record) => (
            <tr key={record.id}>
              <td>{record.id}</td>
              <td>{record.animal}</td>
              <td>{record.date}</td>
              <td>{record.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default HealthRecords;
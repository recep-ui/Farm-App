import React from 'react';

function Barns() {
  const barns = [
    { Barn_id: 1, Name: 'Main Barn', Capacity: 100, Location: 'North Field' },
    { Barn_id: 2, Name: 'Sheep Barn', Capacity: 50, Location: 'East Field' },
  ];

  return (
    <div>
      <h1>Barns</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Barn ID</th>
            <th>Name</th>
            <th>Capacity</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {barns.map((barn) => (
            <tr key={barn.Barn_id}>
              <td>{barn.Barn_id}</td>
              <td>{barn.Name}</td>
              <td>{barn.Capacity}</td>
              <td>{barn.Location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Barns;

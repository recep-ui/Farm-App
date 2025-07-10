import React from 'react';

function Animals() {
  const animals = [
    { id: 1, name: 'Bessie', breed: 'Holstein', age: 4 },
    { id: 2, name: 'Clementine', breed: 'Jersey', age: 2 },
    { id: 3, name: 'Dolly', breed: 'Guernsey', age: 5 },
  ];

  return (
    <div>
      <h1>Animals</h1>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Breed</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {animals.map((animal) => (
            <tr key={animal.id}>
              <td>{animal.id}</td>
              <td>{animal.name}</td>
              <td>{animal.breed}</td>
              <td>{animal.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Animals;
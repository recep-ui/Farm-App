import React from 'react';

function Animals() {
  const animals = [
    {
      Animal_id: 1,
      species: 'İnek',
      breed: 'Holstein',
      Birth_date: '2020-03-15',
      Gender: 'Dişi',
      Tag_number: 'TR123456',
      Mother_id: null,
      Father_id: null,
      Registration_date: '2020-03-20 10:00:00',
      Barn_id: 1,
      Total_production: 1200.5
    },
    {
      Animal_id: 2,
      species: 'Koyun',
      breed: 'Merinos',
      Birth_date: '2021-05-10',
      Gender: 'Erkek',
      Tag_number: 'TR654321',
      Mother_id: null,
      Father_id: null,
      Registration_date: '2021-05-15 09:00:00',
      Barn_id: 2,
      Total_production: 300.0
    }
  ];

  return (
    <div>
      <h1>Animals</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Animal ID</th>
            <th>Species</th>
            <th>Breed</th>
            <th>Birth Date</th>
            <th>Gender</th>
            <th>Tag Number</th>
            <th>Mother ID</th>
            <th>Father ID</th>
            <th>Registration Date</th>
            <th>Barn ID</th>
            <th>Total Production</th>
          </tr>
        </thead>
        <tbody>
          {animals.map((animal) => (
            <tr key={animal.Animal_id}>
              <td>{animal.Animal_id}</td>
              <td>{animal.species}</td>
              <td>{animal.breed}</td>
              <td>{animal.Birth_date}</td>
              <td>{animal.Gender}</td>
              <td>{animal.Tag_number}</td>
              <td>{animal.Mother_id || '-'}</td>
              <td>{animal.Father_id || '-'}</td>
              <td>{animal.Registration_date}</td>
              <td>{animal.Barn_id}</td>
              <td>{animal.Total_production}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Animals;
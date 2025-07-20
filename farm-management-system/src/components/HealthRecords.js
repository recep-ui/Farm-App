import React from 'react';

function HealthRecords() {
  const records = [
    {
      HealthRecord_id: 1,
      Animal_id: 1,
      Date: '2025-07-19',
      Diagnosis: 'Grip',
      Treatment_applied: 'İlaç tedavisi',
      Medications: 'Antibiyotik',
      Veterinarian_info: 'Dr. Ahmet',
      Notes: 'Hızla iyileşti.'
    },
    {
      HealthRecord_id: 2,
      Animal_id: 2,
      Date: '2025-07-18',
      Diagnosis: 'Ayak yarası',
      Treatment_applied: 'Pansuman',
      Medications: 'Yara bandı',
      Veterinarian_info: 'Dr. Zeynep',
      Notes: 'Kontrol edilecek.'
    }
  ];

  return (
    <div>
      <h1>Health Records</h1>
      <table className="table">
        <thead>
          <tr>
            <th>HealthRecord ID</th>
            <th>Animal ID</th>
            <th>Date</th>
            <th>Diagnosis</th>
            <th>Treatment Applied</th>
            <th>Medications</th>
            <th>Veterinarian Info</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record) => (
            <tr key={record.HealthRecord_id}>
              <td>{record.HealthRecord_id}</td>
              <td>{record.Animal_id}</td>
              <td>{record.Date}</td>
              <td>{record.Diagnosis}</td>
              <td>{record.Treatment_applied}</td>
              <td>{record.Medications}</td>
              <td>{record.Veterinarian_info}</td>
              <td>{record.Notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default HealthRecords;
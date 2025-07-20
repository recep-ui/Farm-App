import React from 'react';

function FeedingRecords() {
  const feedingRecords = [
    { FeedingRecord_id: 1, Animal_id: 1, Date: '2025-07-20', Feed_type: 'Grain', Quantity: 10.5, Unit: 'kg', Notes: 'Sabah beslemesi' },
    { FeedingRecord_id: 2, Animal_id: 2, Date: '2025-07-20', Feed_type: 'Grass', Quantity: 8.0, Unit: 'kg', Notes: 'Öğlen beslemesi' },
  ];

  return (
    <div>
      <h1>Feeding Records</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Feeding Record ID</th>
            <th>Animal ID</th>
            <th>Date</th>
            <th>Feed Type</th>
            <th>Quantity</th>
            <th>Unit</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {feedingRecords.map((rec) => (
            <tr key={rec.FeedingRecord_id}>
              <td>{rec.FeedingRecord_id}</td>
              <td>{rec.Animal_id}</td>
              <td>{rec.Date}</td>
              <td>{rec.Feed_type}</td>
              <td>{rec.Quantity}</td>
              <td>{rec.Unit}</td>
              <td>{rec.Notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FeedingRecords;

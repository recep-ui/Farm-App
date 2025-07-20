import React from 'react';

function Production() {
  const production = [
    {
      ProductionRecord_id: 1,
      Animal_id: 1,
      Date: '2025-07-19',
      Product_type: 'Süt',
      Quantity: 50.5,
      Unit: 'Litre',
      Quality: 'A',
      Notes: 'Sabah sağımı'
    },
    {
      ProductionRecord_id: 2,
      Animal_id: 2,
      Date: '2025-07-19',
      Product_type: 'Yumurta',
      Quantity: 30,
      Unit: 'Adet',
      Quality: 'B',
      Notes: 'Günlük üretim'
    }
  ];

  return (
    <div>
      <h1>Production Records</h1>
      <table className="table">
        <thead>
          <tr>
            <th>ProductionRecord ID</th>
            <th>Animal ID</th>
            <th>Date</th>
            <th>Product Type</th>
            <th>Quantity</th>
            <th>Unit</th>
            <th>Quality</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {production.map((item) => (
            <tr key={item.ProductionRecord_id}>
              <td>{item.ProductionRecord_id}</td>
              <td>{item.Animal_id}</td>
              <td>{item.Date}</td>
              <td>{item.Product_type}</td>
              <td>{item.Quantity}</td>
              <td>{item.Unit}</td>
              <td>{item.Quality}</td>
              <td>{item.Notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Production;
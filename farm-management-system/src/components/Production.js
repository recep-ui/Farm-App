import React from 'react';

function Production() {
  const production = [
    { id: 1, product: 'Milk', quantity: 100, unit: 'gallons', date: '2023-10-25' },
    { id: 2, product: 'Eggs', quantity: 500, unit: 'dozens', date: '2023-10-25' },
    { id: 3, product: 'Wool', quantity: 200, unit: 'pounds', date: '2023-10-24' },
  ];

  return (
    <div>
      <h1>Production</h1>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Product</th>
            <th>Quantity</th>
            <th>Unit</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {production.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.product}</td>
              <td>{item.quantity}</td>
              <td>{item.unit}</td>
              <td>{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Production;
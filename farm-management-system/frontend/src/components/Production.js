import React, { useState } from 'react';

function Production() {
  const [production, setProduction] = useState([
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
  ]);

  const [form, setForm] = useState({
    Animal_id: '',
    Date: '',
    Product_type: '',
    Quantity: '',
    Unit: '',
    Quality: '',
    Notes: ''
  });
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      const updated = [...production];
      updated[editIndex] = { ...form, ProductionRecord_id: production[editIndex].ProductionRecord_id };
      setProduction(updated);
      setEditIndex(null);
    } else {
      setProduction([
        ...production,
        { ...form, ProductionRecord_id: production.length ? Math.max(...production.map(a => a.ProductionRecord_id)) + 1 : 1 }
      ]);
    }
    setForm({ Animal_id: '', Date: '', Product_type: '', Quantity: '', Unit: '', Quality: '', Notes: '' });
  };

  const handleDelete = (index) => {
    setProduction(production.filter((_, i) => i !== index));
  };

  const handleEdit = (index) => {
    setForm(production[index]);
    setEditIndex(index);
  };

  return (
    <div>
      <h1>Production Records</h1>
      <form onSubmit={handleSubmit} className="form-section">
        <input name="Animal_id" placeholder="Animal ID" value={form.Animal_id} onChange={handleChange} required />
        <input name="Date" placeholder="Date" value={form.Date} onChange={handleChange} type="date" />
        <input name="Product_type" placeholder="Product Type" value={form.Product_type} onChange={handleChange} />
        <input name="Quantity" placeholder="Quantity" value={form.Quantity} onChange={handleChange} />
        <input name="Unit" placeholder="Unit" value={form.Unit} onChange={handleChange} />
        <input name="Quality" placeholder="Quality" value={form.Quality} onChange={handleChange} />
        <input name="Notes" placeholder="Notes" value={form.Notes} onChange={handleChange} />
        <button type="submit">{editIndex !== null ? 'Update' : 'Add'}</button>
        {editIndex !== null && <button type="button" onClick={()=>{setForm({Animal_id:'',Date:'',Product_type:'',Quantity:'',Unit:'',Quality:'',Notes:''});setEditIndex(null);}}>Cancel</button>}
      </form>
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
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {production.map((record, i) => (
            <tr key={record.ProductionRecord_id}>
              <td>{record.ProductionRecord_id}</td>
              <td>{record.Animal_id}</td>
              <td>{record.Date}</td>
              <td>{record.Product_type}</td>
              <td>{record.Quantity}</td>
              <td>{record.Unit}</td>
              <td>{record.Quality}</td>
              <td>{record.Notes}</td>
              <td>
                <button onClick={()=>handleEdit(i)}>Edit</button>
                <button onClick={()=>handleDelete(i)} style={{marginLeft:5}}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Production;

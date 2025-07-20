import React, { useState } from 'react';

function FeedingRecords() {
  const [feedingRecords, setFeedingRecords] = useState([
    { FeedingRecord_id: 1, Animal_id: 1, Date: '2025-07-20', Feed_type: 'Grain', Quantity: 10.5, Unit: 'kg', Notes: 'Sabah beslemesi' },
    { FeedingRecord_id: 2, Animal_id: 2, Date: '2025-07-20', Feed_type: 'Grass', Quantity: 8.0, Unit: 'kg', Notes: 'Öğlen beslemesi' },
  ]);

  const [form, setForm] = useState({
    Animal_id: '',
    Date: '',
    Feed_type: '',
    Quantity: '',
    Unit: '',
    Notes: ''
  });
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      const updated = [...feedingRecords];
      updated[editIndex] = { ...form, FeedingRecord_id: feedingRecords[editIndex].FeedingRecord_id };
      setFeedingRecords(updated);
      setEditIndex(null);
    } else {
      setFeedingRecords([
        ...feedingRecords,
        { ...form, FeedingRecord_id: feedingRecords.length ? Math.max(...feedingRecords.map(a => a.FeedingRecord_id)) + 1 : 1 }
      ]);
    }
    setForm({ Animal_id: '', Date: '', Feed_type: '', Quantity: '', Unit: '', Notes: '' });
  };

  const handleDelete = (index) => {
    setFeedingRecords(feedingRecords.filter((_, i) => i !== index));
  };

  const handleEdit = (index) => {
    setForm(feedingRecords[index]);
    setEditIndex(index);
  };

  return (
    <div>
      <h1>Feeding Records</h1>
      <form onSubmit={handleSubmit} className="form-section">
        <input name="Animal_id" placeholder="Animal ID" value={form.Animal_id} onChange={handleChange} required />
        <input name="Date" placeholder="Date" value={form.Date} onChange={handleChange} type="date" />
        <input name="Feed_type" placeholder="Feed Type" value={form.Feed_type} onChange={handleChange} />
        <input name="Quantity" placeholder="Quantity" value={form.Quantity} onChange={handleChange} />
        <input name="Unit" placeholder="Unit" value={form.Unit} onChange={handleChange} />
        <input name="Notes" placeholder="Notes" value={form.Notes} onChange={handleChange} />
        <button type="submit">{editIndex !== null ? 'Update' : 'Add'}</button>
        {editIndex !== null && <button type="button" onClick={()=>{setForm({Animal_id:'',Date:'',Feed_type:'',Quantity:'',Unit:'',Notes:''});setEditIndex(null);}}>Cancel</button>}
      </form>
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
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {feedingRecords.map((rec, i) => (
            <tr key={rec.FeedingRecord_id}>
              <td>{rec.FeedingRecord_id}</td>
              <td>{rec.Animal_id}</td>
              <td>{rec.Date}</td>
              <td>{rec.Feed_type}</td>
              <td>{rec.Quantity}</td>
              <td>{rec.Unit}</td>
              <td>{rec.Notes}</td>
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

export default FeedingRecords;

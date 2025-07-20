import React, { useState } from 'react';

function Barns() {
  const [barns, setBarns] = useState([
    { Barn_id: 1, Name: 'Main Barn', Capacity: 100, Location: 'North Field' },
    { Barn_id: 2, Name: 'Sheep Barn', Capacity: 50, Location: 'East Field' },
  ]);

  const [form, setForm] = useState({
    Name: '',
    Capacity: '',
    Location: ''
  });
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      const updated = [...barns];
      updated[editIndex] = { ...form, Barn_id: barns[editIndex].Barn_id };
      setBarns(updated);
      setEditIndex(null);
    } else {
      setBarns([
        ...barns,
        { ...form, Barn_id: barns.length ? Math.max(...barns.map(a => a.Barn_id)) + 1 : 1 }
      ]);
    }
    setForm({ Name: '', Capacity: '', Location: '' });
  };

  const handleDelete = (index) => {
    setBarns(barns.filter((_, i) => i !== index));
  };

  const handleEdit = (index) => {
    setForm(barns[index]);
    setEditIndex(index);
  };

  return (
    <div>
      <h1>Barns</h1>
      <form onSubmit={handleSubmit} className="form-section">
        <input name="Name" placeholder="Name" value={form.Name} onChange={handleChange} required />
        <input name="Capacity" placeholder="Capacity" value={form.Capacity} onChange={handleChange} />
        <input name="Location" placeholder="Location" value={form.Location} onChange={handleChange} />
        <button type="submit">{editIndex !== null ? 'Update' : 'Add'}</button>
        {editIndex !== null && <button type="button" onClick={()=>{setForm({Name:'',Capacity:'',Location:''});setEditIndex(null);}}>Cancel</button>}
      </form>
      <table className="table">
        <thead>
          <tr>
            <th>Barn ID</th>
            <th>Name</th>
            <th>Capacity</th>
            <th>Location</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {barns.map((barn, i) => (
            <tr key={barn.Barn_id}>
              <td>{barn.Barn_id}</td>
              <td>{barn.Name}</td>
              <td>{barn.Capacity}</td>
              <td>{barn.Location}</td>
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

export default Barns;

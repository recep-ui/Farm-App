import React, { useState } from 'react';

function HealthRecords() {
  const [records, setRecords] = useState([
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
  ]);

  const [form, setForm] = useState({
    Animal_id: '',
    Date: '',
    Diagnosis: '',
    Treatment_applied: '',
    Medications: '',
    Veterinarian_info: '',
    Notes: ''
  });
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      const updated = [...records];
      updated[editIndex] = { ...form, HealthRecord_id: records[editIndex].HealthRecord_id };
      setRecords(updated);
      setEditIndex(null);
    } else {
      setRecords([
        ...records,
        { ...form, HealthRecord_id: records.length ? Math.max(...records.map(a => a.HealthRecord_id)) + 1 : 1 }
      ]);
    }
    setForm({ Animal_id: '', Date: '', Diagnosis: '', Treatment_applied: '', Medications: '', Veterinarian_info: '', Notes: '' });
  };

  const handleDelete = (index) => {
    setRecords(records.filter((_, i) => i !== index));
  };

  const handleEdit = (index) => {
    setForm(records[index]);
    setEditIndex(index);
  };

  return (
    <div>
      <h1>Health Records</h1>
      <form onSubmit={handleSubmit} className="form-section">
        <input name="Animal_id" placeholder="Animal ID" value={form.Animal_id} onChange={handleChange} required />
        <input name="Date" placeholder="Date" value={form.Date} onChange={handleChange} type="date" />
        <input name="Diagnosis" placeholder="Diagnosis" value={form.Diagnosis} onChange={handleChange} />
        <input name="Treatment_applied" placeholder="Treatment Applied" value={form.Treatment_applied} onChange={handleChange} />
        <input name="Medications" placeholder="Medications" value={form.Medications} onChange={handleChange} />
        <input name="Veterinarian_info" placeholder="Veterinarian Info" value={form.Veterinarian_info} onChange={handleChange} />
        <input name="Notes" placeholder="Notes" value={form.Notes} onChange={handleChange} />
        <button type="submit">{editIndex !== null ? 'Update' : 'Add'}</button>
        {editIndex !== null && <button type="button" onClick={()=>{setForm({Animal_id:'',Date:'',Diagnosis:'',Treatment_applied:'',Medications:'',Veterinarian_info:'',Notes:''});setEditIndex(null);}}>Cancel</button>}
      </form>
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
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record, i) => (
            <tr key={record.HealthRecord_id}>
              <td>{record.HealthRecord_id}</td>
              <td>{record.Animal_id}</td>
              <td>{record.Date}</td>
              <td>{record.Diagnosis}</td>
              <td>{record.Treatment_applied}</td>
              <td>{record.Medications}</td>
              <td>{record.Veterinarian_info}</td>
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

export default HealthRecords;

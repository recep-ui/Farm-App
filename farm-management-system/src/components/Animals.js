import React, { useState } from 'react';

function Animals() {
  const [animals, setAnimals] = useState([
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
  ]);

  const [form, setForm] = useState({
    Animal_id: '',
    species: '',
    breed: '',
    Birth_date: '',
    Gender: '',
    Tag_number: '',
    Mother_id: '',
    Father_id: '',
    Registration_date: '',
    Barn_id: '',
    Total_production: ''
  });
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      // Güncelle
      const updated = [...animals];
      updated[editIndex] = { ...form, Animal_id: animals[editIndex].Animal_id };
      setAnimals(updated);
      setEditIndex(null);
    } else {
      // Ekle
      setAnimals([
        ...animals,
        { ...form, Animal_id: animals.length ? Math.max(...animals.map(a => a.Animal_id)) + 1 : 1 }
      ]);
    }
    setForm({
      Animal_id: '', species: '', breed: '', Birth_date: '', Gender: '', Tag_number: '', Mother_id: '', Father_id: '', Registration_date: '', Barn_id: '', Total_production: ''
    });
  };

  const handleDelete = (index) => {
    setAnimals(animals.filter((_, i) => i !== index));
  };

  const handleEdit = (index) => {
    setForm(animals[index]);
    setEditIndex(index);
  };

  return (
    <div>
      <h1>Animals</h1>
      <form onSubmit={handleSubmit} className="form-section">
        <input name="species" placeholder="Species" value={form.species} onChange={handleChange} required />
        <input name="breed" placeholder="Breed" value={form.breed} onChange={handleChange} />
        <input name="Birth_date" placeholder="Birth Date" value={form.Birth_date} onChange={handleChange} type="date" />
        <input name="Gender" placeholder="Gender" value={form.Gender} onChange={handleChange} />
        <input name="Tag_number" placeholder="Tag Number" value={form.Tag_number} onChange={handleChange} />
        <input name="Mother_id" placeholder="Mother ID" value={form.Mother_id} onChange={handleChange} />
        <input name="Father_id" placeholder="Father ID" value={form.Father_id} onChange={handleChange} />
        <input name="Registration_date" placeholder="Registration Date" value={form.Registration_date} onChange={handleChange} type="datetime-local" />
        <input name="Barn_id" placeholder="Barn ID" value={form.Barn_id} onChange={handleChange} />
        <input name="Total_production" placeholder="Total Production" value={form.Total_production} onChange={handleChange} />
        <button type="submit">{editIndex !== null ? 'Update' : 'Add'}</button>
        {editIndex !== null && <button type="button" onClick={()=>{setForm({Animal_id:'',species:'',breed:'',Birth_date:'',Gender:'',Tag_number:'',Mother_id:'',Father_id:'',Registration_date:'',Barn_id:'',Total_production:''});setEditIndex(null);}}>Cancel</button>}
      </form>
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
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {animals.map((animal, i) => (
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

export default Animals;
import React, { useState } from 'react';

function Employees() {
  const [employees, setEmployees] = useState([
    {
      Employee_id: 1,
      First_name: 'John',
      Last_name: 'Doe',
      Position: 'Farmhand',
      Contact_info: '555-1234',
      Hire_date: '2022-01-10'
    },
    {
      Employee_id: 2,
      First_name: 'Jane',
      Last_name: 'Smith',
      Position: 'Veterinarian',
      Contact_info: '555-5678',
      Hire_date: '2023-03-15'
    }
  ]);

  const [form, setForm] = useState({
    First_name: '',
    Last_name: '',
    Position: '',
    Contact_info: '',
    Hire_date: ''
  });
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      // Güncelle
      const updated = [...employees];
      updated[editIndex] = { ...form, Employee_id: employees[editIndex].Employee_id };
      setEmployees(updated);
      setEditIndex(null);
    } else {
      // Ekle
      setEmployees([
        ...employees,
        { ...form, Employee_id: employees.length ? Math.max(...employees.map(a => a.Employee_id)) + 1 : 1 }
      ]);
    }
    setForm({ First_name: '', Last_name: '', Position: '', Contact_info: '', Hire_date: '' });
  };

  const handleDelete = (index) => {
    setEmployees(employees.filter((_, i) => i !== index));
  };

  const handleEdit = (index) => {
    setForm(employees[index]);
    setEditIndex(index);
  };

  return (
    <div>
      <h1>Employees</h1>
      <form onSubmit={handleSubmit} className="form-section">
        <input name="First_name" placeholder="First Name" value={form.First_name} onChange={handleChange} required />
        <input name="Last_name" placeholder="Last Name" value={form.Last_name} onChange={handleChange} required />
        <input name="Position" placeholder="Position" value={form.Position} onChange={handleChange} />
        <input name="Contact_info" placeholder="Contact Info" value={form.Contact_info} onChange={handleChange} />
        <input name="Hire_date" placeholder="Hire Date" value={form.Hire_date} onChange={handleChange} type="date" />
        <button type="submit">{editIndex !== null ? 'Update' : 'Add'}</button>
        {editIndex !== null && <button type="button" onClick={()=>{setForm({First_name:'',Last_name:'',Position:'',Contact_info:'',Hire_date:''});setEditIndex(null);}}>Cancel</button>}
      </form>
      <table className="table">
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Position</th>
            <th>Contact Info</th>
            <th>Hire Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, i) => (
            <tr key={employee.Employee_id}>
              <td>{employee.Employee_id}</td>
              <td>{employee.First_name}</td>
              <td>{employee.Last_name}</td>
              <td>{employee.Position}</td>
              <td>{employee.Contact_info}</td>
              <td>{employee.Hire_date}</td>
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

export default Employees;
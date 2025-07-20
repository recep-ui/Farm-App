import React, { useState } from 'react';

function Tasks() {
  const [tasks, setTasks] = useState([
    { Task_id: 1, Title: 'Hayvanları Besle', Description: 'Sabah yemlemesi', Assigned_employee_id: 1, Creation_date: '2025-07-19 08:00:00', Due_date: '2025-07-19', Status: 'Tamamlandı', Completed_date: '2025-07-19 09:00:00' },
    { Task_id: 2, Title: 'Ahır Temizliği', Description: 'Büyük ahır temizlenecek', Assigned_employee_id: 2, Creation_date: '2025-07-19 10:00:00', Due_date: '2025-07-19', Status: 'Devam Ediyor', Completed_date: null },
  ]);

  const [form, setForm] = useState({
    Title: '',
    Description: '',
    Assigned_employee_id: '',
    Creation_date: '',
    Due_date: '',
    Status: '',
    Completed_date: ''
  });
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      const updated = [...tasks];
      updated[editIndex] = { ...form, Task_id: tasks[editIndex].Task_id };
      setTasks(updated);
      setEditIndex(null);
    } else {
      setTasks([
        ...tasks,
        { ...form, Task_id: tasks.length ? Math.max(...tasks.map(a => a.Task_id)) + 1 : 1 }
      ]);
    }
    setForm({ Title: '', Description: '', Assigned_employee_id: '', Creation_date: '', Due_date: '', Status: '', Completed_date: '' });
  };

  const handleDelete = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const handleEdit = (index) => {
    setForm(tasks[index]);
    setEditIndex(index);
  };

  return (
    <div>
      <h1>Tasks</h1>
      <form onSubmit={handleSubmit} className="form-section">
        <input name="Title" placeholder="Title" value={form.Title} onChange={handleChange} required />
        <input name="Description" placeholder="Description" value={form.Description} onChange={handleChange} />
        <input name="Assigned_employee_id" placeholder="Assigned Employee ID" value={form.Assigned_employee_id} onChange={handleChange} />
        <input name="Creation_date" placeholder="Creation Date" value={form.Creation_date} onChange={handleChange} type="datetime-local" />
        <input name="Due_date" placeholder="Due Date" value={form.Due_date} onChange={handleChange} type="date" />
        <input name="Status" placeholder="Status" value={form.Status} onChange={handleChange} />
        <input name="Completed_date" placeholder="Completed Date" value={form.Completed_date} onChange={handleChange} type="datetime-local" />
        <button type="submit">{editIndex !== null ? 'Update' : 'Add'}</button>
        {editIndex !== null && <button type="button" onClick={()=>{setForm({Title:'',Description:'',Assigned_employee_id:'',Creation_date:'',Due_date:'',Status:'',Completed_date:''});setEditIndex(null);}}>Cancel</button>}
      </form>
      <table className="table">
        <thead>
          <tr>
            <th>Task ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Assigned Employee ID</th>
            <th>Creation Date</th>
            <th>Due Date</th>
            <th>Status</th>
            <th>Completed Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, i) => (
            <tr key={task.Task_id}>
              <td>{task.Task_id}</td>
              <td>{task.Title}</td>
              <td>{task.Description}</td>
              <td>{task.Assigned_employee_id}</td>
              <td>{task.Creation_date}</td>
              <td>{task.Due_date}</td>
              <td>{task.Status}</td>
              <td>{task.Completed_date || '-'}</td>
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

export default Tasks;

import React from 'react';

function Tasks() {
  const tasks = [
    { Task_id: 1, Title: 'Hayvanları Besle', Description: 'Sabah yemlemesi', Assigned_employee_id: 1, Creation_date: '2025-07-19 08:00:00', Due_date: '2025-07-19', Status: 'Tamamlandı', Completed_date: '2025-07-19 09:00:00' },
    { Task_id: 2, Title: 'Ahır Temizliği', Description: 'Büyük ahır temizlenecek', Assigned_employee_id: 2, Creation_date: '2025-07-19 10:00:00', Due_date: '2025-07-19', Status: 'Devam Ediyor', Completed_date: null },
  ];

  return (
    <div>
      <h1>Tasks</h1>
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
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.Task_id}>
              <td>{task.Task_id}</td>
              <td>{task.Title}</td>
              <td>{task.Description}</td>
              <td>{task.Assigned_employee_id}</td>
              <td>{task.Creation_date}</td>
              <td>{task.Due_date}</td>
              <td>{task.Status}</td>
              <td>{task.Completed_date || '-'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Tasks;

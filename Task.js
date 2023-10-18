import React from 'react';

const Task = ({ task, deleteTask, editTask }) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <span>{task.name}</span>
      <button onClick={() => deleteTask(task.id)}  style={{backgroundColor:'red'}}>Delete</button>
      <button onClick={() => editTask(task.id)} style={{backgroundColor:'DodgerBlue'}}>Edit</button>
    </div>
  );
};

export default Task;

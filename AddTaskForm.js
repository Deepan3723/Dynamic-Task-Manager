import React, { useState } from 'react';

const AddTaskForm = ({ addTask }) => {
  const [taskName, setTaskName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: Math.random(), 
      name: taskName
    };
    addTask(newTask);
    setTaskName('');
  };

  return (
    <form onSubmit={handleSubmit}  style={{textAlign:'center'}}>
      <input 
        type="text" 
        value={taskName} 
        onChange={(e) => setTaskName(e.target.value)} 
        required 
       
      />
      <button type="submit" style={{backgroundColor:'Gray'}} >Add Task</button>
    </form>
  );
};

export default AddTaskForm;

import React, { useState, useEffect } from 'react';

const UpdateTaskForm = ({ task, updateTask }) => {
  const [taskName, setTaskName] = useState('');

  useEffect(() => {
    setTaskName(task.name);
  }, [task]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedTask = { ...task, name: taskName };
    updateTask(updatedTask);
  };

  return (
    <form onSubmit={handleSubmit} style={{ textAlign: 'center'}}>
      <input 
        type="text" 
        value={taskName} 
        onChange={(e) => setTaskName(e.target.value)} 
        required 
      />
      <button type="submit" style={{ backgroundColor:'MediumSeaGreen'}}  >Update Task</button>
    </form>
  );
};

export default UpdateTaskForm;

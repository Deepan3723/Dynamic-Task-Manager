import React, { useState } from 'react';
import Task from './Task';
import AddTaskForm from './AddTaskForm';
import UpdateTaskForm from './UpdateTaskForm';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const updateTask = (updatedTask) => {
    setTasks(tasks.map(task => (task.id === updatedTask.id ? updatedTask : task)));
    setSelectedTask(null);
  };

  const editTask = (id) => {
    const taskToEdit = tasks.find(task => task.id === id);
    setSelectedTask(taskToEdit);
  };

  return (
    <div style={{backgroundcolor:"blue"}}>
      <h1  style={{textAlign:'center'}}>Dynamic Task Manager</h1>
<ul>
      {tasks.map(task => (
        <Task 
          key={task.id} 
          task={task} 
          deleteTask={deleteTask} 
          editTask={editTask} 
        />
      ))}

      {selectedTask && (
        <UpdateTaskForm 
          task={selectedTask} 
          updateTask={updateTask} 
        />
      )}

      <AddTaskForm addTask={addTask} />
      </ul>
    </div>
  );
};

export default TaskList;

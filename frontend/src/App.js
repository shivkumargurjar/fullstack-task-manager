import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Fetch tasks from backend
  const fetchTasks = async () => {
    try {
      setLoading(true);
      const response = await fetch('http://localhost:5000/api/tasks');
      if (!response.ok) throw new Error('Failed to fetch tasks');
      const data = await response.json();
      setTasks(data);
      setError('');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Add a new task
  const addTask = async (e) => {
    e.preventDefault();
    if (!newTask.trim()) return;

    try {
      const response = await fetch('http://localhost:5000/api/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: newTask }),
      });

      if (!response.ok) throw new Error('Failed to add task');
      
      const task = await response.json();
      setTasks([...tasks, task]);
      setNewTask('');
    } catch (err) {
      setError(err.message);
    }
  };

  // Toggle task completion
  const toggleTask = async (id) => {
    const taskToUpdate = tasks.find(task => task.id === id);
    
    try {
      const response = await fetch(`http://localhost:5000/api/tasks/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ completed: !taskToUpdate.completed }),
      });

      if (!response.ok) throw new Error('Failed to update task');
      
      const updatedTask = await response.json();
      setTasks(tasks.map(task => 
        task.id === id ? updatedTask : task
      ));
    } catch (err) {
      setError(err.message);
    }
  };

  // Delete a task
  const deleteTask = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/tasks/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) throw new Error('Failed to delete task');
      
      setTasks(tasks.filter(task => task.id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  // Fetch tasks on component mount
  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="app">
      <header className="app-header">
        <h1>Task Manager</h1>
        <p>A simple full-stack application</p>
      </header>

      <main className="app-main">
        {/* Add Task Form */}
        <form onSubmit={addTask} className="add-task-form">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Enter a new task..."
            className="task-input"
          />
          <button type="submit" className="add-btn">
            Add Task
          </button>
        </form>

        {/* Error Message */}
        {error && <div className="error-message">{error}</div>}

        {/* Tasks List */}
        <div className="tasks-container">
          {loading ? (
            <div className="loading">Loading tasks...</div>
          ) : tasks.length === 0 ? (
            <div className="no-tasks">No tasks yet. Add one above!</div>
          ) : (
            <ul className="tasks-list">
              {tasks.map((task) => (
                <li key={task.id} className={`task-item ${task.completed ? 'completed' : ''}`}>
                  <span 
                    onClick={() => toggleTask(task.id)}
                    className="task-text"
                  >
                    {task.text}
                  </span>
                  <div className="task-actions">
                    <button
                      onClick={() => toggleTask(task.id)}
                      className={`toggle-btn ${task.completed ? 'undo' : 'complete'}`}
                    >
                      {task.completed ? 'Undo' : 'Complete'}
                    </button>
                    <button
                      onClick={() => deleteTask(task.id)}
                      className="delete-btn"
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Stats */}
        <div className="stats">
          <p>Total Tasks: {tasks.length}</p>
          <p>Completed: {tasks.filter(t => t.completed).length}</p>
          <p>Pending: {tasks.filter(t => !t.completed).length}</p>
        </div>
      </main>

      <footer className="app-footer">
        <p>Built with React, Node.js, and Express</p>
        <p>Full-Stack JavaScript Project</p>
      </footer>
    </div>
  );
}

export default App;
import React, { useState } from 'react';
import { Task } from '../../types/types'; 
import { v4 as uuidv4 } from 'uuid';

const Tasks: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [editingTask, setEditingTask] = useState<Task | null>(null);

  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const addTask = () => {
    if (!title.trim()) return;
    const newTask: Task = {
      id: uuidv4(),
      title,
      description,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    resetForm();
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const startEditing = (task: Task) => {
    setEditingTask(task);
    setTitle(task.title);
    setDescription(task.description);
  };

  const updateTask = () => {
    if (editingTask) {
      setTasks(
        tasks.map((task) =>
          task.id === editingTask.id
            ? { ...task, title, description }
            : task
        )
      );
      resetForm();
    }
  };

  const resetForm = () => {
    setEditingTask(null);
    setTitle('');
    setDescription('');
  };

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Task Manager</h1>

      <input
        type="text"
        placeholder="Search tasks..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full mb-4 p-2 border border-gray-300 rounded"
      />

      <div className="mb-4">
        <input
          type="text"
          placeholder="Task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full mb-2 p-2 border border-gray-300 rounded"
        />
        <textarea
          placeholder="Task description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full mb-2 p-2 border border-gray-300 rounded"
        ></textarea>
        {editingTask ? (
          <button
            onClick={updateTask}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Update Task
          </button>
        ) : (
          <button
            onClick={addTask}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Add Task
          </button>
        )}
        {editingTask && (
          <button
            onClick={resetForm}
            className="bg-gray-300 text-black px-4 py-2 rounded ml-2"
          >
            Cancel
          </button>
        )}
      </div>

      <ul>
        {filteredTasks.map((task) => (
          <li
            key={task.id}
            className="mb-2 p-4 border border-gray-300 rounded shadow flex justify-between items-center"
          >
            <div>
              <h2 className="font-medium">{task.title}</h2>
              <p className="text-sm text-gray-500">{task.description}</p>
            </div>
            <div className="flex items-center">
              <button
                onClick={() => startEditing(task)}
                className="text-blue-500 mr-2"
              >
                Edit
              </button>
              <button
                onClick={() => deleteTask(task.id)}
                className="text-red-500"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tasks;

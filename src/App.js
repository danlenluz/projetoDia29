import React, { useState } from 'react';
import './App.css';

function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, { text: task.trim(), completed: false }]);
      setTask('');
    }
  };

  const toggleComplete = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const removeTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="App">
      <h1>Lista de Tarefas</h1>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Digite uma nova tarefa"
      />
      <button onClick={addTask}>Adicionar Tarefa</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className={task.completed ? 'completed' : ''}>
              {task.text}
            </span>
            <div>
              <button onClick={() => toggleComplete(index)}>
                {task.completed ? 'Desmarcar' : 'Concluir'}
              </button>
              <button className="remove" onClick={() => removeTask(index)}>Remover</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

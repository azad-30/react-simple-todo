import { useState } from 'react'
import TodoForm from './components/TodoForm.jsx'
import TodoList from './components/TodoList.jsx'

function App() {
  const [tasks, setTasks] = useState([])

  function addTask(text) {
    setTasks([...tasks, { id: Date.now(), text, completed: false }])
  }

  function toggleTask(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    )
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <main className="app">
      <div className="card">
        <h1>My To-Do List</h1>
        <TodoForm onAdd={addTask} />
        <TodoList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
      </div>
    </main>
  )
}

export default App

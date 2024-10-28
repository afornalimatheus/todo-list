import { useState } from 'react'
import { CreateTask } from './components/CreateTask'
import { Header } from './components/Header'
import { ListTasks } from './components/ListTasks'
import { TaskType } from './components/Task'
import './global.css'

function App() {
  const [tasks, setTasks] = useState<TaskType[]>([]);

  const addTask = (newTask: TaskType) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <div>
      <Header />
      <div className="wrapper">
        <CreateTask onAddTask={addTask} />
        <ListTasks tasks={tasks} />
      </div>
    </div>
  )
}

export default App

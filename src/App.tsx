import { CreateTask } from './components/CreateTask'
import { Header } from './components/Header'
import { ListTasks } from './components/ListTasks'
import { TaskType } from './components/Task'
import './global.css'

const tasks: TaskType[] = [
  {
    id: 1,
    description: 'Fazer a compra do mês'
  },
  {
    id: 2,
    description: 'Limpar a casa'
  },
  {
    id: 3,
    description: 'Consertar a torneira da cozinha'
  },
]

function App() {
  return (
    <div>
      <Header />
      <div className="wrapper">
        <CreateTask />
        <ListTasks tasks={tasks} />
      </div>
    </div>
  )
}

export default App

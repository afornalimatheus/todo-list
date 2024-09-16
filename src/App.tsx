import { CreateTask } from './components/CreateTask'
import { Header } from './components/Header'
import { ListTasks } from './components/ListTasks'
import './global.css'

function App() {
  return (
    <div>
      <Header />
      <div className="wrapper">
        <CreateTask />
        <ListTasks />
      </div>
    </div>
  )
}

export default App

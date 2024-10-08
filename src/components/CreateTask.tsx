import styles from './CreateTask.module.css'

import { PlusCircle } from 'phosphor-react'

export function CreateTask() {
  return (
    <div className={styles.createTaskForm}>
      <form action="">
        <input className={styles.taskDescription} type="text" placeholder='Adicione uma nova tarefa' />
        <button type='submit'>
          Criar <PlusCircle size={16} weight="bold" />
        </button>
      </form>
    </div>
  )
}
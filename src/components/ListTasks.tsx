import type { TaskType } from './Task';
import { ClipboardText } from 'phosphor-react'
import styles from './ListTasks.module.css'
import { Task } from './Task';

interface ListTasksProps {
  tasks: TaskType[];
}

export function ListTasks({ tasks }: ListTasksProps) {
  return (
    <div className={styles.taskListWrapper}>
      <header>
        <div className={styles.wrapperCreatedTasks}>
          <span className={styles.labelCreatedTasks}>Tarefas criadas</span>
          <span className={styles.counter}>10</span>
        </div>
        <div className={styles.wrapperCompletedTasks}>
          <span className={styles.labelCompletedTasks}>Concluídas</span>
          <span className={styles.counter}>3 de 10</span>
        </div>
      </header>
      <div className={styles.list}>
        {/* <div className={styles.emptyListWrapper}>
          <div className={styles.emptyList}>
            <ClipboardText size={56} />
            <span>
              <strong>Você ainda não tem tarefas cadastradas</strong>
            </span>
            <span>Crie tarefas e organize seus itens a fazer</span>
          </div>
        </div> */}
        {tasks.map(task => {
          return (
            <Task task={task}/>
          )
        })}
      </div>
    </div>
  )
}
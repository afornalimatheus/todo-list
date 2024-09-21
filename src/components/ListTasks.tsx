import { Trash } from 'phosphor-react'
import styles from './ListTasks.module.css'

export function ListTasks() {
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
        <div className={styles.listItem}>
          <div className={styles.descriptionItem}>
            <input 
              className={styles.customCheckbox} 
              type="checkbox" 
              name="" 
              id="taskDescription"/>
            <label htmlFor="taskDescription">Fazer a compra do mês</label>
          </div>
          <div className={styles.actionItem}>
            <button title="Deletar tarefa">
              <Trash size={24} />
            </button>
          </div>
        </div>
        <div className={styles.listItem}>
          <div className={styles.descriptionItem}>
            <input 
              className={styles.customCheckbox} 
              type="checkbox" 
              name="" 
              id="taskDescription"/>
            <label htmlFor="taskDescription">Limpar a casa</label>
          </div>
          <div className={styles.actionItem}>
            <button title="Deletar tarefa">
              <Trash size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
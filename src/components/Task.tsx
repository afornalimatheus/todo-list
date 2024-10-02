import styles from './Task.module.css';
import { Trash } from 'phosphor-react'

export interface TaskType {
  id: Number;
  description: string;
}

interface TaskProps {
  task: TaskType;
}

export function Task({ task }: TaskProps) {
  return (
      <div className={styles.taskWrapper}>
        <div className={styles.taskDescription}>
          <input  
            type="checkbox" 
            name="" 
            id="taskDescription-1"/>
          <label htmlFor="taskDescription-1">{task.description}</label>
        </div>
        <div className={styles.actionButton}>
          <button title="Deletar tarefa">
            <Trash size={24} />
          </button>
        </div>
      </div>
  );
}
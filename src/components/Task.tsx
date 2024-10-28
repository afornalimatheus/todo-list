import styles from './Task.module.css';
import { Trash } from 'phosphor-react'

export interface TaskType {
  id: Number;
  description: string;
  done: boolean;
}

interface TaskProps {
  task: TaskType;
}

export function Task({ task }: TaskProps) {
  return (
      <div className={styles.taskWrapper}>
        <div className={styles.description}>
          <input  
            type="checkbox"
            id={`description-${task.id}`} 
            checked={task.done}
          />
          <label htmlFor={`description-${task.id}`}>{task.description}</label>
        </div>
        <div className={styles.actionButton}>
          <button title="Deletar tarefa">
            <Trash size={24} />
          </button>
        </div>
      </div>
  );
}
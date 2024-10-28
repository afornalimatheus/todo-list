import { useState, type ChangeEvent, type FormEvent, type InputHTMLAttributes } from 'react';
import styles from './CreateTask.module.css'

import { PlusCircle } from 'phosphor-react'
import type { TaskType } from './Task';

interface CreateTaskProps {
  onAddTask: (newTask: TaskType) => void;
};

export function CreateTask({ onAddTask }: CreateTaskProps) {
  const [newDescriptionTask, setNewDescriptionTask] = useState('');

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    const newTask: TaskType = {
      id: Date.now(),
      done: false,
      description: newDescriptionTask,
    };

    onAddTask(newTask);
    setNewDescriptionTask('');
  }

  function handleDescriptionTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setNewDescriptionTask(event.target.value);
  }

  return (
    <div className={styles.createTaskForm}>
      <form onSubmit={handleCreateNewTask}>
        <input 
          className={styles.description} 
          value={newDescriptionTask}
          onChange={handleDescriptionTaskChange} 
          type="text" 
          placeholder='Adicione uma nova tarefa'
        />
        <button type='submit'>
          Criar <PlusCircle size={16} weight="bold" />
        </button>
      </form>
    </div>
  )
}
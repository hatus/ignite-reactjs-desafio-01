import { CheckButton } from './CheckButton'
import styles from './Task.module.css'
import { TrashButton } from './TrashButton'

export interface TaskType {
  id: number
  description: string
  completed?: boolean
}

interface TaskProps {
  task: TaskType
  onDeleteTask: (taskId: number) => void
  onCheckTask: (taskId: number) => void
}

export function Task({ task, onDeleteTask, onCheckTask }: TaskProps) {
  function handleCheckTask() {
    onCheckTask(task.id)
  }

  function handleDeleteTask() {
    onDeleteTask(task.id)
  }

  return (
    <div className={styles.task}>
      <CheckButton checked={task.completed} onClick={handleCheckTask} />

      <p className={styles.descriptionTask}>{task.description}</p>

      <TrashButton onClick={handleDeleteTask} />
    </div>
  )
}

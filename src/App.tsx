import { PlusCircle, Rocket } from 'lucide-react'

import styles from './App.module.css'
import { Task, TaskType } from './components/Task'
import {
  ChangeEvent,
  FormEvent,
  InvalidEvent,
  useEffect,
  useRef,
  useState,
} from 'react'

function App() {
  const [tasks, setTasks] = useState<TaskType[]>([])
  const [newTaskDescription, setNewTaskDescription] = useState('')
  const [totalCompletedTasks, setTotalCompletedTasks] = useState(0)

  const newTaskInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    function getTotalCompletedTask() {
      const totalCompletedTask = tasks.reduce((acc, task) => {
        if (task.completed) {
          return acc + 1
        }

        return acc
      }, 0)

      return totalCompletedTask
    }

    setTotalCompletedTasks(getTotalCompletedTask())

    return () => {
      setTotalCompletedTasks(0)
    }
  }, [tasks])

  function handleCreateNewTask(e: FormEvent) {
    e.preventDefault()

    setTasks([
      ...tasks,
      { description: newTaskDescription, completed: false, id: Math.random() },
    ])

    setNewTaskDescription('')
    newTaskInputRef.current?.focus()
  }

  function handleNewTaskChange(e: ChangeEvent<HTMLInputElement>) {
    e.target.setCustomValidity('')
    setNewTaskDescription(e.target.value)
  }

  function handleNewDescriptionInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Este campo é obrigatório')
  }

  function deleteTask(taskId: number) {
    const tasksWithoutDeletedOne = tasks.filter((task) => taskId !== task.id)
    setTasks(tasksWithoutDeletedOne)
  }

  function checkTask(taskId: number) {
    const tasksWithCheckedOne = tasks.map((task) => {
      if (task.id === taskId) {
        task.completed = !task.completed
      }

      return task
    })

    setTasks(tasksWithCheckedOne)
  }

  return (
    <div>
      <header className={styles.header}>
        <Rocket />

        <span>todo</span>
      </header>

      <main className={styles.wrapper}>
        <form className={styles.todoForm}>
          <input
            ref={newTaskInputRef}
            type="text"
            name="task_description"
            placeholder="Adicione uma nova tarefa"
            value={newTaskDescription}
            onChange={handleNewTaskChange}
            onInvalid={handleNewDescriptionInvalid}
            required
          />

          <button
            type="submit"
            onClick={handleCreateNewTask}
            disabled={newTaskDescription.length === 0}
          >
            Criar <PlusCircle />
          </button>
        </form>

        <div className={styles.todoList}>
          <div className={styles.todoListHeader}>
            <div className={styles.todoListHeaderStatus}>
              <p>Tarefas criadas</p>

              <span>{tasks.length}</span>
            </div>

            <div className={styles.todoListHeaderStatus}>
              <p>Concluídas</p>

              <span>
                {totalCompletedTasks} de {tasks.length}
              </span>
            </div>
          </div>

          <div className={styles.todoListContent}>
            {tasks.map((task) => (
              <Task
                key={task.id}
                task={task}
                onCheckTask={checkTask}
                onDeleteTask={deleteTask}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

export default App

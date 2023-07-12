import { Circle, PlusCircle, Rocket, Trash } from 'lucide-react';
import styles from './App.module.css';

function App() {
  return (
    <div>
      <header className={styles.header}>
        <Rocket />

        <span>todo</span>
      </header>

      <main className={styles.wrapper}>
        <form className={styles.todoForm}>
          <input type="text" placeholder="Adicione uma nova tarefa" required />
          <button type="submit">
            Criar <PlusCircle />
          </button>
        </form>

        <div className={styles.todoList}>
          <div className={styles.todoListHeader}>
            <p>Tarefas criadas</p>

            <p>Concluídas</p>
          </div>

          <div className={styles.todoListContent}>
            <div className={styles.task}>
              <button className={styles.uncheckedButton} />

              <p className="titleTask">
                Integer urna interdum massa libero auctor neque turpis turpis
                semper. Duis vel sed fames integer.
              </p>

              <button className={styles.trashButton}>
                <Trash size={24} />
              </button>
            </div>
            <div className={styles.task}>
              <button className={styles.uncheckedButton} />
            </div>
            <div className={styles.task}>d</div>
            <div className={styles.task}>d</div>
            <div className={styles.task}>d</div>
            <div className={styles.task}>d</div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;

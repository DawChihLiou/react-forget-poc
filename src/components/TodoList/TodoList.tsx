import { useState } from 'react';
import { initialTodos, getUpdated, getFiltered } from '../../utils/todo';
import Todo from '../Todo';
import AddTodo from '../AddTodo';
import { VisibilityStatus } from '../../types';
import styles from './styles.module.css';
import { useCounter } from '../../hooks/useCounter';

interface TodoListProps {
  visibility: VisibilityStatus;
  themeColor: string;
}

export default function TodoList({ visibility, themeColor }: TodoListProps) {
  const [todos, setTodos] = useState(initialTodos);
  const handleChange = (todo: string) =>
    setTodos((todos) => getUpdated(todos, todo));
  const filtered = getFiltered(todos, visibility);
  const count = useCounter();

  return (
    <div>
      <div className={styles.wrapper}>
        <code>
          getFiltered() was called <span className={styles.label}>{count}</span>{' '}
          times
        </code>
      </div>
      <ul className={styles.list}>
        {filtered.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            onChange={handleChange}
            themeColor={themeColor}
          />
        ))}
      </ul>
      <AddTodo setTodos={setTodos} themeColor={themeColor} />
    </div>
  );
}

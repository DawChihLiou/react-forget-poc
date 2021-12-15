import { useState, memo, useCallback, useMemo } from 'react';
import { initialTodos, getUpdated, getFiltered } from '../../utils/todo';
import UnmemoizedTodo from '../Todo';
import AddTodo from '../AddTodo';
import { VisibilityStatus } from '../../types';
import styles from './styles.module.css';
import { useCounter } from '../../hooks/useCounter';

// ✨
const Todo = memo(UnmemoizedTodo);

interface TodoListProps {
  visibility: VisibilityStatus;
  themeColor: string;
}

export default function TodoList({ visibility, themeColor }: TodoListProps) {
  const [todos, setTodos] = useState(initialTodos);

  // ✨
  const handleChange = useCallback(
    (todo: string) => setTodos((todos) => getUpdated(todos, todo)),
    [],
  );

  // ✨
  const filtered = useMemo(() => getFiltered(todos, visibility), [
    todos,
    visibility,
  ]);
  // const filtered = getFiltered(todos, visibility);
  return (
    <div>
      <div className={styles.wrapper}></div>
      <ul className={styles.list}>
        {filtered.map((todo) => (
          <Todo key={todo.id} todo={todo} onChange={handleChange} />
        ))}
      </ul>
      <AddTodo setTodos={setTodos} themeColor={themeColor} />
    </div>
  );
}

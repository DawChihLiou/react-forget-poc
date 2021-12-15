import {
  useState,
  memo,
  useCallback,
  useMemo,
  useEffect,
  useContext,
} from 'react';
import { initialTodos, getUpdated, getFiltered } from '../../utils/todo';
import UnmemoizedTodo from '../Todo';
import AddTodo from '../AddTodo';
import { VisibilityStatus, TodoBody } from '../../types';
import styles from './styles.module.css';
import { RmcContext } from '../../context/rmc';

// ✨
const Todo = memo(UnmemoizedTodo);

interface TodoListProps {
  visibility: VisibilityStatus;
  themeColor: string;
}

export default function TodoList({ visibility, themeColor }: TodoListProps) {
  const [todos, setTodos] = useState(initialTodos);

  // ✨
  const rmc = useContext(RmcContext);

  // ✨
  const handleChange =
    rmc[0] ||
    (rmc[0] = (todo: string) => setTodos((todos) => getUpdated(todos, todo)));

  // ✨
  const filtered = (rmc[1] = getFiltered(todos, visibility));

  // ✨
  const jsxTodos = (rmc[2] = (
    <ul className={styles.list}>
      {(filtered as TodoBody[]).map((todo) => (
        <Todo key={todo.id} todo={todo} onChange={handleChange as any} />
      ))}
    </ul>
  ));

  // ✨
  const jsxAddTodo = (rmc[3] = (
    <AddTodo setTodos={setTodos} themeColor={themeColor} />
  ));

  // ✨
  const jsxTodoList = (rmc[4] = (
    <div>
      <div className={styles.wrapper}></div>
      {jsxTodos}
      {jsxAddTodo}
    </div>
  ));

  return rmc[4];
}

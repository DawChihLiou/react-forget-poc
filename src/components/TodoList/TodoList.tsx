import {
  useState,
  memo,
  useCallback,
  useMemo,
  useEffect,
  useContext,
} from 'react';
import {
  initialTodos,
  getUpdated,
  getFiltered,
  checkIsTodoChanged,
} from '../../utils/todo';
import Todo from '../Todo';
import AddTodo from '../AddTodo';
import { VisibilityStatus, TodoBody } from '../../types';
import styles from './styles.module.css';
import { RmcContext } from '../../context/rmc';

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
    rmc[3] ||
    (rmc[3] = (todo: string) => setTodos((todos) => getUpdated(todos, todo)));

  // ✨
  let filtered, jsxTodos;

  filtered = rmc[4] = getFiltered(todos as TodoBody[], visibility);
  jsxTodos = rmc[5] = (
    <ul className={styles.list}>
      {(filtered as TodoBody[]).map((todo) => (
        <Todo key={todo.id} todo={todo} onChange={handleChange as any} />
      ))}
    </ul>
  );

  // ✨
  const jsxAddTodo = (rmc[6] = (
    <AddTodo setTodos={setTodos} themeColor={themeColor} />
  ));

  return (rmc[6] = (
    <div>
      <div className={styles.wrapper}></div>
      {jsxTodos}
      {jsxAddTodo}
    </div>
  ));
}

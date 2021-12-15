import { SetStateAction, Dispatch, useState, ChangeEvent, memo } from 'react';
import { TodoBody } from '../../types';
import { getUpdated } from '../../utils/todo';
import { dim } from '../../utils/color';
import styles from './styles.module.css';

interface AddTodoProps {
  setTodos: Dispatch<SetStateAction<TodoBody[]>>;
  themeColor: string;
}

export default function AddTodo({ setTodos, themeColor }: AddTodoProps) {
  const [todo, setTodo] = useState('');
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };
  const handleClick = () => {
    setTodos((todos) => getUpdated(todos, todo));
  };
  const buttonColor = dim(0.1, themeColor);

  return (
    <div className={styles.wrapper} style={{ backgroundColor: themeColor }}>
      <input
        onChange={handleChange}
        placeholder="Add todo"
        className={styles.input}
        style={{ backgroundColor: themeColor }}
      />
      <button
        onClick={handleClick}
        className={styles.button}
        style={{ backgroundColor: buttonColor }}
      >
        Add
      </button>
    </div>
  );
}

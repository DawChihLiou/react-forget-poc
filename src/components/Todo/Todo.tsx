import clsx from 'clsx';
import { TodoBody } from '../../types';
import styles from './styles.module.css';
import { useCounter } from '../../hooks/useCounter';

interface TodoProps {
  todo: TodoBody;
  onChange: (todo: string) => void;
}

export default function Todo({ todo, onChange }: TodoProps) {
  const count = useCounter();

  return (
    <li className={styles.wrapper}>
      <button
        onClick={() => onChange(todo.content)}
        className={clsx(styles.button, { [styles.filled]: todo.completed })}
      />
      <span
        className={clsx(styles.text, { [styles.completed]: todo.completed })}
      >
        {todo.content}
      </span>
      <span className={styles.label}>{count}</span>
      <div className={styles.inner}></div>
    </li>
  );
}

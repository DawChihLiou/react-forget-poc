import clsx from 'clsx';
import { TodoBody } from '../../types';
import styles from './styles.module.css';
import { useCounter } from '../../hooks/useCounter';
import { dim } from '../../utils/color';

interface TodoProps {
  todo: TodoBody;
  onChange: (todo: string) => void;
  themeColor: string;
}

export default function Todo({ todo, onChange, themeColor }: TodoProps) {
  const count = useCounter();
  const backgroundColor = dim(0.075, themeColor);

  return (
    <li style={{ backgroundColor: backgroundColor }} className={styles.wrapper}>
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
    </li>
  );
}

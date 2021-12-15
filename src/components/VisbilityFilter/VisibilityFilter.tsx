import { VisibilityStatus } from '../../types';
import styles from './styles.module.css';
import clsx from 'clsx';

interface VisibilityFilterProps {
  onChange: (status: VisibilityStatus) => () => void;
  visibility: string;
}

export default function VisibilityFilter({
  onChange,
  visibility,
}: VisibilityFilterProps) {
  return (
    <div className={styles.wrapper}>
      <button
        onClick={onChange('all')}
        className={clsx({ [styles.bold]: visibility === 'all' })}
      >
        All
      </button>
      <button
        onClick={onChange('active')}
        className={clsx({ [styles.bold]: visibility === 'active' })}
      >
        Active
      </button>
      <button
        onClick={onChange('completed')}
        className={clsx({ [styles.bold]: visibility === 'completed' })}
      >
        Completed
      </button>
      <div className={styles.inner}></div>
    </div>
  );
}

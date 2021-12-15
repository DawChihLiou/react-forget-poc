import { VisibilityStatus } from '../../types';
import styles from './styles.module.css';
import clsx from 'clsx';
import { dim } from '../../utils/color';

interface VisibilityFilterProps {
  onChange: (status: VisibilityStatus) => () => void;
  visibility: string;
  themeColor: string;
}

export default function VisibilityFilter({
  onChange,
  visibility,
  themeColor,
}: VisibilityFilterProps) {
  const backgroundColor = dim(0.075, themeColor);

  return (
    <div
      className={styles.wrapper}
      style={{ backgroundColor: backgroundColor }}
    >
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
    </div>
  );
}

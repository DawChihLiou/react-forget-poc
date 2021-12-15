import { useState, useMemo } from 'react';
import { VisibilityStatus } from '../../types';
import ColorPicker from '../ColorPicker';
import VisibilityFilter from '../VisbilityFilter';
import TodoList from '../TodoList';
import { dim } from '../../utils/color';
import styles from './styles.module.css';

export default function BlazingTodoList() {
  // visibility filter state
  const [visibility, setVisibility] = useState<VisibilityStatus>('all');
  const onFilterChange = (status: VisibilityStatus) => () => {
    setVisibility(status);
  };
  // color picker state
  const [themeColor, setThemeColor] = useState('#0052b3');
  const color = useMemo(() => dim(0.15, themeColor), [themeColor]);

  return (
    <div className={styles.wrapper} style={{ backgroundColor: color }}>
      <div className={styles.bar}>
        <ColorPicker color={themeColor} onChange={setThemeColor} />
        <VisibilityFilter onChange={onFilterChange} visibility={visibility} />
      </div>
      <TodoList visibility={visibility} themeColor={themeColor} />
    </div>
  );
}

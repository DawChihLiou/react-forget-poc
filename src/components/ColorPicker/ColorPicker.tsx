import { Dispatch, SetStateAction, useState, useRef } from 'react';
import { HexColorPicker } from 'react-colorful';
import { useOutSideClick } from '../../hooks/useOutsideClick';
import styles from './styles.module.css';

interface ColorPickerProps {
  color: string;
  onChange: Dispatch<SetStateAction<string>>;
}

export default function ColorPicker({ color, onChange }: ColorPickerProps) {
  const popover = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = (isOpen: boolean) => () => {
    setIsOpen(isOpen);
  };
  const close = toggle(false);
  const open = toggle(true);
  useOutSideClick(popover, close);

  return (
    <>
      <button
        className={styles.pebble}
        style={{ backgroundColor: color }}
        onClick={open}
      />
      {isOpen && (
        <div className={styles.popover} ref={popover}>
          <HexColorPicker color={color} onChange={onChange} />
        </div>
      )}
    </>
  );
}

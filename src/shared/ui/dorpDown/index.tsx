import { useEffect, useRef, useState } from 'react';

import styles from './style.module.scss';
import { ArrowDown } from '@/assets/svg/arrowDown.tsx';

interface CustomDropdownProps {
  value: string;
  onChange: (val: string) => void;
  options: { value: string; label: string }[];
}

export const Dropdown = ({ value, onChange, options }: CustomDropdownProps) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (val: string) => {
    onChange(val);
    setOpen(false);
  };

  return (
    <div className={styles.dropdown} ref={dropdownRef}>
      <div
        className={`${styles.selected} ${open ? styles.open : ''}`}
        onClick={() => setOpen(!open)}
      >
        {options.find((opt) => opt.value === value)?.label}
        <span className={styles.arrow}>
          <ArrowDown />
        </span>
      </div>

      {open && (
        <ul className={styles.options}>
          {options.map((opt) => (
            <li
              key={opt.value}
              className={value === opt.value ? styles.active : ''}
              onClick={() => handleSelect(opt.value)}
            >
              {opt.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

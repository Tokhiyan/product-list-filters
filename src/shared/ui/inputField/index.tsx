import styles from './style.module.scss';

interface CustomInputProps {
  label?: string;
  type?: string;
  value: number;
  step?: string;
  onChange: (value: number) => void;
}

export const InputField = ({
  label,
  type = 'text',
  value,
  step,
  onChange,
}: CustomInputProps) => {
  return (
    <div className={styles.inputField}>
      <label className={styles.label}>{label}</label>
      <input
        type={type}
        value={value}
        step={step}
        placeholder=""
        onChange={(e) => onChange(Number(e.target.value))}
        className={styles.input}
      />
    </div>
  );
};

import { FC, ChangeEvent } from 'react';
import styles from './styles.module.scss';
import cn from 'clsx';

interface InputProps {
  className?: string,
  focus?: boolean,
  placeholder: string,
  text: string,
  required?: boolean,
  value: string,
  name: string,
  error?: string,
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  onBlur?:() => void
}

export const Input:FC<InputProps> = ({ 
  className,
  focus,
  placeholder, 
  text, 
  required = false,
  value,
  name,
  error,
  onChange,
  onBlur
}) => {

  return (
    <div className={cn(styles.wrapperInput, { [styles.error]:error })}>
      <label className={cn({ [styles.focusLabel]: focus }, styles.label, { [styles.errorLabel]:error })}>{text}</label>
      <input 
        name={name}
        type="text" 
        className={cn(className, styles.input, { [styles.error]:error })} 
        placeholder={placeholder} 
        required={required} 
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        autoComplete="off"
    
      />
    </div>
  );
};
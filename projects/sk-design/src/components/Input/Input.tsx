import { FC, ChangeEvent } from 'react';
import styles from './styles.module.scss';
import cn from 'clsx';

interface InputProps {
  className?: string,
  placeholder: string,
  textLabel?: string,
  required?: boolean,
  value: string,
  name: string,
  error?: string,
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  onBlur?:() => void
}

export const Input:FC<InputProps> = ({ 
  className,
  placeholder, 
  textLabel, 
  required = false,
  value,
  name,
  error,
  onChange,
  onBlur
}) => {

  return (
    <div className={cn(styles.wrapperInput, { [styles.error]:error })}>
      <label className={cn(styles.label)}>
        <span className={cn(styles.textLabel, { [styles.errorLabel]: error })}>{textLabel}</span>
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
      </label>
    
    </div>
  );
};
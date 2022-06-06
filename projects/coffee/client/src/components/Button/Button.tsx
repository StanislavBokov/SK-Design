import { FC, ReactNode } from "react";
import cn from 'clsx';

import styles from './styles.module.scss';

export interface ButtonProps {
    variant?: 'filled' | 'outlined';
    size?: 'lg' | 'md' | 'sm' | 'noSize';
    disable?: boolean;
    icon?: boolean;
    children: ReactNode;
    onClick?: () => void;
    className?: string;
}

export const Button:FC<ButtonProps> = ({ 
  variant = 'filled',
  size = 'md', 
  disable = false, 
  icon, 
  children,
  className,
  onClick
}) => {
  return (
    <button className={cn(
      styles.button,
      styles[variant],
      styles[size],
      { [styles.disable]: disable },
      { [styles.icon]: icon },
      className
    )}
    disabled={disable}
    onClick={onClick} 
    >
      {children}
    </button>
  );
};
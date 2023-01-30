import { FC, ReactNode } from 'react';

import styles from './Button.module.scss';

type ButtonProps = {
  disabled?: boolean;
  type?: 'basic' | 'minor';
  addClass?: string[];
  handleClick: () => void;
  submit?: boolean;
  children: ReactNode;
};

export const Button: FC<ButtonProps> = ({
  disabled,
  type = 'basic',
  addClass = [],
  handleClick,
  submit = false,
  children,
}) => {
  return (
    <button
      className={[styles.button, ...addClass, type && styles[`--${type}`]].join(' ')}
      type={submit ? 'submit' : 'button'}
      onClick={handleClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

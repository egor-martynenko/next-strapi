import {ComponentProps, FC} from 'react';
import styles from './Button.module.css'

type ButtonProps = ComponentProps<'button'> & {
  text: string;
}

export const Button:FC<ButtonProps> = ({text}) => {
  return (
    <button className={styles.button}>
      {text}
    </button>
  );
};


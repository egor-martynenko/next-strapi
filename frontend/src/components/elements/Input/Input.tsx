import {ComponentProps, FC} from "react";
import styles from "./Input.module.css";

type InputProps = ComponentProps<'input'> & {}

export const Input:FC<InputProps> = ({placeholder}) => {
  return (
    <div className={styles.wrapper}>
      <input className={styles.input} placeholder={placeholder}/>
    </div>
  );
};

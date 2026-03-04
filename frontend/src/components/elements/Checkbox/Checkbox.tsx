import {ComponentProps, FC} from "react";
import styles from "./Checkbox.module.css";

type InputProps = ComponentProps<'input'> & {}

export const Checkbox:FC<InputProps> = ({placeholder}) => {
  return (
    <div className={styles.wrapper}>
      <input className={styles.input} placeholder={placeholder} type={'checkbox'}/>
    </div>
  );
};

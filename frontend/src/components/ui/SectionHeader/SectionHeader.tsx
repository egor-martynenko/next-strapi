import {FC} from 'react';
import styles from './SectionHeader.module.css';
import Link from "next/link";

type SectionHeaderProps = {
  title: string;
  linkText: string;
  link: string;
}

export const SectionHeader:FC<SectionHeaderProps> = ({title, linkText, link}) => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.title}>{title}</span>

      <Link href={link}>
        <span className={styles.link}>{linkText}</span>
      </Link>
    </div>
  );
};


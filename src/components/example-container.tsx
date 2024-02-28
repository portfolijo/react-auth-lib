import styles from './demo-section.module.scss';
import { PropsWithChildren } from 'react';

export interface ExampleContainerProps {
  title: string;
}

export function ExampleContainer({
  title,
  children,
}: PropsWithChildren<ExampleContainerProps>) {
  return (
    <div className={styles.exampleContainer}>
      <h3>{title}</h3>
      {children}
    </div>
  );
}

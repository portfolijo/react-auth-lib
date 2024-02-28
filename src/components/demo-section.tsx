import styles from './demo-section.module.scss';
import { PropsWithChildren } from 'react';

export interface DemoSectionProps {
  title: string;
}

export function DemoSection({
  title,
  children,
}: PropsWithChildren<DemoSectionProps>) {
  return (
    <div className={styles.container}>
      <h2>{title}</h2>
      {children}
    </div>
  );
}

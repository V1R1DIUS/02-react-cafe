// src/components/Notification/Notification.tsx

import styles from './Notification.module.css';
import { type FC } from 'react';

const Notification: FC = () => {
  return (
    <p className={styles.message}>No feedback yet</p>
  );
};

export default Notification;
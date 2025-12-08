// src/components/CafeInfo/CafeInfo.tsx

import styles from './CafeInfo.module.css';
import React from 'react'; 


const CafeInfo: React.FC = () => {
  return (
    <div className={styles.container}> 
      <h1 className={styles.title}>Sip Happens Café</h1>
      <p className={styles.description}>
        Please rate our service by selecting one of the options below.
      </p>
    </div>
  );
};

export default CafeInfo;
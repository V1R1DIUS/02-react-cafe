// src/components/VoteOptions/VoteOptions.tsx (ВИПРАВЛЕНО)

import styles from './VoteOptions.module.css';
import { type OptionType } from '../../types/votes.ts';
import { type FC } from 'react';

interface VoteOptionsProps {
  options: OptionType[]; 
  onLeaveFeedback: (option: OptionType) => void; 
  onReset: () => void; 
  canReset: boolean;
}

const VoteOptions: FC<VoteOptionsProps> = ({ options, onLeaveFeedback, onReset, canReset }) => { 
  return (
    <div className={styles.container}>
      {/* 1. КНОПКИ ГОЛОСУВАННЯ */}
      {options.map((option) => (
        <button
          key={option}
          type="button"
          className={styles.button} 
          onClick={() => onLeaveFeedback(option)}
        >
          {option.charAt(0).toUpperCase() + option.slice(1)}
        </button>
      ))}

      {/* 2. КНОПКА СКИДАННЯ */}
      {canReset && ( 
        <button
          key="reset"
          type="button"
          className={`${styles.button} ${styles.reset}`}
          onClick={onReset} 
        >
          Reset
        </button>
      )}
    </div>
  );
};

export default VoteOptions;
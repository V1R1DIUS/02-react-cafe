// src/components/VoteOptions/VoteOptions.tsx (ВИПРАВЛЕНО)

import styles from './VoteOptions.module.css';
import { type VoteType } from '../../types/votes.ts';
import { type FC } from 'react';

const buttons: VoteType[] = ['good', 'neutral', 'bad'];

interface VoteOptionsProps {
  onVote: (vote: VoteType) => void; 
  onReset: () => void; 
  canReset: boolean;
}

const VoteOptions: FC<VoteOptionsProps> = ({ onVote, onReset, canReset }) => { 
  return (
    <div className={styles.container}>
      {/* 1. КНОПКИ ГОЛОСУВАННЯ */}
      {buttons.map((option) => (
        <button
          key={option}
          type="button"
          className={styles.button} 
          onClick={() => onVote(option)}
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
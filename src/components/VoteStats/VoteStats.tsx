// src/components/VoteStats/VoteStats.tsx

import styles from './VoteStats.module.css';
// Імпортуємо тип Votes для типізації пропсів
import { type Votes } from '../../types/votes.ts'; 
import { type FC } from 'react';

// Оголошуємо інтерфейс для пропсів
interface VoteStatsProps {
  votes: Votes; // good, neutral, bad
  totalVotes: number; // Загальна кількість (будемо передавати розраховану)
  positiveRate: number; // Відсоток позитивних (будемо передавати розрахований)
}

const VoteStats: FC<VoteStatsProps> = ({ votes, totalVotes, positiveRate }) => {
  // Перевірка на відсутність голосів (якщо totalVotes === 0)
  if (totalVotes === 0) {
    return (
      <div className={styles.container}>
        <h2>Statistics</h2>
        <p className={styles.noFeedback}>No feedback given</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h2>Statistics</h2>
      <p className={styles.stat}>Good: <strong>{votes.good}</strong></p>
      <p className={styles.stat}>Neutral: <strong>{votes.neutral}</strong></p>
      <p className={styles.stat}>Bad: <strong>{votes.bad}</strong></p>
      <p className={styles.stat}>Total: <strong>{totalVotes}</strong></p>
      <p className={styles.stat}>Positive: <strong>{positiveRate}%</strong></p>
    </div>
  );
};

export default VoteStats;
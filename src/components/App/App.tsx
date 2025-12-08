// src/components/App/App.tsx
import styles from './App.module.css'
import CafeInfo from '../CafeInfo/CafeInfo.tsx';
import { useState } from 'react';
import VoteOptions from '../VoteOptions/VoteOptions.tsx';
import VoteStats from '../VoteStats/VoteStats.tsx';
import Notification from '../Notification/Notification.tsx';
import { type Votes, type OptionType} from '../../types/votes.ts';

const feedbackOptions: OptionType[] = ['good', 'neutral', 'bad'];

function App() {
  // 1. СТЕЙТ: Зберігання голосів
  const [votes, setVotes] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  // 2. ФУНКЦЯ: Обробка голосування
  const handleVote = (option: OptionType) => {
    setVotes(prevVotes => ({
      ...prevVotes,
      [option]: prevVotes[option] + 1,
    }));
  };

  // 3. ФУНКЦІЯ: Скидання голосів до початкового стану
  const resetVotes = () => {
    setVotes({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  // 4. ФУНКЦІЯ: Розрахунок загальної кількості голосів
  const countTotalFeedback = (): number => {
    return votes.good + votes.neutral + votes.bad;
  };

  // 5. ФУНКЦІЯ: Розрахунок відсотка позитивних відгуків
  const countPositiveFeedbackPercentage = (): number => {
    const total = countTotalFeedback();
    if (total === 0) { return 0; }
    return Math.round((votes.good / total) * 100);
  };

  // Оголошуємо змінні, які будемо передавати у VoteStats
  const totalVotes = countTotalFeedback();
  const positiveRate = countPositiveFeedbackPercentage();
  const canReset = totalVotes > 0;
  
  const feedbackContent = totalVotes > 0 ? (
    <VoteStats
      votes={votes}
      totalVotes={totalVotes}
      positiveRate={positiveRate}
    />
  ) : (
    <Notification />
  );

  return (
    <div className={styles.app}>
      <CafeInfo />
      <VoteOptions
        options={feedbackOptions}
        onLeaveFeedback={handleVote}
        onReset={resetVotes}
        canReset={canReset}
      />
      {feedbackContent}
    </div>
  )
}

export default App


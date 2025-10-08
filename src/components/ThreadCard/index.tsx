import { useState } from 'react';
import { Thread } from '@/typings';
import { formatDate } from '@/utils/dateFormat';
import AnswerForm from '@/components/AnswerForm';
import styles from './index.module.scss';

export interface ThreadCardProps {
  thread: Thread;
  onAddAnswer: (threadId: string, body: string) => void;
}

export default function ThreadCard({ thread, onAddAnswer }: ThreadCardProps) {
  const [showAnswerForm, setShowAnswerForm] = useState(false);
  const [showAllAnswers, setShowAllAnswers] = useState(false);

  const handleAnswerSubmit = (body: string) => {
    onAddAnswer(thread.id, body);
    setShowAnswerForm(false);
  };

  // Sort answers by newest first
  const sortedAnswers = [...thread.answers].sort((a, b) => 
    new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
  
  const displayedAnswers = showAllAnswers ? sortedAnswers : sortedAnswers.slice(0, 1);
  const hasMoreAnswers = thread.answers.length > 1;

  const getMoodEmoji = (mood: number): string => {
    const moodOptions = [
      { value: 1, emoji: '😢', label: 'Very Sad' },
      { value: 2, emoji: '😕', label: 'Sad' },
      { value: 3, emoji: '😐', label: 'Neutral' },
      { value: 4, emoji: '😊', label: 'Happy' },
      { value: 5, emoji: '😄', label: 'Very Happy' }
    ];
    return moodOptions.find(option => option.value === mood)?.emoji || '😐';
  };

  const getMoodLabel = (mood: number): string => {
    const moodOptions = [
      { value: 1, emoji: '😢', label: 'Very Sad' },
      { value: 2, emoji: '😕', label: 'Sad' },
      { value: 3, emoji: '😐', label: 'Neutral' },
      { value: 4, emoji: '😊', label: 'Happy' },
      { value: 5, emoji: '😄', label: 'Very Happy' }
    ];
    return moodOptions.find(option => option.value === mood)?.label || 'Neutral';
  };

  const getMoodBackgroundClass = (mood: number): string => {
    switch (mood) {
      case 1:
        return styles.moodRed;
      case 2:
        return styles.moodOrange;
      case 3:
        return styles.moodYellow;
      case 4:
        return styles.moodLightGreen;
      case 5:
        return styles.moodGreen;
      default:
        return styles.moodYellow;
    }
  };

  return (
    <div className={styles.threadCard}>
      <div className={styles.threadHeader}>
        <div className={styles.authorInfo}>
          <div className={`${styles.mood} ${getMoodBackgroundClass(thread.mood)}`} title={getMoodLabel(thread.mood)}>
            <span className={styles.moodEmoji}>{getMoodEmoji(thread.mood)}</span>
            <span className={styles.moodValue}>{thread.mood}/5</span>
          </div>
          <span className={styles.authorName}>{thread.authorName}</span>
          <span className={styles.postDate}>{formatDate(thread.createdAt)}</span>
        </div>
      </div>

      <h3 className={styles.threadTitle}>{thread.title}</h3>
      <p className={styles.threadBody}>{thread.body}</p>

      <div className={styles.threadActions}>
        {!showAnswerForm && (
          <button 
            onClick={() => setShowAnswerForm(true)}
            className={styles.answerButton}
          >
            Reply
          </button>
        )}
      </div>

      {showAnswerForm && (
        <AnswerForm
          onSubmit={handleAnswerSubmit}
          onCancel={() => setShowAnswerForm(false)}
        />
      )}

      {thread.answers.length > 0 && (
        <div className={styles.answersSection}>
          <div className={styles.answers}>
            {displayedAnswers.map((answer) => (
              <div key={answer.id} className={styles.answer}>
                <div className={styles.answerHeader}>
                  <span className={styles.answerAuthor}>{answer.authorName}</span>
                  <span className={styles.answerDate}>{formatDate(answer.createdAt)}</span>
                </div>
                <p className={styles.answerBody}>{answer.body}</p>
              </div>
            ))}
          </div>

          {hasMoreAnswers && !showAllAnswers && (
            <div className={styles.seeMoreContainer}>
              <button 
                onClick={() => setShowAllAnswers(true)}
                className={styles.seeMoreButton}
              >
                See all {thread.answers.length} answers
              </button>
            </div>
          )}
          
          {showAllAnswers && hasMoreAnswers && (
            <div className={styles.seeMoreContainer}>
              <button 
                onClick={() => setShowAllAnswers(false)}
                className={styles.seeMoreButton}
              >
                Show only latest answer
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
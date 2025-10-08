import { useState } from 'react';
import styles from './index.module.scss';

export interface ThreadFormProps {
  onSubmit: (title: string, mood: number, body: string) => void;
}

export default function ThreadForm({ onSubmit }: ThreadFormProps) {
  const [title, setTitle] = useState('');
  const [mood, setMood] = useState(1);
  const [body, setBody] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() && body.trim()) {
      onSubmit(title, mood, body);
      setTitle('');
      setMood(1);
      setBody('');
    }
  };

  const remainingChars = 180 - body.length;

  return (
    <form onSubmit={handleSubmit} className={styles.threadForm}>
      <h2 className={styles.formTitle}>Create New Thread</h2>
      
      <div className={styles.formGroup}>
        <label htmlFor="title" className={styles.label}>Title</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter thread title..."
          className={styles.titleInput}
          required
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="mood" className={styles.label}>Mood</label>
        <div className={styles.moodSelector}>
          {[
            { value: 1, emoji: '😢', label: 'Very Sad' },
            { value: 2, emoji: '😕', label: 'Sad' },
            { value: 3, emoji: '😐', label: 'Neutral' },
            { value: 4, emoji: '😊', label: 'Happy' },
            { value: 5, emoji: '😄', label: 'Very Happy' }
          ].map((moodOption) => (
            <button
              key={moodOption.value}
              type="button"
              onClick={() => setMood(moodOption.value)}
              className={`${styles.moodOption} ${mood === moodOption.value ? styles.moodOptionActive : ''}`}
              title={moodOption.label}
            >
              <span className={styles.moodEmoji}>{moodOption.emoji}</span>
              <span className={styles.moodValue}>{moodOption.value}</span>
            </button>
          ))}
        </div>
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="body" className={styles.label}>
          Body
          <span className={styles.charCount}>
            {remainingChars} characters remaining
          </span>
        </label>
        <textarea
          id="body"
          value={body}
          onChange={(e) => {
            if (e.target.value.length <= 180) {
              setBody(e.target.value);
            }
          }}
          placeholder="What's on your mind?"
          className={styles.bodyTextarea}
          rows={4}
          required
        />
      </div>

      <button 
        type="submit" 
        className={styles.submitButton}
        disabled={!title.trim() || !body.trim()}
      >
        Post Thread
      </button>
    </form>
  );
}
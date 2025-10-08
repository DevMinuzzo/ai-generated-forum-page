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
          {[1, 2, 3, 4, 5].map((moodValue) => (
            <label key={moodValue} className={styles.moodOption}>
              <input
                type="radio"
                name="mood"
                value={moodValue}
                checked={mood === moodValue}
                onChange={(e) => setMood(Number(e.target.value))}
                className={styles.moodRadio}
              />
              <span className={styles.moodLabel}>{moodValue}</span>
            </label>
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
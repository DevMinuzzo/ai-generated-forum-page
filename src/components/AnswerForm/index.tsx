import { useState } from 'react';
import styles from './index.module.scss';

export interface AnswerFormProps {
  onSubmit: (body: string) => void;
  onCancel: () => void;
}

export default function AnswerForm({ onSubmit, onCancel }: AnswerFormProps) {
  const [body, setBody] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (body.trim()) {
      onSubmit(body);
      setBody('');
    }
  };

  const remainingChars = 180 - body.length;

  return (
    <form onSubmit={handleSubmit} className={styles.answerForm}>
      <div className={styles.formGroup}>
        <label htmlFor="answer-body" className={styles.label}>
          Your Answer
          <span className={styles.charCount}>
            {remainingChars} characters remaining
          </span>
        </label>
        <textarea
          id="answer-body"
          value={body}
          onChange={(e) => {
            if (e.target.value.length <= 180) {
              setBody(e.target.value);
            }
          }}
          placeholder="Write your answer..."
          className={styles.bodyTextarea}
          rows={3}
          required
          autoFocus
        />
      </div>

      <div className={styles.buttonGroup}>
        <button 
          type="button" 
          onClick={onCancel}
          className={styles.cancelButton}
        >
          Cancel
        </button>
        <button 
          type="submit" 
          className={styles.submitButton}
          disabled={!body.trim()}
        >
          Post Answer
        </button>
      </div>
    </form>
  );
}
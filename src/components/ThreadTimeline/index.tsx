import { Thread } from '@/typings';
import ThreadCard from '@/components/ThreadCard';
import styles from './index.module.scss';

export interface ThreadTimelineProps {
  threads: Thread[];
  onAddAnswer: (threadId: string, body: string) => void;
}

export default function ThreadTimeline({ threads, onAddAnswer }: ThreadTimelineProps) {
  if (threads.length === 0) {
    return (
      <div className={styles.emptyState}>
        <p className={styles.emptyText}>No threads yet. Be the first to start a conversation!</p>
      </div>
    );
  }

  return (
    <div className={styles.timeline}>
      {threads.map((thread) => (
        <ThreadCard
          key={thread.id}
          thread={thread}
          onAddAnswer={onAddAnswer}
        />
      ))}
    </div>
  );
}
import { useState, useEffect } from 'react';
import { Thread, Answer, User } from '@/typings';
import { MOCK_USERS } from '@/data/users';
import { saveThreadsToStorage, loadThreadsFromStorage, generateId } from '@/utils/storage';
import UserSelector from '@/components/shared/UserSelector';
import ThreadForm from '@/components/ThreadForm';
import ThreadTimeline from '@/components/ThreadTimeline';
import styles from '@/styles/Home.module.scss';

export default function Home() {
  const [currentUser, setCurrentUser] = useState<User>(MOCK_USERS[0]);
  const [threads, setThreads] = useState<Thread[]>([]);

  // Load threads from localStorage on component mount
  useEffect(() => {
    const savedThreads = loadThreadsFromStorage();
    setThreads(savedThreads);
  }, []);

  // Save threads to localStorage whenever threads change
  useEffect(() => {
    saveThreadsToStorage(threads);
  }, [threads]);

  const handleCreateThread = (title: string, mood: number, body: string) => {
    const newThread: Thread = {
      id: generateId(),
      title,
      body,
      mood,
      authorId: currentUser.id,
      authorName: currentUser.name,
      createdAt: new Date().toISOString(),
      answers: [],
    };

    setThreads(prevThreads => [newThread, ...prevThreads]);
  };

  const handleAddAnswer = (threadId: string, body: string) => {
    const newAnswer: Answer = {
      id: generateId(),
      body,
      authorId: currentUser.id,
      authorName: currentUser.name,
      createdAt: new Date().toISOString(),
      threadId,
    };

    setThreads(prevThreads =>
      prevThreads.map(thread =>
        thread.id === threadId
          ? { ...thread, answers: [...thread.answers, newAnswer] }
          : thread
      )
    );
  };

  return (
    <>
      <UserSelector
        users={MOCK_USERS}
        currentUser={currentUser}
        onUserChange={setCurrentUser}
      />
      
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Pulse Project</h1>
        </header>

        <main className={styles.main}>
          <ThreadForm onSubmit={handleCreateThread} />
          <ThreadTimeline threads={threads} onAddAnswer={handleAddAnswer} />
        </main>
      </div>
    </>
  );
}

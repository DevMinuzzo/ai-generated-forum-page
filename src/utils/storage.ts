import { Thread } from '@/typings';

const THREADS_KEY = 'pulse_threads';

export const saveThreadsToStorage = (threads: Thread[]): void => {
  try {
    localStorage.setItem(THREADS_KEY, JSON.stringify(threads));
  } catch (error) {
    console.error('Failed to save threads to localStorage:', error);
  }
};

export const loadThreadsFromStorage = (): Thread[] => {
  try {
    const stored = localStorage.getItem(THREADS_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error('Failed to load threads from localStorage:', error);
    return [];
  }
};

export const generateId = (): string => {
  return Date.now().toString() + Math.random().toString(36).substr(2, 9);
};
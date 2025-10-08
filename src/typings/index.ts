export interface User {
  id: string;
  name: string;
}

export interface Thread {
  id: string;
  title: string;
  body: string;
  mood: number;
  authorId: string;
  authorName: string;
  createdAt: string;
  answers: Answer[];
}

export interface Answer {
  id: string;
  body: string;
  authorId: string;
  authorName: string;
  createdAt: string;
  threadId: string;
}
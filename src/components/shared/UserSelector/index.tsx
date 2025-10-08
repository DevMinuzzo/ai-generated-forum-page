import { User } from '@/typings';
import styles from './index.module.scss';

export interface UserSelectorProps {
  users: User[];
  currentUser: User;
  onUserChange: (user: User) => void;
}

export default function UserSelector({ users, currentUser, onUserChange }: UserSelectorProps) {
  return (
    <div className={styles.userSelector}>
      <div className={styles.currentUser}>
        Current User: <span className={styles.userName}>{currentUser.name}</span>
      </div>
      <select 
        value={currentUser.id} 
        onChange={(e) => {
          const selectedUser = users.find(user => user.id === e.target.value);
          if (selectedUser) {
            onUserChange(selectedUser);
          }
        }}
        className={styles.userSelect}
      >
        {users.map(user => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>
    </div>
  );
}
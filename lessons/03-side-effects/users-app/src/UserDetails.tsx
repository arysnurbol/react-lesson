import { useEffect, useState } from 'react';
import { fetchUser } from './api';
import type { User } from './types';

interface UserDetailsProps {
  userId: number;
}

// ⚠️ Қадам 1: әдейі АҢҒАЛ нұсқа — бағы бар
export function UserDetails({ userId }: UserDetailsProps) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    console.log('▶ fetch start', userId);
    fetchUser(userId).then((data) => {
      console.log('✔ fetch done ', userId);
      setUser(data);
    });
  }, [userId]);

  if (!user) return <p>Loading…</p>;

  return (
    <article>
      <h2>{user.name}</h2>
      <p>📧 {user.email}</p>
      <p>📞 {user.phone}</p>
      <p>🏢 {user.company.name}</p>
    </article>
  );
}

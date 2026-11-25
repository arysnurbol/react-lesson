import type { User } from './types';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

// Race condition көрінуі үшін: 300–2000 ms кездейсоқ кідіріс
const randomDelay = () =>
  new Promise((resolve) => setTimeout(resolve, 300 + Math.random() * 1700));

export async function fetchUser(id: number): Promise<User> {
  await randomDelay();
  const res = await fetch(`${BASE_URL}/users/${id}`);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json() as Promise<User>;
}

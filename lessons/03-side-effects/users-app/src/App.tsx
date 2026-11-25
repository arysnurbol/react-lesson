import { useState } from 'react';
import { UserDetails } from './UserDetails';

const USER_IDS = [1, 2, 3, 4, 5];

export default function App() {
  const [selectedId, setSelectedId] = useState(1);

  return (
    <main style={{ display: 'flex', gap: 32, padding: 24, fontFamily: 'sans-serif' }}>
      <nav style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {USER_IDS.map((id) => (
          <button
            key={id}
            onClick={() => setSelectedId(id)}
            style={{ fontWeight: id === selectedId ? 'bold' : 'normal' }}
          >
            User {id}
          </button>
        ))}
      </nav>
      <section>
        <p>Selected: {selectedId}</p>
        <UserDetails userId={selectedId} />
      </section>
    </main>
  );
}

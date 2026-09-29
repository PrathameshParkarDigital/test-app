import { useState } from 'react';
import { saveQuickNote } from './quickNote';

export function QuickNote() {
  const [text, setText] = useState('');
  const [saved, setSaved] = useState('');

  const handleSave = (event) => {
    event.preventDefault();
    const next = text.trim();
    if (!next) return;
    saveQuickNote(next);
    setSaved(next);
    setText('');
  };

  return (
    <form onSubmit={handleSave} style={{ backgroundColor: '#111827', borderRadius: '0.5rem', padding: '1.25rem' }}>
      <label style={{ display: 'block', color: '#d1d5db', fontSize: '0.875rem', fontWeight: '500', marginBottom: '0.5rem' }}>
        Quick note
      </label>
      <input
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
        placeholder="Jot something down"
        style={{ width: '100%', padding: '0.5rem 1rem', borderRadius: '0.5rem', backgroundColor: '#1f2937', color: 'white', border: '1px solid #374151', outline: 'none', marginBottom: '0.75rem' }}
      />
      <button
        type="submit"
        style={{ width: '100%', padding: '0.6rem 1rem', backgroundColor: '#4f46e5', color: 'white', fontWeight: '600', borderRadius: '0.5rem', border: 'none', cursor: 'pointer' }}
      >
        Save note
      </button>
      {saved ? (
        <p style={{ color: '#d1d5db', fontSize: '0.875rem', marginTop: '0.75rem', marginBottom: 0 }}>
          Saved: {saved}
        </p>
      ) : null}
    </form>
  );
}

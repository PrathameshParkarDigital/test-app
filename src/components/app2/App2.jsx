import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form } from './Form';
import { QuickNote } from './QuickNote';
import { submitProfile } from './submitProfile';

export default function App2() {
  // all form data and state together - messy way
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [msg, setMsg] = useState('');

  // menu items
  const menu = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'profile', label: 'Profile', icon: '👤' },
    { id: 'settings', label: 'Settings', icon: '⚙️' },
    { id: 'messages', label: 'Messages', icon: '💬' },
  ];
  const [page, setPage] = useState('profile');

  // submit handler - all inline
  const handleSubmit = (e) => {
    e.preventDefault();
    submitProfile({ name, email, phone, msg });
    alert('Form submitted!');
    setName('');
    setEmail('');
    setPhone('');
    setMsg('');
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#1f2937', display: 'flex' }}>
      {/* sidebar - all inline */}
      <div style={{ width: '16rem', backgroundColor: '#111827', borderRight: '1px solid #374151', minHeight: '100vh', padding: '1rem' }}>
        <div style={{ marginBottom: '1.5rem' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'white', marginBottom: '0.25rem' }}>Menu</h2>
          <p style={{ color: '#9ca3af', fontSize: '0.875rem' }}>Navigation</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {menu.map(item => (
            <div
              key={item.id}
              onClick={() => setPage(item.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '0.75rem 1rem',
                borderRadius: '0.5rem',
                cursor: 'pointer',
                backgroundColor: page === item.id ? '#4f46e5' : 'transparent',
                color: page === item.id ? 'white' : '#d1d5db'
              }}
            >
              <span style={{ fontSize: '1.125rem' }}>{item.icon}</span>
              <span style={{ fontWeight: '500' }}>{item.label}</span>
            </div>
          ))}
        </div>
        <div style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid #374151' }}>
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem 1rem', borderRadius: '0.5rem', color: '#d1d5db', textDecoration: 'none' }}>
            <span style={{ fontSize: '1.125rem' }}>🏠</span>
            <span style={{ fontWeight: '500' }}>Home</span>
          </Link>
        </div>
      </div>

      {/* main content */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* header - inline */}
        <div style={{ backgroundColor: '#111827', borderBottom: '1px solid #374151', padding: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white' }}>Messy Code Example</h1>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <Link to="/" style={{ padding: '0.5rem 1rem', backgroundColor: '#374151', color: 'white', borderRadius: '0.5rem', textDecoration: 'none', fontSize: '0.875rem' }}>Home</Link>
            <Link to="/app1" style={{ padding: '0.5rem 1rem', backgroundColor: '#4f46e5', color: 'white', borderRadius: '0.5rem', textDecoration: 'none', fontSize: '0.875rem' }}>View Clean Code</Link>
          </div>
        </div>

        {/* content area */}
        <div style={{ flex: 1, padding: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100%' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '28rem', width: '100%' }}>
            <div style={{ backgroundColor: '#111827', borderRadius: '0.5rem', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)', padding: '2rem' }}>
              <Form
                name={name}
                email={email}
                phone={phone}
                msg={msg}
                setName={setName}
                setEmail={setEmail}
                setPhone={setPhone}
                setMsg={setMsg}
                onSubmit={handleSubmit}
              />
            </div>
            <QuickNote />
          </div>
        </div>
      </div>
    </div>
  );
}

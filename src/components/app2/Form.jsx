// messy form component - inline styles, no proper structure
export function Form({ name, email, phone, msg, setName, setEmail, setPhone, setMsg, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      {/* name field */}
      <div style={{ marginBottom: '1rem' }}>
        <label style={{ display: 'block', color: '#d1d5db', fontSize: '0.875rem', fontWeight: '500', marginBottom: '0.5rem' }}>
          Name <span style={{ color: '#f87171' }}>*</span>
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          required
          style={{ width: '100%', padding: '0.5rem 1rem', borderRadius: '0.5rem', backgroundColor: '#1f2937', color: 'white', border: '1px solid #374151', outline: 'none' }}
        />
      </div>

      {/* email field */}
      <div style={{ marginBottom: '1rem' }}>
        <label style={{ display: 'block', color: '#d1d5db', fontSize: '0.875rem', fontWeight: '500', marginBottom: '0.5rem' }}>
          Email <span style={{ color: '#f87171' }}>*</span>
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          style={{ width: '100%', padding: '0.5rem 1rem', borderRadius: '0.5rem', backgroundColor: '#1f2937', color: 'white', border: '1px solid #374151', outline: 'none' }}
        />
      </div>

      {/* phone field */}
      <div style={{ marginBottom: '1rem' }}>
        <label style={{ display: 'block', color: '#d1d5db', fontSize: '0.875rem', fontWeight: '500', marginBottom: '0.5rem' }}>
          Phone
        </label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Enter your phone number"
          style={{ width: '100%', padding: '0.5rem 1rem', borderRadius: '0.5rem', backgroundColor: '#1f2937', color: 'white', border: '1px solid #374151', outline: 'none' }}
        />
      </div>

      {/* message field */}
      <div style={{ marginBottom: '1.5rem' }}>
        <label style={{ display: 'block', color: '#d1d5db', fontSize: '0.875rem', fontWeight: '500', marginBottom: '0.5rem' }}>
          Message
        </label>
        <input
          type="text"
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          placeholder="Enter your message"
          style={{ width: '100%', padding: '0.5rem 1rem', borderRadius: '0.5rem', backgroundColor: '#1f2937', color: 'white', border: '1px solid #374151', outline: 'none' }}
        />
      </div>

      {/* submit button */}
      <button
        type="submit"
        style={{
          width: '100%',
          padding: '0.75rem 1rem',
          backgroundColor: '#4f46e5',
          color: 'white',
          fontWeight: '600',
          borderRadius: '0.5rem',
          border: 'none',
          cursor: 'pointer'
        }}
      >
        Submit
      </button>
    </form>
  );
}


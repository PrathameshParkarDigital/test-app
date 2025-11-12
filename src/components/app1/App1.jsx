import { useState } from 'react';
import { Layout } from './components/Layout';
import { Form } from './components/Form';

export default function App1() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (data) => {
    console.log('Form submitted:', data);
    alert('Form submitted successfully!');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <Layout currentPage="profile" headerTitle="Clean Code Example">
      <div className="flex items-center justify-center min-h-full">
        <div className="bg-gray-900 rounded-lg shadow-2xl p-8 max-w-md w-full">
          <Form formData={formData} onChange={setFormData} onSubmit={handleSubmit} />
        </div>
      </div>
    </Layout>
  );
}

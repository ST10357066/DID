// Frontend/DigiVerifyMe/src/pages/HelpAndSupportPage.tsx
// Frontend/DigiVerifyMe/src/pages/HelpSupportPage.tsx
import { useState } from 'react';

const HelpSupportPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // You can add logic here to send the message, e.g., API call

    // Simulate success
    setSuccessMessage('Your message has been sent successfully!');
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Help & Support</h1>
      {successMessage && <div className="my-4 text-green-500">{successMessage}</div>}
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="mt-1 p-2 border border-gray-300 rounded w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 p-2 border border-gray-300 rounded w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium">Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="mt-1 p-2 border border-gray-300 rounded w-full"
            rows={4}
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default HelpSupportPage;

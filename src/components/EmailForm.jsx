import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const EmailForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send('service_apjlw9w', 'template_do4de97', formData, 'fpXU_RTe_v5ZieGvn')
      .then(() => {
        alert('Your email has been sent!');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        alert('Failed to send email. Please try again.');
      });
  };

  return (
    <form className="flex flex-col gap-2 mt-4" onSubmit={sendEmail}>
      <input
        type="text"
        id="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        className="px-4 py-2 bg-white bg-opacity-10 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 placeholder-gray-400"
        required
      />
      <input
        type="email"
        id="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        className="px-4 py-2 bg-white bg-opacity-10 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 placeholder-gray-400"
        required
      />
      <textarea
        id="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        className="px-4 py-2 bg-white bg-opacity-10 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 placeholder-gray-400"
        required
      />
      <button
        type="submit"
        className="px-4 py-2 bg-gradient-to-r from-pink-500 to-orange-400 text-white rounded-lg transition-all duration-300 hover:from-orange-400 hover:to-pink-500 active:scale-95"
      >
        Send Email
      </button>
    </form>
  );
};

export default EmailForm;

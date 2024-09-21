import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('https://getform.io/f/brolqnxa', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      toast.success('Message sent successfully!', {
        position: "top-center",
        autoClose: 3000,
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } else {
      toast.error('There was an error sending your message. Please try again.', {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  return (
    <section id='contact' className="bg-gray-900 text-gray-400 body-font">
      <div className="container mx-auto p-8">
        <h2 className="text-3xl font-medium title-font text-white mb-4 text-center">Contact Us</h2>
        <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <div className="mb-4">
            <label className="block text-sm font-medium text-white mb-2" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 rounded bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-[lightseagreen]"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-white mb-2" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 rounded bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-[lightseagreen]"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-white mb-2" htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full p-2 rounded bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-[lightseagreen]"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-white mb-2" htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 rounded bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-[lightseagreen]"
              rows="4"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[lightseagreen] text-gray-900 font-bold py-2 rounded hover:bg-[#20b2abce] transition duration-300"
          >
            Submit
          </button>
        </form>
        <ToastContainer />
      </div>
    </section>
  );
};

export default ContactForm;

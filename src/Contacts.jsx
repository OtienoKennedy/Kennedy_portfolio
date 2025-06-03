import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-black text-white p-8">
      <h2 className="text-4xl font-bold text-center mb-10">Contact Information</h2>

      <div className="max-w-2xl mx-auto space-y-6 text-lg">
        <p>
          <strong>Email:</strong>{' '}
          <a href="mailto:otienokennedy1139@gmail.com" className="text-blue-400 underline">
            otienokennedy1139@gmail.com
          </a>
        </p>
        <p>
          <strong>Location:</strong> Embu, Kenya
        </p>
        <p>
          <strong>LinkedIn:</strong>{' '}
          <a
            href="https://www.linkedin.com/in/your-link" // Replace with your actual profile link
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 underline"
          >
            linkedin.com/in/your-link
          </a>
        </p>
        <p>
          <strong>Availability:</strong> Open to internships, full-time roles, and freelance work
        </p>

        {/* Download CV Button */}
        <div className="mt-6">
          <a
            href="/cv/Otieno_Kennedy_CV.pdf" // Or .docx, .jpg — just ensure it's in public/cv/
            download
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition duration-200"
          >
            Download My CV
          </a>
        </div>

        {/* Contact Form */}
        <div className="mt-10">
          <h3 className="text-2xl font-semibold mb-4">Send Me a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full p-3 rounded bg-gray-800 border border-gray-600 text-white"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-3 rounded bg-gray-800 border border-gray-600 text-white"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              className="w-full p-3 rounded bg-gray-800 border border-gray-600 text-white"
              rows="5"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 py-2 px-6 rounded font-semibold transition duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

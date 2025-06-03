import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <div className="min-h-screen p-8 text-white bg-gradient-to-br from-sky-900 via-black to-sky-900">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-center text-blue-300">My Projects</h1>
        <p className="text-center mt-2">
          <Link to="/" className="text-blue-400 underline">← Back to Home</Link>
        </p>
      </header>
      <ul className="space-y-4">
        <li className="bg-black bg-opacity-50 p-4 rounded-lg">
          <h2 className="text-2xl font-semibold">Sign Language Translator</h2>
          <p className="mt-1">Real-time webcam sign language interpretation using VGG16 + Python.</p>
        </li>
        <li className="bg-black bg-opacity-50 p-4 rounded-lg">
          <h2 className="text-2xl font-semibold">Counseling Management System</h2>
          <p className="mt-1">Flask-based registration and login system for managing counseling clients.</p>
        </li>
      </ul>
    </div>
  );
};

export default Projects;

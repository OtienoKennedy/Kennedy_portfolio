import React from "react";
import { motion } from "framer-motion";


export default function Home() {
  return (
    <main className="relative min-h-screen text-white">
      {/* Background Image with overlay */}
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: `url("/background.jpg")` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-slate-900/70 to-slate-800/80"></div>
      </div>

      {/* Sticky Navbar */}
      <nav className="sticky top-0 z-50 bg-black bg-opacity-70 backdrop-blur-sm shadow-md p-4 flex justify-between items-center">
        <h1 className="text-lg font-bold text-blue-400">Otieno Kennedy</h1>
        <ul className="flex flex-wrap space-x-4 text-sm text-blue-200">
          <li><a href="#about" className="hover:text-white">About</a></li>
          <li><a href="#projects" className="hover:text-white">Projects</a></li>
          <li><a href="#skills" className="hover:text-white">Skills</a></li>
          <li><a href="#experience" className="hover:text-white">Experience</a></li>
          <li><a href="#certifications" className="hover:text-white">Certifications</a></li>
          <li><a href="#blog" className="hover:text-white">Blog</a></li>
          <li><a href="#testimonials" className="hover:text-white">Testimonials</a></li>
          <li><a href="#techstack" className="hover:text-white">Tech Stack</a></li>
          <li><a href="#contact" className="hover:text-white">Contact</a></li>
        </ul>
      </nav>
{/* Hero Section */}
<section className="p-4 md:p-10 mb-10 flex flex-col md:flex-row items-center gap-8">
  <motion.img
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8 }}
    src="/Kennedy_portfolio/profile.jpg"
    alt="Otieno Kennedy Onyango"
    className="w-48 h-48 rounded-full object-cover shadow-lg border-4 border-blue-400"
  />

  <motion.div
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 1 }}
  >
    <h1 className="text-4xl md:text-6xl font-bold text-blue-400 drop-shadow-md">
      Hi, I'm Otieno Kennedy Onyango
    </h1>
    <p className="text-lg md:text-xl text-blue-200 mt-4 max-w-2xl">
      A passionate developer with experience in machine learning, full-stack development,
      and building solutions that make a difference.
    </p>
  </motion.div>
</section>


      {/* Projects Section */}
      <section id="projects" className="mb-10 bg-black bg-opacity-50 p-4 md:p-6 rounded-lg max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-blue-200 mb-4">Projects</h2>
        <ul className="list-disc pl-5 text-sm text-gray-200 space-y-2">
          <li><strong>Sign Language Translator:</strong> A real-time gesture recognition tool using CNN and OpenCV.</li>
          <li><strong>Client Counseling Management System:</strong> Built with Flask and SQLite with full CRUD and user authentication.</li>
          <li><strong>Developer Portfolio Website:</strong> Showcasing projects, skills, and experience using React and Tailwind CSS.</li>
        </ul>
      </section>

      {/* Skills Section */}
      <section id="skills" className="mb-10 bg-black bg-opacity-50 p-4 md:p-6 rounded-lg max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-blue-200 mb-4">Skills</h2>
        <div className="flex flex-wrap gap-3 text-sm">
          <span className="bg-blue-800 px-3 py-1 rounded-full">Python</span>
          <span className="bg-blue-800 px-3 py-1 rounded-full">TensorFlow</span>
          <span className="bg-blue-800 px-3 py-1 rounded-full">OpenCV</span>
          <span className="bg-blue-800 px-3 py-1 rounded-full">React</span>
          <span className="bg-blue-800 px-3 py-1 rounded-full">Flask</span>
          <span className="bg-blue-800 px-3 py-1 rounded-full">Tailwind CSS</span>
          <span className="bg-blue-800 px-3 py-1 rounded-full">JavaScript</span>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="mb-10 bg-black bg-opacity-50 p-4 md:p-6 rounded-lg max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-blue-200 mb-4">Experience</h2>
        <div className="space-y-4 text-sm">
          <div>
            <h3 className="text-blue-300 font-semibold">ICT Support & Lab Assistant – Embu College</h3>
            <p>Jan 2023 – Dec 2023</p>
            <ul className="list-disc pl-4 mt-1">
              <li>Assisted students with software installation and troubleshooting.</li>
              <li>Managed computer lab inventory and network maintenance.</li>
              <li>Did ensure that the students always had an access to internet by doing all the necessary activities like crimping, installation of network equipments and many more </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="mb-10 bg-black bg-opacity-50 p-4 md:p-6 rounded-lg max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-blue-200 mb-4">Certifications & Achievements</h2>
        <ul className="list-disc pl-4 text-sm">
          {/*<li>Google IT Support Certification – Coursera</li>*/}
          {/*<li>Python for Everybody – University of Michigan</li>}*/}
          {/*<li>Best Project Award – University of Embu Final Year Expo 2025</li>*/}
        </ul>
      </section>

      {/* Blog Section */}
      <section id="blog" className="mb-10 bg-black bg-opacity-50 p-4 md:p-6 rounded-lg max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-blue-200 mb-4">Latest Posts</h2>
        <div className="space-y-3 text-sm">
          <div>
            <h4 className="text-blue-300 font-semibold">How I Built a Sign Language Translator with CNN</h4>
            <p>Tips and challenges I faced building a real-time translation tool for the deaf.</p>
          </div>
          <div>
            <h4 className="text-blue-300 font-semibold">Why Every Developer Should Learn Flask</h4>
            <p>Quick backend setups, REST APIs, and project scalability with Python.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="mb-10 bg-black bg-opacity-50 p-4 md:p-6 rounded-lg max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-blue-200 mb-4">Testimonials</h2>
        <div className="space-y-4">
          <blockquote className="italic border-l-4 border-blue-400 pl-4 text-sm">
            "Kennedy is a highly motivated and technically skilled individual. His dedication to problem-solving is remarkable."
            <footer className="mt-2 text-blue-300">— Mercy Nzilani, ABZ Silicone</footer>
          </blockquote>
          <blockquote className="italic border-l-4 border-blue-400 pl-4 text-sm">
            "He’s dependable and consistently delivers quality work, even under tight deadlines."
            <footer className="mt-2 text-blue-300">— Brian King, Kyemutheke Secondary</footer>
          </blockquote>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="techstack" className="mb-10 bg-black bg-opacity-50 p-4 md:p-6 rounded-lg max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-blue-200 mb-4">Tech Stack</h2>
        <div className="flex flex-wrap gap-4 text-sm">
          <span className="bg-blue-800 px-3 py-1 rounded-full">React</span>
          <span className="bg-blue-800 px-3 py-1 rounded-full">Flask</span>
          <span className="bg-blue-800 px-3 py-1 rounded-full">Tailwind CSS</span>
          <span className="bg-blue-800 px-3 py-1 rounded-full">MongoDB</span>
          <span className="bg-blue-800 px-3 py-1 rounded-full">TensorFlow</span>
          <span className="bg-blue-800 px-3 py-1 rounded-full">OpenCV</span>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="mb-20 bg-black bg-opacity-50 p-4 md:p-6 rounded-lg max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-blue-200 mb-4">Contact</h2>
        <p className="text-sm text-gray-200">Feel free to reach out:</p>
        <ul className="mt-4 space-y-3 text-sm">
          <li className="flex items-center space-x-2">
            <span className="text-blue-300">📧 Email:</span>
             <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=otienokennedy1139@gmail.com&su=Contact%20from%20Portfolio&body=Hi%20Kennedy,"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-blue-400"
            >
              otienokennedy1139@gmail.com
            </a>
          </li>
          <li className="flex items-center space-x-2">
            <li className="flex items-center space-x-2">
            <span className="text-blue-300">📱 WhatsApp:</span>
            <a
              href="https://wa.me/254759355661"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-blue-400"
            >
              +254 759 355 661
            </a> 
          </li>
          <li className="flex items-center space-x-2"></li>
            <span className="text-blue-300">📱 Phone:</span>
            <a
              href="https://wa.me/254759355661"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-blue-400"
            >
            <span className="text-blue-400">+254 759 355 661</span>
            </a>
          </li>
          <li className="flex items-center space-x-2">
            <span className="text-blue-300">🌐 GitHub:</span>
            <a
              href="https://github.com/kennedyk"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-blue-400"
            >
              github.com/kennedyk
            </a>
          </li>
          <li className="flex items-center space-x-2">
            <span className="text-blue-300">🔗 LinkedIn:</span>
            <a
              href="https://www.linkedin.com/in/otieno-kennedy"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-blue-400"
            >
              linkedin.com/in/otieno-kennedy
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
}

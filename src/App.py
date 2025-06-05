import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="relative min-h-screen text-white overflow-x-hidden">
      {/* Background Image with overlay */}
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: `url("/background.jpg")` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-slate-900/70 to-slate-800/80"></div>
      </div>

      {/* Sticky Navbar */}
      <nav className="sticky top-0 z-50 bg-black bg-opacity-70 backdrop-blur-sm shadow-md px-4 py-3 flex flex-wrap justify-between items-center">
        <h1 className="text-lg sm:text-xl font-bold text-blue-400 flex-shrink-0">Otieno Kennedy</h1>
        <ul className="flex flex-wrap justify-end gap-x-4 text-sm text-blue-200 mt-2 sm:mt-0 w-full sm:w-auto">
          {[
            "About",
            "Projects",
            "Skills",
            "Experience",
            "Certifications",
            "Blog",
            "Testimonials",
            "Tech Stack",
            "Contact",
          ].map((item) => (
            <li key={item}>
              {/* Ensure click targets are large enough on touch devices by adding some padding */}
              <a href={`#${item.toLowerCase().replace(" ", "")}`} className="hover:text-white block py-1">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="px-4 py-10 flex flex-col md:flex-row items-center gap-8 max-w-screen-xl mx-auto">
        <motion.img
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          src="Kennedy_portfolio/profile.jpg"
          alt="Otieno Kennedy Onyango"
          // Ensure image dimensions are consistent but scale responsively
          className="w-32 h-32 sm:w-44 sm:h-44 md:w-48 md:h-48 rounded-full object-cover shadow-lg border-4 border-blue-400 flex-shrink-0" // Added flex-shrink-0
        />

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-center md:text-left max-w-xl"
        >
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-blue-400 drop-shadow-md">
            Hi, I'm Otieno Kennedy Onyango
          </h1>
          <p className="text-sm sm:text-lg text-blue-200 mt-4">
            A passionate developer with experience in machine learning, full-stack development,
            and building solutions that make a difference.
          </p>
        </motion.div>
      </section>

      {/* Reusable Section Component */}
      {[
        {
          id: "projects",
          title: "Projects",
          content: (
            <ul className="list-disc pl-5 text-sm text-gray-200 space-y-2">
              <li><strong>Sign Language Translator:</strong> A real-time gesture recognition tool using CNN and OpenCV.</li>
              <li><strong>Client Counseling Management System:</strong> Built with Flask and SQLite with full CRUD and user authentication.</li>
              <li><strong>Developer Portfolio Website:</strong> Showcasing projects, skills, and experience using React and Tailwind CSS.</li>
            </ul>
          ),
        },
        {
          id: "skills",
          title: "Skills",
          content: (
            <div className="flex flex-wrap gap-3 text-sm justify-center sm:justify-start">
              {/* Added consistent padding for skill badges */}
              {["Python", "TensorFlow", "OpenCV", "React", "Flask", "Tailwind CSS", "JavaScript"].map((skill) => (
                <span key={skill} className="bg-blue-800 px-3 py-1 rounded-full whitespace-nowrap">
                  {skill}
                </span>
              ))}
            </div>
          ),
        },
        {
          id: "experience",
          title: "Experience",
          content: (
            <div className="space-y-4 text-sm">
              <div>
                <h3 className="text-blue-300 font-semibold">ICT Support & Lab Assistant – Embu College</h3>
                <p>Jan 2023 – Dec 2023</p>
                <ul className="list-disc pl-4 mt-1">
                  <li>Assisted students with software installation and troubleshooting.</li>
                  <li>Managed computer lab inventory and network maintenance.</li>
                  {/* Corrected the list item tag to ensure it renders */}
                  <li>Did ensure that the students always had an access to internet by doing all the necessary activities like crimping, installation of network equipments and many more.</li>
                </ul>
              </div>
            </div>
          ),
        },
        {
          id: "certifications",
          title: "Certifications & Achievements",
          content: (
            <ul className="list-disc pl-4 text-sm">
              #<li>Google IT Support Certification – Coursera</li>
              #<li>Python for Everybody – University of Michigan</li>
              #<li>Best Project Award – University of Embu Final Year Expo 2025</li>
            </ul>
          ),
        },
        {
          id: "blog",
          title: "Latest Posts",
          content: (
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
          ),
        },
        {
          id: "testimonials",
          title: "Testimonials",
          content: (
            <div className="space-y-4 text-sm">
              <blockquote className="italic border-l-4 border-blue-400 pl-4">
                "Kennedy is a highly motivated and technically skilled individual. His dedication to problem-solving is remarkable."
                <footer className="mt-2 text-blue-300">— Mercy Nzilani, ABZ Silicone</footer>
              </blockquote>
              <blockquote className="italic border-l-4 border-blue-400 pl-4">
                "He’s dependable and consistently delivers quality work, even under tight deadlines."
                <footer className="mt-2 text-blue-300">— Brian King, Kyemutheke Secondary</footer>
              </blockquote>
            </div>
          ),
        },
        {
          id: "techstack",
          title: "Tech Stack",
          content: (
            <div className="flex flex-wrap gap-4 text-sm justify-center sm:justify-start">
              {["Python", "TensorFlow", "React", "Flask", "OpenCV", "Tailwind CSS", "JavaScript"].map((tech) => (
                <span
                  key={tech}
                  className="bg-gradient-to-r from-blue-600 to-blue-800 px-3 py-1 rounded-full shadow-sm whitespace-nowrap" // Added whitespace-nowrap
                >
                  {tech}
                </span>
              ))}
            </div>
          ),
        },
        {
          id: "contact",
          title: "Contact",
          content: (
            <p className="text-sm break-words">
              Feel free to reach out to me via email or LinkedIn:
              <br />
              <a href="mailto:otieno.kennedy@example.com" className="text-blue-400 underline hover:text-blue-300">otieno.kennedy@example.com</a>
              <br />
              <a href="https://linkedin.com/in/otienokennedy" target="_blank" rel="noreferrer" className="text-blue-400 underline hover:text-blue-300">
                linkedin.com/in/otienokennedy
              </a>
            </p>
          ),
        },
      ].map(({ id, title, content }) => (
        <section
          key={id}
          id={id}
          className="mb-10 bg-black bg-opacity-50 p-4 md:p-6 rounded-lg max-w-screen-lg mx-auto w-full"
        >
          <h2 className="text-2xl font-semibold text-blue-200 mb-4">{title}</h2>
          {content}
        </section>
      ))}
    </main>
  );
}
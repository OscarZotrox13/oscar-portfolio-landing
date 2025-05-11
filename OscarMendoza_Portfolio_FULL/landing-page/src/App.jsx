import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const GITHUB_USERNAME = "OscarZotrox13";

function App() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos`)
      .then(res => res.json())
      .then(data => setRepos(data));
  }, []);

  return (
    <div className="bg-white text-gray-800 font-sans min-h-screen">
      <header className="text-center py-10">
        <img src="/oscardev_logo.png" alt="Logo OM" className="mx-auto w-24" />
        <h1 className="text-4xl font-bold mt-4">Oscar Mendoza</h1>
        <p className="text-lg">Full Stack Developer | React · Node · MySQL</p>
        <a href="/CV_OscarMendoza_EN.pdf" download className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700">
          Download CV (EN)
        </a>
      </header>

      <section className="max-w-4xl mx-auto px-4 py-6">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {repos.slice(0, 6).map(repo => (
            <motion.a
              href={repo.html_url}
              key={repo.id}
              target="_blank"
              className="border rounded-xl p-4 shadow hover:shadow-lg transition"
              whileHover={{ scale: 1.03 }}
            >
              <h3 className="font-bold text-blue-600">{repo.name}</h3>
              <p className="text-sm">{repo.description}</p>
            </motion.a>
          ))}
        </div>
      </section>

      <footer className="text-center py-10 bg-gray-100 mt-10">
        <p>Email: oscar.abraham.mendoza2021@gmail.com</p>
        <div className="flex justify-center gap-4 mt-2">
          <a href="https://github.com/OscarZotrox13" className="text-blue-600">GitHub</a>
          <a href="https://www.linkedin.com/in/oscar-abraham-mendoza-430889298/" className="text-blue-600">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
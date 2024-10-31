import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Navigation />
      <Hero />
      <Skills />
      <Education />
      <Projects />
      <Certifications />
      <Contact />
      
      <footer className="bg-gray-900 py-8">
        <div className="container mx-auto px-6 text-center text-gray-400">
          <p>© 2024 Pranav Yedla. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
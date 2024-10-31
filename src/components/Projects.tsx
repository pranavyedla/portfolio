import React from 'react';
import { Briefcase } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      name: "E-commerce Platform",
      description: "Built a full-stack e-commerce platform with React, Node.js, and MongoDB. Implemented user authentication, product management, and payment integration.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "https://github.com/pranavyedla/ecommerce"
    },
    {
      name: "Task Management System",
      description: "Developed a task management application with real-time updates using Socket.io. Features include task assignment, progress tracking, and team collaboration.",
      technologies: ["React", "Express", "Socket.io", "PostgreSQL"],
      link: "https://github.com/pranavyedla/task-manager"
    },
    {
      name: "Weather Application",
      description: "Created a weather application that provides real-time weather information using OpenWeatherMap API. Includes features like location detection and 5-day forecast.",
      technologies: ["React", "API Integration", "Geolocation", "CSS3"],
      link: "https://github.com/pranavyedla/weather-app"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-lg transform hover:scale-105 transition">
              <Briefcase className="w-12 h-12 mb-4 text-blue-400" />
              <h3 className="text-xl font-bold mb-4">{project.name}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="px-3 py-1 bg-gray-800 rounded-full text-sm text-blue-400">
                    {tech}
                  </span>
                ))}
              </div>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
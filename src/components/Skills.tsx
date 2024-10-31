import React from 'react';
import { Code, Globe, Database, Terminal, Layout, Settings } from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-12 h-12 mb-4 text-blue-400" />,
      skills: ["JavaScript", "Python", "Java", "C++"]
    },
    {
      title: "Web Technologies",
      icon: <Globe className="w-12 h-12 mb-4 text-blue-400" />,
      skills: ["HTML5", "CSS3", "React.js", "Node.js"]
    },
    {
      title: "Databases",
      icon: <Database className="w-12 h-12 mb-4 text-blue-400" />,
      skills: ["MySQL", "MongoDB", "PostgreSQL"]
    },
    {
      title: "Development Tools",
      icon: <Terminal className="w-12 h-12 mb-4 text-blue-400" />,
      skills: ["Git", "VS Code", "Docker", "AWS"]
    },
    {
      title: "UI/UX Design",
      icon: <Layout className="w-12 h-12 mb-4 text-blue-400" />,
      skills: ["Figma", "Adobe XD", "Responsive Design"]
    },
    {
      title: "Other Skills",
      icon: <Settings className="w-12 h-12 mb-4 text-blue-400" />,
      skills: ["Problem Solving", "Team Collaboration", "Agile Methodology"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-lg transform hover:scale-105 transition">
              {category.icon}
              <h3 className="text-xl font-bold mb-4">{category.title}</h3>
              <ul className="space-y-2 text-gray-300">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
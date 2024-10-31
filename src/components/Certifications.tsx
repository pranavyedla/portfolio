import React from 'react';
import { Award } from 'lucide-react';

export function Certifications() {
  const certifications = [
    {
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2023",
      description: "Fundamental understanding of AWS Cloud services and architecture"
    },
    {
      name: "React Developer Certification",
      issuer: "Meta",
      date: "2023",
      description: "Advanced React concepts, state management, and best practices"
    },
    {
      name: "Python Programming Specialization",
      issuer: "University of Michigan (Coursera)",
      date: "2022",
      description: "Comprehensive Python programming and data structures"
    },
    {
      name: "Machine Learning Fundamentals",
      issuer: "Stanford Online",
      date: "2022",
      description: "Core concepts of machine learning and AI applications"
    }
  ];

  return (
    <section id="certifications" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg transform hover:scale-105 transition">
              <Award className="w-12 h-12 mb-4 text-blue-400" />
              <h3 className="text-xl font-bold mb-4">{cert.name}</h3>
              <p className="text-blue-400 mb-2">{cert.issuer}</p>
              <p className="text-gray-400 mb-2">{cert.date}</p>
              <p className="text-gray-300">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
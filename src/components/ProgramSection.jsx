// components/ProgramsSection.js
import React from 'react';
import { Cpu, Code, Lightbulb, BookOpen, ChevronRight } from 'lucide-react';

const ProgramsSection = () => {
  const programs = [
    {
      title: 'Robotics Engineering',
      description: 'Build and program autonomous robots using Arduino, Raspberry Pi, and advanced sensors.',
      icon: <Cpu className="text-primary" size={48} />,
      features: ['Hardware Assembly', 'Programming', 'AI Integration', 'Competition Prep'],
      level: 'Beginner to Advanced'
    },
    {
      title: 'Scratch Programming',
      description: 'Learn programming fundamentals through visual coding and game development.',
      icon: <Code className="text-success" size={48} />,
      features: ['Visual Programming', 'Game Development', 'Animation', 'Logic Building'],
      level: 'Ages 8-16'
    },
    {
      title: 'Digital Innovation',
      description: 'Explore emerging technologies like VR, AI, and IoT through hands-on projects.',
      icon: <Lightbulb className="text-warning" size={48} />,
      features: ['VR Development', 'AI Projects', 'IoT Solutions', 'Tech Innovation'],
      level: 'Intermediate+'
    },
    {
      title: 'STEM Research',
      description: 'Conduct real scientific research and contribute to academic publications.',
      icon: <BookOpen className="text-info" size={48} />,
      features: ['Research Methods', 'Data Analysis', 'Publication', 'Mentorship'],
      level: 'Advanced'
    }
  ];

  return (
    <section id="programs" className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3">Our STEM Programs</h2>
          <p className="lead text-muted">Comprehensive learning paths designed to ignite curiosity and build expertise</p>
        </div>
        
        <div className="row g-4">
          {programs.map((program, index) => (
            <div key={index} className="col-lg-6 col-xl-3">
              <div className="card h-100 border-0 shadow-sm program-card">
                <div className="card-body p-4">
                  <div className="text-center mb-3">
                    {program.icon}
                  </div>
                  <h5 className="card-title fw-bold text-center mb-3">{program.title}</h5>
                  <p className="card-text text-muted mb-3">{program.description}</p>
                  
                  <div className="mb-3">
                    <small className="text-muted fw-semibold">What You'll Learn:</small>
                    <ul className="list-unstyled mt-2">
                      {program.features.map((feature, idx) => (
                        <li key={idx} className="d-flex align-items-center mb-1">
                          <ChevronRight size={16} className="text-primary me-2" />
                          <small>{feature}</small>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="badge bg-primary-subtle text-primary">{program.level}</span>
                    <button className="btn btn-outline-primary btn-sm">Learn More</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
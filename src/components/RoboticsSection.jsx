// components/RoboticsSection.js
import React, { useState } from 'react';
import { Cpu, Play } from 'lucide-react';

const RoboticsSection = () => {
  const [activeTab, setActiveTab] = useState('basics');
  
  const roboticsContent = {
    basics: {
      title: 'Robotics Fundamentals',
      content: 'Learn the core principles of robotics including mechanics, electronics, and programming.',
      projects: ['Line Following Robot', 'Obstacle Avoidance', 'Remote Control Bot']
    },
    advanced: {
      title: 'Advanced Robotics',
      content: 'Dive deep into AI-powered robotics, computer vision, and autonomous navigation.',
      projects: ['AI Vision System', 'Autonomous Drone', 'Robotic Arm Control']
    },
    competition: {
      title: 'Competition Prep',
      content: 'Prepare for robotics competitions like FIRST Robotics, VEX, and local tournaments.',
      projects: ['Competition Bot Design', 'Strategy Development', 'Team Collaboration']
    }
  };

  return (
    <section id="robotics" className="py-5 position-relative overflow-hidden">
      {/* Robotics Background */}
      <div className="robotics-background">
        <svg
          viewBox="0 0 1200 600"
          className="robotics-svg"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Background Grid */}
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(100,200,255,0.1)" strokeWidth="1"/>
            </pattern>
            <radialGradient id="robotGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" style={{stopColor: 'rgba(100,200,255,0.3)', stopOpacity: 1}} />
              <stop offset="100%" style={{stopColor: 'rgba(100,200,255,0)', stopOpacity: 0}} />
            </radialGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />

          {/* Robotic Components */}
          <g className="robotic-components">
            {/* Large Gear */}
            <circle cx="200" cy="150" r="60" fill="none" stroke="rgba(100,200,255,0.6)" strokeWidth="4" className="gear-large">
              {[...Array(12)].map((_, i) => (
                <line
                  key={i}
                  x1="200"
                  y1="90"
                  x2="200"
                  y2="70"
                  stroke="rgba(100,200,255,0.8)"
                  strokeWidth="3"
                  transform={`rotate(${i * 30} 200 150)`}
                  className="gear-tooth"
                />
              ))}
            </circle>

            {/* Medium Gear */}
            <circle cx="400" cy="200" r="40" fill="none" stroke="rgba(255,100,150,0.6)" strokeWidth="3" className="gear-medium">
              {[...Array(10)].map((_, i) => (
                <line
                  key={i}
                  x1="400"
                  y1="160"
                  x2="400"
                  y2="145"
                  stroke="rgba(255,100,150,0.8)"
                  strokeWidth="2"
                  transform={`rotate(${i * 36} 400 200)`}
                  className="gear-tooth"
                />
              ))}
            </circle>

            {/* Small Gear */}
            <circle cx="300" cy="300" r="25" fill="none" stroke="rgba(150,255,100,0.6)" strokeWidth="2" className="gear-small">
              {[...Array(8)].map((_, i) => (
                <line
                  key={i}
                  x1="300"
                  y1="275"
                  x2="300"
                  y2="265"
                  stroke="rgba(150,255,100,0.8)"
                  strokeWidth="2"
                  transform={`rotate(${i * 45} 300 300)`}
                  className="gear-tooth"
                />
              ))}
            </circle>

            {/* Robotic Arm */}
            <g className="robotic-arm">
              <rect x="600" y="100" width="8" height="80" fill="rgba(255,200,100,0.8)" rx="4" className="arm-segment arm-base" />
              <rect x="590" y="180" width="8" height="60" fill="rgba(255,150,100,0.8)" rx="4" className="arm-segment arm-middle" />
              <rect x="580" y="240" width="8" height="40" fill="rgba(255,100,150,0.8)" rx="4" className="arm-segment arm-end" />
              <circle cx="604" cy="90" r="12" fill="rgba(200,100,255,0.9)" className="joint joint-base" />
              <circle cx="594" cy="180" r="10" fill="rgba(150,255,100,0.9)" className="joint joint-middle" />
              <circle cx="584" cy="240" r="8" fill="rgba(100,200,255,0.9)" className="joint joint-end" />
              <circle cx="584" cy="280" r="6" fill="rgba(255,200,100,1)" className="gripper" />
            </g>

            {/* Circuit Board */}
            <g className="circuit-board">
              <rect x="800" y="150" width="120" height="80" fill="rgba(100,100,100,0.2)" stroke="rgba(150,255,100,0.6)" strokeWidth="2" rx="8" />
              {/* Circuit Traces */}
              <path d="M820 170 L880 170 L880 190 L840 190 L840 210 L900 210" stroke="rgba(100,200,255,0.8)" strokeWidth="2" fill="none" className="circuit-trace" />
              <path d="M850 180 L870 180 L870 200 L830 200" stroke="rgba(255,100,150,0.8)" strokeWidth="2" fill="none" className="circuit-trace" />
              {/* Circuit Components */}
              <rect x="825" y="175" width="8" height="6" fill="rgba(255,200,100,0.9)" rx="1" className="chip" />
              <rect x="845" y="195" width="6" height="8" fill="rgba(150,255,100,0.9)" rx="1" className="chip" />
              <circle cx="875" cy="185" r="4" fill="rgba(100,200,255,0.9)" className="sensor" />
            </g>

            {/* Sensors */}
            <g className="sensors">
              <circle cx="150" cy="400" r="8" fill="none" stroke="rgba(255,100,150,0.8)" strokeWidth="2" className="sensor proximity-sensor" />
              <line x1="142" y1="400" x2="158" y2="400" stroke="rgba(255,100,150,0.9)" strokeWidth="2" />
              <line x1="150" y1="392" x2="150" y2="408" stroke="rgba(255,100,150,0.9)" strokeWidth="2" />

              <circle cx="500" cy="350" r="6" fill="none" stroke="rgba(150,255,100,0.8)" strokeWidth="2" className="sensor light-sensor" />
              <path d="M494 350 L506 350 M500 344 L500 356" stroke="rgba(150,255,100,0.9)" strokeWidth="1" />

              <circle cx="700" cy="400" r="7" fill="none" stroke="rgba(100,200,255,0.8)" strokeWidth="2" className="sensor ultrasonic-sensor" />
              <path d="M693 400 Q700 390 707 400 Q700 410 693 400" fill="rgba(100,200,255,0.6)" />
            </g>

            {/* Data Streams */}
            <g className="data-streams">
              <path d="M250 250 Q300 200 350 250 Q400 300 450 250" stroke="rgba(100,200,255,0.7)" strokeWidth="2" fill="none" className="data-stream stream-1" />
              <path d="M650 300 Q700 250 750 300 Q800 350 850 300" stroke="rgba(255,100,150,0.7)" strokeWidth="2" fill="none" className="data-stream stream-2" />
              <path d="M150 450 Q200 400 250 450 Q300 500 350 450" stroke="rgba(150,255,100,0.7)" strokeWidth="2" fill="none" className="data-stream stream-3" />
            </g>

            {/* Binary Code */}
            <g className="binary-code">
              <text x="100" y="100" fill="rgba(255,255,255,0.4)" fontSize="12" className="binary-text">01010101</text>
              <text x="1000" y="500" fill="rgba(255,255,255,0.4)" fontSize="12" className="binary-text">10101010</text>
              <text x="600" y="50" fill="rgba(255,255,255,0.4)" fontSize="10" className="binary-text">01100110</text>
            </g>
          </g>
        </svg>
      </div>

      <div className="container position-relative" style={{ zIndex: 2 }}>
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3">Robotics Lab</h2>
          <p className="lead text-muted">Build, program, and compete with cutting-edge robotics technology</p>
        </div>
        
        <div className="row">
          <div className="col-lg-4">
            <div className="nav flex-column nav-pills" role="tablist">
              {Object.entries(roboticsContent).map(([key, content]) => (
                <button
                  key={key}
                  className={`nav-link text-start mb-2 ${activeTab === key ? 'active' : ''}`}
                  onClick={() => setActiveTab(key)}
                >
                  <h6 className="mb-1">{content.title}</h6>
                  <small className="text-muted">{content.content}</small>
                </button>
              ))}
            </div>
          </div>
          
          <div className="col-lg-8">
            <div className="card border-0 shadow-lg">
              <div className="card-body p-4">
                <h4 className="mb-3">{roboticsContent[activeTab].title}</h4>
                <p className="mb-4">{roboticsContent[activeTab].content}</p>
                
                <h6 className="mb-3">Featured Projects:</h6>
                <div className="row g-3">
                  {roboticsContent[activeTab].projects.map((project, index) => (
                    <div key={index} className="col-md-4">
                      <div className="card bg-primary-subtle border-0">
                        <div className="card-body text-center p-3">
                          <Cpu className="text-primary mb-2" size={32} />
                          <h6 className="card-title mb-0">{project}</h6>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-4">
                  <button className="btn btn-primary me-3">
                    <Play className="me-2" size={16} />
                    Start Project
                  </button>
                  <button className="btn btn-outline-secondary">View Gallery</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoboticsSection;
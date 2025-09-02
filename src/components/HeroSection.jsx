// components/HeroSection.jsx
import React, { useState, useEffect } from 'react';
import { Cpu, Code, Lightbulb, Users, Play, ChevronRight } from 'lucide-react';
import RegisterForm from './RegisterForm';

const HeroSection = () => {
  const [animationStep, setAnimationStep] = useState(0);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [clickedParticles, setClickedParticles] = useState(new Set());

  const stemIcons = [
    { icon: <Cpu className="text-primary" size={48} />, label: 'Technology', delay: 0 },
    { icon: <Code className="text-success" size={48} />, label: 'Programming', delay: 0.5 },
    { icon: <Lightbulb className="text-warning" size={48} />, label: 'Innovation', delay: 1 },
    { icon: <Users className="text-info" size={48} />, label: 'Collaboration', delay: 1.5 }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationStep(prev => (prev + 1) % 4);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleRegisterSuccess = (userData) => {
    console.log('New user registered from hero section:', userData);
    alert(`Welcome ${userData.firstName}! Your STEM journey begins now. Check your email for next steps.`);
  };

  const handleStartLearning = () => {
    setShowRegisterModal(true);
  };

  const handleParticleClick = (index) => {
    setClickedParticles(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  return (
    <>
      <section id="home" className="min-vh-100 d-flex align-items-center position-relative" style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        paddingTop: '80px',
        overflow: 'hidden'
      }}>
        {/* Full-screen AI Vector Background */}
        <div className="ai-background-vector">
          <svg
            viewBox="0 0 1200 800"
            className="ai-fullscreen-svg"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Multiple AI heads and neural networks across the screen */}
            <defs>
              <radialGradient id="aiGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" style={{stopColor: 'rgba(100,200,255,0.3)', stopOpacity: 1}} />
                <stop offset="100%" style={{stopColor: 'rgba(100,200,255,0)', stopOpacity: 0}} />
              </radialGradient>
              <radialGradient id="aiGlow2" cx="50%" cy="50%" r="50%">
                <stop offset="0%" style={{stopColor: 'rgba(255,100,150,0.3)', stopOpacity: 1}} />
                <stop offset="100%" style={{stopColor: 'rgba(255,100,150,0)', stopOpacity: 0}} />
              </radialGradient>
            </defs>

            {/* Large central AI head */}
            <g className="central-ai-head">
              <path
                d="M600 150 C750 150 900 300 900 450 C900 600 750 750 600 750 C450 750 300 600 300 450 C300 300 450 150 600 150"
                fill="none"
                stroke="rgba(255,255,255,0.4)"
                strokeWidth="4"
                className="head-outline-main"
              />

              {/* Central neural network */}
              <g className="central-neural-network">
                <line x1="400" y1="350" x2="800" y2="350" stroke="rgba(100,200,255,0.9)" strokeWidth="3" className="neural-line main-line-1" />
                <line x1="450" y1="400" x2="750" y2="400" stroke="rgba(255,100,150,0.9)" strokeWidth="3" className="neural-line main-line-2" />
                <line x1="500" y1="450" x2="700" y2="450" stroke="rgba(150,255,100,0.9)" strokeWidth="3" className="neural-line main-line-3" />
                <line x1="550" y1="500" x2="650" y2="500" stroke="rgba(255,200,100,0.9)" strokeWidth="3" className="neural-line main-line-4" />

                <line x1="600" y1="250" x2="600" y2="650" stroke="rgba(200,100,255,0.8)" strokeWidth="3" className="neural-line central-vertical" />

                {/* Diagonal connections */}
                <line x1="450" y1="300" x2="750" y2="350" stroke="rgba(255,150,100,0.8)" strokeWidth="2" className="neural-line diagonal-main-1" />
                <line x1="500" y1="350" x2="700" y2="400" stroke="rgba(100,255,150,0.8)" strokeWidth="2" className="neural-line diagonal-main-2" />
                <line x1="550" y1="400" x2="650" y2="450" stroke="rgba(150,100,255,0.8)" strokeWidth="2" className="neural-line diagonal-main-3" />
              </g>

              {/* Central AI nodes */}
              <circle cx="550" cy="350" r="8" fill="rgba(100,200,255,1)" className="ai-node main-node-1" />
              <circle cx="650" cy="400" r="8" fill="rgba(255,100,150,1)" className="ai-node main-node-2" />
              <circle cx="500" cy="450" r="8" fill="rgba(150,255,100,1)" className="ai-node main-node-3" />
              <circle cx="700" cy="500" r="8" fill="rgba(255,200,100,1)" className="ai-node main-node-4" />
              <circle cx="600" cy="400" r="12" fill="rgba(200,100,255,1)" className="ai-node central-brain" />
            </g>

            {/* Secondary AI heads on sides */}
            <g className="side-ai-head left-head">
              <path
                d="M150 300 C225 300 300 375 300 450 C300 525 225 600 150 600 C75 600 0 525 0 450 C0 375 75 300 150 300"
                fill="none"
                stroke="rgba(255,255,255,0.3)"
                strokeWidth="3"
                className="head-outline-side"
              />
              <circle cx="120" cy="400" r="6" fill="rgba(100,200,255,0.9)" className="ai-node side-node-1" />
              <circle cx="180" cy="450" r="6" fill="rgba(255,100,150,0.9)" className="ai-node side-node-2" />
            </g>

            <g className="side-ai-head right-head">
              <path
                d="M1050 300 C1125 300 1200 375 1200 450 C1200 525 1125 600 1050 600 C975 600 900 525 900 450 C900 375 975 300 1050 300"
                fill="none"
                stroke="rgba(255,255,255,0.3)"
                strokeWidth="3"
                className="head-outline-side"
              />
              <circle cx="1020" cy="400" r="6" fill="rgba(150,255,100,0.9)" className="ai-node side-node-3" />
              <circle cx="1080" cy="450" r="6" fill="rgba(255,200,100,0.9)" className="ai-node side-node-4" />
            </g>

            {/* Floating data particles */}
            <g className="floating-data">
              <circle cx="200" cy="200" r="5" fill="rgba(100,200,255,0.8)" className="data-particle particle-1" />
              <circle cx="400" cy="150" r="5" fill="rgba(255,100,150,0.8)" className="data-particle particle-2" />
              <circle cx="800" cy="200" r="5" fill="rgba(150,255,100,0.8)" className="data-particle particle-3" />
              <circle cx="1000" cy="150" r="5" fill="rgba(255,200,100,0.8)" className="data-particle particle-4" />
              <circle cx="300" cy="600" r="5" fill="rgba(200,100,255,0.8)" className="data-particle particle-5" />
              <circle cx="900" cy="650" r="5" fill="rgba(100,255,200,0.8)" className="data-particle particle-6" />
            </g>

            {/* Connection lines between elements */}
            <g className="connection-lines">
              <line x1="300" y1="450" x2="400" y2="350" stroke="rgba(255,255,255,0.5)" strokeWidth="2" className="connection-line conn-1" />
              <line x1="900" y1="450" x2="800" y2="350" stroke="rgba(255,255,255,0.5)" strokeWidth="2" className="connection-line conn-2" />
              <line x1="150" y1="450" x2="300" y2="450" stroke="rgba(255,255,255,0.4)" strokeWidth="2" className="connection-line conn-3" />
              <line x1="1050" y1="450" x2="900" y2="450" stroke="rgba(255,255,255,0.4)" strokeWidth="2" className="connection-line conn-4" />
            </g>

            {/* AI Eyes for central head */}
            <g className="central-ai-eyes">
              <circle cx="550" cy="380" r="15" fill="none" stroke="rgba(100,200,255,0.9)" strokeWidth="3" className="eye central-left-eye" />
              <circle cx="650" cy="380" r="15" fill="none" stroke="rgba(255,100,150,0.9)" strokeWidth="3" className="eye central-right-eye" />
              <circle cx="550" cy="380" r="6" fill="rgba(100,200,255,1)" className="pupil central-left-pupil" />
              <circle cx="650" cy="380" r="6" fill="rgba(255,100,150,1)" className="pupil central-right-pupil" />
            </g>
          </svg>
        </div>

        <div className="container position-relative" style={{ zIndex: 2 }}>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold text-white mb-4">
                Unleash Your <span className="text-warning">STEM</span> Potential With CTechlit
              </h1>
              <p className="lead text-white-50 mb-4">
                Explore the fascinating world of Science, Technology, Engineering, and Mathematics
                through interactive robotics, creative Scratch programming, and cutting-edge digital literacy.
              </p>
              <div className="d-flex gap-3 flex-wrap">
                <button
                  className="btn btn-warning btn-lg px-4"
                  onClick={handleStartLearning}
                >
                  <Play className="me-2" size={20} />
                  Start Learning
                </button>
                <button className="btn btn-outline-warning btn-lg px-4">
                  Explore Programs
                  <ChevronRight className="ms-2" size={20} />
                </button>
              </div>

             
            </div>

            <div className="col-lg-6">
              <div className="position-relative">
                {/* Text content with higher z-index */}
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <div className="row g-4">
                    {stemIcons.map((item, index) => (
                      <div key={index} className="col-6">
                        <div
                          className={`card border-0 shadow-lg h-100 text-center p-4 transition-all ${
                            animationStep === index ? 'animate__animated animate__pulse' : ''
                          }`}
                          style={{
                            backgroundColor: 'rgba(255,255,255,0.95)',
                            transform: animationStep === index ? 'scale(1.05)' : 'scale(1)',
                            transition: 'all 0.3s ease'
                          }}
                        >
                          <div className="mb-3">{item.icon}</div>
                          <h6 className="fw-semibold">{item.label}</h6>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Register Modal */}
      <RegisterForm
        isOpen={showRegisterModal}
        onClose={() => setShowRegisterModal(false)}
        onRegisterSuccess={handleRegisterSuccess}
      />
    </>
  );
};

export default HeroSection;
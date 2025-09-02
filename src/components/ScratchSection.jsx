// components/ScratchSection.js
import React, { useState, useEffect } from 'react';
import { Code, Award, Play } from 'lucide-react';

const ScratchSection = () => {
  const [currentProject, setCurrentProject] = useState(0);
  
  const scratchProjects = [
    {
      title: 'Animated Story',
      description: 'Create interactive stories with characters, dialogue, and animations.',
      difficulty: 'Beginner',
      duration: '2 hours'
    },
    {
      title: 'Math Game',
      description: 'Build educational games that make learning math fun and engaging.',
      difficulty: 'Intermediate',
      duration: '3 hours'
    },
    {
      title: 'Music Maker',
      description: 'Compose and play music using code with sound effects and melodies.',
      difficulty: 'Intermediate',
      duration: '2.5 hours'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProject(prev => (prev + 1) % scratchProjects.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="scratch" className="py-5 bg-light position-relative overflow-hidden">
      {/* Scratch Background */}
      <div className="scratch-background">
        <svg
          viewBox="0 0 1200 600"
          className="scratch-svg"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Scratch Stage Area */}
          <defs>
            <pattern id="scratchGrid" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect width="20" height="20" fill="rgba(255,255,255,0.05)" />
              <rect x="19" y="0" width="1" height="20" fill="rgba(100,200,255,0.2)" />
              <rect x="0" y="19" width="20" height="1" fill="rgba(100,200,255,0.2)" />
            </pattern>
            <radialGradient id="blockGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" style={{stopColor: 'rgba(255,200,100,0.6)', stopOpacity: 1}} />
              <stop offset="100%" style={{stopColor: 'rgba(255,200,100,0)', stopOpacity: 0}} />
            </radialGradient>
          </defs>

          {/* Stage Background */}
          <rect x="100" y="100" width="400" height="300" fill="url(#scratchGrid)" stroke="rgba(100,200,255,0.5)" strokeWidth="3" rx="8" className="stage-area" />

          {/* Scratch Cat Sprite */}
          <g className="scratch-cat">
            <circle cx="250" cy="200" r="30" fill="#ffab4c" stroke="#ff8c1a" strokeWidth="2" />
            <circle cx="235" cy="185" r="4" fill="#fff" />
            <circle cx="265" cy="185" r="4" fill="#fff" />
            <circle cx="235" cy="185" r="2" fill="#000" />
            <circle cx="265" cy="185" r="2" fill="#000" />
            <ellipse cx="250" cy="210" rx="8" ry="4" fill="#ff8c1a" />
            <path d="M240 195 Q245 200 250 195 Q255 200 260 195" stroke="#000" strokeWidth="1" fill="none" />
            <rect x="245" y="215" width="10" height="15" fill="#ffab4c" rx="2" />
            <rect x="240" y="230" width="4" height="10" fill="#ffab4c" rx="1" />
            <rect x="256" y="230" width="4" height="10" fill="#ffab4c" rx="1" />
          </g>

          {/* Floating Scratch Blocks */}
          <g className="scratch-blocks">
            {/* Motion Blocks */}
            <rect x="600" y="150" width="120" height="25" fill="#4a6bff" rx="4" className="motion-block block-1" />
            <text x="610" y="167" fill="white" fontSize="12" className="block-text">move 10 steps</text>

            <rect x="750" y="200" width="100" height="25" fill="#4a6bff" rx="4" className="motion-block block-2" />
            <text x="760" y="217" fill="white" fontSize="12" className="block-text">turn ↻ 15 degrees</text>

            {/* Looks Blocks */}
            <rect x="550" y="250" width="90" height="25" fill="#ffab19" rx="4" className="looks-block block-3" />
            <text x="560" y="267" fill="white" fontSize="12" className="block-text">say Hello!</text>

            <rect x="800" y="300" width="110" height="25" fill="#ffab19" rx="4" className="looks-block block-4" />
            <text x="810" y="317" fill="white" fontSize="12" className="block-text">change size by 10</text>

            {/* Sound Blocks */}
            <rect x="650" y="350" width="100" height="25" fill="#0fbd8c" rx="4" className="sound-block block-5" />
            <text x="660" y="367" fill="white" fontSize="12" className="block-text">play sound meow</text>

            {/* Events Blocks */}
            <rect x="500" y="400" width="140" height="25" fill="#ff8c1a" rx="4" className="events-block block-6" />
            <text x="510" y="417" fill="white" fontSize="12" className="block-text">when 🏴 clicked</text>

            <rect x="700" y="450" width="120" height="25" fill="#ff8c1a" rx="4" className="events-block block-7" />
            <text x="710" y="467" fill="white" fontSize="12" className="block-text">when space key pressed</text>

            {/* Control Blocks */}
            <rect x="850" y="150" width="80" height="25" fill="#ff6680" rx="4" className="control-block block-8" />
            <text x="860" y="167" fill="white" fontSize="12" className="block-text">wait 1 secs</text>

            <rect x="450" y="500" width="100" height="25" fill="#ff6680" rx="4" className="control-block block-9" />
            <text x="460" y="517" fill="white" fontSize="12" className="block-text">repeat 10</text>
          </g>

          {/* Code Connections */}
          <g className="code-connections">
            <path d="M720 175 L720 225 L750 225" stroke="rgba(255,255,255,0.6)" strokeWidth="2" fill="none" className="connection-line conn-1" />
            <path d="M640 275 L640 325 L650 325" stroke="rgba(255,255,255,0.6)" strokeWidth="2" fill="none" className="connection-line conn-2" />
            <path d="M910 325 L910 375 L700 375" stroke="rgba(255,255,255,0.6)" strokeWidth="2" fill="none" className="connection-line conn-3" />
          </g>

          {/* Floating Variables */}
          <g className="variables">
            <rect x="950" y="200" width="80" height="20" fill="rgba(255,100,150,0.8)" rx="10" className="variable var-1" />
            <text x="960" y="214" fill="white" fontSize="10" className="var-text">score = 0</text>

            <rect x="300" y="450" width="90" height="20" fill="rgba(100,200,255,0.8)" rx="10" className="variable var-2" />
            <text x="310" y="464" fill="white" fontSize="10" className="var-text">lives = 3</text>
          </g>

          {/* Sprite Clones */}
          <g className="sprite-clones">
            <circle cx="150" cy="350" r="15" fill="#ffab4c" opacity="0.7" className="clone clone-1" />
            <circle cx="180" cy="320" r="12" fill="#4a6bff" opacity="0.6" className="clone clone-2" />
            <circle cx="120" cy="380" r="10" fill="#ff6680" opacity="0.5" className="clone clone-3" />
          </g>

          {/* Sound Waves */}
          <g className="sound-waves">
            <path d="M750 370 Q760 360 770 370 Q780 380 790 370" stroke="rgba(15,189,140,0.8)" strokeWidth="2" fill="none" className="sound-wave wave-1" />
            <path d="M750 375 Q765 365 780 375 Q795 385 810 375" stroke="rgba(15,189,140,0.6)" strokeWidth="2" fill="none" className="sound-wave wave-2" />
            <path d="M750 380 Q770 370 790 380 Q810 390 830 380" stroke="rgba(15,189,140,0.4)" strokeWidth="2" fill="none" className="sound-wave wave-3" />
          </g>

          {/* Rainbow Color Palette */}
          <g className="color-palette">
            <rect x="1000" y="400" width="150" height="30" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" rx="15" />
            <rect x="1005" y="405" width="20" height="20" fill="#ff6680" rx="2" />
            <rect x="1027" y="405" width="20" height="20" fill="#ffab19" rx="2" />
            <rect x="1049" y="405" width="20" height="20" fill="#0fbd8c" rx="2" />
            <rect x="1071" y="405" width="20" height="20" fill="#4a6bff" rx="2" />
            <rect x="1093" y="405" width="20" height="20" fill="#ff8c1a" rx="2" />
            <rect x="1115" y="405" width="20" height="20" fill="#c64dff" rx="2" />
          </g>
        </svg>
      </div>

      <div className="container position-relative" style={{ zIndex: 2 }}>
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3">Scratch Programming Studio</h2>
          <p className="lead text-muted">Visual programming that brings ideas to life</p>
        </div>
        
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="card border-0 shadow-lg overflow-hidden">
              <div className="card-body p-0">
                {/* Scratch IDE Mockup */}
                <div className="bg-primary text-white p-3">
                  <div className="d-flex align-items-center">
                    <div className="bg-white rounded-circle p-2 me-3">
                      <Code className="text-primary" size={24} />
                    </div>
                    <div>
                      <h6 className="mb-0">Scratch 3.0 IDE</h6>
                      <small className="opacity-75">Visual Programming Environment</small>
                    </div>
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="row g-2 mb-3">
                    <div className="col-4">
                      <div className="bg-success text-white p-2 rounded text-center">
                        <small>Motion</small>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="bg-warning text-white p-2 rounded text-center">
                        <small>Looks</small>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="bg-info text-white p-2 rounded text-center">
                        <small>Sound</small>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center p-4 bg-light rounded">
                    <div className="mb-3">
                      <div className="bg-primary text-white p-2 rounded d-inline-block">
                        when 🏴 clicked
                      </div>
                    </div>
                    <div className="mb-3">
                      <div className="bg-success text-white p-2 rounded d-inline-block">
                        move 10 steps
                      </div>
                    </div>
                    <div>
                      <div className="bg-warning text-white p-2 rounded d-inline-block">
                        say "Hello!" for 2 seconds
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-lg-6">
            <div className="card border-0 shadow-lg">
              <div className="card-body p-4">
                <h4 className="mb-3">Featured Project</h4>
                <div className="mb-4">
                  <h5 className="text-primary">{scratchProjects[currentProject].title}</h5>
                  <p className="text-muted mb-3">{scratchProjects[currentProject].description}</p>
                  
                  <div className="row g-3 mb-4">
                    <div className="col-6">
                      <div className="d-flex align-items-center">
                        <Award className="text-warning me-2" size={20} />
                        <div>
                          <small className="text-muted d-block">Difficulty</small>
                          <strong>{scratchProjects[currentProject].difficulty}</strong>
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="d-flex align-items-center">
                        <Play className="text-success me-2" size={20} />
                        <div>
                          <small className="text-muted d-block">Duration</small>
                          <strong>{scratchProjects[currentProject].duration}</strong>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="d-flex gap-2 mb-4">
                  {scratchProjects.map((_, index) => (
                    <button
                      key={index}
                      className={`btn btn-sm ${index === currentProject ? 'btn-primary' : 'btn-outline-primary'}`}
                      onClick={() => setCurrentProject(index)}
                    >
                      {index + 1}
                    </button>
                  ))}
                </div>
                
                <button className="btn btn-success w-100">
                  <Play className="me-2" size={16} />
                  Start This Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScratchSection;
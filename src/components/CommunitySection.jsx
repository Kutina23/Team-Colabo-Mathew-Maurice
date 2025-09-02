// components/CommunitySection.jsx
import React, { useState, useEffect } from 'react';
import { Users, Award, Code, Lightbulb, BookOpen, ChevronRight, UserPlus } from 'lucide-react';
import RegisterForm from './RegisterForm';

const CommunitySection = () => {
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [animatedNumbers, setAnimatedNumbers] = useState([0, 0, 0, 0]);

  const achievements = [
    { icon: <Users size={24} />, targetNumber: 2500, suffix: '+', label: 'Active Students' },
    { icon: <Award size={24} />, targetNumber: 150, suffix: '+', label: 'Projects Completed' },
    { icon: <Code size={24} />, targetNumber: 50, suffix: '+', label: 'Expert Mentors' },
    { icon: <Lightbulb size={24} />, targetNumber: 25, suffix: '+', label: 'Innovation Awards' }
  ];

  useEffect(() => {
    const duration = 2000; // 2 seconds animation
    const steps = 60; // 60 fps
    const increment = duration / steps;

    const animateNumbers = () => {
      achievements.forEach((achievement, index) => {
        let currentNumber = 0;
        const target = achievement.targetNumber;
        const stepValue = target / steps;

        const timer = setInterval(() => {
          currentNumber += stepValue;
          if (currentNumber >= target) {
            currentNumber = target;
            clearInterval(timer);
          }

          setAnimatedNumbers(prev => {
            const newNumbers = [...prev];
            newNumbers[index] = Math.floor(currentNumber);
            return newNumbers;
          });
        }, increment);
      });
    };

    // Start animation when component mounts
    const timer = setTimeout(animateNumbers, 500); // Small delay before starting

    return () => clearTimeout(timer);
  }, []);

  const formatNumber = (number, suffix) => {
    if (number >= 1000) {
      return `${(number / 1000).toFixed(1).replace('.0', '')},${(number % 1000).toString().padStart(3, '0')}${suffix}`;
    }
    return `${number}${suffix}`;
  };

  const handleRegisterSuccess = (userData) => {
    console.log('New user registered from community section:', userData);
    alert(`Welcome ${userData.firstName}! Your account has been created successfully.`);
  };

  const handleQuickRegister = (e) => {
    e.preventDefault();
    setShowRegisterModal(true);
  };

  return (
    <>
      <section id="community" className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">Join Our STEM Community</h2>
            <p className="lead text-muted">Connect, collaborate, and create with fellow STEM enthusiasts</p>
          </div>
          
          <div className="row g-4 mb-5">
            {achievements.map((achievement, index) => (
              <div key={index} className="col-6 col-lg-3">
                <div className="card h-100 border-0 shadow-sm text-center">
                  <div className="card-body p-4">
                    <div className="text-primary mb-3">{achievement.icon}</div>
                    <h3 className="fw-bold text-primary mb-1 counting-number">
                      {formatNumber(animatedNumbers[index], achievement.suffix)}
                    </h3>
                    <p className="text-muted mb-0">{achievement.label}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h3 className="fw-bold mb-3">Ready to Start Your STEM Journey?</h3>
              <p className="text-muted mb-4">
                Join thousands of students who are already exploring the exciting world of STEM. 
                Get access to expert mentorship, cutting-edge tools, and a supportive community.
              </p>
              
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="d-flex align-items-center p-3 bg-success-subtle rounded">
                    <BookOpen className="text-success me-3" size={24} />
                    <div>
                      <h6 className="mb-1">Interactive Learning</h6>
                      <small className="text-muted">Hands-on projects and experiments</small>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex align-items-center p-3 bg-info-subtle rounded">
                    <Users className="text-info me-3" size={24} />
                    <div>
                      <h6 className="mb-1">Expert Mentorship</h6>
                      <small className="text-muted">Learn from industry professionals</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6">
              <div className="card border-0 shadow-lg">
                <div className="card-body p-4">
                  <h5 className="card-title mb-3">Quick Interest Form</h5>
                  <p className="text-muted mb-3">Tell us about your interests and we'll recommend the perfect program for you!</p>
                  
                  <form onSubmit={handleQuickRegister}>
                    <div className="mb-3">
                      <input type="text" className="form-control" placeholder="Full Name" required />
                    </div>
                    <div className="mb-3">
                      <input type="email" className="form-control" placeholder="Email Address" required />
                    </div>
                    <div className="mb-3">
                      <select className="form-select" required>
                        <option value="">Select Your Interest</option>
                        <option>Robotics Engineering</option>
                        <option>Scratch Programming</option>
                        <option>Digital Innovation</option>
                        <option>STEM Research</option>
                        <option>All Programs</option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <select className="form-select" required>
                        <option value="">Experience Level</option>
                        <option>Complete Beginner</option>
                        <option>Some Experience</option>
                        <option>Intermediate</option>
                        <option>Advanced</option>
                      </select>
                    </div>
                    
                    <div className="d-grid gap-2">
                      <button type="submit" className="btn btn-primary btn-lg">
                        <UserPlus className="me-2" size={16} />
                        Create Full Account
                      </button>
                      <button type="button" className="btn btn-outline-secondary">
                        Get Program Info
                        <ChevronRight className="ms-2" size={16} />
                      </button>
                    </div>
                  </form>
                  
                  <div className="text-center mt-3">
                    <small className="text-muted">
                      Already have an account?{' '}
                      <a href="#" className="text-primary text-decoration-none">Sign in here</a>
                    </small>
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

export default CommunitySection;
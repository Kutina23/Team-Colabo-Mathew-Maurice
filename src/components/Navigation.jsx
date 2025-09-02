// components/Navigation.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Code, Menu, X, User, Settings, LogOut, UserPlus } from 'lucide-react';
import LoginModal from './LoginModal';
import RegisterForm from './RegisterForm';

const Navigation = ({ currentRole, setCurrentRole }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showLoginDropdown, setShowLoginDropdown] = useState(false);
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [loginRole, setLoginRole] = useState('');

  const loginDropdownRef = useRef(null);
  const userDropdownRef = useRef(null);

  const handleRoleLogin = (role) => {
    setLoginRole(role);
    setShowLoginModal(true);
  };

  const handleLoginSuccess = (role) => {
    setCurrentRole(role);
    setShowLoginModal(false);
  };

  const handleRegisterSuccess = (userData) => {
    console.log('New user registered:', userData);
    // Here you would typically send the data to your backend
    alert(`Welcome ${userData.firstName}! Your account has been created successfully.`);
  };

  // Handle clicks outside dropdowns to close them
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (loginDropdownRef.current && !loginDropdownRef.current.contains(event.target)) {
        setShowLoginDropdown(false);
      }
      if (userDropdownRef.current && !userDropdownRef.current.contains(event.target)) {
        setShowUserDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
        <div className="container">
          <a className="navbar-brand fw-bold fs-3" href="#home">
            <Code className="me-2" size={32} />
            CTechLit
          </a>
          
          <button 
            className="navbar-toggler" 
            type="button"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            {showMobileMenu ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          <div className={`collapse navbar-collapse ${showMobileMenu ? 'show' : ''}`}>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#programs">Programs</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#robotics">Robotics</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#scratch">Scratch</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#community">Community</a>
              </li>
            </ul>
            
            {currentRole === 'visitor' ? (
              <div className="d-flex gap-2 flex-wrap">
                {/* Register Button */}
                <button
                  className="btn btn-warning"
                  onClick={() => setShowRegisterModal(true)}
                >
                  <UserPlus size={16} className="me-1" />
                  Register
                </button>

                {/* Login Dropdown */}
                <div className="dropdown position-relative" ref={loginDropdownRef}>
                  <button
                    className="btn btn-outline-light dropdown-toggle"
                    type="button"
                    onClick={() => setShowLoginDropdown(!showLoginDropdown)}
                  >
                    Login Portal
                  </button>
                  {showLoginDropdown && (
                    <ul className="dropdown-menu show">
                      <li>
                        <button
                          className="dropdown-item"
                          onClick={() => {
                            handleRoleLogin('student');
                            setShowLoginDropdown(false);
                          }}
                        >
                          <User size={16} className="me-2" />
                          Student Portal
                        </button>
                      </li>
                      <li>
                        <button
                          className="dropdown-item"
                          onClick={() => {
                            handleRoleLogin('staff');
                            setShowLoginDropdown(false);
                          }}
                        >
                          <Settings size={16} className="me-2" />
                          Staff Portal
                        </button>
                      </li>
                      <li>
                        <button
                          className="dropdown-item"
                          onClick={() => {
                            handleRoleLogin('admin');
                            setShowLoginDropdown(false);
                          }}
                        >
                          <Settings size={16} className="me-2" />
                          Admin Portal
                        </button>
                      </li>
                    </ul>
                  )}
                </div>
              </div>
            ) : (
              <div className="dropdown position-relative" ref={userDropdownRef}>
                <button
                  className="btn btn-outline-light dropdown-toggle"
                  type="button"
                  onClick={() => setShowUserDropdown(!showUserDropdown)}
                >
                  <User size={16} className="me-1" />
                  {currentRole.charAt(0).toUpperCase() + currentRole.slice(1)}
                </button>
                {showUserDropdown && (
                  <ul className="dropdown-menu show">
                    <li>
                      <a className="dropdown-item" href="#" onClick={() => setShowUserDropdown(false)}>
                        <Settings size={16} className="me-2" />
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#" onClick={() => setShowUserDropdown(false)}>
                        <User size={16} className="me-2" />
                        Profile
                      </a>
                    </li>
                    <li><hr className="dropdown-divider" /></li>
                    <li>
                      <button
                        className="dropdown-item"
                        onClick={() => {
                          setCurrentRole('visitor');
                          setShowUserDropdown(false);
                        }}
                      >
                        <LogOut size={16} className="me-2" />
                        Logout
                      </button>
                    </li>
                  </ul>
                )}
              </div>
            )}
          </div>
        </div>
      </nav>
      
      {/* Login Modal */}
      <LoginModal 
        isOpen={showLoginModal} 
        onClose={() => setShowLoginModal(false)} 
        role={loginRole}
        onLoginSuccess={handleLoginSuccess}
      />
      
      {/* Register Modal */}
      <RegisterForm
        isOpen={showRegisterModal}
        onClose={() => setShowRegisterModal(false)}
        onRegisterSuccess={handleRegisterSuccess}
      />
    </>
  );
};

export default Navigation;
// components/LoginModal.jsx
import React, { useState } from 'react';
import { User, Lock, Eye, EyeOff, LogIn } from 'lucide-react';

const LoginModal = ({ isOpen, onClose, role, onLoginSuccess }) => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  
  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Simple validation (in real app, this would be handled by backend)
      if (credentials.username && credentials.password) {
        onLoginSuccess(role);
        setCredentials({ username: '', password: '' });
      } else {
        setError('Please enter valid credentials');
      }
    } catch (err) {
      setError('Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (error) setError('');
  };

  if (!isOpen) return null;

  return (
    <div className="modal show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header bg-primary text-white">
            <h5 className="modal-title text-capitalize">
              <User className="me-2" size={20} />
              {role} Login
            </h5>
            <button type="button" className="btn-close btn-close-white" onClick={onClose}></button>
          </div>
          
          <form onSubmit={handleLogin}>
            <div className="modal-body">
              {error && (
                <div className="alert alert-danger d-flex align-items-center">
                  <Lock className="me-2" size={16} />
                  {error}
                </div>
              )}

              <div className="mb-3">
                <label className="form-label fw-semibold">
                  <User className="me-1" size={16} />
                  Username or Email
                </label>
                <input 
                  type="text" 
                  name="username"
                  className="form-control" 
                  placeholder="Enter your username or email"
                  value={credentials.username}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              
              <div className="mb-3">
                <label className="form-label fw-semibold">
                  <Lock className="me-1" size={16} />
                  Password
                </label>
                <div className="input-group">
                  <input 
                    type={showPassword ? "text" : "password"}
                    name="password"
                    className="form-control"
                    placeholder="Enter your password"
                    value={credentials.password}
                    onChange={handleInputChange}
                    required 
                  />
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              <div className="mb-3">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="rememberMe" />
                  <label className="form-check-label" htmlFor="rememberMe">
                    Remember me
                  </label>
                </div>
              </div>

              <div className="text-center">
                <a href="#" className="text-primary text-decoration-none">
                  Forgot your password?
                </a>
              </div>
            </div>
            
            <div className="modal-footer">
              <button 
                type="button" 
                className="btn btn-secondary" 
                onClick={onClose}
                disabled={isLoading}
              >
                Cancel
              </button>
              <button 
                type="submit" 
                className="btn btn-primary"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                    Signing In...
                  </>
                ) : (
                  <>
                    <LogIn className="me-2" size={16} />
                    Sign In
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
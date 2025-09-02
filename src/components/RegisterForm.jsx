// components/RegisterForm.jsx
import React, { useState } from 'react';
import { User, Mail, Phone, GraduationCap, Lock, Eye, EyeOff, CheckCircle, AlertCircle } from 'lucide-react';

const RegisterForm = ({ isOpen, onClose, onRegisterSuccess }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    educationLevel: '',
    password: '',
    confirmPassword: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const educationLevels = [
    'Elementary School',
    'Middle School',
    'High School',
    'Undergraduate',
    'Graduate',
    'Professional',
    'Other'
  ];

  // Validation functions
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''));
  };

  const validatePassword = (password) => {
    return password.length >= 8 && 
           /[A-Z]/.test(password) && 
           /[a-z]/.test(password) && 
           /\d/.test(password);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Required field validations
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.educationLevel) {
      newErrors.educationLevel = 'Please select your education level';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (!validatePassword(formData.password)) {
      newErrors.password = 'Password must be at least 8 characters with uppercase, lowercase, and number';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Success
      onRegisterSuccess && onRegisterSuccess(formData);
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        educationLevel: '',
        password: '',
        confirmPassword: ''
      });
      
      onClose();
    } catch (error) {
      setErrors({ submit: 'Registration failed. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const getPasswordStrength = (password) => {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/\d/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    
    return strength;
  };

  const getPasswordStrengthLabel = (strength) => {
    const labels = ['Very Weak', 'Weak', 'Fair', 'Good', 'Strong'];
    const colors = ['danger', 'danger', 'warning', 'info', 'success'];
    return { label: labels[strength - 1] || 'Very Weak', color: colors[strength - 1] || 'danger' };
  };

  if (!isOpen) return null;

  const passwordStrength = getPasswordStrength(formData.password);
  const strengthInfo = getPasswordStrengthLabel(passwordStrength);

  return (
    <div className="modal show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1050 }}>
      <div className="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable" style={{ maxHeight: '90vh' }}>
        <div className="modal-content">
          <div className="modal-header bg-primary text-white">
            <h5 className="modal-title">
              <User className="me-2" size={20} />
              Join CTechLit - Register Now
            </h5>
            <button type="button" className="btn-close btn-close-white" onClick={onClose}></button>
          </div>
          
          <form onSubmit={handleSubmit}>
            <div className="modal-body" style={{ maxHeight: '70vh', overflowY: 'auto' }}>
              {errors.submit && (
                <div className="alert alert-danger d-flex align-items-center">
                  <AlertCircle className="me-2" size={20} />
                  {errors.submit}
                </div>
              )}

              <div className="row g-3">
                {/* First Name */}
                <div className="col-md-6">
                  <label className="form-label fw-semibold">
                    <User className="me-1" size={16} />
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    className={`form-control ${errors.firstName ? 'is-invalid' : formData.firstName ? 'is-valid' : ''}`}
                    placeholder="Enter your first name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                  />
                  {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
                </div>

                {/* Last Name */}
                <div className="col-md-6">
                  <label className="form-label fw-semibold">
                    <User className="me-1" size={16} />
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    className={`form-control ${errors.lastName ? 'is-invalid' : formData.lastName ? 'is-valid' : ''}`}
                    placeholder="Enter your last name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                  />
                  {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
                </div>

                {/* Email */}
                <div className="col-12">
                  <label className="form-label fw-semibold">
                    <Mail className="me-1" size={16} />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    className={`form-control ${errors.email ? 'is-invalid' : formData.email && validateEmail(formData.email) ? 'is-valid' : ''}`}
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                  {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </div>

                {/* Phone */}
                <div className="col-md-6">
                  <label className="form-label fw-semibold">
                    <Phone className="me-1" size={16} />
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    className={`form-control ${errors.phone ? 'is-invalid' : formData.phone && validatePhone(formData.phone) ? 'is-valid' : ''}`}
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                  {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                </div>

                {/* Education Level */}
                <div className="col-md-6">
                  <label className="form-label fw-semibold">
                    <GraduationCap className="me-1" size={16} />
                    Education Level *
                  </label>
                  <select
                    name="educationLevel"
                    className={`form-select ${errors.educationLevel ? 'is-invalid' : formData.educationLevel ? 'is-valid' : ''}`}
                    value={formData.educationLevel}
                    onChange={handleInputChange}
                  >
                    <option value="">Select your education level</option>
                    {educationLevels.map((level, index) => (
                      <option key={index} value={level}>{level}</option>
                    ))}
                  </select>
                  {errors.educationLevel && <div className="invalid-feedback">{errors.educationLevel}</div>}
                </div>

                {/* Password */}
                <div className="col-md-6">
                  <label className="form-label fw-semibold">
                    <Lock className="me-1" size={16} />
                    Password *
                  </label>
                  <div className="input-group">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      className={`form-control ${errors.password ? 'is-invalid' : formData.password && validatePassword(formData.password) ? 'is-valid' : ''}`}
                      placeholder="Create a strong password"
                      value={formData.password}
                      onChange={handleInputChange}
                    />
                    <button
                      type="button"
                      className="btn btn-outline-secondary"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                  {errors.password && <div className="invalid-feedback d-block">{errors.password}</div>}
                  
                  {/* Password Strength Indicator */}
                  {formData.password && (
                    <div className="mt-2">
                      <div className="d-flex justify-content-between align-items-center mb-1">
                        <small className="text-muted">Password Strength:</small>
                        <small className={`text-${strengthInfo.color} fw-semibold`}>
                          {strengthInfo.label}
                        </small>
                      </div>
                      <div className="progress" style={{ height: '4px' }}>
                        <div 
                          className={`progress-bar bg-${strengthInfo.color}`}
                          style={{ width: `${(passwordStrength / 5) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Confirm Password */}
                <div className="col-md-6">
                  <label className="form-label fw-semibold">
                    <Lock className="me-1" size={16} />
                    Confirm Password *
                  </label>
                  <div className="input-group">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      name="confirmPassword"
                      className={`form-control ${errors.confirmPassword ? 'is-invalid' : formData.confirmPassword && formData.password === formData.confirmPassword ? 'is-valid' : ''}`}
                      placeholder="Confirm your password"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                    />
                    <button
                      type="button"
                      className="btn btn-outline-secondary"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                  {errors.confirmPassword && <div className="invalid-feedback d-block">{errors.confirmPassword}</div>}
                  
                  {/* Password Match Indicator */}
                  {formData.confirmPassword && (
                    <div className="mt-2">
                      {formData.password === formData.confirmPassword ? (
                        <small className="text-success d-flex align-items-center">
                          <CheckCircle size={14} className="me-1" />
                          Passwords match
                        </small>
                      ) : (
                        <small className="text-danger d-flex align-items-center">
                          <AlertCircle size={14} className="me-1" />
                          Passwords do not match
                        </small>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* Terms and Conditions */}
              <div className="mt-4">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="termsCheck" required />
                  <label className="form-check-label" htmlFor="termsCheck">
                    I agree to the{' '}
                    <a href="#" className="text-primary text-decoration-none">Terms of Service</a>
                    {' '}and{' '}
                    <a href="#" className="text-primary text-decoration-none">Privacy Policy</a>
                  </label>
                </div>
              </div>

              {/* Marketing Opt-in */}
              <div className="mt-3">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="marketingCheck" />
                  <label className="form-check-label" htmlFor="marketingCheck">
                    Send me updates about new STEM programs and events
                  </label>
                </div>
              </div>

              {/* Registration Benefits */}
              <div className="mt-4 p-3 bg-light rounded">
                <h6 className="fw-semibold mb-3">🎯 What you'll get with your account:</h6>
                <div className="row g-2">
                  <div className="col-md-6">
                    <small className="d-flex align-items-center text-success mb-1">
                      <CheckCircle size={14} className="me-2 flex-shrink-0" />
                      Access to all STEM courses
                    </small>
                  </div>
                  <div className="col-md-6">
                    <small className="d-flex align-items-center text-success mb-1">
                      <CheckCircle size={14} className="me-2 flex-shrink-0" />
                      Personal progress tracking
                    </small>
                  </div>
                  <div className="col-md-6">
                    <small className="d-flex align-items-center text-success mb-1">
                      <CheckCircle size={14} className="me-2 flex-shrink-0" />
                      Certificate of completion
                    </small>
                  </div>
                  <div className="col-md-6">
                    <small className="d-flex align-items-center text-success mb-1">
                      <CheckCircle size={14} className="me-2 flex-shrink-0" />
                      Expert mentor support
                    </small>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="modal-footer bg-light" style={{ position: 'sticky', bottom: 0, zIndex: 10 }}>
              <button 
                type="button" 
                className="btn btn-secondary" 
                onClick={onClose}
                disabled={isSubmitting}
              >
                Cancel
              </button>
              <button 
                type="submit" 
                className="btn btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                    Creating Account...
                  </>
                ) : (
                  <>
                    <User className="me-2" size={16} />
                    Create Account
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

export default RegisterForm;
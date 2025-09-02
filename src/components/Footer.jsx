// components/Footer.js
import React from 'react';
import { Code } from 'lucide-react';

const Footer = () => (
  <footer className="bg-dark text-white py-5">
    <div className="container">
      <div className="row g-4">
        <div className="col-lg-4">
          <h5 className="mb-3">
            <Code className="me-2" size={24} />
            CTechLit
          </h5>
          <p className="text-white-50">
            Empowering the next generation of innovators through comprehensive STEM education, 
            robotics, and programming excellence.
          </p>
          <div className="d-flex gap-2">
            <a href="#" className="btn btn-outline-light btn-sm">Facebook</a>
            <a href="#" className="btn btn-outline-light btn-sm">Twitter</a>
            <a href="#" className="btn btn-outline-light btn-sm">LinkedIn</a>
          </div>
        </div>
        
        <div className="col-lg-2">
          <h6 className="mb-3">Programs</h6>
          <ul className="list-unstyled">
            <li><a href="#" className="text-white-50 text-decoration-none">Robotics</a></li>
            <li><a href="#" className="text-white-50 text-decoration-none">Scratch</a></li>
            <li><a href="#" className="text-white-50 text-decoration-none">Innovation</a></li>
            <li><a href="#" className="text-white-50 text-decoration-none">Research</a></li>
          </ul>
        </div>
        
        <div className="col-lg-2">
          <h6 className="mb-3">Resources</h6>
          <ul className="list-unstyled">
            <li><a href="#" className="text-white-50 text-decoration-none">Documentation</a></li>
            <li><a href="#" className="text-white-50 text-decoration-none">Tutorials</a></li>
            <li><a href="#" className="text-white-50 text-decoration-none">Community</a></li>
            <li><a href="#" className="text-white-50 text-decoration-none">Support</a></li>
          </ul>
        </div>
        
        <div className="col-lg-2">
          <h6 className="mb-3">About</h6>
          <ul className="list-unstyled">
            <li><a href="#" className="text-white-50 text-decoration-none">Our Mission</a></li>
            <li><a href="#" className="text-white-50 text-decoration-none">Team</a></li>
            <li><a href="#" className="text-white-50 text-decoration-none">Careers</a></li>
            <li><a href="#" className="text-white-50 text-decoration-none">Contact</a></li>
          </ul>
        </div>
        
        <div className="col-lg-2">
          <h6 className="mb-3">Legal</h6>
          <ul className="list-unstyled">
            <li><a href="#" className="text-white-50 text-decoration-none">Privacy</a></li>
            <li><a href="#" className="text-white-50 text-decoration-none">Terms</a></li>
            <li><a href="#" className="text-white-50 text-decoration-none">Cookies</a></li>
          </ul>
        </div>
      </div>
      
      <hr className="my-4 border-white-50" />
      <div className="row align-items-center">
        <div className="col-md-6">
          <p className="text-white-50 mb-0">&copy; 2025 CTechLit. All rights reserved.</p>
        </div>
        <div className="col-md-6 text-md-end">
          <p className="text-white-50 mb-0">STEM Education</p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
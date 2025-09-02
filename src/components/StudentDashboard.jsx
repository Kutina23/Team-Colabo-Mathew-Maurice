// components/dashboards/StudentDashboard.jsx
import React, { useState } from 'react';
import { BookOpen, Award, Lightbulb, Users, Code, Play, Calendar, TrendingUp } from 'lucide-react';
import Sidebar from './Sidebar';

const StudentDashboard = () => {
  const [activePage, setActivePage] = useState('dashboard');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const renderContent = () => {
    switch (activePage) {
      case 'dashboard':
        return <DashboardContent />;
      case 'courses':
        return <CoursesContent />;
      case 'robotics':
        return <RoboticsContent />;
      case 'scratch':
        return <ScratchContent />;
      case 'projects':
        return <ProjectsContent />;
      case 'progress':
        return <ProgressContent />;
      default:
        return <DashboardContent />;
    }
  };

  const DashboardContent = () => (
    <div className="dashboard-content">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="mb-0">Welcome Back, Student!</h2>
          <p className="text-muted mb-0">Continue your STEM learning journey</p>
        </div>
        <div className="d-flex gap-2">
          <button className="btn btn-outline-secondary btn-sm">
            <Calendar size={16} className="me-1" />
            Schedule
          </button>
          <button className="btn btn-primary btn-sm">
            <Play size={16} className="me-1" />
            Resume Learning
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="row g-3 mb-4">
        <div className="col-md-3">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div className="bg-primary text-white p-2 rounded me-3">
                  <BookOpen size={20} />
                </div>
                <div>
                  <h6 className="card-title mb-1">Current Courses</h6>
                  <h4 className="mb-0 text-primary">3</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="col-md-3">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div className="bg-success text-white p-2 rounded me-3">
                  <Award size={20} />
                </div>
                <div>
                  <h6 className="card-title mb-1">Completed Projects</h6>
                  <h4 className="mb-0 text-success">12</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="col-md-3">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div className="bg-warning text-white p-2 rounded me-3">
                  <Lightbulb size={20} />
                </div>
                <div>
                  <h6 className="card-title mb-1">Achievements</h6>
                  <h4 className="mb-0 text-warning">8</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="col-md-3">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div className="bg-info text-white p-2 rounded me-3">
                  <TrendingUp size={20} />
                </div>
                <div>
                  <h6 className="card-title mb-1">Overall Progress</h6>
                  <h4 className="mb-0 text-info">78%</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Row */}
      <div className="row">
        <div className="col-lg-8">
          <div className="card border-0 shadow-sm mb-4">
            <div className="card-header bg-transparent">
              <h6 className="mb-0">CURRENT COURSES</h6>
            </div>
            <div className="card-body">
              <div className="mb-3">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <h6>Robotics Fundamentals</h6>
                  <span className="text-muted">75% Complete</span>
                </div>
                <div className="progress">
                  <div className="progress-bar bg-primary" style={{width: '75%'}}></div>
                </div>
              </div>
              <div className="mb-3">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <h6>Scratch Game Development</h6>
                  <span className="text-muted">60% Complete</span>
                </div>
                <div className="progress">
                  <div className="progress-bar bg-success" style={{width: '60%'}}></div>
                </div>
              </div>
              <div className="mb-3">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <h6>Digital Innovation Lab</h6>
                  <span className="text-muted">30% Complete</span>
                </div>
                <div className="progress">
                  <div className="progress-bar bg-warning" style={{width: '30%'}}></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="card border-0 shadow-sm">
            <div className="card-header bg-transparent">
              <h6 className="mb-0">UPCOMING ASSIGNMENTS</h6>
            </div>
            <div className="card-body">
              <div className="list-group list-group-flush">
                <div className="list-group-item d-flex justify-content-between align-items-center border-0 px-0">
                  <div>
                    <h6 className="mb-1">Robot Programming Challenge</h6>
                    <p className="mb-1 text-muted">Due: September 5, 2025</p>
                  </div>
                  <span className="badge bg-danger">High Priority</span>
                </div>
                <div className="list-group-item d-flex justify-content-between align-items-center border-0 px-0">
                  <div>
                    <h6 className="mb-1">Scratch Animation Project</h6>
                    <p className="mb-1 text-muted">Due: September 10, 2025</p>
                  </div>
                  <span className="badge bg-warning">Medium Priority</span>
                </div>
                <div className="list-group-item d-flex justify-content-between align-items-center border-0 px-0">
                  <div>
                    <h6 className="mb-1">Innovation Lab Report</h6>
                    <p className="mb-1 text-muted">Due: September 15, 2025</p>
                  </div>
                  <span className="badge bg-success">Low Priority</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="col-lg-4">
          <div className="card border-0 shadow-sm mb-3">
            <div className="card-header bg-transparent">
              <h6 className="mb-0">RECENT ACHIEVEMENTS</h6>
            </div>
            <div className="card-body">
              <div className="d-flex align-items-center mb-3">
                <Award className="text-warning me-3" size={24} />
                <div>
                  <h6 className="mb-0">First Robot Built</h6>
                  <small className="text-muted">2 days ago</small>
                </div>
              </div>
              <div className="d-flex align-items-center mb-3">
                <Code className="text-success me-3" size={24} />
                <div>
                  <h6 className="mb-0">Scratch Master</h6>
                  <small className="text-muted">1 week ago</small>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <Users className="text-info me-3" size={24} />
                <div>
                  <h6 className="mb-0">Team Player</h6>
                  <small className="text-muted">2 weeks ago</small>
                </div>
              </div>
            </div>
          </div>
          
          <div className="card border-0 shadow-sm">
            <div className="card-header bg-transparent">
              <h6 className="mb-0">LEARNING RESOURCES</h6>
            </div>
            <div className="card-body">
              <div className="d-grid gap-2">
                <button className="btn btn-outline-primary btn-sm">Video Tutorials</button>
                <button className="btn btn-outline-success btn-sm">Code Examples</button>
                <button className="btn btn-outline-info btn-sm">Project Gallery</button>
                <button className="btn btn-outline-warning btn-sm">Ask Mentor</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const CoursesContent = () => (
    <div className="dashboard-content">
      <h2 className="mb-4">My Courses</h2>
      <div className="card border-0 shadow-sm">
        <div className="card-body">
          <p>Detailed course interface would be implemented here.</p>
        </div>
      </div>
    </div>
  );

  const RoboticsContent = () => (
    <div className="dashboard-content">
      <h2 className="mb-4">Robotics Lab</h2>
      <div className="card border-0 shadow-sm">
        <div className="card-body">
          <p>Robotics lab interface would be implemented here.</p>
        </div>
      </div>
    </div>
  );

  const ScratchContent = () => (
    <div className="dashboard-content">
      <h2 className="mb-4">Scratch Studio</h2>
      <div className="card border-0 shadow-sm">
        <div className="card-body">
          <p>Scratch programming interface would be implemented here.</p>
        </div>
      </div>
    </div>
  );

  const ProjectsContent = () => (
    <div className="dashboard-content">
      <h2 className="mb-4">My Projects</h2>
      <div className="card border-0 shadow-sm">
        <div className="card-body">
          <p>Projects management interface would be implemented here.</p>
        </div>
      </div>
    </div>
  );

  const ProgressContent = () => (
    <div className="dashboard-content">
      <h2 className="mb-4">Progress Tracking</h2>
      <div className="card border-0 shadow-sm">
        <div className="card-body">
          <p>Progress tracking interface would be implemented here.</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="student-layout">
      <Sidebar
        role="student"
        activePage={activePage}
        setActivePage={setActivePage}
        onToggle={setSidebarCollapsed}
      />
      
      <div
        className="main-content"
        style={{
          marginLeft: sidebarCollapsed ? '70px' : '280px'
        }}
      >
        <div className="container-fluid p-0">
          {renderContent()}
        </div>
      </div>

      <style jsx>{`
        .student-layout {
          display: flex;
          min-height: 100vh;
          background-color: #f8f9fa;
        }

        .main-content {
          flex: 1;
          margin-left: 280px;
          margin-top: 76px; /* Account for fixed navigation bar */
          transition: margin-left 0.3s ease;
          min-height: calc(100vh - 76px);
          background-color: #f8f9fa;
        }

        .dashboard-content {
          background: white;
          border-radius: 12px;
          padding: 30px;
          margin: 20px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
        }

        .card {
          border-radius: 12px;
        }

        .card-header {
          background-color: transparent !important;
          border-bottom: 1px solid #e9ecef;
          padding: 20px 24px 15px;
        }

        .card-body {
          padding: 24px;
        }

        .progress {
          height: 8px;
          border-radius: 4px;
        }

        .badge {
          font-size: 11px;
          padding: 4px 8px;
          border-radius: 6px;
        }

        .btn-sm {
          padding: 6px 12px;
          font-size: 12px;
          border-radius: 6px;
        }

        @media (max-width: 768px) {
          .main-content {
            margin-left: 0;
          }
          
          .dashboard-content {
            margin: 10px;
            padding: 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default StudentDashboard;
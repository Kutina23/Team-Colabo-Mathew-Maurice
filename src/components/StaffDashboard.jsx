// components/dashboards/StaffDashboard.jsx
import React, { useState } from 'react';
import { Users, BookOpen, Award, Lightbulb, Plus, Calendar, MessageSquare, BarChart3 } from 'lucide-react';
import Sidebar from './Sidebar';
const StaffDashboard = () => {
  const [activePage, setActivePage] = useState('dashboard');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const renderContent = () => {
    switch (activePage) {
      case 'dashboard':
        return <DashboardContent />;
      case 'classes':
        return <ClassesContent />;
      case 'students':
        return <StudentsContent />;
      case 'assignments':
        return <AssignmentsContent />;
      case 'grading':
        return <GradingContent />;
      default:
        return <DashboardContent />;
    }
  };

  const DashboardContent = () => (
    <div className="dashboard-content">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="mb-0">Teaching Dashboard</h2>
          <p className="text-muted mb-0">Manage your classes and track student progress</p>
        </div>
        <div className="d-flex gap-2">
          <button className="btn btn-outline-secondary btn-sm">
            <Calendar size={16} className="me-1" />
            Schedule
          </button>
          <button className="btn btn-primary btn-sm">
            <Plus size={16} className="me-1" />
            New Assignment
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
                  <Users size={20} />
                </div>
                <div>
                  <h6 className="card-title mb-1">My Students</h6>
                  <h4 className="mb-0 text-primary">24</h4>
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
                  <BookOpen size={20} />
                </div>
                <div>
                  <h6 className="card-title mb-1">Active Courses</h6>
                  <h4 className="mb-0 text-success">3</h4>
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
                  <Award size={20} />
                </div>
                <div>
                  <h6 className="card-title mb-1">Avg. Progress</h6>
                  <h4 className="mb-0 text-warning">78%</h4>
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
                  <Lightbulb size={20} />
                </div>
                <div>
                  <h6 className="card-title mb-1">Projects</h6>
                  <h4 className="mb-0 text-info">45</h4>
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
            <div className="card-header bg-transparent d-flex justify-content-between align-items-center">
              <h6 className="mb-0">MY CLASSES</h6>
              <button className="btn btn-primary btn-sm">
                <Plus size={16} className="me-1" />
                New Assignment
              </button>
            </div>
            <div className="card-body">
              <div className="list-group list-group-flush">
                <div className="list-group-item d-flex justify-content-between align-items-center border-0 px-0">
                  <div>
                    <h6 className="mb-1">Robotics Fundamentals - Section A</h6>
                    <p className="mb-1 text-muted">18 students • Next class: Tomorrow 10:00 AM</p>
                  </div>
                  <button className="btn btn-outline-primary btn-sm">Manage</button>
                </div>
                <div className="list-group-item d-flex justify-content-between align-items-center border-0 px-0">
                  <div>
                    <h6 className="mb-1">Advanced Scratch Programming</h6>
                    <p className="mb-1 text-muted">12 students • Next class: Wednesday 2:00 PM</p>
                  </div>
                  <button className="btn btn-outline-primary btn-sm">Manage</button>
                </div>
                <div className="list-group-item d-flex justify-content-between align-items-center border-0 px-0">
                  <div>
                    <h6 className="mb-1">STEM Innovation Workshop</h6>
                    <p className="mb-1 text-muted">8 students • Next class: Friday 1:00 PM</p>
                  </div>
                  <button className="btn btn-outline-primary btn-sm">Manage</button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="card border-0 shadow-sm">
            <div className="card-header bg-transparent">
              <h6 className="mb-0">STUDENT PERFORMANCE OVERVIEW</h6>
            </div>
            <div className="card-body">
              <div className="row g-3">
                <div className="col-md-4">
                  <div className="card bg-success-subtle border-success">
                    <div className="card-body text-center">
                      <h6 className="text-success">Excellent</h6>
                      <h4 className="text-success mb-0">12 Students</h4>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card bg-warning-subtle border-warning">
                    <div className="card-body text-center">
                      <h6 className="text-warning">Good</h6>
                      <h4 className="text-warning mb-0">8 Students</h4>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card bg-danger-subtle border-danger">
                    <div className="card-body text-center">
                      <h6 className="text-danger">Needs Help</h6>
                      <h4 className="text-danger mb-0">4 Students</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="col-lg-4">
          <div className="card border-0 shadow-sm mb-3">
            <div className="card-header bg-transparent">
              <h6 className="mb-0">QUICK ACTIONS</h6>
            </div>
            <div className="card-body">
              <div className="d-grid gap-2">
                <button className="btn btn-outline-primary btn-sm">Grade Assignments</button>
                <button className="btn btn-outline-success btn-sm">Upload Resources</button>
                <button className="btn btn-outline-info btn-sm">Schedule Office Hours</button>
                <button className="btn btn-outline-warning btn-sm">Send Announcements</button>
              </div>
            </div>
          </div>
          
          <div className="card border-0 shadow-sm">
            <div className="card-header bg-transparent">
              <h6 className="mb-0">RECENT ACTIVITY</h6>
            </div>
            <div className="card-body">
              <div className="mb-3">
                <small className="text-muted">Today</small>
                <p className="mb-1">Posted new assignment: Robot Challenge</p>
              </div>
              <div className="mb-3">
                <small className="text-muted">Yesterday</small>
                <p className="mb-1">Graded 15 Scratch projects</p>
              </div>
              <div className="mb-3">
                <small className="text-muted">2 days ago</small>
                <p className="mb-1">Updated course materials</p>
              </div>
              <button className="btn btn-outline-secondary btn-sm w-100">View All Activity</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const ClassesContent = () => (
    <div className="dashboard-content">
      <h2 className="mb-4">My Classes</h2>
      <div className="card border-0 shadow-sm">
        <div className="card-body">
          <p>Detailed class management interface would be implemented here.</p>
        </div>
      </div>
    </div>
  );

  const StudentsContent = () => (
    <div className="dashboard-content">
      <h2 className="mb-4">Student Management</h2>
      <div className="card border-0 shadow-sm">
        <div className="card-body">
          <p>Student management interface would be implemented here.</p>
        </div>
      </div>
    </div>
  );

  const AssignmentsContent = () => (
    <div className="dashboard-content">
      <h2 className="mb-4">Assignments</h2>
      <div className="card border-0 shadow-sm">
        <div className="card-body">
          <p>Assignment management interface would be implemented here.</p>
        </div>
      </div>
    </div>
  );

  const GradingContent = () => (
    <div className="dashboard-content">
      <h2 className="mb-4">Grading Center</h2>
      <div className="card border-0 shadow-sm">
        <div className="card-body">
          <p>Grading interface would be implemented here.</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="staff-layout">
      <Sidebar
        role="staff"
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
        .staff-layout {
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
}  

export default StaffDashboard;
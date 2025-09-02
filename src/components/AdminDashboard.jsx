// components/dashboards/AdminDashboard.jsx
import React, { useState } from 'react';
import { Plus, Eye, Edit, Trash2, TrendingUp, Users, BookOpen, Activity, Award, BarChart3, GraduationCap } from 'lucide-react';
import Sidebar from './Sidebar';

const AdminDashboard = () => {
  const [activePage, setActivePage] = useState('dashboard');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const renderContent = () => {
    switch (activePage) {
      case 'dashboard':
        return <DashboardContent />;
      case 'users':
        return <UserManagementContent />;
      case 'courses':
        return <CourseManagementContent />;
      case 'analytics':
        return <AnalyticsContent />;
      default:
        return <DashboardContent />;
    }
  };

  const DashboardContent = () => (
    <div className="dashboard-content">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="mb-0">Dashboard</h2>
          <p className="text-muted mb-0">PORTFOLIO  UNIVERSITY  DASHBOARD</p>
        </div>
        <div className="d-flex gap-2">
          <button className="btn btn-outline-secondary btn-sm">Export</button>
          <button className="btn btn-primary btn-sm">+ Add Widget</button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="row g-3 mb-4">
        <div className="col-md-3">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div className="bg-success text-white p-2 rounded me-3">
                  <Users size={20} />
                </div>
                <div>
                  <h6 className="card-title mb-1">Total Students</h6>
                  <h4 className="mb-0 text-success">2,847</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="col-md-3">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div className="bg-primary text-white p-2 rounded me-3">
                  <BookOpen size={20} />
                </div>
                <div>
                  <h6 className="card-title mb-1">Active Courses</h6>
                  <h4 className="mb-0 text-primary">12</h4>
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
                  <Activity size={20} />
                </div>
                <div>
                  <h6 className="card-title mb-1">Active Sessions</h6>
                  <h4 className="mb-0 text-warning">234</h4>
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
                  <h6 className="card-title mb-1">Total Revenue</h6>
                  <h4 className="mb-0 text-info">$79,452</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Charts and Analytics */}
      <div className="row">
        <div className="col-lg-8">
          <div className="card border-0 shadow-sm">
            <div className="card-header bg-transparent border-0">
              <div className="d-flex justify-content-between align-items-center">
                <h6 className="mb-0">UNIVERSITY REPORT</h6>
                <div className="d-flex gap-2">
                  <button className="btn btn-outline-secondary btn-sm">1D</button>
                  <button className="btn btn-outline-secondary btn-sm">7D</button>
                  <button className="btn btn-primary btn-sm">1M</button>
                  <button className="btn btn-outline-secondary btn-sm">1Y</button>
                </div>
              </div>
              <small className="text-muted">Monthly data from Year to Growing Months Featuring Revenue</small>
            </div>
            <div className="card-body">
              {/* Chart Placeholder */}
              <div className="chart-container" style={{ height: '300px', background: '#f8f9fa', borderRadius: '8px', position: 'relative' }}>
                <div className="d-flex align-items-center justify-content-center h-100">
                  <div className="text-center">
                    <BarChart3 size={48} className="text-muted mb-2" />
                    <p className="text-muted">Interactive Chart Would Display Here</p>
                    <small className="text-muted">Student enrollment and revenue analytics</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="col-lg-4">
          {/* Top Revenue Card */}
          <div className="card border-0 shadow-sm mb-3">
            <div className="card-body text-center">
              <h3 className="text-success mb-1">$79,452</h3>
              <p className="text-muted mb-2">Total Revenue</p>
              <div className="d-flex justify-content-between text-sm">
                <span>$45,210</span>
                <span className="text-success">+8% vs last month</span>
              </div>
            </div>
          </div>
          
          {/* Quick Stats */}
          <div className="card border-0 shadow-sm mb-3">
            <div className="card-header bg-transparent">
              <h6 className="mb-0">Quick Stats</h6>
            </div>
            <div className="card-body p-0">
              <div className="list-group list-group-flush">
                <div className="list-group-item d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <div className="bg-primary text-white p-1 rounded me-2">
                      <GraduationCap size={16} />
                    </div>
                    <span>New Students</span>
                  </div>
                  <span className="badge bg-primary">2,051</span>
                </div>
                <div className="list-group-item d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <div className="bg-success text-white p-1 rounded me-2">
                      <Award size={16} />
                    </div>
                    <span>Completed Courses</span>
                  </div>
                  <span className="badge bg-success">1,247</span>
                </div>
                <div className="list-group-item d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <div className="bg-warning text-white p-1 rounded me-2">
                      <BookOpen size={16} />
                    </div>
                    <span>Active Projects</span>
                  </div>
                  <span className="badge bg-warning">89</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Performance Indicators */}
          <div className="card border-0 shadow-sm">
            <div className="card-header bg-transparent">
              <h6 className="mb-0">Performance</h6>
            </div>
            <div className="card-body">
              <div className="mb-3">
                <div className="d-flex justify-content-between mb-1">
                  <small>Server Performance</small>
                  <small>92%</small>
                </div>
                <div className="progress" style={{ height: '4px' }}>
                  <div className="progress-bar bg-success" style={{ width: '92%' }}></div>
                </div>
              </div>
              <div className="mb-3">
                <div className="d-flex justify-content-between mb-1">
                  <small>Student Satisfaction</small>
                  <small>87%</small>
                </div>
                <div className="progress" style={{ height: '4px' }}>
                  <div className="progress-bar bg-info" style={{ width: '87%' }}></div>
                </div>
              </div>
              <div className="mb-0">
                <div className="d-flex justify-content-between mb-1">
                  <small>Course Completion</small>
                  <small>78%</small>
                </div>
                <div className="progress" style={{ height: '4px' }}>
                  <div className="progress-bar bg-warning" style={{ width: '78%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="row mt-4">
        <div className="col-lg-6">
          <div className="card border-0 shadow-sm">
            <div className="card-header bg-transparent d-flex justify-content-between align-items-center">
              <h6 className="mb-0">EXAM TOPPERS</h6>
              <button className="btn btn-outline-primary btn-sm">View All</button>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-sm">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>NAME</th>
                      <th>SUBJECT</th>
                      <th>MARKS</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>01</td>
                      <td>Maria Hernandez</td>
                      <td>Robotics</td>
                      <td><span className="badge bg-success">98.5%</span></td>
                    </tr>
                    <tr>
                      <td>02</td>
                      <td>James Wilson</td>
                      <td>Programming</td>
                      <td><span className="badge bg-success">97.2%</span></td>
                    </tr>
                    <tr>
                      <td>03</td>
                      <td>Sarah Chen</td>
                      <td>Innovation</td>
                      <td><span className="badge bg-success">96.8%</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        
        <div className="col-lg-6">
          <div className="card border-0 shadow-sm">
            <div className="card-header bg-transparent">
              <h6 className="mb-0">PERFORMANCE</h6>
            </div>
            <div className="card-body">
              <div className="d-flex justify-content-center align-items-center" style={{ height: '200px' }}>
                <div className="text-center">
                  <div className="position-relative d-inline-block">
                    <svg width="120" height="120" className="text-primary">
                      <circle 
                        cx="60" 
                        cy="60" 
                        r="50" 
                        stroke="currentColor" 
                        strokeWidth="8" 
                        fill="none" 
                        opacity="0.1"
                      />
                      <circle 
                        cx="60" 
                        cy="60" 
                        r="50" 
                        stroke="currentColor" 
                        strokeWidth="8" 
                        fill="none" 
                        strokeDasharray="314" 
                        strokeDashoffset="78.5"
                        strokeLinecap="round"
                        transform="rotate(-90 60 60)"
                      />
                    </svg>
                    <div className="position-absolute top-50 start-50 translate-middle">
                      <h4 className="mb-0 text-primary">75%</h4>
                    </div>
                  </div>
                  <p className="text-muted mt-2 mb-0">Overall Performance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const UserManagementContent = () => (
    <div className="dashboard-content">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>User Management</h2>
        <button className="btn btn-primary">
          <Plus size={16} className="me-1" />
          Add New User
        </button>
      </div>
      
      <div className="card border-0 shadow-sm">
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Role</th>
                  <th>Email</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>John Smith</td>
                  <td><span className="badge bg-primary">Student</span></td>
                  <td>john@email.com</td>
                  <td><span className="badge bg-success">Active</span></td>
                  <td>
                    <button className="btn btn-sm btn-outline-primary me-1"><Eye size={14} /></button>
                    <button className="btn btn-sm btn-outline-warning me-1"><Edit size={14} /></button>
                    <button className="btn btn-sm btn-outline-danger"><Trash2 size={14} /></button>
                  </td>
                </tr>
                <tr>
                  <td>Sarah Johnson</td>
                  <td><span className="badge bg-info">Staff</span></td>
                  <td>sarah@email.com</td>
                  <td><span className="badge bg-success">Active</span></td>
                  <td>
                    <button className="btn btn-sm btn-outline-primary me-1"><Eye size={14} /></button>
                    <button className="btn btn-sm btn-outline-warning me-1"><Edit size={14} /></button>
                    <button className="btn btn-sm btn-outline-danger"><Trash2 size={14} /></button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );

  const CourseManagementContent = () => (
    <div className="dashboard-content">
      <h2 className="mb-4">Course Management</h2>
      <div className="card border-0 shadow-sm">
        <div className="card-body">
          <p>Course management interface would be implemented here.</p>
        </div>
      </div>
    </div>
  );

  const AnalyticsContent = () => (
    <div className="dashboard-content">
      <h2 className="mb-4">Analytics</h2>
      <div className="card border-0 shadow-sm">
        <div className="card-body">
          <p>Advanced analytics and reporting interface would be implemented here.</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="admin-layout">
      <Sidebar
        role="admin"
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
        <div className="container-fluid p-4">
          {renderContent()}
        </div>
      </div>

    </div>
  );
};

export default AdminDashboard;
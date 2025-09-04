// components/admin/AdminAnalytics.jsx
import React, { useState } from 'react';
import { BarChart3, TrendingUp, Users, BookOpen, Activity, Award, Download, Filter } from 'lucide-react';

const AdminAnalytics = () => {
  const [timeRange, setTimeRange] = useState('1M');

  return (
    <div className="p-4">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="mb-0">Analytics</h2>
          <p className="text-muted">Comprehensive insights and performance metrics</p>
        </div>
        <div className="d-flex gap-2">
          <select
            className="form-select"
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
          >
            <option value="7D">Last 7 Days</option>
            <option value="1M">Last Month</option>
            <option value="3M">Last 3 Months</option>
            <option value="1Y">Last Year</option>
          </select>
          <button className="btn btn-outline-secondary">
            <Download size={16} className="me-1" /> Export
          </button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="row g-3 mb-4">
        <div className="col-md-3">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div className="bg-primary text-white p-2 rounded me-3">
                  <Users size={20} />
                </div>
                <div>
                  <h6 className="card-title mb-1">Total Users</h6>
                  <h4 className="mb-0 text-primary">12,847</h4>
                  <small className="text-success">+12% vs last month</small>
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
                  <h4 className="mb-0 text-success">24</h4>
                  <small className="text-success">+5% vs last month</small>
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
                  <h6 className="card-title mb-1">Engagement Rate</h6>
                  <h4 className="mb-0 text-warning">78%</h4>
                  <small className="text-success">+3% vs last month</small>
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
                  <h6 className="card-title mb-1">Revenue</h6>
                  <h4 className="mb-0 text-info">$45,230</h4>
                  <small className="text-success">+18% vs last month</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="row">
        <div className="col-lg-8">
          <div className="card border-0 shadow-sm">
            <div className="card-header bg-transparent border-0">
              <h6 className="mb-0">USER GROWTH TREND</h6>
            </div>
            <div className="card-body">
              <div className="chart-container" style={{ height: '300px', background: '#f8f9fa', borderRadius: '8px', position: 'relative' }}>
                <div className="d-flex align-items-center justify-content-center h-100">
                  <div className="text-center">
                    <BarChart3 size={48} className="text-muted mb-2" />
                    <p className="text-muted">Interactive growth chart would display here</p>
                    <small className="text-muted">Monthly user registration and course enrollment data</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="card border-0 shadow-sm mb-3">
            <div className="card-header bg-transparent">
              <h6 className="mb-0">Top Performing Courses</h6>
            </div>
            <div className="card-body p-0">
              <div className="list-group list-group-flush">
                <div className="list-group-item d-flex justify-content-between align-items-center">
                  <div>
                    <h6 className="mb-1">Robotics Fundamentals</h6>
                    <small className="text-muted">87% completion rate</small>
                  </div>
                  <span className="badge bg-success">1st</span>
                </div>
                <div className="list-group-item d-flex justify-content-between align-items-center">
                  <div>
                    <h6 className="mb-1">Advanced Scratch</h6>
                    <small className="text-muted">82% completion rate</small>
                  </div>
                  <span className="badge bg-primary">2nd</span>
                </div>
                <div className="list-group-item d-flex justify-content-between align-items-center">
                  <div>
                    <h6 className="mb-1">AI Basics</h6>
                    <small className="text-muted">79% completion rate</small>
                  </div>
                  <span className="badge bg-warning">3rd</span>
                </div>
              </div>
            </div>
          </div>

          <div className="card border-0 shadow-sm">
            <div className="card-header bg-transparent">
              <h6 className="mb-0">System Performance</h6>
            </div>
            <div className="card-body">
              <div className="mb-3">
                <div className="d-flex justify-content-between mb-1">
                  <small>Server Uptime</small>
                  <small>99.9%</small>
                </div>
                <div className="progress" style={{ height: '4px' }}>
                  <div className="progress-bar bg-success" style={{ width: '99.9%' }}></div>
                </div>
              </div>
              <div className="mb-3">
                <div className="d-flex justify-content-between mb-1">
                  <small>Response Time</small>
                  <small>245ms</small>
                </div>
                <div className="progress" style={{ height: '4px' }}>
                  <div className="progress-bar bg-info" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div className="mb-0">
                <div className="d-flex justify-content-between mb-1">
                  <small>Database Load</small>
                  <small>67%</small>
                </div>
                <div className="progress" style={{ height: '4px' }}>
                  <div className="progress-bar bg-warning" style={{ width: '67%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminAnalytics;
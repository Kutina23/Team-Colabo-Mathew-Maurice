// components/admin/AdminSecurity.jsx
import React, { useState } from 'react';
import { Shield, Eye, Lock, AlertTriangle, CheckCircle, XCircle, User, Clock, MapPin, Activity } from 'lucide-react';

const AdminSecurity = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const securityEvents = [
    {
      id: 1,
      type: 'login',
      user: 'john.doe@example.com',
      action: 'Successful login',
      ip: '192.168.1.100',
      location: 'New York, USA',
      timestamp: '2024-09-03 14:30:25',
      status: 'success'
    },
    {
      id: 2,
      type: 'failed_login',
      user: 'unknown@example.com',
      action: 'Failed login attempt',
      ip: '203.0.113.45',
      location: 'Unknown',
      timestamp: '2024-09-03 14:25:10',
      status: 'warning'
    },
    {
      id: 3,
      type: 'password_change',
      user: 'admin@portfoliouniversity.edu',
      action: 'Password changed',
      ip: '192.168.1.101',
      location: 'California, USA',
      timestamp: '2024-09-03 13:45:00',
      status: 'success'
    },
    {
      id: 4,
      type: 'suspicious_activity',
      user: 'test@example.com',
      action: 'Multiple failed attempts',
      ip: '198.51.100.23',
      location: 'Unknown',
      timestamp: '2024-09-03 12:15:30',
      status: 'danger'
    }
  ];

  const OverviewTab = () => (
    <div className="row g-4">
      <div className="col-md-3">
        <div className="card border-0 shadow-sm h-100">
          <div className="card-body text-center">
            <div className="bg-success text-white p-3 rounded-circle d-inline-block mb-3">
              <CheckCircle size={32} />
            </div>
            <h4 className="text-success mb-1">98.7%</h4>
            <p className="text-muted mb-0">System Security</p>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card border-0 shadow-sm h-100">
          <div className="card-body text-center">
            <div className="bg-primary text-white p-3 rounded-circle d-inline-block mb-3">
              <User size={32} />
            </div>
            <h4 className="text-primary mb-1">1,247</h4>
            <p className="text-muted mb-0">Active Sessions</p>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card border-0 shadow-sm h-100">
          <div className="card-body text-center">
            <div className="bg-warning text-white p-3 rounded-circle d-inline-block mb-3">
              <AlertTriangle size={32} />
            </div>
            <h4 className="text-warning mb-1">23</h4>
            <p className="text-muted mb-0">Security Alerts</p>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card border-0 shadow-sm h-100">
          <div className="card-body text-center">
            <div className="bg-info text-white p-3 rounded-circle d-inline-block mb-3">
              <Lock size={32} />
            </div>
            <h4 className="text-info mb-1">156</h4>
            <p className="text-muted mb-0">Blocked IPs</p>
          </div>
        </div>
      </div>
    </div>
  );

  const AccessLogsTab = () => (
    <div className="card border-0 shadow-sm">
      <div className="card-header bg-transparent d-flex justify-content-between align-items-center">
        <h6 className="mb-0">ACCESS LOGS</h6>
        <div className="d-flex gap-2">
          <select className="form-select form-select-sm">
            <option>All Events</option>
            <option>Login Attempts</option>
            <option>Failed Logins</option>
            <option>Password Changes</option>
          </select>
          <button className="btn btn-outline-primary btn-sm">Export</button>
        </div>
      </div>
      <div className="card-body">
        <div className="table-responsive">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Time</th>
                <th>User</th>
                <th>Action</th>
                <th>IP Address</th>
                <th>Location</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {securityEvents.map(event => (
                <tr key={event.id}>
                  <td>
                    <small className="text-muted">{event.timestamp}</small>
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <div className={`bg-${event.status === 'success' ? 'success' : event.status === 'warning' ? 'warning' : 'danger'} text-white rounded-circle d-flex align-items-center justify-content-center me-2`}
                           style={{ width: '24px', height: '24px', fontSize: '12px' }}>
                        {event.type === 'login' ? <User size={12} /> :
                         event.type === 'failed_login' ? <XCircle size={12} /> :
                         event.type === 'password_change' ? <Lock size={12} /> :
                         <AlertTriangle size={12} />}
                      </div>
                      <span className="small">{event.user}</span>
                    </div>
                  </td>
                  <td>{event.action}</td>
                  <td>
                    <code className="small">{event.ip}</code>
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <MapPin size={14} className="me-1 text-muted" />
                      <small>{event.location}</small>
                    </div>
                  </td>
                  <td>
                    <span className={`badge bg-${event.status === 'success' ? 'success' : event.status === 'warning' ? 'warning' : 'danger'}`}>
                      {event.status === 'success' ? 'Success' : event.status === 'warning' ? 'Warning' : 'Danger'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const PermissionsTab = () => (
    <div className="row g-4">
      <div className="col-md-6">
        <div className="card border-0 shadow-sm">
          <div className="card-header bg-transparent">
            <h6 className="mb-0">Role Permissions</h6>
          </div>
          <div className="card-body">
            <div className="mb-3">
              <h6>Administrator</h6>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" defaultChecked disabled />
                <label className="form-check-label small">Full system access</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" defaultChecked disabled />
                <label className="form-check-label small">User management</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" defaultChecked disabled />
                <label className="form-check-label small">System configuration</label>
              </div>
            </div>

            <div className="mb-3">
              <h6>Staff</h6>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" defaultChecked />
                <label className="form-check-label small">Course management</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" defaultChecked />
                <label className="form-check-label small">Student progress view</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" />
                <label className="form-check-label small">User creation</label>
              </div>
            </div>

            <div className="mb-0">
              <h6>Student</h6>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" defaultChecked />
                <label className="form-check-label small">Course enrollment</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" defaultChecked />
                <label className="form-check-label small">Profile management</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" />
                <label className="form-check-label small">Peer communication</label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-6">
        <div className="card border-0 shadow-sm">
          <div className="card-header bg-transparent">
            <h6 className="mb-0">Security Policies</h6>
          </div>
          <div className="card-body">
            <div className="form-check mb-3">
              <input className="form-check-input" type="checkbox" defaultChecked />
              <label className="form-check-label">Enforce strong passwords</label>
            </div>
            <div className="form-check mb-3">
              <input className="form-check-input" type="checkbox" defaultChecked />
              <label className="form-check-label">Two-factor authentication required</label>
            </div>
            <div className="form-check mb-3">
              <input className="form-check-input" type="checkbox" />
              <label className="form-check-label">IP whitelist for admin access</label>
            </div>
            <div className="form-check mb-3">
              <input className="form-check-input" type="checkbox" defaultChecked />
              <label className="form-check-label">Session timeout after inactivity</label>
            </div>
            <div className="form-check mb-0">
              <input className="form-check-input" type="checkbox" />
              <label className="form-check-label">Audit all user actions</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return <OverviewTab />;
      case 'logs':
        return <AccessLogsTab />;
      case 'permissions':
        return <PermissionsTab />;
      default:
        return <OverviewTab />;
    }
  };

  return (
    <div className="p-4">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="mb-0">Security Center</h2>
          <p className="text-muted">Monitor and manage system security</p>
        </div>
        <div className="d-flex gap-2">
          <button className="btn btn-outline-warning">
            <AlertTriangle size={16} className="me-1" /> Security Scan
          </button>
          <button className="btn btn-primary">
            <Shield size={16} className="me-1" /> Security Settings
          </button>
        </div>
      </div>

      {/* Security Tabs */}
      <div className="card border-0 shadow-sm">
        <div className="card-header bg-transparent border-0">
          <ul className="nav nav-tabs" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className={`nav-link ${activeTab === 'overview' ? 'active' : ''}`}
                onClick={() => setActiveTab('overview')}
              >
                <Activity size={16} className="me-2" />
                Overview
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className={`nav-link ${activeTab === 'logs' ? 'active' : ''}`}
                onClick={() => setActiveTab('logs')}
              >
                <Eye size={16} className="me-2" />
                Access Logs
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className={`nav-link ${activeTab === 'permissions' ? 'active' : ''}`}
                onClick={() => setActiveTab('permissions')}
              >
                <Lock size={16} className="me-2" />
                Permissions
              </button>
            </li>
          </ul>
        </div>
        <div className="card-body">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

export default AdminSecurity;
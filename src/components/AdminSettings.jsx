// components/admin/AdminSettings.jsx
import React, { useState } from 'react';
import { Settings, Save, RefreshCw, Shield, Mail, Database, Globe, Bell, Key, Users } from 'lucide-react';

const AdminSettings = () => {
  const [activeTab, setActiveTab] = useState('general');

  const tabs = [
    { id: 'general', label: 'General', icon: <Settings size={16} /> },
    { id: 'security', label: 'Security', icon: <Shield size={16} /> },
    { id: 'notifications', label: 'Notifications', icon: <Bell size={16} /> },
    { id: 'email', label: 'Email', icon: <Mail size={16} /> },
    { id: 'database', label: 'Database', icon: <Database size={16} /> },
    { id: 'system', label: 'System', icon: <Globe size={16} /> }
  ];

  const GeneralSettings = () => (
    <div className="row g-4">
      <div className="col-md-6">
        <div className="card border-0 shadow-sm">
          <div className="card-header bg-transparent">
            <h6 className="mb-0">Site Information</h6>
          </div>
          <div className="card-body">
            <div className="mb-3">
              <label className="form-label">Site Name</label>
              <input type="text" className="form-control" defaultValue="Portfolio University" />
            </div>
            <div className="mb-3">
              <label className="form-label">Site Description</label>
              <textarea className="form-control" rows="3" defaultValue="Leading educational platform for STEM learning"></textarea>
            </div>
            <div className="mb-3">
              <label className="form-label">Contact Email</label>
              <input type="email" className="form-control" defaultValue="admin@portfoliouniversity.edu" />
            </div>
            <div className="mb-3">
              <label className="form-label">Timezone</label>
              <select className="form-select">
                <option>UTC-8 (Pacific)</option>
                <option>UTC-5 (Eastern)</option>
                <option>UTC+0 (GMT)</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-6">
        <div className="card border-0 shadow-sm">
          <div className="card-header bg-transparent">
            <h6 className="mb-0">User Registration</h6>
          </div>
          <div className="card-body">
            <div className="form-check mb-3">
              <input className="form-check-input" type="checkbox" defaultChecked />
              <label className="form-check-label">Allow public registration</label>
            </div>
            <div className="form-check mb-3">
              <input className="form-check-input" type="checkbox" defaultChecked />
              <label className="form-check-label">Require email verification</label>
            </div>
            <div className="form-check mb-3">
              <input className="form-check-input" type="checkbox" />
              <label className="form-check-label">Enable social login</label>
            </div>
            <div className="mb-3">
              <label className="form-label">Default User Role</label>
              <select className="form-select">
                <option>Student</option>
                <option>Staff</option>
                <option>Admin</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const SecuritySettings = () => (
    <div className="row g-4">
      <div className="col-md-6">
        <div className="card border-0 shadow-sm">
          <div className="card-header bg-transparent">
            <h6 className="mb-0">Password Policy</h6>
          </div>
          <div className="card-body">
            <div className="mb-3">
              <label className="form-label">Minimum Password Length</label>
              <input type="number" className="form-control" defaultValue="8" />
            </div>
            <div className="form-check mb-3">
              <input className="form-check-input" type="checkbox" defaultChecked />
              <label className="form-check-label">Require uppercase letters</label>
            </div>
            <div className="form-check mb-3">
              <input className="form-check-input" type="checkbox" defaultChecked />
              <label className="form-check-label">Require numbers</label>
            </div>
            <div className="form-check mb-3">
              <input className="form-check-input" type="checkbox" defaultChecked />
              <label className="form-check-label">Require special characters</label>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-6">
        <div className="card border-0 shadow-sm">
          <div className="card-header bg-transparent">
            <h6 className="mb-0">Session Management</h6>
          </div>
          <div className="card-body">
            <div className="mb-3">
              <label className="form-label">Session Timeout (minutes)</label>
              <input type="number" className="form-control" defaultValue="60" />
            </div>
            <div className="form-check mb-3">
              <input className="form-check-input" type="checkbox" defaultChecked />
              <label className="form-check-label">Enable remember me</label>
            </div>
            <div className="form-check mb-3">
              <input className="form-check-input" type="checkbox" />
              <label className="form-check-label">Force password change on first login</label>
            </div>
            <div className="mb-3">
              <label className="form-label">Failed Login Attempts</label>
              <input type="number" className="form-control" defaultValue="5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const NotificationSettings = () => (
    <div className="row g-4">
      <div className="col-12">
        <div className="card border-0 shadow-sm">
          <div className="card-header bg-transparent">
            <h6 className="mb-0">Email Notifications</h6>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-6">
                <div className="form-check mb-3">
                  <input className="form-check-input" type="checkbox" defaultChecked />
                  <label className="form-check-label">New user registration</label>
                </div>
                <div className="form-check mb-3">
                  <input className="form-check-input" type="checkbox" defaultChecked />
                  <label className="form-check-label">Course enrollment notifications</label>
                </div>
                <div className="form-check mb-3">
                  <input className="form-check-input" type="checkbox" defaultChecked />
                  <label className="form-check-label">Payment confirmations</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-check mb-3">
                  <input className="form-check-input" type="checkbox" />
                  <label className="form-check-label">System alerts</label>
                </div>
                <div className="form-check mb-3">
                  <input className="form-check-input" type="checkbox" defaultChecked />
                  <label className="form-check-label">Weekly reports</label>
                </div>
                <div className="form-check mb-3">
                  <input className="form-check-input" type="checkbox" />
                  <label className="form-check-label">Maintenance notifications</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'general':
        return <GeneralSettings />;
      case 'security':
        return <SecuritySettings />;
      case 'notifications':
        return <NotificationSettings />;
      default:
        return <GeneralSettings />;
    }
  };

  return (
    <div className="p-4">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="mb-0">System Settings</h2>
          <p className="text-muted">Configure system preferences and policies</p>
        </div>
        <div className="d-flex gap-2">
          <button className="btn btn-outline-secondary">
            <RefreshCw size={16} className="me-1" /> Reset
          </button>
          <button className="btn btn-primary">
            <Save size={16} className="me-1" /> Save Changes
          </button>
        </div>
      </div>

      {/* Settings Tabs */}
      <div className="card border-0 shadow-sm">
        <div className="card-header bg-transparent border-0">
          <ul className="nav nav-tabs" role="tablist">
            {tabs.map(tab => (
              <li key={tab.id} className="nav-item" role="presentation">
                <button
                  className={`nav-link ${activeTab === tab.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.icon}
                  <span className="ms-2">{tab.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="card-body">
          {renderTabContent()}
        </div>
      </div>

      {/* System Status */}
      <div className="card border-0 shadow-sm mt-4">
        <div className="card-header bg-transparent">
          <h6 className="mb-0">SYSTEM STATUS</h6>
        </div>
        <div className="card-body">
          <div className="row g-3">
            <div className="col-md-3">
              <div className="d-flex align-items-center">
                <div className="bg-success text-white p-2 rounded me-3">
                  <Shield size={20} />
                </div>
                <div>
                  <h6 className="mb-0">Security</h6>
                  <small className="text-success">All systems secure</small>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="d-flex align-items-center">
                <div className="bg-primary text-white p-2 rounded me-3">
                  <Database size={20} />
                </div>
                <div>
                  <h6 className="mb-0">Database</h6>
                  <small className="text-primary">Connected</small>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="d-flex align-items-center">
                <div className="bg-info text-white p-2 rounded me-3">
                  <Mail size={20} />
                </div>
                <div>
                  <h6 className="mb-0">Email</h6>
                  <small className="text-info">Service active</small>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="d-flex align-items-center">
                <div className="bg-warning text-white p-2 rounded me-3">
                  <Globe size={20} />
                </div>
                <div>
                  <h6 className="mb-0">API</h6>
                  <small className="text-warning">Operational</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSettings;
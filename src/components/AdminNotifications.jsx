// components/admin/AdminNotifications.jsx
import React, { useState } from 'react';
import { Bell, Plus, Send, Eye, Trash2, AlertCircle, CheckCircle, Info, MessageSquare, Mail } from 'lucide-react';

const AdminNotifications = () => {
  const [activeTab, setActiveTab] = useState('active');

  const notifications = [
    {
      id: 1,
      title: 'System Maintenance Scheduled',
      message: 'Scheduled maintenance will occur on September 10th from 2:00 AM to 4:00 AM PST.',
      type: 'warning',
      priority: 'high',
      status: 'active',
      recipients: 'All Users',
      sentDate: '2024-09-03',
      readCount: 1247,
      totalRecipients: 1500
    },
    {
      id: 2,
      title: 'New Course Available',
      message: 'Advanced Robotics course is now available for enrollment.',
      type: 'info',
      priority: 'medium',
      status: 'active',
      recipients: 'Students',
      sentDate: '2024-09-02',
      readCount: 892,
      totalRecipients: 1200
    },
    {
      id: 3,
      title: 'Welcome to Portfolio University',
      message: 'Welcome! Please complete your profile to get started.',
      type: 'success',
      priority: 'low',
      status: 'active',
      recipients: 'New Students',
      sentDate: '2024-09-01',
      readCount: 456,
      totalRecipients: 500
    }
  ];

  const templates = [
    {
      id: 1,
      name: 'Maintenance Notice',
      description: 'Template for system maintenance announcements',
      lastUsed: '2024-09-03'
    },
    {
      id: 2,
      name: 'Course Announcement',
      description: 'Template for new course availability',
      lastUsed: '2024-09-02'
    },
    {
      id: 3,
      name: 'Welcome Message',
      description: 'Template for new user onboarding',
      lastUsed: '2024-09-01'
    }
  ];

  const ActiveNotificationsTab = () => (
    <div className="card border-0 shadow-sm">
      <div className="card-header bg-blue d-flex justify-content-between align-items-center">
        <h6 className="mb-0">ACTIVE NOTIFICATIONS</h6>
        <button className="btn btn-primary btn-sm">
          <Plus size={14} className="me-1" /> Create Notification
        </button>
      </div>
      <div className="card-body">
        <div className="table-responsive">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Title</th>
                <th>Type</th>
                <th>Priority</th>
                <th>Recipients</th>
                <th>Read Rate</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {notifications.map(notification => (
                <tr key={notification.id}>
                  <td>
                    <div>
                      <h6 className="mb-1">{notification.title}</h6>
                      <small className="text-muted">{notification.message.substring(0, 50)}...</small>
                    </div>
                  </td>
                  <td>
                    <span className={`badge bg-${
                      notification.type === 'warning' ? 'warning' :
                      notification.type === 'info' ? 'info' :
                      notification.type === 'success' ? 'success' : 'secondary'
                    }`}>
                      {notification.type === 'warning' ? <AlertCircle size={12} className="me-1" /> :
                       notification.type === 'info' ? <Info size={12} className="me-1" /> :
                       notification.type === 'success' ? <CheckCircle size={12} className="me-1" /> :
                       <Bell size={12} className="me-1" />}
                      {notification.type}
                    </span>
                  </td>
                  <td>
                    <span className={`badge ${
                      notification.priority === 'high' ? 'bg-danger' :
                      notification.priority === 'medium' ? 'bg-warning' : 'bg-info'
                    }`}>
                      {notification.priority}
                    </span>
                  </td>
                  <td>{notification.recipients}</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <div className="progress flex-grow-1 me-2" style={{ height: '4px' }}>
                        <div
                          className="progress-bar bg-success"
                          style={{ width: `${(notification.readCount / notification.totalRecipients) * 100}%` }}
                        ></div>
                      </div>
                      <small>{Math.round((notification.readCount / notification.totalRecipients) * 100)}%</small>
                    </div>
                  </td>
                  <td>
                    <div className="btn-group" role="group">
                      <button className="btn btn-sm btn-outline-primary">
                        <Eye size={14} />
                      </button>
                      <button className="btn btn-sm btn-outline-secondary">
                        <Send size={14} />
                      </button>
                      <button className="btn btn-sm btn-outline-danger">
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const TemplatesTab = () => (
    <div className="row g-4">
      <div className="col-12">
        <div className="card border-0 shadow-sm">
          <div className="card-header bg-transparent d-flex justify-content-between align-items-center">
            <h6 className="mb-0">NOTIFICATION TEMPLATES</h6>
            <button className="btn btn-outline-primary btn-sm">
              <Plus size={14} className="me-1" /> New Template
            </button>
          </div>
          <div className="card-body">
            <div className="row g-3">
              {templates.map(template => (
                <div key={template.id} className="col-md-4">
                  <div className="card border">
                    <div className="card-body">
                      <h6 className="card-title">{template.name}</h6>
                      <p className="card-text small text-muted">{template.description}</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <small className="text-muted">Last used: {template.lastUsed}</small>
                        <div className="btn-group" role="group">
                          <button className="btn btn-sm btn-outline-primary">
                            <Eye size={12} />
                          </button>
                          <button className="btn btn-sm btn-outline-warning">
                            <MessageSquare size={12} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const SettingsTab = () => (
    <div className="row g-4">
      <div className="col-md-6">
        <div className="card border-0 shadow-sm">
          <div className="card-header bg-transparent">
            <h6 className="mb-0">Email Settings</h6>
          </div>
          <div className="card-body">
            <div className="mb-3">
              <label className="form-label">SMTP Server</label>
              <input type="text" className="form-control" defaultValue="smtp.portfolio.edu" />
            </div>
            <div className="mb-3">
              <label className="form-label">SMTP Port</label>
              <input type="number" className="form-control" defaultValue="587" />
            </div>
            <div className="mb-3">
              <label className="form-label">From Email</label>
              <input type="email" className="form-control" defaultValue="noreply@portfolio.edu" />
            </div>
            <div className="form-check mb-3">
              <input className="form-check-input" type="checkbox" defaultChecked />
              <label className="form-check-label">Enable email notifications</label>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-6">
        <div className="card border-0 shadow-sm">
          <div className="card-header bg-transparent">
            <h6 className="mb-0">Notification Preferences</h6>
          </div>
          <div className="card-body">
            <div className="form-check mb-3">
              <input className="form-check-input" type="checkbox" defaultChecked />
              <label className="form-check-label">Send immediate notifications</label>
            </div>
            <div className="form-check mb-3">
              <input className="form-check-input" type="checkbox" defaultChecked />
              <label className="form-check-label">Batch notifications</label>
            </div>
            <div className="form-check mb-3">
              <input className="form-check-input" type="checkbox" />
              <label className="form-check-label">Include unsubscribe link</label>
            </div>
            <div className="mb-3">
              <label className="form-label">Maximum notifications per hour</label>
              <input type="number" className="form-control" defaultValue="100" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'active':
        return <ActiveNotificationsTab />;
      case 'templates':
        return <TemplatesTab />;
      case 'settings':
        return <SettingsTab />;
      default:
        return <ActiveNotificationsTab />;
    }
  };

  return (
    <div className="p-4">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="mb-0">Notifications</h2>
          <p className="text-muted">Manage system notifications and alerts</p>
        </div>
        <div className="d-flex gap-2">
          <button className="btn btn-outline-info">
            <Mail size={16} className="me-1" /> Test Email
          </button>
          <button className="btn btn-primary">
            <Plus size={16} className="me-1" /> New Notification
          </button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="row g-3 mb-4">
        <div className="col-md-3">
          <div className="card border-0 bg-primary-subtle">
            <div className="card-body text-center">
              <Bell className="text-primary mb-2" size={32} />
              <h4 className="text-primary mb-1">24</h4>
              <p className="text-muted mb-0">Active Notifications</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card border-0 bg-success-subtle">
            <div className="card-body text-center">
              <CheckCircle className="text-success mb-2" size={32} />
              <h4 className="text-success mb-1">89%</h4>
              <p className="text-muted mb-0">Read Rate</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card border-0 bg-info-subtle">
            <div className="card-body text-center">
              <Send className="text-info mb-2" size={32} />
              <h4 className="text-info mb-1">1,247</h4>
              <p className="text-muted mb-0">Sent Today</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card border-0 bg-warning-subtle">
            <div className="card-body text-center">
              <MessageSquare className="text-warning mb-2" size={32} />
              <h4 className="text-warning mb-1">12</h4>
              <p className="text-muted mb-0">Templates</p>
            </div>
          </div>
        </div>
      </div>

      {/* Notifications Tabs */}
      <div className="card border-0 shadow-sm">
        <div className="card-header bg-transparent border-0">
          <ul className="nav nav-tabs" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className={`nav-link ${activeTab === 'active' ? 'active' : ''}`}
                onClick={() => setActiveTab('active')}
              >
                <Bell size={16} className="me-2" />
                Active
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className={`nav-link ${activeTab === 'templates' ? 'active' : ''}`}
                onClick={() => setActiveTab('templates')}
              >
                <MessageSquare size={16} className="me-2" />
                Templates
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className={`nav-link ${activeTab === 'settings' ? 'active' : ''}`}
                onClick={() => setActiveTab('settings')}
              >
                <Mail size={16} className="me-2" />
                Settings
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

export default AdminNotifications;
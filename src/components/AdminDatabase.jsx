// components/admin/AdminDatabase.jsx
import React, { useState } from 'react';
import { Database, Download, Upload, RefreshCw, Search, AlertTriangle, CheckCircle, HardDrive, Activity, Settings } from 'lucide-react';

const AdminDatabase = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const databaseStats = {
    totalSize: '2.4 GB',
    tables: 45,
    connections: 23,
    uptime: '15 days',
    queriesPerSecond: 1250,
    slowQueries: 3
  };

  const recentBackups = [
    { id: 1, name: 'daily_backup_2024-09-03', size: '1.2 GB', status: 'completed', timestamp: '2024-09-03 02:00:00' },
    { id: 2, name: 'weekly_backup_2024-08-31', size: '1.1 GB', status: 'completed', timestamp: '2024-08-31 02:00:00' },
    { id: 3, name: 'monthly_backup_2024-08-01', size: '980 MB', status: 'completed', timestamp: '2024-08-01 02:00:00' }
  ];

  const slowQueries = [
    { id: 1, query: 'SELECT * FROM users WHERE last_login > ?', duration: '2.3s', executions: 1250 },
    { id: 2, query: 'SELECT COUNT(*) FROM course_enrollments GROUP BY course_id', duration: '1.8s', executions: 890 },
    { id: 3, query: 'UPDATE user_progress SET completed = 1 WHERE user_id = ?', duration: '1.2s', executions: 2100 }
  ];

  const OverviewTab = () => (
    <div className="row g-4">
      <div className="col-md-3">
        <div className="card border-0 shadow-sm h-100">
          <div className="card-body text-center">
            <div className="bg-primary text-white p-3 rounded-circle d-inline-block mb-3">
              <Database size={32} />
            </div>
            <h4 className="text-primary mb-1">{databaseStats.totalSize}</h4>
            <p className="text-muted mb-0">Database Size</p>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card border-0 shadow-sm h-100">
          <div className="card-body text-center">
            <div className="bg-success text-white p-3 rounded-circle d-inline-block mb-3">
              <HardDrive size={32} />
            </div>
            <h4 className="text-success mb-1">{databaseStats.tables}</h4>
            <p className="text-muted mb-0">Tables</p>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card border-0 shadow-sm h-100">
          <div className="card-body text-center">
            <div className="bg-info text-white p-3 rounded-circle d-inline-block mb-3">
              <Activity size={32} />
            </div>
            <h4 className="text-info mb-1">{databaseStats.connections}</h4>
            <p className="text-muted mb-0">Active Connections</p>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card border-0 shadow-sm h-100">
          <div className="card-body text-center">
            <div className="bg-warning text-white p-3 rounded-circle d-inline-block mb-3">
              <CheckCircle size={32} />
            </div>
            <h4 className="text-warning mb-1">{databaseStats.uptime}</h4>
            <p className="text-muted mb-0">Uptime</p>
          </div>
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="col-12">
        <div className="card border-0 shadow-sm">
          <div className="card-header bg-transparent">
            <h6 className="mb-0">PERFORMANCE METRICS</h6>
          </div>
          <div className="card-body">
            <div className="row g-4">
              <div className="col-md-6">
                <div className="mb-3">
                  <div className="d-flex justify-content-between mb-1">
                    <small>Queries per Second</small>
                    <small className="text-primary">{databaseStats.queriesPerSecond}</small>
                  </div>
                  <div className="progress" style={{ height: '6px' }}>
                    <div className="progress-bar bg-primary" style={{ width: '75%' }}></div>
                  </div>
                </div>
                <div className="mb-3">
                  <div className="d-flex justify-content-between mb-1">
                    <small>CPU Usage</small>
                    <small className="text-success">45%</small>
                  </div>
                  <div className="progress" style={{ height: '6px' }}>
                    <div className="progress-bar bg-success" style={{ width: '45%' }}></div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <div className="d-flex justify-content-between mb-1">
                    <small>Memory Usage</small>
                    <small className="text-info">68%</small>
                  </div>
                  <div className="progress" style={{ height: '6px' }}>
                    <div className="progress-bar bg-info" style={{ width: '68%' }}></div>
                  </div>
                </div>
                <div className="mb-0">
                  <div className="d-flex justify-content-between mb-1">
                    <small>Disk I/O</small>
                    <small className="text-warning">32%</small>
                  </div>
                  <div className="progress" style={{ height: '6px' }}>
                    <div className="progress-bar bg-warning" style={{ width: '32%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const BackupsTab = () => (
    <div className="row g-4">
      <div className="col-md-8">
        <div className="card border-0 shadow-sm">
          <div className="card-header bg-transparent d-flex justify-content-between align-items-center">
            <h6 className="mb-0">RECENT BACKUPS</h6>
            <div className="d-flex gap-2">
              <button className="btn btn-outline-primary btn-sm">
                <Upload size={14} className="me-1" /> Restore
              </button>
              <button className="btn btn-primary btn-sm">
                <Download size={14} className="me-1" /> Create Backup
              </button>
            </div>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>Backup Name</th>
                    <th>Size</th>
                    <th>Status</th>
                    <th>Created</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {recentBackups.map(backup => (
                    <tr key={backup.id}>
                      <td>
                        <div className="d-flex align-items-center">
                          <Database size={16} className="me-2 text-primary" />
                          <span>{backup.name}</span>
                        </div>
                      </td>
                      <td>{backup.size}</td>
                      <td>
                        <span className="badge bg-success">
                          <CheckCircle size={12} className="me-1" />
                          {backup.status}
                        </span>
                      </td>
                      <td>{backup.timestamp}</td>
                      <td>
                        <div className="btn-group" role="group">
                          <button className="btn btn-sm btn-outline-primary">
                            <Download size={14} />
                          </button>
                          <button className="btn btn-sm btn-outline-danger">
                            <AlertTriangle size={14} />
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
      </div>

      <div className="col-md-4">
        <div className="card border-0 shadow-sm">
          <div className="card-header bg-transparent">
            <h6 className="mb-0">BACKUP SCHEDULE</h6>
          </div>
          <div className="card-body">
            <div className="mb-3">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <span className="small">Daily Backup</span>
                <span className="badge bg-success">Active</span>
              </div>
              <small className="text-muted">Every day at 2:00 AM</small>
            </div>
            <div className="mb-3">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <span className="small">Weekly Backup</span>
                <span className="badge bg-success">Active</span>
              </div>
              <small className="text-muted">Every Sunday at 2:00 AM</small>
            </div>
            <div className="mb-0">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <span className="small">Monthly Backup</span>
                <span className="badge bg-success">Active</span>
              </div>
              <small className="text-muted">1st of each month at 2:00 AM</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const QueriesTab = () => (
    <div className="row g-4">
      <div className="col-12">
        <div className="card border-0 shadow-sm">
          <div className="card-header bg-transparent d-flex justify-content-between align-items-center">
            <h6 className="mb-0">SLOW QUERIES</h6>
            <button className="btn btn-outline-primary btn-sm">
              <RefreshCw size={14} className="me-1" /> Refresh
            </button>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>Query</th>
                    <th>Avg Duration</th>
                    <th>Executions</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {slowQueries.map(query => (
                    <tr key={query.id}>
                      <td>
                        <code className="small text-break">{query.query}</code>
                      </td>
                      <td>
                        <span className="badge bg-warning">{query.duration}</span>
                      </td>
                      <td>{query.executions.toLocaleString()}</td>
                      <td>
                        <button className="btn btn-sm btn-outline-primary">
                          <Search size={14} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
      case 'backups':
        return <BackupsTab />;
      case 'queries':
        return <QueriesTab />;
      default:
        return <OverviewTab />;
    }
  };

  return (
    <div className="p-4">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="mb-0">Database Management</h2>
          <p className="text-muted">Monitor and manage database operations</p>
        </div>
        <div className="d-flex gap-2">
          <button className="btn btn-outline-warning">
            <AlertTriangle size={16} className="me-1" /> Health Check
          </button>
          <button className="btn btn-primary">
            <Settings size={16} className="me-1" /> Settings
          </button>
        </div>
      </div>

      {/* Database Tabs */}
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
                className={`nav-link ${activeTab === 'backups' ? 'active' : ''}`}
                onClick={() => setActiveTab('backups')}
              >
                <Download size={16} className="me-2" />
                Backups
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className={`nav-link ${activeTab === 'queries' ? 'active' : ''}`}
                onClick={() => setActiveTab('queries')}
              >
                <Search size={16} className="me-2" />
                Queries
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

export default AdminDatabase;
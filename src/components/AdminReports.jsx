// components/admin/AdminReports.jsx
import React, { useState } from 'react';
import { FileText, Download, Calendar, Filter, Eye, Printer, Mail, Plus } from 'lucide-react';

const AdminReports = () => {
  const [reportType, setReportType] = useState('all');
  const [dateRange, setDateRange] = useState('30d');

  const reports = [
    {
      id: 1,
      title: 'Monthly User Activity Report',
      type: 'User Activity',
      generatedDate: '2024-09-01',
      status: 'Completed',
      size: '2.4 MB',
      description: 'Comprehensive analysis of user engagement and activity patterns'
    },
    {
      id: 2,
      title: 'Course Performance Summary',
      type: 'Course Analytics',
      generatedDate: '2024-08-28',
      status: 'Completed',
      size: '1.8 MB',
      description: 'Detailed performance metrics for all active courses'
    },
    {
      id: 3,
      title: 'Financial Report Q3 2024',
      type: 'Financial',
      generatedDate: '2024-09-02',
      status: 'Processing',
      size: '3.1 MB',
      description: 'Quarterly financial overview including revenue and expenses'
    },
    {
      id: 4,
      title: 'Student Progress Report',
      type: 'Academic',
      generatedDate: '2024-08-30',
      status: 'Completed',
      size: '4.2 MB',
      description: 'Individual student progress and achievement tracking'
    }
  ];

  const filteredReports = reports.filter(report =>
    reportType === 'all' || report.type.toLowerCase().includes(reportType.toLowerCase())
  );

  return (
    <div className="p-4">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="mb-0">Reports</h2>
          <p className="text-muted">Generate and manage comprehensive reports</p>
        </div>
        <div className="d-flex gap-2">
          <button className="btn btn-outline-secondary">
            <Filter size={16} className="me-1" /> Filter
          </button>
          <button className="btn btn-primary">
            <Plus size={16} className="me-1" /> Generate Report
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="card border-0 shadow-sm mb-4">
        <div className="card-body">
          <div className="row g-3">
            <div className="col-md-4">
              <select
                className="form-select"
                value={reportType}
                onChange={(e) => setReportType(e.target.value)}
              >
                <option value="all">All Report Types</option>
                <option value="user">User Activity</option>
                <option value="course">Course Analytics</option>
                <option value="financial">Financial</option>
                <option value="academic">Academic</option>
              </select>
            </div>
            <div className="col-md-4">
              <select
                className="form-select"
                value={dateRange}
                onChange={(e) => setDateRange(e.target.value)}
              >
                <option value="7d">Last 7 Days</option>
                <option value="30d">Last 30 Days</option>
                <option value="90d">Last 90 Days</option>
                <option value="1y">Last Year</option>
              </select>
            </div>
            <div className="col-md-4">
              <button className="btn btn-outline-primary w-100">
                <Calendar size={16} className="me-1" /> Custom Date Range
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="row g-3 mb-4">
        <div className="col-md-3">
          <div className="card border-0 bg-primary-subtle">
            <div className="card-body text-center">
              <FileText className="text-primary mb-2" size={32} />
              <h4 className="text-primary mb-1">24</h4>
              <p className="text-muted mb-0">Total Reports</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card border-0 bg-success-subtle">
            <div className="card-body text-center">
              <Download className="text-success mb-2" size={32} />
              <h4 className="text-success mb-1">18</h4>
              <p className="text-muted mb-0">Completed</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card border-0 bg-warning-subtle">
            <div className="card-body text-center">
              <Calendar className="text-warning mb-2" size={32} />
              <h4 className="text-warning mb-1">3</h4>
              <p className="text-muted mb-0">In Progress</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card border-0 bg-info-subtle">
            <div className="card-body text-center">
              <Mail className="text-info mb-2" size={32} />
              <h4 className="text-info mb-1">156 MB</h4>
              <p className="text-muted mb-0">Total Size</p>
            </div>
          </div>
        </div>
      </div>

      {/* Reports Table */}
      <div className="card border-0 shadow-sm">
        <div className="card-header bg-transparent">
          <h6 className="mb-0">GENERATED REPORTS</h6>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Report Name</th>
                  <th>Type</th>
                  <th>Generated</th>
                  <th>Status</th>
                  <th>Size</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredReports.map(report => (
                  <tr key={report.id}>
                    <td>
                      <div>
                        <h6 className="mb-1">{report.title}</h6>
                        <small className="text-muted">{report.description}</small>
                      </div>
                    </td>
                    <td>
                      <span className="badge bg-primary">{report.type}</span>
                    </td>
                    <td>{report.generatedDate}</td>
                    <td>
                      <span className={`badge ${
                        report.status === 'Completed' ? 'bg-success' :
                        report.status === 'Processing' ? 'bg-warning' : 'bg-secondary'
                      }`}>
                        {report.status}
                      </span>
                    </td>
                    <td>{report.size}</td>
                    <td>
                      <div className="btn-group" role="group">
                        <button className="btn btn-sm btn-outline-primary">
                          <Eye size={14} />
                        </button>
                        <button className="btn btn-sm btn-outline-secondary">
                          <Download size={14} />
                        </button>
                        <button className="btn btn-sm btn-outline-info">
                          <Mail size={14} />
                        </button>
                        <button className="btn btn-sm btn-outline-warning">
                          <Printer size={14} />
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

      {/* Scheduled Reports */}
      <div className="card border-0 shadow-sm mt-4">
        <div className="card-header bg-transparent d-flex justify-content-between align-items-center">
          <h6 className="mb-0">SCHEDULED REPORTS</h6>
          <button className="btn btn-outline-primary btn-sm">
            <Plus size={14} className="me-1" /> Schedule New
          </button>
        </div>
        <div className="card-body">
          <div className="row g-3">
            <div className="col-md-6">
              <div className="card border">
                <div className="card-body">
                  <h6>Weekly User Activity</h6>
                  <p className="text-muted small mb-2">Generated every Monday at 9:00 AM</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="badge bg-success">Active</span>
                    <small className="text-muted">Next: Sep 9, 2024</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card border">
                <div className="card-body">
                  <h6>Monthly Financial Summary</h6>
                  <p className="text-muted small mb-2">Generated on the 1st of each month</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="badge bg-success">Active</span>
                    <small className="text-muted">Next: Oct 1, 2024</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminReports;
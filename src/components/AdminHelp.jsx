// components/admin/AdminHelp.jsx
import React, { useState } from 'react';
import { HelpCircle, Search, MessageSquare, FileText, Users, AlertCircle, CheckCircle, Clock, BookOpen } from 'lucide-react';

const AdminHelp = () => {
  const [activeTab, setActiveTab] = useState('faq');
  const [searchTerm, setSearchTerm] = useState('');

  const faqs = [
    {
      id: 1,
      question: 'How do I add a new user to the system?',
      answer: 'Go to User Management > Add New User. Fill in the required fields and assign appropriate roles.',
      category: 'Users'
    },
    {
      id: 2,
      question: 'How to create a new course?',
      answer: 'Navigate to Course Management > Create Course. Provide course details, syllabus, and assign instructors.',
      category: 'Courses'
    },
    {
      id: 3,
      question: 'How do I generate reports?',
      answer: 'Use the Reports section to select report type, date range, and generate comprehensive analytics.',
      category: 'Reports'
    },
    {
      id: 4,
      question: 'How to configure system settings?',
      answer: 'Access System Settings to modify site configuration, security policies, and notification preferences.',
      category: 'Settings'
    }
  ];

  const supportTickets = [
    {
      id: 1,
      title: 'Database connection issue',
      status: 'open',
      priority: 'high',
      user: 'John Smith',
      created: '2024-09-03',
      category: 'Technical'
    },
    {
      id: 2,
      title: 'User import failed',
      status: 'in_progress',
      priority: 'medium',
      user: 'Sarah Johnson',
      created: '2024-09-02',
      category: 'Data'
    },
    {
      id: 3,
      title: 'Email notifications not working',
      status: 'resolved',
      priority: 'low',
      user: 'Mike Wilson',
      created: '2024-09-01',
      category: 'Communication'
    }
  ];

  const documentation = [
    {
      id: 1,
      title: 'Administrator Guide',
      description: 'Complete guide for system administrators',
      type: 'PDF',
      size: '2.4 MB',
      lastUpdated: '2024-08-15'
    },
    {
      id: 2,
      title: 'API Documentation',
      description: 'Technical documentation for API integration',
      type: 'HTML',
      size: '1.8 MB',
      lastUpdated: '2024-08-20'
    },
    {
      id: 3,
      title: 'Security Best Practices',
      description: 'Guidelines for maintaining system security',
      type: 'PDF',
      size: '956 KB',
      lastUpdated: '2024-08-25'
    }
  ];

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const FaqTab = () => (
    <div className="row g-4">
      <div className="col-12">
        <div className="card border-0 shadow-sm">
          <div className="card-header bg-blue">
            <div className="input-group">
              <span className="input-group-text">
                <Search size={16} />
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Search FAQs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <div className="card-body">
            <div className="accordion" id="faqAccordion">
              {filteredFaqs.map(faq => (
                <div key={faq.id} className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#faq${faq.id}`}
                    >
                      <div className="d-flex justify-content-between align-items-center w-100 me-3">
                        <span>{faq.question}</span>
                        <span className="badge bg-primary">{faq.category}</span>
                      </div>
                    </button>
                  </h2>
                  <div id={`faq${faq.id}`} className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      {faq.answer}
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

  const SupportTab = () => (
    <div className="row g-4">
      <div className="col-12">
        <div className="card border-0 shadow-sm">
          <div className="card-header bg-transparent d-flex justify-content-between align-items-center">
            <h6 className="mb-0">SUPPORT TICKETS</h6>
            <button className="btn btn-primary btn-sm">
              <MessageSquare size={14} className="me-1" /> New Ticket
            </button>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>Ticket</th>
                    <th>Status</th>
                    <th>Priority</th>
                    <th>User</th>
                    <th>Created</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {supportTickets.map(ticket => (
                    <tr key={ticket.id}>
                      <td>
                        <div>
                          <h6 className="mb-1">{ticket.title}</h6>
                          <small className="text-muted">{ticket.category}</small>
                        </div>
                      </td>
                      <td>
                        <span className={`badge ${
                          ticket.status === 'open' ? 'bg-danger' :
                          ticket.status === 'in_progress' ? 'bg-warning' : 'bg-success'
                        }`}>
                          {ticket.status === 'in_progress' ? 'In Progress' : ticket.status}
                        </span>
                      </td>
                      <td>
                        <span className={`badge ${
                          ticket.priority === 'high' ? 'bg-danger' :
                          ticket.priority === 'medium' ? 'bg-warning' : 'bg-info'
                        }`}>
                          {ticket.priority}
                        </span>
                      </td>
                      <td>{ticket.user}</td>
                      <td>{ticket.created}</td>
                      <td>
                        <button className="btn btn-sm btn-outline-primary">
                          <MessageSquare size={14} />
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

  const DocumentationTab = () => (
    <div className="row g-4">
      <div className="col-12">
        <div className="card border-0 shadow-sm">
          <div className="card-header bg-transparent">
            <h6 className="mb-0">DOCUMENTATION</h6>
          </div>
          <div className="card-body">
            <div className="row g-3">
              {documentation.map(doc => (
                <div key={doc.id} className="col-md-4">
                  <div className="card border h-100">
                    <div className="card-body">
                      <div className="d-flex align-items-center mb-2">
                        <FileText size={20} className="text-primary me-2" />
                        <h6 className="card-title mb-0">{doc.title}</h6>
                      </div>
                      <p className="card-text small text-muted">{doc.description}</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <small className="text-muted">
                          {doc.type} • {doc.size}
                        </small>
                        <button className="btn btn-sm btn-outline-primary">
                          <BookOpen size={14} />
                        </button>
                      </div>
                      <small className="text-muted">Updated: {doc.lastUpdated}</small>
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

  const renderTabContent = () => {
    switch (activeTab) {
      case 'faq':
        return <FaqTab />;
      case 'support':
        return <SupportTab />;
      case 'docs':
        return <DocumentationTab />;
      default:
        return <FaqTab />;
    }
  };

  return (
    <div className="p-4">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="mb-0">Help & Support</h2>
          <p className="text-muted">Find answers and get support</p>
        </div>
        <div className="d-flex gap-2">
          <button className="btn btn-outline-info">
            <Users size={16} className="me-1" /> Contact Support
          </button>
          <button className="btn btn-primary">
            <MessageSquare size={16} className="me-1" /> New Ticket
          </button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="row g-3 mb-4">
        <div className="col-md-3">
          <div className="card border-0 bg-primary-subtle">
            <div className="card-body text-center">
              <HelpCircle className="text-primary mb-2" size={32} />
              <h4 className="text-primary mb-1">45</h4>
              <p className="text-muted mb-0">FAQ Articles</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card border-0 bg-warning-subtle">
            <div className="card-body text-center">
              <Clock className="text-warning mb-2" size={32} />
              <h4 className="text-warning mb-1">8</h4>
              <p className="text-muted mb-0">Open Tickets</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card border-0 bg-success-subtle">
            <div className="card-body text-center">
              <CheckCircle className="text-success mb-2" size={32} />
              <h4 className="text-success mb-1">92%</h4>
              <p className="text-muted mb-0">Resolution Rate</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card border-0 bg-info-subtle">
            <div className="card-body text-center">
              <FileText className="text-info mb-2" size={32} />
              <h4 className="text-info mb-1">12</h4>
              <p className="text-muted mb-0">Documents</p>
            </div>
          </div>
        </div>
      </div>

      {/* Help Tabs */}
      <div className="card border-0 shadow-sm">
        <div className="card-header bg-blue border-0">
          <ul className="nav nav-tabs" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className={`nav-link ${activeTab === 'faq' ? 'active' : ''}`}
                onClick={() => setActiveTab('faq')}
              >
                <HelpCircle size={16} className="me-2" />
                FAQ
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className={`nav-link ${activeTab === 'support' ? 'active' : ''}`}
                onClick={() => setActiveTab('support')}
              >
                <MessageSquare size={16} className="me-2" />
                Support
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className={`nav-link ${activeTab === 'docs' ? 'active' : ''}`}
                onClick={() => setActiveTab('docs')}
              >
                <FileText size={16} className="me-2" />
                Documentation
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

export default AdminHelp;
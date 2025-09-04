// components/admin/AdminUserManagement.jsx
import React, { useState } from 'react';
import { 
  Plus, Eye, Edit, Trash2, Search, Filter, Download, Upload, 
  Mail, Phone, MapPin, Calendar, Users, CheckCircle, AlertTriangle 
} from 'lucide-react';

const AdminUserManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [showUserModal, setShowUserModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const [users] = useState([
    { 
      id: 1, 
      name: 'John Smith', 
      role: 'Student', 
      email: 'john@email.com', 
      phone: '+1-555-0123',
      status: 'Active', 
      joinDate: '2024-01-15', 
      courses: 3,
      lastLogin: '2024-09-03',
      location: 'New York, USA'
    },
    { 
      id: 2, 
      name: 'Sarah Johnson', 
      role: 'Staff', 
      email: 'sarah@email.com', 
      phone: '+1-555-0124',
      status: 'Active', 
      joinDate: '2023-09-10', 
      courses: 5,
      lastLogin: '2024-09-02',
      location: 'California, USA'
    },
    { 
      id: 3, 
      name: 'Mike Wilson', 
      role: 'Student', 
      email: 'mike@email.com', 
      phone: '+1-555-0125',
      status: 'Pending', 
      joinDate: '2024-02-20', 
      courses: 1,
      lastLogin: 'Never',
      location: 'Texas, USA'
    },
    { 
      id: 4, 
      name: 'Emily Davis', 
      role: 'Student', 
      email: 'emily@email.com', 
      phone: '+1-555-0126',
      status: 'Active', 
      joinDate: '2024-01-08', 
      courses: 4,
      lastLogin: '2024-09-01',
      location: 'Florida, USA'
    },
    { 
      id: 5, 
      name: 'Robert Brown', 
      role: 'Admin', 
      email: 'robert@email.com', 
      phone: '+1-555-0127',
      status: 'Active', 
      joinDate: '2023-05-12', 
      courses: 0,
      lastLogin: '2024-09-03',
      location: 'Illinois, USA'
    },
  ]);

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = selectedFilter === 'all' || user.role.toLowerCase() === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  const UserDetailModal = ({ user, isOpen, onClose }) => {
    if (!isOpen || !user) return null;

    return (
      <div className="modal show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">User Details</h5>
              <button type="button" className="btn-close" onClick={onClose}></button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-md-4 text-center">
                  <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" 
                       style={{ width: '80px', height: '80px', fontSize: '32px', fontWeight: 'bold' }}>
                    {user.name.charAt(0)}
                  </div>
                  <h5>{user.name}</h5>
                  <span className={`badge ${
                    user.role === 'Admin' ? 'bg-danger' : 
                    user.role === 'Staff' ? 'bg-info' : 'bg-primary'
                  }`}>
                    {user.role}
                  </span>
                </div>
                <div className="col-md-8">
                  <div className="row g-3">
                    <div className="col-6">
                      <label className="form-label text-muted small">Email</label>
                      <div className="d-flex align-items-center">
                        <Mail size={16} className="me-2 text-muted" />
                        <span>{user.email}</span>
                      </div>
                    </div>
                    <div className="col-6">
                      <label className="form-label text-muted small">Phone</label>
                      <div className="d-flex align-items-center">
                        <Phone size={16} className="me-2 text-muted" />
                        <span>{user.phone}</span>
                      </div>
                    </div>
                    <div className="col-6">
                      <label className="form-label text-muted small">Location</label>
                      <div className="d-flex align-items-center">
                        <MapPin size={16} className="me-2 text-muted" />
                        <span>{user.location}</span>
                      </div>
                    </div>
                    <div className="col-6">
                      <label className="form-label text-muted small">Join Date</label>
                      <div className="d-flex align-items-center">
                        <Calendar size={16} className="me-2 text-muted" />
                        <span>{user.joinDate}</span>
                      </div>
                    </div>
                    <div className="col-6">
                      <label className="form-label text-muted small">Status</label>
                      <div className="d-flex align-items-center">
                        <CheckCircle size={16} className="me-2 text-success" />
                        <span className={`badge ${user.status === 'Active' ? 'bg-success' : 'bg-warning'}`}>
                          {user.status}
                        </span>
                      </div>
                    </div>
                    <div className="col-6">
                      <label className="form-label text-muted small">Last Login</label>
                      <div className="d-flex align-items-center">
                        <Calendar size={16} className="me-2 text-muted" />
                        <span>{user.lastLogin}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={onClose}>Close</button>
              <button type="button" className="btn btn-warning">
                <Edit size={16} className="me-1" />
                Edit User
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="p-4">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="mb-0">User Management</h2>
          <p className="text-muted mb-0">Manage students, staff, and administrators</p>
        </div>
        <div className="d-flex gap-2">
          <button className="btn btn-outline-secondary btn-sm">
            <Download size={16} className="me-1" />
            Export
          </button>
          <button className="btn btn-outline-secondary btn-sm">
            <Upload size={16} className="me-1" />
            Import
          </button>
          <button className="btn btn-primary">
            <Plus size={16} className="me-1" />
            Add New User
          </button>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="card border-0 shadow-sm mb-4">
        <div className="card-body">
          <div className="row g-3">
            <div className="col-md-6">
              <div className="input-group">
                <span className="input-group-text">
                  <Search size={16} />
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search users by name or email..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div className="col-md-3">
              <select 
                className="form-select"
                value={selectedFilter}
                onChange={(e) => setSelectedFilter(e.target.value)}
              >
                <option value="all">All Roles</option>
                <option value="student">Students</option>
                <option value="staff">Staff</option>
                <option value="admin">Admins</option>
              </select>
            </div>
            <div className="col-md-3">
              <button className="btn btn-outline-secondary w-100">
                <Filter size={16} className="me-1" />
                More Filters
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* User Statistics */}
      <div className="row g-3 mb-4">
        <div className="col-md-3">
          <div className="card border-0 bg-primary-subtle">
            <div className="card-body text-center">
              <Users className="text-primary mb-2" size={32} />
              <h4 className="text-primary mb-1">{users.filter(u => u.role === 'Student').length}</h4>
              <p className="text-muted mb-0">Students</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card border-0 bg-success-subtle">
            <div className="card-body text-center">
              <Users className="text-success mb-2" size={32} />
              <h4 className="text-success mb-1">{users.filter(u => u.role === 'Staff').length}</h4>
              <p className="text-muted mb-0">Staff Members</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card border-0 bg-warning-subtle">
            <div className="card-body text-center">
              <Users className="text-warning mb-2" size={32} />
              <h4 className="text-warning mb-1">{users.filter(u => u.role === 'Admin').length}</h4>
              <p className="text-muted mb-0">Administrators</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card border-0 bg-info-subtle">
            <div className="card-body text-center">
              <CheckCircle className="text-info mb-2" size={32} />
              <h4 className="text-info mb-1">{users.filter(u => u.status === 'Active').length}</h4>
              <p className="text-muted mb-0">Active Users</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Users Table */}
      <div className="card border-0 shadow-sm">
        <div className="card-header bg-transparent">
          <h6 className="mb-0">USER DIRECTORY</h6>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>User</th>
                  <th>Role</th>
                  <th>Status</th>
                  <th>Join Date</th>
                  <th>Courses</th>
                  <th>Last Login</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map(user => (
                  <tr key={user.id}>
                    <td>
                      <div className="d-flex align-items-center">
                        <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" 
                             style={{ width: '40px', height: '40px', fontSize: '14px', fontWeight: 'bold' }}>
                          {user.name.charAt(0)}
                        </div>
                        <div>
                          <h6 className="mb-0">{user.name}</h6>
                          <small className="text-muted">{user.email}</small>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span className={`badge ${
                        user.role === 'Admin' ? 'bg-danger' : 
                        user.role === 'Staff' ? 'bg-info' : 'bg-primary'
                      }`}>
                        {user.role}
                      </span>
                    </td>
                    <td>
                      <span className={`badge ${user.status === 'Active' ? 'bg-success' : 'bg-warning'}`}>
                        {user.status}
                      </span>
                    </td>
                    <td>{user.joinDate}</td>
                    <td>
                      <span className="badge bg-light text-dark">{user.courses}</span>
                    </td>
                    <td>
                      <small className={user.lastLogin === 'Never' ? 'text-muted' : 'text-success'}>
                        {user.lastLogin}
                      </small>
                    </td>
                    <td>
                      <div className="btn-group" role="group">
                        <button 
                          className="btn btn-sm btn-outline-primary"
                          onClick={() => {
                            setSelectedUser(user);
                            setShowUserModal(true);
                          }}
                        >
                          <Eye size={14} />
                        </button>
                        <button className="btn btn-sm btn-outline-warning">
                          <Edit size={14} />
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

      {/* User Detail Modal */}
      <UserDetailModal 
        user={selectedUser}
        isOpen={showUserModal}
        onClose={() => {
          setShowUserModal(false);
          setSelectedUser(null);
        }}
      />
    </div>
  );
};

export default AdminUserManagement;
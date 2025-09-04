// components/admin/AdminCourseManagement.jsx
import React, { useState } from 'react';
import { 
  Plus, Eye, Edit, Trash2, Upload, Download, Search, Filter,
  BookOpen, Users, Star, Play, Pause
} from 'lucide-react';

const AdminCourseManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [showCourseModal, setShowCourseModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const [courses] = useState([
    { 
      id: 1, 
      title: 'Robotics Fundamentals', 
      instructor: 'Dr. Smith', 
      students: 45, 
      status: 'Active', 
      category: 'Robotics', 
      duration: '12 weeks',
      level: 'Beginner',
      rating: 4.8,
      price: '$299',
      startDate: '2024-01-15',
      description: 'Learn the basics of robotics including hardware assembly, programming, and sensors.',
      modules: 12,
      assignments: 8,
      completionRate: 87
    },
    { 
      id: 2, 
      title: 'Advanced Scratch Programming', 
      instructor: 'Prof. Johnson', 
      students: 32, 
      status: 'Active', 
      category: 'Programming', 
      duration: '8 weeks',
      level: 'Intermediate',
      rating: 4.6,
      price: '$199',
      startDate: '2024-02-01',
      description: 'Advanced visual programming concepts using Scratch for game development.',
      modules: 8,
      assignments: 6,
      completionRate: 92
    },
    { 
      id: 3, 
      title: 'Digital Innovation Lab', 
      instructor: 'Dr. Wilson', 
      students: 28, 
      status: 'Draft', 
      category: 'Innovation', 
      duration: '16 weeks',
      level: 'Advanced',
      rating: 0,
      price: '$399',
      startDate: '2024-03-01',
      description: 'Explore cutting-edge technologies including VR, AI, and IoT.',
      modules: 16,
      assignments: 12,
      completionRate: 0
    },
    { 
      id: 4, 
      title: 'STEM Research Methods', 
      instructor: 'Prof. Davis', 
      students: 15, 
      status: 'Active', 
      category: 'Research', 
      duration: '10 weeks',
      level: 'Advanced',
      rating: 4.9,
      price: '$249',
      startDate: '2024-01-20',
      description: 'Learn scientific research methodologies and data analysis techniques.',
      modules: 10,
      assignments: 5,
      completionRate: 78
    },
    { 
      id: 5, 
      title: 'Introduction to AI', 
      instructor: 'Dr. Chen', 
      students: 67, 
      status: 'Active', 
      category: 'AI', 
      duration: '14 weeks',
      level: 'Beginner',
      rating: 4.7,
      price: '$349',
      startDate: '2024-01-10',
      description: 'Fundamentals of artificial intelligence and machine learning.',
      modules: 14,
      assignments: 10,
      completionRate: 84
    },
  ]);

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || course.category.toLowerCase() === categoryFilter;
    const matchesStatus = statusFilter === 'all' || course.status.toLowerCase() === statusFilter;
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const CourseDetailModal = ({ course, isOpen, onClose }) => {
    if (!isOpen || !course) return null;

    return (
      <div className="modal show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
        <div className="modal-dialog modal-xl modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Course Details</h5>
              <button type="button" className="btn-close" onClick={onClose}></button>
            </div>
            <div className="modal-body">
              <h4>{course.title}</h4>
              <p className="text-muted">{course.description}</p>
              <ul className="list-unstyled">
                <li><strong>Instructor:</strong> {course.instructor}</li>
                <li><strong>Duration:</strong> {course.duration}</li>
                <li><strong>Level:</strong> {course.level}</li>
                <li><strong>Price:</strong> {course.price}</li>
                <li><strong>Start Date:</strong> {course.startDate}</li>
                <li><strong>Students:</strong> {course.students}</li>
              </ul>
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={onClose}>Close</button>
              <button className="btn btn-warning">
                <Edit size={16} className="me-1" />
                Edit Course
              </button>
              {course.status === 'Active' ? (
                <button className="btn btn-danger">
                  <Pause size={16} className="me-1" />
                  Pause
                </button>
              ) : (
                <button className="btn btn-success">
                  <Play size={16} className="me-1" />
                  Activate
                </button>
              )}
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
          <h2 className="mb-0">Course Management</h2>
          <p className="text-muted">Create and manage STEM courses</p>
        </div>
        <div className="d-flex gap-2">
          <button className="btn btn-outline-secondary btn-sm">
            <Upload size={16} className="me-1" /> Import
          </button>
          <button className="btn btn-outline-secondary btn-sm">
            <Download size={16} className="me-1" /> Export
          </button>
          <button className="btn btn-primary btn-sm">
            <Plus size={16} className="me-1" /> Create Course
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="card border-0 shadow-sm mb-4">
        <div className="card-body">
          <div className="row g-3">
            <div className="col-md-4">
              <div className="input-group">
                <span className="input-group-text"><Search size={16} /></span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search courses..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div className="col-md-3">
              <select 
                className="form-select"
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
              >
                <option value="all">All Categories</option>
                <option value="robotics">Robotics</option>
                <option value="programming">Programming</option>
                <option value="innovation">Innovation</option>
                <option value="research">Research</option>
                <option value="ai">AI</option>
              </select>
            </div>
            <div className="col-md-3">
              <select 
                className="form-select"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="draft">Draft</option>
                <option value="archived">Archived</option>
              </select>
            </div>
            <div className="col-md-2">
              <button className="btn btn-outline-secondary w-100">
                <Filter size={16} className="me-1" /> More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="row g-4">
        {filteredCourses.map(course => (
          <div key={course.id} className="col-lg-6 col-xl-4">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{course.title}</h5>
                <p className="text-muted mb-2">{course.instructor}</p>
                <p className="small mb-3">{course.duration} • {course.level}</p>
                
                <div className="d-flex justify-content-between mb-3">
                  <span><Users size={16} className="me-1" /> {course.students}</span>
                  <span><Star size={16} className="text-warning me-1" fill="currentColor" /> {course.rating || 'N/A'}</span>
                </div>

                <div className="mt-auto d-flex gap-2">
                  <button 
                    className="btn btn-sm btn-outline-primary flex-fill"
                    onClick={() => { setSelectedCourse(course); setShowCourseModal(true); }}
                  >
                    <Eye size={14} className="me-1" /> View
                  </button>
                  <button className="btn btn-sm btn-outline-warning flex-fill">
                    <Edit size={14} className="me-1" /> Edit
                  </button>
                  <button className="btn btn-sm btn-outline-danger flex-fill">
                    <Trash2 size={14} className="me-1" /> Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      <CourseDetailModal 
        course={selectedCourse} 
        isOpen={showCourseModal} 
        onClose={() => setShowCourseModal(false)} 
      />
    </div>
  );
};

export default AdminCourseManagement;
// components/admin/AdminCourseManagement.jsx
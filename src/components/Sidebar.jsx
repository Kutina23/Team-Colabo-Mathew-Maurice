// components/Sidebar.jsx
import React, { useState } from 'react';
import { 
  LayoutDashboard, Users, BookOpen, Settings, GraduationCap, Award, 
  BarChart3, FileText, Calendar, MessageSquare, HelpCircle, LogOut,
  User, Code, Cpu, Lightbulb, School, ClipboardList, TrendingUp,
  Video, Library, Bell, Shield, Database, PieChart, Activity
} from 'lucide-react';

const Sidebar = ({ role = 'admin', activePage, setActivePage, onToggle }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleToggle = () => {
    const newCollapsedState = !isCollapsed;
    setIsCollapsed(newCollapsedState);
    if (onToggle) {
      onToggle(newCollapsedState);
    }
  };

  const roleConfigs = {
    admin: {
      title: 'Admin Panel',
      subtitle: 'University Management',
      avatar: 'A',
      bgColor: 'bg-primary',
      menuItems: [
        { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard size={18} />, active: true },
        { id: 'users', label: 'User Management', icon: <Users size={18} /> },
        { id: 'courses', label: 'Course Management', icon: <BookOpen size={18} /> },
        { id: 'analytics', label: 'Analytics', icon: <BarChart3 size={18} /> },
        { id: 'reports', label: 'Reports', icon: <FileText size={18} /> },
        { id: 'settings', label: 'System Settings', icon: <Settings size={18} /> },
        { id: 'security', label: 'Security', icon: <Shield size={18} /> },
        { id: 'database', label: 'Database', icon: <Database size={18} /> },
        { id: 'notifications', label: 'Notifications', icon: <Bell size={18} /> },
        { id: 'help', label: 'Help & Support', icon: <HelpCircle size={18} /> }
      ]
    },
    student: {
      title: 'Student Portal',
      subtitle: 'Learning Dashboard',
      avatar: 'S',
      bgColor: 'bg-success',
      menuItems: [
        { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard size={18} />, active: true },
        { id: 'courses', label: 'My Courses', icon: <BookOpen size={18} /> },
        { id: 'robotics', label: 'Robotics Lab', icon: <Cpu size={18} /> },
        { id: 'scratch', label: 'Scratch Studio', icon: <Code size={18} /> },
        { id: 'projects', label: 'My Projects', icon: <Lightbulb size={18} /> },
        { id: 'progress', label: 'Progress Tracking', icon: <TrendingUp size={18} /> },
        { id: 'achievements', label: 'Achievements', icon: <Award size={18} /> },
        { id: 'calendar', label: 'Schedule', icon: <Calendar size={18} /> },
        { id: 'resources', label: 'Learning Resources', icon: <Library size={18} /> },
        { id: 'community', label: 'Community', icon: <Users size={18} /> },
        { id: 'help', label: 'Get Help', icon: <HelpCircle size={18} /> }
      ]
    },
    staff: {
      title: 'Staff Portal',
      subtitle: 'Teaching Dashboard',
      avatar: 'T',
      bgColor: 'bg-warning',
      menuItems: [
        { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard size={18} />, active: true },
        { id: 'classes', label: 'My Classes', icon: <School size={18} /> },
        { id: 'students', label: 'Student Management', icon: <Users size={18} /> },
        { id: 'assignments', label: 'Assignments', icon: <ClipboardList size={18} /> },
        { id: 'grading', label: 'Grading Center', icon: <Award size={18} /> },
        { id: 'resources', label: 'Teaching Resources', icon: <Library size={18} /> },
        { id: 'videos', label: 'Video Lessons', icon: <Video size={18} /> },
        { id: 'performance', label: 'Class Performance', icon: <PieChart size={18} /> },
        { id: 'calendar', label: 'Class Schedule', icon: <Calendar size={18} /> },
        { id: 'messages', label: 'Messages', icon: <MessageSquare size={18} /> },
        { id: 'profile', label: 'My Profile', icon: <User size={18} /> }
      ]
    }
  };

  const config = roleConfigs[role];

  return (
    <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      {/* Sidebar Header */}
      <div className="sidebar-header">
        <div className="d-flex align-items-center">
          <div className={`sidebar-avatar ${config.bgColor} text-white`}>
            {config.avatar}
          </div>
          {!isCollapsed && (
            <div className="sidebar-info">
              <h6 className="sidebar-title">{config.title}</h6>
              <small className="sidebar-subtitle">{config.subtitle}</small>
            </div>
          )}
        </div>
        
        <button
          className="btn btn-sm btn-outline-light sidebar-toggle"
          onClick={handleToggle}
        >
          {isCollapsed ? '→' : '←'}
        </button>
      </div>

      {/* Navigation Menu */}
      <nav className="sidebar-nav">
        <ul className="nav flex-column">
          {config.menuItems.map((item) => (
            <li key={item.id} className="nav-item">
              <button
                className={`nav-link ${activePage === item.id ? 'active' : ''}`}
                onClick={() => setActivePage(item.id)}
              >
                <span className="nav-icon">{item.icon}</span>
                {!isCollapsed && <span className="nav-text">{item.label}</span>}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Sidebar Footer */}
      <div className="sidebar-footer">
        <button className="nav-link logout-btn">
          <span className="nav-icon"><LogOut size={18} /></span>
          {!isCollapsed && <span className="nav-text">Logout</span>}
        </button>
      </div>

      <style jsx>{`
        .sidebar {
          width: 280px;
          height: 100vh;
          background: linear-gradient(180deg, #17a2b8 0%, #138496 100%);
          position: fixed;
          left: 0;
          top: 0;
          z-index: 1000;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          box-shadow: 4px 0 15px rgba(0, 0, 0, 0.1);
        }

        .sidebar.collapsed {
          width: 70px;
        }

        .sidebar-header {
          padding: 20px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          justify-content: space-between;
          align-items: center;
          min-height: 80px;
        }

        .sidebar-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 16px;
          flex-shrink: 0;
        }

        .sidebar-info {
          margin-left: 12px;
          color: white;
        }

        .sidebar-title {
          margin: 0;
          font-size: 14px;
          font-weight: 600;
        }

        .sidebar-subtitle {
          color: rgba(255, 255, 255, 0.7);
          font-size: 12px;
        }

        .sidebar-toggle {
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: white;
          padding: 4px 8px;
          font-size: 12px;
        }

        .sidebar-toggle:hover {
          background-color: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.3);
          color: white;
        }

        .sidebar-nav {
          flex: 1;
          padding: 10px 0;
          overflow-y: auto;
        }

        .nav-item {
          margin: 2px 10px;
        }

        .nav-link {
          display: flex;
          align-items: center;
          padding: 12px 15px;
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          border-radius: 8px;
          transition: all 0.2s ease;
          border: none;
          background: none;
          width: 100%;
          text-align: left;
          font-size: 14px;
        }

        .nav-link:hover {
          background-color: rgba(255, 255, 255, 0.1);
          color: white;
          transform: translateX(2px);
        }

        .nav-link.active {
          background-color: rgba(255, 255, 255, 0.2);
          color: white;
          font-weight: 600;
        }

        .nav-icon {
          display: flex;
          align-items: center;
          margin-right: 12px;
          flex-shrink: 0;
        }

        .collapsed .nav-icon {
          margin-right: 0;
          justify-content: center;
        }

        .nav-text {
          white-space: nowrap;
          overflow: hidden;
        }

        .sidebar-footer {
          padding: 15px 10px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .logout-btn {
          color: rgba(255, 255, 255, 0.7);
          margin: 2px 0;
        }

        .logout-btn:hover {
          background-color: rgba(220, 53, 69, 0.2);
          color: #ff6b6b;
        }

        /* Scrollbar styling */
        .sidebar-nav::-webkit-scrollbar {
          width: 4px;
        }

        .sidebar-nav::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
        }

        .sidebar-nav::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.3);
          border-radius: 2px;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .sidebar {
            transform: translateX(-100%);
          }
          
          .sidebar.show {
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Sidebar;
// App.jsx
import React, { useState } from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import ProgramsSection from './components/ProgramSection';
import RoboticsSection from './components/RoboticsSection';
import ScratchSection from './components/ScratchSection';
import CommunitySection from './components/CommunitySection';
import Footer from './components/Footer';
import AdminDashboard from './components/AdminDashboard';
import StudentDashboard from './components/StudentDashboard';
import StaffDashboard from './components/StaffDashboard';
import './App.css';

const App = () => {
  const [currentRole, setCurrentRole] = useState('visitor');

  const RoleBasedDashboard = () => {
    if (currentRole === 'visitor') return null;

    const dashboards = {
      admin: <AdminDashboard />,
      student: <StudentDashboard />,
      staff: <StaffDashboard />
    };

    return dashboards[currentRole];
  };

  return (
    <div className="App">
      {/* Bootstrap CSS CDN */}
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css"
        rel="stylesheet"
      />

      <Navigation currentRole={currentRole} setCurrentRole={setCurrentRole} />
      
      {currentRole === 'visitor' ? (
        <>
          <HeroSection />
          <ProgramsSection />
          <RoboticsSection />
          <ScratchSection />
          <CommunitySection />
          <Footer />
        </>
      ) : (
        <RoleBasedDashboard />
      )}
    </div>
  );
};

export default App;
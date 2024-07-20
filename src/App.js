import React from 'react';
import Navbar from './components/Navbar';
import ProfileCard from './components/ProfileCard';
import BackgroundAnimation from './components/BackgroundAnimation';
import { personalData } from './data/personalData';
import SocialIcons from './components/SocialIcons';

function App() {
  return (
    
    <div className="bg-base-100 min-h-screen relative"> {/* Thêm lại relative ở đây */}
      <BackgroundAnimation />
      <div className="flex items-center justify-center h-screen absolute top-0 left-0 w-full"> {/* Giữ nguyên phần này */}
        <ProfileCard data={personalData} />
        <SocialIcons links={personalData.links} /> {/* Đặt SocialIcons bên ngoài ProfileCard */}
      </div>
    </div>
  );
}

export default App;
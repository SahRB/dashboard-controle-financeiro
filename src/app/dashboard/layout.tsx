import React from 'react';
import Sidebar from '../components/Sidebar';


const DefaultLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4 lg:pl-[250px] text-gray-300">
        {children}
      </div>
    </div>
  );
};

export default DefaultLayout;

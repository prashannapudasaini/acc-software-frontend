import React from 'react';
import Sidebar from './Sidebar';
import TopNav from './TopNav';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex font-sans">
      <Sidebar />
      
      {/* Main content wrapper offsets the 64-width (16rem) fixed sidebar */}
      <div className="flex-1 ml-64 flex flex-col min-h-screen">
        <TopNav />
        
        {/* Main Workspace where Dashboard, Invoices, etc. will render */}
        <main className="flex-1 p-8">
          {children}
        </main>
      </div>

      {/* Global Floating Action Button (FAB) matching the bottom right of the image */}
      <button className="fixed bottom-8 right-8 w-14 h-14 bg-blue-600 rounded-full shadow-lg flex items-center justify-center text-white text-2xl hover:bg-blue-700 transition-colors hover:shadow-xl z-50">
        +
      </button>
    </div>
  );
};

export default Layout;
import React from 'react';

const TopNav = () => {
  return (
    <header className="h-20 bg-white border-b border-gray-200 flex items-center justify-between px-8 sticky top-0 z-10">
      
      {/* Search Bar */}
      <div className="flex-1 max-w-2xl">
        <div className="relative flex items-center">
          <span className="absolute left-4 text-gray-400 text-lg">
            🔍
          </span>
          <input 
            type="text" 
            placeholder="Search anything..." 
            className="w-full pl-12 pr-16 py-2.5 bg-gray-50 border border-transparent rounded-lg focus:outline-none focus:bg-white focus:border-gray-300 focus:ring-4 focus:ring-blue-50 transition-all text-sm text-gray-900 placeholder-gray-400"
          />
          <div className="absolute right-3 flex items-center gap-1">
            <kbd className="px-2 py-1 text-[10px] font-semibold text-gray-500 bg-white border border-gray-200 rounded shadow-sm">⌘</kbd>
            <kbd className="px-2 py-1 text-[10px] font-semibold text-gray-500 bg-white border border-gray-200 rounded shadow-sm">K</kbd>
          </div>
        </div>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-4 ml-8">
        
        {/* Icon Buttons */}
        <div className="flex items-center gap-3">
          <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors">
            +
          </button>
          
          <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors relative">
            🔔
            <span className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4 min-w-[18px] h-[18px] bg-red-500 border-2 border-white rounded-full flex items-center justify-center text-[10px] font-bold text-white px-1">
              12
            </span>
          </button>
          
          <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors relative">
            ✉️
            <span className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4 min-w-[18px] h-[18px] bg-red-500 border-2 border-white rounded-full flex items-center justify-center text-[10px] font-bold text-white px-1">
              5
            </span>
          </button>

          <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors">
            🌐
          </button>
        </div>

        {/* Divider */}
        <div className="w-px h-8 bg-gray-200 mx-2"></div>

        {/* User Profile */}
        <div className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity">
          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center overflow-hidden border border-gray-200">
             {/* Placeholder for actual image */}
             <span className="text-xl">👨‍💼</span>
          </div>
          <div className="hidden md:block text-left">
            <p className="text-sm font-bold text-gray-900 leading-tight">John Doe</p>
            <p className="text-xs text-gray-500 font-medium">System Admin</p>
          </div>
          <span className="text-gray-400 text-xs ml-1">▼</span>
        </div>
      </div>
    </header>
  );
};

export default TopNav;
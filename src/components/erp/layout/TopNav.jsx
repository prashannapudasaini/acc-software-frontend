import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const TopNav = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchRef = useRef(null);
  const navigate = useNavigate();

  // Close search dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setIsSearchOpen(e.target.value.length > 0);
  };

  const handleResultClick = (path) => {
    navigate(path);
    setIsSearchOpen(false);
    setSearchQuery('');
  };

  return (
    <header className="h-20 bg-white border-b border-gray-200 flex items-center justify-between px-8 sticky top-0 z-10">
      
      {/* Functional Search Bar */}
      <div className="flex-1 max-w-2xl relative" ref={searchRef}>
        <div className="relative flex items-center">
          <span className="absolute left-4 text-gray-400 text-lg">🔍</span>
          <input 
            type="text" 
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search anything..." 
            className="w-full pl-12 pr-16 py-2.5 bg-gray-50 border border-transparent rounded-lg focus:outline-none focus:bg-white focus:border-gray-300 focus:ring-4 focus:ring-blue-50 transition-all text-sm text-gray-900 placeholder-gray-400"
          />
          <div className="absolute right-3 flex items-center gap-1">
            <kbd className="px-2 py-1 text-[10px] font-semibold text-gray-500 bg-white border border-gray-200 rounded shadow-sm">⌘</kbd>
            <kbd className="px-2 py-1 text-[10px] font-semibold text-gray-500 bg-white border border-gray-200 rounded shadow-sm">K</kbd>
          </div>
        </div>

        {/* Search Results Dropdown */}
        {isSearchOpen && (
          <div className="absolute top-full left-0 w-full mt-2 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden z-50">
            <div className="p-2">
              <div className="text-xs font-semibold text-gray-400 uppercase px-3 py-2">Invoices</div>
              <div 
                className="px-3 py-2 hover:bg-gray-50 rounded-lg cursor-pointer flex justify-between items-center"
                onClick={() => handleResultClick('/invoices')}
              >
                <div>
                  <span className="text-sm font-medium text-gray-900">INV-2025-00124</span>
                  <p className="text-xs text-gray-500">Sarah Johnson</p>
                </div>
                <span className="text-xs font-medium text-gray-400">NRs. 2,850.00</span>
              </div>
              
              <div className="text-xs font-semibold text-gray-400 uppercase px-3 py-2 mt-2">Customers</div>
              <div 
                className="px-3 py-2 hover:bg-gray-50 rounded-lg cursor-pointer flex items-center gap-3"
                onClick={() => handleResultClick('/customers')}
              >
                <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-bold">T</div>
                <span className="text-sm font-medium text-gray-900">TechCorp Solutions</span>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 border-t border-gray-100 text-xs text-center text-blue-600 cursor-pointer hover:bg-gray-100 font-medium">
              View all results for "{searchQuery}"
            </div>
          </div>
        )}
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-4 ml-8">
        <div className="flex items-center gap-3">
          <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors">+</button>
          <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors relative">
            🔔<span className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4 min-w-[18px] h-[18px] bg-red-500 border-2 border-white rounded-full flex items-center justify-center text-[10px] font-bold text-white px-1">12</span>
          </button>
        </div>
        <div className="w-px h-8 bg-gray-200 mx-2"></div>
        <div className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity">
          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center border border-gray-200 text-xl">👨‍💼</div>
          <div className="hidden md:block text-left">
            <p className="text-sm font-bold text-gray-900 leading-tight">John Doe</p>
            <p className="text-xs text-gray-500 font-medium">System Admin</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopNav;
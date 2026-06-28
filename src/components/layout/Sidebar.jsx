import React from 'react';

const Sidebar = () => {
  const mainModules = [
    { name: 'Dashboard', icon: '▦', active: true },
    { name: 'Invoices', icon: '📄', active: false },
    { name: 'Customers', icon: '👥', active: false },
    { name: 'Statements', icon: '🧾', active: false },
  ];

  const reportsAnalytics = [
    { name: 'Aging Report', icon: '📊', active: false },
    { name: 'Collections', icon: '📈', active: false },
  ];

  const system = [
    { name: 'Settings', icon: '⚙️', active: false },
    { name: 'Audit Logs', icon: '📋', active: false },
  ];

  return (
    <aside className="w-64 h-screen bg-white border-r border-gray-200 flex flex-col fixed left-0 top-0 overflow-y-auto">
      {/* Logo Area */}
      <div className="h-20 flex items-center px-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
            A
          </div>
          <div>
            <h1 className="text-lg font-bold text-gray-900 leading-tight">ARDash</h1>
            <span className="text-[10px] bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-medium">Enterprise</span>
          </div>
        </div>
        <button className="ml-auto text-gray-400 hover:text-gray-600">
          «
        </button>
      </div>
      
      {/* Navigation Menus */}
      <nav className="flex-1 px-4 py-4 space-y-6">
        
        {/* Main Modules */}
        <div>
          <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 px-3">
            Main Modules
          </h2>
          <ul className="space-y-1">
            {mainModules.map((item) => (
              <li key={item.name}>
                <a
                  href="#"
                  className={`flex items-center justify-between px-3 py-2.5 rounded-lg transition-colors duration-150 text-sm font-medium ${
                    item.active 
                      ? 'bg-blue-50 text-blue-700' 
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`text-lg ${item.active ? 'text-blue-600' : 'text-gray-400'}`}>
                      {item.icon}
                    </span>
                    {item.name}
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Reports & Analytics */}
        <div>
          <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 px-3">
            Reports & Analytics
          </h2>
          <ul className="space-y-1">
            {reportsAnalytics.map((item) => (
              <li key={item.name}>
                <a
                  href="#"
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors duration-150 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                >
                  <span className="text-lg text-gray-400">{item.icon}</span>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* System */}
        <div>
          <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 px-3">
            System
          </h2>
          <ul className="space-y-1">
            {system.map((item) => (
              <li key={item.name}>
                <a
                  href="#"
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors duration-150 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                >
                  <span className="text-lg text-gray-400">{item.icon}</span>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Upgrade Card matching the image */}
      <div className="p-4 mt-auto">
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-5 border border-indigo-100 text-center">
          <div className="w-10 h-10 mx-auto bg-white rounded-full shadow-sm flex items-center justify-center mb-3">
            <span className="text-purple-600 text-xl">✨</span>
          </div>
          <h3 className="text-sm font-bold text-gray-900 mb-1">Upgrade to Enterprise</h3>
          <p className="text-xs text-gray-500 mb-4 leading-relaxed">
            Unlock advanced features and premium support.
          </p>
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 rounded-lg transition-colors">
            Upgrade Now
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const [accountingOpen, setAccountingOpen] = useState(true);
  const [inventoryOpen, setInventoryOpen] = useState(true);
  const [hrOpen, setHrOpen] = useState(true);

  const navLinkClasses = ({ isActive }) =>
    `flex items-center gap-3 px-3 py-2 rounded-lg transition-colors duration-150 text-sm font-medium ${
      isActive ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
    }`;

  return (
    <aside className="w-64 h-screen bg-white border-r border-gray-200 flex flex-col fixed left-0 top-0 overflow-y-auto">
      {/* Header */}
      <div className="h-20 flex items-center px-6 border-b border-gray-100 flex-shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-blue-900 rounded-lg flex items-center justify-center text-white font-bold text-xl">E</div>
          <div>
            <h1 className="text-lg font-bold text-gray-900 leading-tight">NexusERP</h1>
            <span className="text-[10px] bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">System Admin</span>
          </div>
        </div>
      </div>
      
      <nav className="flex-1 px-4 py-6 space-y-6">
        {/* Main Dashboard */}
        <ul className="space-y-1">
          <li>
            <NavLink to="/dashboard" className={navLinkClasses}>
              {({ isActive }) => (<><span className={`text-lg ${isActive ? 'text-blue-600' : 'text-gray-400'}`}>▦</span> Executive Dashboard</>)}
            </NavLink>
          </li>
        </ul>

        {/* Finance & Accounting Module */}
        <div>
          <button 
            onClick={() => setAccountingOpen(!accountingOpen)}
            className="w-full flex items-center justify-between text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 px-3 hover:text-gray-600"
          >
            Finance {accountingOpen ? '▼' : '▶'}
          </button>
          {accountingOpen && (
            <ul className="space-y-1 pl-2 border-l-2 border-gray-100 ml-4">
              <li><NavLink to="/accounting/coa" className={navLinkClasses}>📁 Chart of Accounts</NavLink></li>
              <li><NavLink to="/accounting/ledger" className={navLinkClasses}>📓 General Ledger</NavLink></li>
              <li><NavLink to="/accounting/ar-dashboard" className={navLinkClasses}>💵 Accounts Rec. (A/R)</NavLink></li>
              <li><NavLink to="/accounting/ap" className={navLinkClasses}>📝 Accounts Pay. (A/P)</NavLink></li>
              <li><NavLink to="/accounting/banking" className={navLinkClasses}>🏦 Banking</NavLink></li>
              <li><NavLink to="/accounting/taxes" className={navLinkClasses}>⚖️ Taxes (VAT/TDS)</NavLink></li>
              <li><NavLink to="/accounting/reports" className={navLinkClasses}>📊 Financial Reports</NavLink></li>
            </ul>
          )}
        </div>

        {/* Inventory Module */}
        <div>
          <button 
            onClick={() => setInventoryOpen(!inventoryOpen)}
            className="w-full flex items-center justify-between text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 px-3 hover:text-gray-600"
          >
            Inventory {inventoryOpen ? '▼' : '▶'}
          </button>
          {inventoryOpen && (
            <ul className="space-y-1 pl-2 border-l-2 border-gray-100 ml-4">
              <li><NavLink to="/inventory/products" className={navLinkClasses}>📦 Products</NavLink></li>
              <li><NavLink to="/inventory/stock" className={navLinkClasses}>🚚 Stock Control</NavLink></li>
              <li><NavLink to="/inventory/warehouses" className={navLinkClasses}>🏢 Warehouses</NavLink></li>
              <li><NavLink to="/inventory/reports" className={navLinkClasses}>📉 Valuation Reports</NavLink></li>
            </ul>
          )}
        </div>

        {/* HR Module */}
        <div>
          <button 
            onClick={() => setHrOpen(!hrOpen)}
            className="w-full flex items-center justify-between text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 px-3 hover:text-gray-600"
          >
            HR System {hrOpen ? '▼' : '▶'}
          </button>
          {hrOpen && (
            <ul className="space-y-1 pl-2 border-l-2 border-gray-100 ml-4">
              <li><NavLink to="/hr/employees" className={navLinkClasses}>👥 Employees</NavLink></li>
              <li><NavLink to="/hr/recruitment" className={navLinkClasses}>📋 Recruitment</NavLink></li>
              <li><NavLink to="/hr/attendance" className={navLinkClasses}>⏰ Attendance</NavLink></li>
              <li><NavLink to="/hr/leave" className={navLinkClasses}>⛱️ Leave Management</NavLink></li>
              <li><NavLink to="/hr/payroll" className={navLinkClasses}>💳 Payroll</NavLink></li>
              <li><NavLink to="/hr/performance" className={navLinkClasses}>🎯 Performance & Training</NavLink></li>
            </ul>
          )}
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
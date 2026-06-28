import React, { useState } from 'react';
import Button from '../../components/erp/ui/Button';

// Mock Data for COA
const mockAccounts = [
  { code: '1000', name: 'Cash and Cash Equivalents', type: 'Asset', balance: 450000.00, status: 'Active' },
  { code: '1200', name: 'Accounts Receivable', type: 'Asset', balance: 124563.00, status: 'Active' },
  { code: '1500', name: 'Inventory', type: 'Asset', balance: 850000.00, status: 'Active' },
  { code: '2000', name: 'Accounts Payable', type: 'Liability', balance: 82300.00, status: 'Active' },
  { code: '2300', name: 'VAT Payable', type: 'Liability', balance: 14500.00, status: 'Active' },
  { code: '3000', name: 'Owner\'s Equity', type: 'Equity', balance: 500000.00, status: 'Active' },
  { code: '3100', name: 'Retained Earnings', type: 'Equity', balance: 250000.00, status: 'Active' },
  { code: '4000', name: 'Sales Revenue', type: 'Revenue', balance: 920000.00, status: 'Active' },
  { code: '4100', name: 'Service Revenue', type: 'Revenue', balance: 150000.00, status: 'Active' },
  { code: '5000', name: 'Cost of Goods Sold', type: 'Expense', balance: 350000.00, status: 'Active' },
  { code: '5100', name: 'Payroll Expense', type: 'Expense', balance: 180000.00, status: 'Active' },
  { code: '5200', name: 'Rent Expense', type: 'Expense', balance: 85000.00, status: 'Active' },
];

const getTypeColor = (type) => {
  switch (type) {
    case 'Asset': return 'bg-blue-100 text-blue-700 border-blue-200';
    case 'Liability': return 'bg-red-100 text-red-700 border-red-200';
    case 'Equity': return 'bg-purple-100 text-purple-700 border-purple-200';
    case 'Revenue': return 'bg-green-100 text-green-700 border-green-200';
    case 'Expense': return 'bg-orange-100 text-orange-700 border-orange-200';
    default: return 'bg-gray-100 text-gray-700 border-gray-200';
  }
};

const ChartOfAccounts = () => {
  const [filter, setFilter] = useState('All');

  const filteredAccounts = filter === 'All' 
    ? mockAccounts 
    : mockAccounts.filter(acc => acc.type === filter);

  return (
    <div className="h-full flex flex-col space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Chart of Accounts</h1>
          <p className="text-gray-500 text-sm mt-1">Manage your ledger accounts and organizational financial structure.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" icon={<span className="mr-1">📥</span>}>Import COA</Button>
          <Button variant="primary">+ Add Account</Button>
        </div>
      </div>

      {/* COA Filters */}
      <div className="flex gap-2 border-b border-gray-200 pb-4">
        {['All', 'Asset', 'Liability', 'Equity', 'Revenue', 'Expense'].map(type => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
              filter === type 
                ? 'bg-blue-50 text-blue-700 border border-blue-200' 
                : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Accounts Table */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex-1">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50/50 border-b border-gray-100 text-gray-500 text-xs uppercase tracking-wider font-semibold">
                <th className="px-6 py-4 w-24">Code</th>
                <th className="px-6 py-4">Account Name</th>
                <th className="px-6 py-4">Type</th>
                <th className="px-6 py-4 text-right">Current Balance</th>
                <th className="px-6 py-4 text-center">Status</th>
                <th className="px-6 py-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredAccounts.map((account) => (
                <tr key={account.code} className="hover:bg-gray-50/80 transition-colors group">
                  <td className="px-6 py-4 font-bold text-gray-900 text-sm">{account.code}</td>
                  <td className="px-6 py-4 font-medium text-gray-700 text-sm">{account.name}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-semibold border ${getTypeColor(account.type)}`}>
                      {account.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right font-bold text-gray-900 text-sm">
                    NRs. {account.balance.toLocaleString('en-IN', {minimumFractionDigits: 2})}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-50 text-green-700">
                      {account.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button variant="ghost" size="sm" className="text-blue-600">Edit</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ChartOfAccounts;
import React, { useState } from 'react';
import { useFinance } from '../../context/FinanceContext';
import Button from '../../components/erp/ui/Button';

const ChartOfAccounts = () => {
  const { accounts } = useFinance(); // Pull live data from the core
  const [activeTab, setActiveTab] = useState('Assets');

  // Convert the flat accounts object into categorized arrays
  const categorizedAccounts = Object.values(accounts).reduce((acc, curr) => {
    if (!acc[curr.type]) acc[curr.type] = [];
    acc[curr.type].push(curr);
    return acc;
  }, { Assets: [], Liabilities: [], Equity: [], Revenue: [], Expenses: [] });

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Chart of Accounts</h1>
          <p className="text-sm text-gray-500">Live master ledger accounts.</p>
        </div>
        <Button variant="primary">+ Add Account</Button>
      </div>

      {/* Tabs */}
      <div className="flex space-x-2 border-b border-gray-200">
        {Object.keys(categorizedAccounts).map(tab => (
          <button 
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 text-sm font-bold border-b-2 transition-colors ${
              activeTab === tab ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Account List */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-50 text-xs uppercase text-gray-500">
            <tr>
              <th className="px-6 py-4 w-32">Code</th>
              <th className="px-6 py-4">Account Name</th>
              <th className="px-6 py-4">Normal Balance</th>
              <th className="px-6 py-4 text-right">Current Balance</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-sm">
            {categorizedAccounts[activeTab].map(acc => (
              <tr key={acc.code} className="hover:bg-gray-50">
                <td className="px-6 py-4 font-mono font-bold text-gray-700">{acc.code}</td>
                <td className="px-6 py-4 font-medium">{acc.name}</td>
                <td className="px-6 py-4 text-gray-500 uppercase text-xs">{acc.normalBalance}</td>
                <td className="px-6 py-4 text-right font-bold text-gray-900">
                  NRs. {acc.balance.toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ChartOfAccounts;
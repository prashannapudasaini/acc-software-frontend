import React, { useState } from 'react';
import Button from '../../components/erp/ui/Button';

const mockAccounts = [
  { id: '1', bank: 'Global IME Bank', type: 'Checking', accountNo: '**** 4598', balance: 1250400.00, lastSynced: '2 hours ago' },
  { id: '2', bank: 'Standard Chartered', type: 'Savings', accountNo: '**** 9012', balance: 3500000.00, lastSynced: '1 day ago' },
  { id: '3', bank: 'Nabil Bank', type: 'Operating', accountNo: '**** 3321', balance: 845000.00, lastSynced: 'Just now' },
];

const mockTransactions = [
  { id: 'TXN-001', date: 'Jun 28, 2026', desc: 'Transfer from Global IME', amount: 50000, type: 'Credit', status: 'Cleared' },
  { id: 'TXN-002', date: 'Jun 27, 2026', desc: 'Vendor Payment - Tech Solutions', amount: -150000, type: 'Debit', status: 'Cleared' },
  { id: 'TXN-003', date: 'Jun 26, 2026', desc: 'Client Deposit - INV-00124', amount: 2850, type: 'Credit', status: 'Pending' },
];

const Banking = () => {
  const [activeTab, setActiveTab] = useState('accounts');

  return (
    <div className="h-full flex flex-col space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Banking & Cash</h1>
          <p className="text-gray-500 text-sm mt-1">Manage bank accounts, reconciliations, and fund transfers.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" icon={<span className="mr-1">🔄</span>}>Sync Feeds</Button>
          <Button variant="primary">+ Add Bank Account</Button>
        </div>
      </div>

      <div className="border-b border-gray-200">
        <nav className="flex gap-6">
          <button onClick={() => setActiveTab('accounts')} className={`py-3 text-sm font-medium border-b-2 transition-colors ${activeTab === 'accounts' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>Bank Accounts</button>
          <button onClick={() => setActiveTab('reconciliation')} className={`py-3 text-sm font-medium border-b-2 transition-colors ${activeTab === 'reconciliation' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>Reconciliation</button>
          <button onClick={() => setActiveTab('transfers')} className={`py-3 text-sm font-medium border-b-2 transition-colors ${activeTab === 'transfers' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>Fund Transfers</button>
        </nav>
      </div>

      {activeTab === 'accounts' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mockAccounts.map(acc => (
              <div key={acc.id} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm relative overflow-hidden">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-bold text-gray-900">{acc.bank}</h3>
                    <p className="text-xs text-gray-500">{acc.type} • {acc.accountNo}</p>
                  </div>
                  <span className="text-2xl">🏦</span>
                </div>
                <p className="text-2xl font-bold text-gray-900 mb-2">NRs. {acc.balance.toLocaleString('en-IN', {minimumFractionDigits: 2})}</p>
                <p className="text-xs text-gray-400">Last synced: {acc.lastSynced}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="p-4 border-b border-gray-100 bg-gray-50/50"><h2 className="font-bold text-gray-900">Recent Bank Transactions</h2></div>
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-white border-b border-gray-100 text-gray-500 text-xs uppercase font-semibold">
                  <th className="px-6 py-4">Date</th>
                  <th className="px-6 py-4">Description</th>
                  <th className="px-6 py-4 text-right">Amount</th>
                  <th className="px-6 py-4 text-center">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {mockTransactions.map((txn) => (
                  <tr key={txn.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-600">{txn.date}</td>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{txn.desc}</td>
                    <td className={`px-6 py-4 text-sm font-bold text-right ${txn.amount > 0 ? 'text-green-600' : 'text-gray-900'}`}>
                      {txn.amount > 0 ? '+' : ''}NRs. {Math.abs(txn.amount).toLocaleString('en-IN', {minimumFractionDigits: 2})}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${txn.status === 'Cleared' ? 'bg-green-50 text-green-700' : 'bg-yellow-50 text-yellow-700'}`}>{txn.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'reconciliation' && <div className="p-12 text-center bg-white rounded-2xl border border-gray-100"><h3 className="text-lg font-bold">Bank Reconciliation</h3><p className="text-gray-500 mt-2">Match your ledger entries against imported bank feeds.</p></div>}
      {activeTab === 'transfers' && <div className="p-12 text-center bg-white rounded-2xl border border-gray-100"><h3 className="text-lg font-bold">Fund Transfers</h3><p className="text-gray-500 mt-2">Record internal transfers between your bank accounts.</p></div>}
    </div>
  );
};

export default Banking;
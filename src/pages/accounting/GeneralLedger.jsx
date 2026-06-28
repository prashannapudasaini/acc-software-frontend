import React, { useState } from 'react';
import Button from '../../components/erp/ui/Button';

// Mock Journal Entries (Debits must equal Credits for each entry)
const mockJournalEntries = [
  {
    jeNumber: 'JE-2026-001',
    date: 'Jun 25, 2026',
    description: 'Record monthly office rent',
    lines: [
      { accountCode: '5200', accountName: 'Rent Expense', debit: 85000.00, credit: null },
      { accountCode: '1000', accountName: 'Cash and Cash Equivalents', debit: null, credit: 85000.00 },
    ]
  },
  {
    jeNumber: 'JE-2026-002',
    date: 'Jun 26, 2026',
    description: 'Client payment received (Invoice INV-2025-00124)',
    lines: [
      { accountCode: '1000', accountName: 'Cash and Cash Equivalents', debit: 2850.00, credit: null },
      { accountCode: '1200', accountName: 'Accounts Receivable', debit: null, credit: 2850.00 },
    ]
  },
  {
    jeNumber: 'JE-2026-003',
    date: 'Jun 28, 2026',
    description: 'Inventory purchase on credit (Vendor: Kathmandu Office Supplies)',
    lines: [
      { accountCode: '1500', accountName: 'Inventory', debit: 45000.00, credit: null },
      { accountCode: '2000', accountName: 'Accounts Payable', debit: null, credit: 45000.00 },
    ]
  }
];

const GeneralLedger = () => {
  const [activeTab, setActiveTab] = useState('journal');

  return (
    <div className="h-full flex flex-col space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">General Ledger</h1>
          <p className="text-gray-500 text-sm mt-1">Master record of all journal entries, postings, and audit trails.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" icon={<span className="mr-1">📅</span>}>Date Range</Button>
          <Button variant="primary">+ New Journal Entry</Button>
        </div>
      </div>

      {/* Ledger Navigation */}
      <div className="border-b border-gray-200">
        <nav className="flex gap-6">
          <button 
            onClick={() => setActiveTab('journal')}
            className={`py-3 text-sm font-medium border-b-2 transition-colors ${activeTab === 'journal' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
          >
            Journal Entries
          </button>
          <button 
            onClick={() => setActiveTab('postings')}
            className={`py-3 text-sm font-medium border-b-2 transition-colors ${activeTab === 'postings' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
          >
            Ledger Postings
          </button>
          <button 
            onClick={() => setActiveTab('audit')}
            className={`py-3 text-sm font-medium border-b-2 transition-colors ${activeTab === 'audit' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
          >
            Audit Trail
          </button>
        </nav>
      </div>

      {/* Journal Entries View */}
      {activeTab === 'journal' && (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex-1">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50/50 border-b border-gray-100 text-gray-500 text-xs uppercase tracking-wider font-semibold">
                  <th className="px-6 py-4 w-32">Date</th>
                  <th className="px-6 py-4 w-32">JE Number</th>
                  <th className="px-6 py-4">Account & Description</th>
                  <th className="px-6 py-4 text-right w-40">Debit (NRs.)</th>
                  <th className="px-6 py-4 text-right w-40">Credit (NRs.)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {mockJournalEntries.map((entry, index) => (
                  <React.Fragment key={entry.jeNumber}>
                    {/* Entry Header Row */}
                    <tr className="bg-gray-50/30">
                      <td className="px-6 py-3 text-sm text-gray-600 align-top font-medium" rowSpan={entry.lines.length + 1}>
                        {entry.date}
                      </td>
                      <td className="px-6 py-3 text-sm text-blue-600 font-bold align-top" rowSpan={entry.lines.length + 1}>
                        {entry.jeNumber}
                      </td>
                      <td colSpan={3} className="px-6 py-2 text-sm text-gray-500 italic bg-gray-50">
                        {entry.description}
                      </td>
                    </tr>
                    {/* Line Items */}
                    {entry.lines.map((line, lineIndex) => (
                      <tr key={lineIndex} className="hover:bg-blue-50/30 transition-colors">
                        <td className={`px-6 py-2 text-sm text-gray-900 ${line.credit ? 'pl-12' : 'font-medium'}`}>
                          {line.accountCode} - {line.accountName}
                        </td>
                        <td className="px-6 py-2 text-right text-sm font-medium text-gray-900">
                          {line.debit ? line.debit.toLocaleString('en-IN', {minimumFractionDigits: 2}) : ''}
                        </td>
                        <td className="px-6 py-2 text-right text-sm font-medium text-gray-900">
                          {line.credit ? line.credit.toLocaleString('en-IN', {minimumFractionDigits: 2}) : ''}
                        </td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Placeholders for other tabs */}
      {activeTab === 'postings' && (
        <div className="text-center py-12 bg-white rounded-2xl border border-gray-100">
          <h3 className="text-lg font-bold text-gray-900">Ledger Postings</h3>
          <p className="text-gray-500 mt-2">View account-specific T-accounts and historical movements.</p>
        </div>
      )}
      {activeTab === 'audit' && (
        <div className="text-center py-12 bg-white rounded-2xl border border-gray-100">
          <h3 className="text-lg font-bold text-gray-900">Audit Trail</h3>
          <p className="text-gray-500 mt-2">Track user changes, voided entries, and historical revisions.</p>
        </div>
      )}
    </div>
  );
};

export default GeneralLedger;
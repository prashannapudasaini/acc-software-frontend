import React from 'react';
import StatusBadge from './StatusBadge';
import Button from '../ui/Button';

// Extended mock data for a robust table view
const mockInvoices = [
  { id: 'INV-2025-00124', customer: 'Sarah Johnson', email: 'sarah.j@example.com', amount: 2850.00, paid: 2850.00, balance: 0.00, dueDate: 'May 15, 2025', status: 'Paid' },
  { id: 'INV-2025-00125', customer: 'TechCorp Solutions', email: 'billing@techcorp.com', amount: 14500.00, paid: 5000.00, balance: 9500.00, dueDate: 'May 30, 2025', status: 'Partial' },
  { id: 'INV-2025-00126', customer: 'Michael Chen', email: 'm.chen@example.com', amount: 950.00, paid: 0.00, balance: 950.00, dueDate: 'May 10, 2025', status: 'Overdue' },
  { id: 'INV-2025-00127', customer: 'Global Industries', email: 'accounts@globalind.com', amount: 12400.00, paid: 0.00, balance: 12400.00, dueDate: 'Jun 15, 2025', status: 'Sent' },
  { id: 'INV-2025-00128', customer: 'Emma Williams', email: 'emma.w@example.com', amount: 3200.00, paid: 3200.00, balance: 0.00, dueDate: 'May 20, 2025', status: 'Paid' },
  { id: 'INV-2025-00129', customer: 'Design Studio LLC', email: 'hello@designstudio.co', amount: 4500.00, paid: 0.00, balance: 4500.00, dueDate: 'Jun 01, 2025', status: 'Draft' },
  { id: 'INV-2025-00130', customer: 'Robert Taylor', email: 'rtaylor@example.com', amount: 1200.50, paid: 1200.50, balance: 0.00, dueDate: 'May 05, 2025', status: 'Paid' },
];

const InvoiceTable = () => {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col h-full">
      <div className="overflow-x-auto flex-1">
        <table className="w-full text-left border-collapse min-w-[1000px]">
          <thead>
            <tr className="bg-gray-50/50 border-b border-gray-100 text-gray-500 text-xs uppercase tracking-wider font-semibold">
              <th className="px-6 py-4 whitespace-nowrap">Invoice No</th>
              <th className="px-6 py-4 whitespace-nowrap">Customer</th>
              <th className="px-6 py-4 text-right whitespace-nowrap">Amount</th>
              <th className="px-6 py-4 text-right whitespace-nowrap">Paid</th>
              <th className="px-6 py-4 text-right whitespace-nowrap">Balance</th>
              <th className="px-6 py-4 whitespace-nowrap">Due Date</th>
              <th className="px-6 py-4 whitespace-nowrap">Status</th>
              <th className="px-6 py-4 text-right whitespace-nowrap">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {mockInvoices.map((invoice) => (
              <tr key={invoice.id} className="hover:bg-gray-50/80 transition-colors group">
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="text-sm font-bold text-gray-900 cursor-pointer hover:text-blue-600 transition-colors">{invoice.id}</span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center text-xs font-bold border border-indigo-100">
                      {invoice.customer.charAt(0)}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">{invoice.customer}</div>
                      <div className="text-xs text-gray-500">{invoice.email}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-right whitespace-nowrap">
                  <span className="text-sm font-medium text-gray-900">
                    ${invoice.amount.toLocaleString(undefined, {minimumFractionDigits: 2})}
                  </span>
                </td>
                <td className="px-6 py-4 text-right whitespace-nowrap">
                  <span className="text-sm text-gray-500">
                    ${invoice.paid.toLocaleString(undefined, {minimumFractionDigits: 2})}
                  </span>
                </td>
                <td className="px-6 py-4 text-right whitespace-nowrap">
                  <span className={`text-sm font-bold ${invoice.balance > 0 ? 'text-gray-900' : 'text-gray-400'}`}>
                    ${invoice.balance.toLocaleString(undefined, {minimumFractionDigits: 2})}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="text-sm text-gray-600 font-medium">{invoice.dueDate}</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <StatusBadge status={invoice.status} />
                </td>
                <td className="px-6 py-4 text-right whitespace-nowrap">
                  <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700">Record Payment</Button>
                    <button className="p-1 text-gray-400 hover:text-gray-600 rounded">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" /></svg>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Pagination Footer */}
      <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-between bg-white">
        <span className="text-sm text-gray-500">Showing 1 to 7 of 45 entries</span>
        <div className="flex gap-1">
          <Button variant="outline" size="sm" disabled>Prev</Button>
          <Button variant="primary" size="sm">1</Button>
          <Button variant="outline" size="sm">2</Button>
          <Button variant="outline" size="sm">3</Button>
          <span className="px-2 py-1 text-gray-400">...</span>
          <Button variant="outline" size="sm">7</Button>
          <Button variant="outline" size="sm">Next</Button>
        </div>
      </div>
    </div>
  );
};

export default InvoiceTable;
import React from 'react';
import { Card, CardHeader, CardContent } from '../../erp/ui/Card';
import Button from '../../erp/ui/Button';
import StatusBadge from '../invoices/StatusBadge';

const statementLines = [
  { date: 'May 01, 2025', type: 'Invoice', ref: 'INV-2025-00101', amount: 5000.00, status: 'Completed' },
  { date: 'May 10, 2025', type: 'Payment', ref: 'PAY-88392', amount: -5000.00, status: 'Completed' },
  { date: 'May 15, 2025', type: 'Invoice', ref: 'INV-2025-00125', amount: 14500.00, status: 'Partial' },
  { date: 'May 16, 2025', type: 'Payment', ref: 'PAY-88405', amount: -5000.00, status: 'Completed' },
  { date: 'Jun 01, 2025', type: 'Invoice', ref: 'INV-2025-00142', amount: 3200.00, status: 'Sent' },
];

const CustomerStatement = () => {
  return (
    <div className="space-y-6">
      {/* Statement Header Controls */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Account Statement</h2>
          <p className="text-sm text-gray-500">TechCorp Solutions • May 01, 2025 - Jun 28, 2025</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" icon={<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>}>
            Download PDF
          </Button>
          <Button variant="primary" icon={<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}>
            Email Statement
          </Button>
        </div>
      </div>

      {/* Summary Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-blue-50 border-blue-100">
          <CardContent className="p-5">
            <p className="text-sm font-medium text-blue-600 mb-1">Total Outstanding</p>
            <p className="text-3xl font-bold text-blue-900">$12,700.00</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-5">
            <p className="text-sm font-medium text-gray-500 mb-1">Current (0-30 Days)</p>
            <p className="text-2xl font-bold text-gray-900">$12,700.00</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-5">
            <p className="text-sm font-medium text-gray-500 mb-1">Overdue (31+ Days)</p>
            <p className="text-2xl font-bold text-gray-900">$0.00</p>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Ledger */}
      <Card>
        <CardHeader 
          title="Transaction History" 
          action={<span className="text-sm text-gray-500 font-medium">Opening Balance: $0.00</span>}
        />
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100 text-gray-500 text-xs uppercase tracking-wider font-semibold">
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4">Type</th>
                <th className="px-6 py-4">Reference</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Amount</th>
                <th className="px-6 py-4 text-right">Running Balance</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {statementLines.reduce((acc, line, index) => {
                const runningBal = (index === 0 ? 0 : acc.runningBalances[index - 1]) + line.amount;
                acc.runningBalances.push(runningBal);
                
                acc.rows.push(
                  <tr key={index} className="hover:bg-gray-50 transition-colors text-sm">
                    <td className="px-6 py-4 text-gray-600">{line.date}</td>
                    <td className="px-6 py-4">
                      <span className={`font-medium ${line.type === 'Payment' ? 'text-green-600' : 'text-gray-900'}`}>
                        {line.type}
                      </span>
                    </td>
                    <td className="px-6 py-4 font-medium text-gray-900">{line.ref}</td>
                    <td className="px-6 py-4">
                      <StatusBadge status={line.status} />
                    </td>
                    <td className={`px-6 py-4 text-right font-medium ${line.amount < 0 ? 'text-green-600' : 'text-gray-900'}`}>
                      {line.amount < 0 ? '-' : ''}${Math.abs(line.amount).toLocaleString(undefined, {minimumFractionDigits: 2})}
                    </td>
                    <td className="px-6 py-4 text-right font-bold text-gray-900">
                      ${runningBal.toLocaleString(undefined, {minimumFractionDigits: 2})}
                    </td>
                  </tr>
                );
                return acc;
              }, { runningBalances: [], rows: [] }).rows}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default CustomerStatement;
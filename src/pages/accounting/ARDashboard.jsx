import React from 'react';
import { useFinance } from '../../context/FinanceContext';
import { Card, CardContent } from '../../components/erp/ui/Card';
import Button from '../../components/erp/ui/Button';

const ARDashboard = () => {
  const { invoices } = useFinance();

  const totalOutstanding = invoices.filter(i => i.status === 'Unpaid').reduce((sum, i) => sum + i.amount, 0);
  const overdueCount = invoices.filter(i => i.status === 'Unpaid').length; // Simplification for demo

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">A/R Dashboard</h1>
          <p className="text-sm text-gray-500">Accounts Receivable overview and collection metrics.</p>
        </div>
        <Button variant="outline">Send Payment Reminders</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-t-4 border-t-blue-500 shadow-sm">
          <CardContent className="p-6">
            <h3 className="font-bold text-gray-500 text-sm uppercase mb-1">Total Outstanding</h3>
            <p className="text-3xl font-bold text-blue-600">NRs. {totalOutstanding.toLocaleString()}</p>
          </CardContent>
        </Card>
        
        <Card className="border-t-4 border-t-red-500 shadow-sm">
          <CardContent className="p-6">
            <h3 className="font-bold text-gray-500 text-sm uppercase mb-1">Total Overdue</h3>
            <p className="text-3xl font-bold text-red-600">NRs. {totalOutstanding.toLocaleString()}</p>
            <p className="text-xs text-red-500 mt-2 font-bold">{overdueCount} Invoices require attention</p>
          </CardContent>
        </Card>

        <Card className="border-t-4 border-t-green-500 shadow-sm">
          <CardContent className="p-6">
            <h3 className="font-bold text-gray-500 text-sm uppercase mb-1">Collected This Month</h3>
            <p className="text-3xl font-bold text-green-600">NRs. 450,000</p>
          </CardContent>
        </Card>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
        <h2 className="font-bold mb-4">Recent Unpaid Invoices</h2>
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-50 uppercase text-gray-500 text-xs">
            <tr>
              <th className="px-6 py-4">Invoice #</th>
              <th className="px-6 py-4">Customer</th>
              <th className="px-6 py-4 text-right">Amount</th>
              <th className="px-6 py-4 text-center">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {invoices.filter(i => i.status === 'Unpaid').map(inv => (
              <tr key={inv.id}>
                <td className="px-6 py-4 font-mono font-bold text-gray-700">{inv.id}</td>
                <td className="px-6 py-4">{inv.customer}</td>
                <td className="px-6 py-4 text-right font-bold text-red-600">NRs. {inv.amount.toLocaleString()}</td>
                <td className="px-6 py-4 text-center"><Button variant="outline" size="sm">Receive Payment</Button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ARDashboard;
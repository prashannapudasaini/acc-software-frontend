import React, { useState } from 'react';
import { useFinance } from '../../context/FinanceContext';
import { Card, CardContent } from '../../components/erp/ui/Card';
import Button from '../../components/erp/ui/Button';

const Statements = () => {
  const { invoices } = useFinance();
  const [selectedCustomer, setSelectedCustomer] = useState('');

  // Extract unique customers
  const customers = [...new Set(invoices.map(i => i.customer))];

  // Get transactions for selected customer
  const customerLedger = invoices.filter(i => i.customer === selectedCustomer);
  const totalDue = customerLedger.reduce((sum, i) => sum + i.amount, 0);

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Customer Statements</h1>
          <p className="text-sm text-gray-500">Generate Account Statements for clients.</p>
        </div>
        {selectedCustomer && <Button variant="primary">Print PDF</Button>}
      </div>

      <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex gap-4 items-center">
        <label className="font-bold text-gray-700">Select Customer:</label>
        <select 
          className="border p-2 rounded w-64 focus:outline-none focus:border-blue-500"
          value={selectedCustomer}
          onChange={e => setSelectedCustomer(e.target.value)}
        >
          <option value="">-- Choose Customer --</option>
          {customers.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
      </div>

      {selectedCustomer && (
        <Card className="shadow-lg border-gray-200 mt-6">
          <CardContent className="p-8">
            {/* Statement Header */}
            <div className="flex justify-between border-b-2 border-gray-900 pb-6 mb-6">
              <div>
                <h2 className="text-3xl font-bold text-gray-900">STATEMENT OF ACCOUNT</h2>
                <p className="text-gray-500 mt-2">To: <span className="font-bold text-gray-900">{selectedCustomer}</span></p>
                <p className="text-gray-500">Date: {new Date().toLocaleDateString()}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500 uppercase tracking-widest mb-1">Amount Due</p>
                <p className="text-3xl font-bold text-red-600">NRs. {totalDue.toLocaleString()}</p>
              </div>
            </div>

            {/* Statement Body */}
            <table className="w-full text-left text-sm mt-4">
              <thead className="bg-gray-100 uppercase text-xs text-gray-700">
                <tr>
                  <th className="px-4 py-3">Date</th>
                  <th className="px-4 py-3">Details / Invoice #</th>
                  <th className="px-4 py-3 text-right">Amount Billed</th>
                  <th className="px-4 py-3 text-right">Amount Paid</th>
                  <th className="px-4 py-3 text-right font-bold">Balance</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 text-gray-500">01/06/2026</td>
                  <td className="px-4 py-3 font-medium">Opening Balance</td>
                  <td className="px-4 py-3 text-right">-</td>
                  <td className="px-4 py-3 text-right">-</td>
                  <td className="px-4 py-3 text-right font-bold">NRs. 0</td>
                </tr>
                {customerLedger.map((inv, idx) => (
                  <tr key={inv.id}>
                    <td className="px-4 py-3 text-gray-600">{inv.date}</td>
                    <td className="px-4 py-3 font-mono font-bold">{inv.id}</td>
                    <td className="px-4 py-3 text-right">NRs. {inv.amount.toLocaleString()}</td>
                    <td className="px-4 py-3 text-right">-</td>
                    <td className="px-4 py-3 text-right font-bold text-gray-900">NRs. {inv.amount.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="mt-10 text-center text-xs text-gray-400">
              Please remit payment at your earliest convenience. Thank you for your business.
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Statements;
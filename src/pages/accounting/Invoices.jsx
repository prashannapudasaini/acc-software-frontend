import React, { useState } from 'react';
import { useFinance } from '../../context/FinanceContext';
import Button from '../../components/erp/ui/Button';

const Invoices = () => {
  const { invoices, createInvoice } = useFinance();
  const [showForm, setShowForm] = useState(false);
  const [customer, setCustomer] = useState('');
  const [amount, setAmount] = useState('');

  const handleCreate = () => {
    if (!customer || !amount) return alert('Customer and Amount required.');
    createInvoice(customer, amount);
    setShowForm(false);
    setCustomer(''); setAmount('');
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Customer Invoices</h1>
        <Button variant="primary" onClick={() => setShowForm(!showForm)}>{showForm ? 'Cancel' : '+ New Invoice'}</Button>
      </div>

      {showForm && (
        <div className="bg-white p-6 border rounded-xl flex gap-4 items-end shadow-sm">
          <div className="flex-1"><label className="text-xs font-bold text-gray-700">Customer Name</label><input type="text" className="w-full p-2 border rounded" value={customer} onChange={e=>setCustomer(e.target.value)} /></div>
          <div className="flex-1"><label className="text-xs font-bold text-gray-700">Amount (NRs)</label><input type="number" className="w-full p-2 border rounded" value={amount} onChange={e=>setAmount(e.target.value)} /></div>
          <Button variant="primary" onClick={handleCreate}>Save & Post Ledger</Button>
        </div>
      )}

      <div className="bg-white border rounded-xl shadow-sm">
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-50 uppercase text-xs text-gray-500">
            <tr><th className="px-6 py-4">Invoice #</th><th className="px-6 py-4">Date</th><th className="px-6 py-4">Customer</th><th className="px-6 py-4 text-right">Amount</th><th className="px-6 py-4">Status</th></tr>
          </thead>
          <tbody className="divide-y">
            {invoices.map(inv => (
              <tr key={inv.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 font-mono font-bold text-blue-600">{inv.id}</td>
                <td className="px-6 py-4 text-gray-500">{inv.date}</td>
                <td className="px-6 py-4">{inv.customer}</td>
                <td className="px-6 py-4 text-right font-bold">NRs. {inv.amount.toLocaleString()}</td>
                <td className="px-6 py-4"><span className="bg-yellow-50 text-yellow-600 px-2 py-1 rounded-full text-xs font-bold">{inv.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Invoices;
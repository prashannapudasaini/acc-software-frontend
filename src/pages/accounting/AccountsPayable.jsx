import React, { useState } from 'react';
import { useFinance } from '../../context/FinanceContext';
import Button from '../../components/erp/ui/Button';

const AccountsPayable = () => {
  const { bills, createBill } = useFinance();
  const [showForm, setShowForm] = useState(false);
  const [vendor, setVendor] = useState('');
  const [amount, setAmount] = useState('');

  const handleCreate = () => {
    if (!vendor || !amount) return alert('Vendor and Amount are required.');
    createBill(vendor, amount);
    setShowForm(false);
    setVendor(''); 
    setAmount('');
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Accounts Payable (A/P)</h1>
          <p className="text-sm text-gray-500">Manage vendor bills and automate GL posting.</p>
        </div>
        <Button variant="primary" onClick={() => setShowForm(!showForm)}>
          {showForm ? 'Cancel' : '+ Log Vendor Bill'}
        </Button>
      </div>

      {showForm && (
        <div className="bg-white p-6 border rounded-xl flex gap-4 items-end shadow-sm">
          <div className="flex-1">
            <label className="text-xs font-bold text-gray-700">Vendor Name</label>
            <input type="text" placeholder="e.g., Supplier Inc." className="w-full mt-1 p-2 border rounded focus:border-blue-500 outline-none" value={vendor} onChange={e => setVendor(e.target.value)} />
          </div>
          <div className="flex-1">
            <label className="text-xs font-bold text-gray-700">Amount (NRs)</label>
            <input type="number" placeholder="0" className="w-full mt-1 p-2 border rounded focus:border-blue-500 outline-none" value={amount} onChange={e => setAmount(e.target.value)} />
          </div>
          <Button variant="primary" onClick={handleCreate}>Save & Post to GL</Button>
        </div>
      )}

      <div className="bg-white border rounded-xl shadow-sm overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-50 uppercase text-xs text-gray-500">
            <tr>
              <th className="px-6 py-4">Bill #</th>
              <th className="px-6 py-4">Date Logged</th>
              <th className="px-6 py-4">Vendor</th>
              <th className="px-6 py-4 text-right">Amount</th>
              <th className="px-6 py-4 text-center">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {bills.map(bill => (
              <tr key={bill.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 font-mono font-bold text-orange-600">{bill.id}</td>
                <td className="px-6 py-4 text-gray-500">{bill.date}</td>
                <td className="px-6 py-4 font-medium text-gray-900">{bill.vendor}</td>
                <td className="px-6 py-4 text-right font-bold">NRs. {bill.amount.toLocaleString()}</td>
                <td className="px-6 py-4 text-center">
                  <span className="bg-red-50 text-red-600 px-2 py-1 rounded-full text-xs font-bold">{bill.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AccountsPayable;
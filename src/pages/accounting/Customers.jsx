import React, { useState } from 'react';
import { useFinance } from '../../context/FinanceContext';
import Button from '../../components/erp/ui/Button';

const initialCustomers = [
  { id: 'CUST-001', name: 'Kathmandu Tech', email: 'billing@ktmtech.com', phone: '+977-9801234567', type: 'Corporate' },
  { id: 'CUST-002', name: 'Everest Retail', email: 'accounts@everest.com', phone: '+977-9841122334', type: 'Retail' },
  { id: 'CUST-003', name: 'Lumbini Traders', email: 'finance@lumbini.com', phone: '+977-9812233445', type: 'Distributor' },
];

const Customers = () => {
  const { invoices } = useFinance();
  const [customers, setCustomers] = useState(initialCustomers);
  const [showForm, setShowForm] = useState(false);

  // Calculate total outstanding per customer dynamically from the Context
  const getOutstanding = (customerName) => {
    return invoices
      .filter(inv => inv.customer === customerName && inv.status === 'Unpaid')
      .reduce((sum, inv) => sum + inv.amount, 0);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Customer Management</h1>
          <p className="text-sm text-gray-500">Manage client profiles and view their credit standing.</p>
        </div>
        <Button variant="primary" onClick={() => setShowForm(!showForm)}>
          {showForm ? 'Cancel' : '+ Add Customer'}
        </Button>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-50 uppercase text-xs text-gray-500">
            <tr>
              <th className="px-6 py-4">Customer Name</th>
              <th className="px-6 py-4">Contact Info</th>
              <th className="px-6 py-4">Client Type</th>
              <th className="px-6 py-4 text-right">Outstanding Balance</th>
              <th className="px-6 py-4 text-center">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {customers.map(cust => {
              const outstanding = getOutstanding(cust.name);
              return (
                <tr key={cust.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-bold text-gray-900">{cust.name}</td>
                  <td className="px-6 py-4 text-gray-600">
                    <div>{cust.email}</div>
                    <div className="text-xs">{cust.phone}</div>
                  </td>
                  <td className="px-6 py-4"><span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">{cust.type}</span></td>
                  <td className={`px-6 py-4 text-right font-bold ${outstanding > 0 ? 'text-red-600' : 'text-gray-900'}`}>
                    NRs. {outstanding.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 text-center space-x-2">
                    <button className="text-blue-600 hover:underline text-xs font-bold">View</button>
                    <button className="text-gray-400 hover:text-gray-900 text-xs font-bold">Edit</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Customers;
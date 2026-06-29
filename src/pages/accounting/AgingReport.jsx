import React from 'react';
import { useFinance } from '../../context/FinanceContext';
import Button from '../../components/erp/ui/Button';

const AgingReport = () => {
  const { invoices } = useFinance();

  // Aggregate outstanding invoices by customer
  const agingData = invoices
    .filter(inv => inv.status === 'Unpaid')
    .reduce((acc, inv) => {
      if (!acc[inv.customer]) {
        acc[inv.customer] = { current: 0, days30: 0, days60: 0, days90: 0, total: 0 };
      }
      
      // For this demo, we will simulate aging buckets randomly 
      // since the generated invoices have today's date.
      // In a real app, this is calculated: (Today - Invoice Date)
      const mockAge = Math.random(); 
      if (mockAge > 0.7) acc[inv.customer].days30 += inv.amount;
      else if (mockAge > 0.9) acc[inv.customer].days60 += inv.amount;
      else acc[inv.customer].current += inv.amount;
      
      acc[inv.customer].total += inv.amount;
      return acc;
    }, {});

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">A/R Aging Summary</h1>
          <p className="text-sm text-gray-500">Track how long customer balances have been outstanding.</p>
        </div>
        <Button variant="primary">Export to Excel</Button>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
        <table className="w-full text-right text-sm">
          <thead className="bg-gray-50 uppercase text-xs text-gray-500">
            <tr>
              <th className="px-6 py-4 text-left">Customer</th>
              <th className="px-6 py-4">Current</th>
              <th className="px-6 py-4">1 - 30 Days</th>
              <th className="px-6 py-4">31 - 60 Days</th>
              <th className="px-6 py-4 text-red-500"> 90 Days</th>
              <th className="px-6 py-4 font-bold text-gray-900">Total</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {Object.keys(agingData).map(customer => {
              const data = agingData[customer];
              return (
                <tr key={customer} className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-bold text-gray-900 text-left">{customer}</td>
                  <td className="px-6 py-4">{data.current > 0 ? `NRs. ${data.current.toLocaleString()}` : '-'}</td>
                  <td className="px-6 py-4">{data.days30 > 0 ? `NRs. ${data.days30.toLocaleString()}` : '-'}</td>
                  <td className="px-6 py-4">{data.days60 > 0 ? `NRs. ${data.days60.toLocaleString()}` : '-'}</td>
                  <td className="px-6 py-4 text-red-500 font-bold">{data.days90 > 0 ? `NRs. ${data.days90.toLocaleString()}` : '-'}</td>
                  <td className="px-6 py-4 font-bold text-gray-900">NRs. {data.total.toLocaleString()}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AgingReport;
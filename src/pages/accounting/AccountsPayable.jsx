import React from 'react';
import Button from '../../components/erp/ui/Button';

const mockBills = [
  { id: 'BILL-1092', vendor: 'Kathmandu Office Supplies', date: 'Jun 25, 2026', due: 'Jul 10, 2026', amount: 45000, status: 'Unpaid' },
  { id: 'BILL-1093', vendor: 'CloudHost Web Services', date: 'Jun 26, 2026', due: 'Jul 26, 2026', amount: 12500, status: 'Scheduled' },
  { id: 'BILL-1094', vendor: 'Everest Logistics', date: 'May 15, 2026', due: 'Jun 15, 2026', amount: 89000, status: 'Overdue' },
  { id: 'BILL-1095', vendor: 'Tech Solutions Nepal', date: 'Jun 20, 2026', due: 'Jun 20, 2026', amount: 150000, status: 'Paid' },
];

const AccountsPayable = () => {
  return (
    <div className="h-full flex flex-col space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Accounts Payable</h1>
          <p className="text-gray-500 text-sm mt-1">Manage vendor bills and payment schedules.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">Add Vendor</Button>
          <Button variant="primary">+ Record Purchase Bill</Button>
        </div>
      </div>

      {/* A/P Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
          <p className="text-sm font-medium text-gray-500 mb-1">Total Unpaid Bills</p>
          <p className="text-2xl font-bold text-gray-900">NRs. 146,500</p>
        </div>
        <div className="bg-white rounded-2xl p-5 border border-red-100 shadow-sm bg-red-50">
          <p className="text-sm font-medium text-red-600 mb-1">Overdue Payments</p>
          <p className="text-2xl font-bold text-red-900">NRs. 89,000</p>
        </div>
        <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
          <p className="text-sm font-medium text-gray-500 mb-1">Paid This Month</p>
          <p className="text-2xl font-bold text-gray-900">NRs. 320,400</p>
        </div>
      </div>

      {/* Purchase Bills Table */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex-1">
        <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
          <h2 className="font-bold text-gray-900">Recent Bills</h2>
          <input 
            type="text" 
            placeholder="Search vendor or bill #" 
            className="border border-gray-200 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white border-b border-gray-100 text-gray-500 text-xs uppercase tracking-wider font-semibold">
                <th className="px-6 py-4">Bill No.</th>
                <th className="px-6 py-4">Vendor</th>
                <th className="px-6 py-4">Bill Date</th>
                <th className="px-6 py-4">Due Date</th>
                <th className="px-6 py-4 text-right">Amount</th>
                <th className="px-6 py-4 text-center">Status</th>
                <th className="px-6 py-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {mockBills.map((bill) => (
                <tr key={bill.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-bold text-gray-900 text-sm">{bill.id}</td>
                  <td className="px-6 py-4 font-medium text-gray-700 text-sm">{bill.vendor}</td>
                  <td className="px-6 py-4 text-gray-500 text-sm">{bill.date}</td>
                  <td className={`px-6 py-4 text-sm font-medium ${bill.status === 'Overdue' ? 'text-red-600' : 'text-gray-500'}`}>{bill.due}</td>
                  <td className="px-6 py-4 text-right font-bold text-gray-900 text-sm">NRs. {bill.amount.toLocaleString()}</td>
                  <td className="px-6 py-4 text-center">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-semibold border
                      ${bill.status === 'Paid' ? 'bg-green-100 text-green-700 border-green-200' : 
                        bill.status === 'Overdue' ? 'bg-red-100 text-red-700 border-red-200' : 
                        bill.status === 'Scheduled' ? 'bg-blue-100 text-blue-700 border-blue-200' : 
                        'bg-yellow-100 text-yellow-700 border-yellow-200'}`}>
                      {bill.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    {bill.status !== 'Paid' && <Button variant="ghost" size="sm" className="text-blue-600">Pay Now</Button>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AccountsPayable;
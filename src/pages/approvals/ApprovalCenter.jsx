import React from 'react';
import Button from '../../components/erp/ui/Button';

const pendingApprovals = [
  { id: 'APP-001', type: 'Purchase Request', desc: '10x Dell Monitors (PR-2026-089)', requestedBy: 'IT Dept', amount: 'NRs. 350,000', date: 'Jun 28, 2026', priority: 'High' },
  { id: 'APP-002', type: 'Leave Request', desc: 'Annual Leave (5 Days)', requestedBy: 'Ramesh Thapa', amount: '-', date: 'Jun 29, 2026', priority: 'Normal' },
  { id: 'APP-003', type: 'Expense Claim', desc: 'Client Dinner (Kathmandu Tech)', requestedBy: 'Sarita Shakya', amount: 'NRs. 12,500', date: 'Jun 29, 2026', priority: 'Normal' },
];

const ApprovalCenter = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Unified Approval Center</h1>
          <p className="text-sm text-gray-500">Centralized workflow inbox for all managerial authorizations.</p>
        </div>
        <Button variant="outline">History / Audit Log</Button>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-50 text-xs uppercase text-gray-500">
            <tr>
              <th className="px-6 py-4">Request Type</th>
              <th className="px-6 py-4">Details</th>
              <th className="px-6 py-4">Requested By</th>
              <th className="px-6 py-4 text-right">Value/Amount</th>
              <th className="px-6 py-4 text-center">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-sm">
            {pendingApprovals.map(app => (
              <tr key={app.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <span className="font-bold text-gray-900 block">{app.type}</span>
                  <span className="text-xs text-gray-500">{app.id} • {app.date}</span>
                </td>
                <td className="px-6 py-4 font-medium">{app.desc}</td>
                <td className="px-6 py-4">{app.requestedBy}</td>
                <td className="px-6 py-4 text-right font-bold text-gray-900">{app.amount}</td>
                <td className="px-6 py-4 text-center space-x-2 flex justify-center">
                  <button className="bg-green-50 text-green-700 px-3 py-1 rounded hover:bg-green-100 font-medium text-xs transition-colors">Approve</button>
                  <button className="bg-red-50 text-red-700 px-3 py-1 rounded hover:bg-red-100 font-medium text-xs transition-colors">Reject</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApprovalCenter;
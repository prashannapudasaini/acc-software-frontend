import React from 'react';
import Button from '../../components/erp/ui/Button';

const LeaveManagement = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Leave Management</h1>
        <Button variant="primary">+ Request Leave</Button>
      </div>

      <div className="bg-white rounded-2xl border shadow-sm p-6">
        <h2 className="font-bold mb-4">Pending Approval Workflow</h2>
        <table className="w-full text-left">
          <thead className="text-xs uppercase text-gray-500">
            <tr><th>Employee</th><th>Type</th><th>Duration</th><th>Status</th></tr>
          </thead>
          <tbody className="text-sm">
            <tr>
              <td className="py-4">Sarita Shakya</td>
              <td>Sick Leave</td>
              <td>2 Days</td>
              <td><span className="text-yellow-600 font-bold">Pending</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeaveManagement;
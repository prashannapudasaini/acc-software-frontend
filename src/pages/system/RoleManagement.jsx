import React from 'react';
import Button from '../../components/erp/ui/Button';

const roles = [
  { name: 'Super Admin', users: 2, access: 'Full System Access' },
  { name: 'CFO', users: 1, access: 'Finance, Analytics, Approvals' },
  { name: 'HR Manager', users: 3, access: 'HR, Documents, Analytics' },
  { name: 'Inventory Manager', users: 4, access: 'Inventory, Procurement, Assets' },
  { name: 'Employee', users: 132, access: 'Self-Service (Leave, Payslips)' },
];

const RoleManagement = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">User & Role Management</h1>
        <Button variant="primary">+ Create New Role</Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Roles List */}
        <div className="lg:col-span-1 space-y-3">
          {roles.map(role => (
            <div key={role.name} className="bg-white border border-gray-200 rounded-xl p-4 cursor-pointer hover:border-blue-500 transition-colors shadow-sm">
              <h3 className="font-bold text-gray-900">{role.name}</h3>
              <p className="text-xs text-gray-500 mb-2">{role.users} Active Users</p>
              <p className="text-xs text-blue-600 bg-blue-50 inline-block px-2 py-1 rounded">{role.access}</p>
            </div>
          ))}
        </div>

        {/* Permission Matrix (Preview for active role) */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 shadow-sm p-6">
          <div className="flex justify-between items-center border-b pb-4 mb-4">
            <h2 className="font-bold text-lg">Permissions: HR Manager</h2>
            <Button variant="outline" size="sm">Edit Permissions</Button>
          </div>
          
          <div className="space-y-4">
            {['Employee Directory', 'Payroll Processing', 'Chart of Accounts', 'Purchase Approvals'].map((module, idx) => (
              <div key={idx} className="flex items-center justify-between py-2">
                <span className="font-medium text-gray-700 w-1/3">{module}</span>
                <div className="w-2/3 flex gap-4 text-sm">
                  <label className="flex items-center gap-1"><input type="checkbox" defaultChecked={idx < 2} disabled /> View</label>
                  <label className="flex items-center gap-1"><input type="checkbox" defaultChecked={idx < 2} disabled /> Create</label>
                  <label className="flex items-center gap-1"><input type="checkbox" defaultChecked={idx < 2} disabled /> Edit</label>
                  <label className="flex items-center gap-1"><input type="checkbox" defaultChecked={idx === 1} disabled /> Approve</label>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoleManagement;
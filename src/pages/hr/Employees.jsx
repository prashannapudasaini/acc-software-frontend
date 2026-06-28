import React from 'react';
import Button from '../../components/erp/ui/Button';

const employees = [
  { id: 'EMP001', name: 'Sarita Shakya', role: 'Senior Developer', status: 'Active', dept: 'Engineering' },
  { id: 'EMP002', name: 'Ramesh Thapa', role: 'HR Manager', status: 'Active', dept: 'HR' },
];

const Employees = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Employee Directory</h1>
        <Button variant="primary">+ Add Employee</Button>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-50 text-xs uppercase text-gray-500">
            <tr>
              <th className="px-6 py-4">ID</th>
              <th className="px-6 py-4">Name</th>
              <th className="px-6 py-4">Department</th>
              <th className="px-6 py-4">Role</th>
              <th className="px-6 py-4">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-sm">
            {employees.map(e => (
              <tr key={e.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 font-bold">{e.id}</td>
                <td className="px-6 py-4 font-medium">{e.name}</td>
                <td className="px-6 py-4">{e.dept}</td>
                <td className="px-6 py-4 text-gray-600">{e.role}</td>
                <td className="px-6 py-4 text-green-600 font-bold">{e.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Employees;
import React, { useState } from 'react';
import { useHR } from '../../context/HRContext';
import Button from '../../components/erp/ui/Button';

const LeaveManagement = () => {
  const { leaves, approveLeave } = useHR();
  const [showForm, setShowForm] = useState(false);

  // Mock Request Form State
  const [req, setReq] = useState({ name: '', type: 'Annual', days: '', date: '' });

  const handleRequest = () => {
    if (!req.name || !req.days || !req.date) return alert('Please fill all fields.');
    alert(`Leave request submitted for ${req.name}. It will await HR approval.`);
    setShowForm(false);
    setReq({ name: '', type: 'Annual', days: '', date: '' });
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Leave Management</h1>
          <p className="text-sm text-gray-500">Track time-off requests and approval workflows.</p>
        </div>
        <Button variant="primary" onClick={() => setShowForm(!showForm)}>
          {showForm ? 'Cancel Request' : '+ Request Leave'}
        </Button>
      </div>

      {showForm && (
        <div className="bg-blue-50 border border-blue-100 p-6 rounded-xl flex gap-4 items-end shadow-sm">
          <div className="flex-1">
            <label className="text-xs font-bold text-gray-700">Employee Name</label>
            <input type="text" className="w-full mt-1 p-2 border rounded" value={req.name} onChange={e => setReq({...req, name: e.target.value})} />
          </div>
          <div className="flex-1">
            <label className="text-xs font-bold text-gray-700">Leave Type</label>
            <select className="w-full mt-1 p-2 border rounded bg-white" value={req.type} onChange={e => setReq({...req, type: e.target.value})}>
              <option>Annual</option><option>Sick</option><option>Unpaid</option>
            </select>
          </div>
          <div className="w-24">
            <label className="text-xs font-bold text-gray-700">Days</label>
            <input type="number" className="w-full mt-1 p-2 border rounded" value={req.days} onChange={e => setReq({...req, days: e.target.value})} />
          </div>
          <div className="flex-1">
            <label className="text-xs font-bold text-gray-700">Start Date</label>
            <input type="date" className="w-full mt-1 p-2 border rounded" value={req.date} onChange={e => setReq({...req, date: e.target.value})} />
          </div>
          <Button variant="primary" onClick={handleRequest}>Submit Request</Button>
        </div>
      )}

      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-4 border-b bg-gray-50">
          <h2 className="font-bold text-gray-700">Approval Workflow Inbox</h2>
        </div>
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-50 uppercase text-xs text-gray-500">
            <tr>
              <th className="px-6 py-4">Req ID</th>
              <th className="px-6 py-4">Employee</th>
              <th className="px-6 py-4">Leave Details</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4 text-center">Manager Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {leaves.map(leave => (
              <tr key={leave.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 font-mono font-bold text-gray-600">{leave.id}</td>
                <td className="px-6 py-4 font-bold text-gray-900">{leave.name} <span className="block text-xs font-normal text-gray-500">{leave.empId}</span></td>
                <td className="px-6 py-4">
                  <span className="font-medium text-gray-800">{leave.type} Leave ({leave.days} Days)</span>
                  <span className="block text-xs text-gray-500">Starting: {leave.date}</span>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                    leave.status === 'Approved' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {leave.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-center">
                  {leave.status === 'Pending' ? (
                    <div className="flex gap-2 justify-center">
                      <button onClick={() => approveLeave(leave.id)} className="bg-green-50 text-green-700 px-3 py-1.5 rounded hover:bg-green-100 font-bold text-xs transition-colors">Approve</button>
                      <button className="bg-red-50 text-red-700 px-3 py-1.5 rounded hover:bg-red-100 font-bold text-xs transition-colors">Reject</button>
                    </div>
                  ) : (
                    <span className="text-gray-400 text-xs font-bold uppercase">Processed</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeaveManagement;
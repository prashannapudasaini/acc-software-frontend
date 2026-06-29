import React, { useState } from 'react';
import { useHR } from '../../context/HRContext';
import Button from '../../components/erp/ui/Button';

const Employees = () => {
  const { employees, addEmployee } = useHR();
  const [showForm, setShowForm] = useState(false);
  
  const [newEmp, setNewEmp] = useState({ name: '', role: '', dept: 'Engineering', salary: '', joinDate: new Date().toISOString().split('T')[0] });

  const handleSave = () => {
    if (!newEmp.name || !newEmp.role || !newEmp.salary) return alert('Name, Role, and Salary are required.');
    addEmployee({
      ...newEmp,
      salary: Number(newEmp.salary)
    });
    setShowForm(false);
    setNewEmp({ name: '', role: '', dept: 'Engineering', salary: '', joinDate: new Date().toISOString().split('T')[0] });
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Employee Directory</h1>
          <p className="text-sm text-gray-500">Manage workforce profiles, roles, and compensation.</p>
        </div>
        <Button variant="primary" onClick={() => setShowForm(!showForm)}>
          {showForm ? 'Cancel' : '+ Onboard Employee'}
        </Button>
      </div>

      {showForm && (
        <div className="bg-white p-6 border rounded-xl shadow-sm grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
          <div><label className="text-xs font-bold text-gray-700">Full Name</label><input type="text" className="w-full p-2 border rounded mt-1" value={newEmp.name} onChange={e=>setNewEmp({...newEmp, name: e.target.value})} /></div>
          <div><label className="text-xs font-bold text-gray-700">Job Title / Role</label><input type="text" className="w-full p-2 border rounded mt-1" value={newEmp.role} onChange={e=>setNewEmp({...newEmp, role: e.target.value})} /></div>
          <div><label className="text-xs font-bold text-gray-700">Department</label>
            <select className="w-full p-2 border rounded mt-1" value={newEmp.dept} onChange={e=>setNewEmp({...newEmp, dept: e.target.value})}>
              <option>Engineering</option><option>Human Resources</option><option>Sales</option><option>Operations</option>
            </select>
          </div>
          <div><label className="text-xs font-bold text-gray-700">Base Salary (NRs/Month)</label><input type="number" className="w-full p-2 border rounded mt-1" value={newEmp.salary} onChange={e=>setNewEmp({...newEmp, salary: e.target.value})} /></div>
          <div><label className="text-xs font-bold text-gray-700">Joining Date</label><input type="date" className="w-full p-2 border rounded mt-1" value={newEmp.joinDate} onChange={e=>setNewEmp({...newEmp, joinDate: e.target.value})} /></div>
          <div><Button variant="primary" className="w-full" onClick={handleSave}>Complete Onboarding</Button></div>
        </div>
      )}

      <div className="bg-white border rounded-xl shadow-sm overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-50 uppercase text-xs text-gray-500">
            <tr>
              <th className="px-6 py-4">Employee ID</th>
              <th className="px-6 py-4">Name</th>
              <th className="px-6 py-4">Role & Department</th>
              <th className="px-6 py-4 text-right">Base Salary</th>
              <th className="px-6 py-4 text-center">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {employees.map(emp => (
              <tr key={emp.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 font-mono font-bold text-blue-600">{emp.id}</td>
                <td className="px-6 py-4 font-bold text-gray-900">{emp.name}</td>
                <td className="px-6 py-4">
                  <div>{emp.role}</div>
                  <div className="text-xs text-gray-500">{emp.dept}</div>
                </td>
                <td className="px-6 py-4 text-right font-bold text-gray-700">NRs. {emp.salary.toLocaleString()}</td>
                <td className="px-6 py-4 text-center">
                  <span className={`px-2 py-1 rounded-full text-xs font-bold ${emp.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {emp.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Employees;
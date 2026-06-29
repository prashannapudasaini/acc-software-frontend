import React, { useState } from 'react';
import { useHR } from '../../context/HRContext';
import { Card, CardContent } from '../../components/erp/ui/Card';
import Button from '../../components/erp/ui/Button';

const Attendance = () => {
  const { employees } = useHR();
  const today = new Date().toISOString().split('T')[0];
  
  // Local state to track today's attendance marks
  const [dailyLog, setDailyLog] = useState(
    employees.reduce((acc, emp) => ({ ...acc, [emp.id]: 'Present' }), {})
  );

  const handleMark = (empId, status) => {
    setDailyLog({ ...dailyLog, [empId]: status });
  };

  const handleSaveAttendance = () => {
    alert(`Attendance for ${today} saved successfully!`);
  };

  // Calculate stats based on dailyLog state
  const totalPresent = Object.values(dailyLog).filter(s => s === 'Present').length;
  const totalAbsent = Object.values(dailyLog).filter(s => s === 'Absent').length;
  const totalLeave = Object.values(dailyLog).filter(s => s === 'On Leave').length;

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Daily Attendance Tracker</h1>
          <p className="text-sm text-gray-500">Monitor daily workforce availability for {today}.</p>
        </div>
        <Button variant="primary" onClick={handleSaveAttendance}>Save Today's Log</Button>
      </div>

      {/* Daily Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="shadow-sm border-l-4 border-l-blue-500">
          <CardContent className="p-4">
            <p className="text-xs text-gray-500 font-bold uppercase">Total Workforce</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">{employees.length}</p>
          </CardContent>
        </Card>
        <Card className="shadow-sm border-l-4 border-l-green-500">
          <CardContent className="p-4">
            <p className="text-xs text-gray-500 font-bold uppercase">Present</p>
            <p className="text-2xl font-bold text-green-600 mt-1">{totalPresent}</p>
          </CardContent>
        </Card>
        <Card className="shadow-sm border-l-4 border-l-red-500">
          <CardContent className="p-4">
            <p className="text-xs text-gray-500 font-bold uppercase">Absent</p>
            <p className="text-2xl font-bold text-red-600 mt-1">{totalAbsent}</p>
          </CardContent>
        </Card>
        <Card className="shadow-sm border-l-4 border-l-yellow-500">
          <CardContent className="p-4">
            <p className="text-xs text-gray-500 font-bold uppercase">On Leave</p>
            <p className="text-2xl font-bold text-yellow-600 mt-1">{totalLeave}</p>
          </CardContent>
        </Card>
      </div>

      {/* Attendance Roster */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-50 uppercase text-xs text-gray-500">
            <tr>
              <th className="px-6 py-4">Employee</th>
              <th className="px-6 py-4">Department</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4 text-center">Mark Attendance</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {employees.map(emp => (
              <tr key={emp.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <span className="font-bold text-gray-900 block">{emp.name}</span>
                  <span className="text-xs text-gray-500">{emp.id}</span>
                </td>
                <td className="px-6 py-4 text-gray-600">{emp.dept}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                    dailyLog[emp.id] === 'Present' ? 'bg-green-100 text-green-700' :
                    dailyLog[emp.id] === 'Absent' ? 'bg-red-100 text-red-700' :
                    'bg-yellow-100 text-yellow-700'
                  }`}>
                    {dailyLog[emp.id]}
                  </span>
                </td>
                <td className="px-6 py-4 text-center">
                  <div className="inline-flex rounded-md shadow-sm" role="group">
                    <button onClick={() => handleMark(emp.id, 'Present')} className={`px-4 py-1.5 text-xs font-medium border border-gray-200 rounded-l-lg hover:bg-gray-100 ${dailyLog[emp.id] === 'Present' ? 'bg-green-50 text-green-700 border-green-200' : 'bg-white text-gray-900'}`}>
                      Present
                    </button>
                    <button onClick={() => handleMark(emp.id, 'Absent')} className={`px-4 py-1.5 text-xs font-medium border-t border-b border-gray-200 hover:bg-gray-100 ${dailyLog[emp.id] === 'Absent' ? 'bg-red-50 text-red-700 border-red-200' : 'bg-white text-gray-900'}`}>
                      Absent
                    </button>
                    <button onClick={() => handleMark(emp.id, 'On Leave')} className={`px-4 py-1.5 text-xs font-medium border border-gray-200 rounded-r-lg hover:bg-gray-100 ${dailyLog[emp.id] === 'On Leave' ? 'bg-yellow-50 text-yellow-700 border-yellow-200' : 'bg-white text-gray-900'}`}>
                      Leave
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Attendance;
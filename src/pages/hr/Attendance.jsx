import React from 'react';
import Button from '../../components/erp/ui/Button';

const Attendance = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Daily Attendance</h1>
        <div className="flex gap-3">
          <Button variant="outline">Download Report</Button>
          <Button variant="primary">Check In</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-2xl border shadow-sm">
            <p className="text-sm text-gray-500">Present Today</p>
            <p className="text-3xl font-bold">138/142</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border shadow-sm">
            <p className="text-sm text-gray-500">On Leave</p>
            <p className="text-3xl font-bold">4</p>
        </div>
      </div>
    </div>
  );
};

export default Attendance;
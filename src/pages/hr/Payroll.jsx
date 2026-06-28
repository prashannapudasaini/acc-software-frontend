import React from 'react';
import Button from '../../components/erp/ui/Button';

const Payroll = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Payroll Processing</h1>
        <Button variant="primary">Run Payroll (June)</Button>
      </div>

      <div className="bg-white p-8 rounded-2xl border border-gray-100 text-center shadow-sm">
        <h2 className="text-lg font-bold">Next Pay Cycle: June 30, 2026</h2>
        <p className="text-gray-500 mt-2">Ready to generate 142 payslips.</p>
        <div className="mt-6 flex justify-center gap-4">
            <Button variant="outline">Review Deductions</Button>
            <Button variant="outline">Check Allowances</Button>
        </div>
      </div>
    </div>
  );
};

export default Payroll;
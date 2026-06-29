import React, { useState } from 'react';
import { useHR } from '../../context/HRContext';
import { Card, CardContent } from '../../components/erp/ui/Card';
import Button from '../../components/erp/ui/Button';

const Payroll = () => {
  const { employees, payslips, generatePayroll } = useHR();
  
  const [selectedMonth, setSelectedMonth] = useState('June');
  const [selectedYear, setSelectedYear] = useState('2026');

  // Stats
  const currentMonthPayslips = payslips.filter(p => p.month === selectedMonth && p.year === selectedYear);
  const totalPayrollCost = currentMonthPayslips.reduce((sum, p) => sum + p.baseSalary, 0);
  const isProcessed = currentMonthPayslips.length > 0;

  const handleRunPayroll = () => {
    try {
      generatePayroll(selectedMonth, selectedYear);
      alert(`Successfully generated payroll for ${employees.length} employees.`);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Payroll Processing</h1>
          <p className="text-sm text-gray-500">Automated salary calculation and payslip generation.</p>
        </div>
        <div className="flex gap-3">
          <select className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none" value={selectedMonth} onChange={e=>setSelectedMonth(e.target.value)}>
            <option value="May">May</option>
            <option value="June">June</option>
            <option value="July">July</option>
          </select>
          <select className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none" value={selectedYear} onChange={e=>setSelectedYear(e.target.value)}>
            <option value="2026">2026</option>
          </select>
        </div>
      </div>

      <Card className="shadow-sm border-t-4 border-t-purple-500">
        <CardContent className="p-6 flex justify-between items-center bg-purple-50">
          <div>
            <h2 className="text-lg font-bold text-gray-900">Payroll Run: {selectedMonth} {selectedYear}</h2>
            <p className="text-sm text-gray-600 mt-1">
              {isProcessed 
                ? `Processed for ${currentMonthPayslips.length} employees.` 
                : `Ready to process for ${employees.length} eligible employees.`}
            </p>
          </div>
          <div>
            {isProcessed ? (
              <div className="text-right">
                <p className="text-sm text-gray-500 uppercase font-bold">Total Payout</p>
                <p className="text-3xl font-bold text-purple-700">NRs. {totalPayrollCost.toLocaleString()}</p>
              </div>
            ) : (
              <Button variant="primary" onClick={handleRunPayroll}>Run Automated Payroll</Button>
            )}
          </div>
        </CardContent>
      </Card>

      {isProcessed && (
        <div className="bg-white border rounded-xl shadow-sm overflow-hidden mt-6">
          <div className="p-4 border-b bg-gray-50 flex justify-between items-center">
            <h3 className="font-bold text-gray-700">Generated Payslips</h3>
            <Button variant="outline" size="sm">Export Bank File (CSV)</Button>
          </div>
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-50 uppercase text-xs text-gray-500">
              <tr>
                <th className="px-6 py-4">Payslip ID</th>
                <th className="px-6 py-4">Employee</th>
                <th className="px-6 py-4 text-right">Base Salary</th>
                <th className="px-6 py-4 text-right">Deductions (Tax/SSF)</th>
                <th className="px-6 py-4 text-right text-green-600 font-bold">Net Pay</th>
                <th className="px-6 py-4 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {currentMonthPayslips.map(ps => (
                <tr key={ps.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-mono font-bold text-gray-500">{ps.id}</td>
                  <td className="px-6 py-4 font-bold text-gray-900">{ps.name} <span className="text-xs font-normal text-gray-500 block">{ps.empId}</span></td>
                  <td className="px-6 py-4 text-right">NRs. {ps.baseSalary.toLocaleString()}</td>
                  <td className="px-6 py-4 text-right text-red-500">- NRs. {ps.deductions.toLocaleString()}</td>
                  <td className="px-6 py-4 text-right text-green-600 font-bold">NRs. {ps.netPay.toLocaleString()}</td>
                  <td className="px-6 py-4 text-center"><button className="text-blue-600 hover:underline text-xs font-bold">View PDF</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Payroll;
import React from 'react';
import { useFinance } from '../../context/FinanceContext';
import { Card, CardContent } from '../../components/erp/ui/Card';
import Button from '../../components/erp/ui/Button';

const Taxes = () => {
  const { accounts } = useFinance();

  // Aggregate for estimates
  const totalRevenue = Object.values(accounts).filter(a => a.type === 'Revenue').reduce((sum, a) => sum + a.balance, 0);
  const totalExpenses = Object.values(accounts).filter(a => a.type === 'Expenses').reduce((sum, a) => sum + a.balance, 0);

  // Standard Estimates (13% VAT)
  const estimatedVatCollected = totalRevenue * 0.13;
  const estimatedVatPaid = totalExpenses * 0.13;
  const netVatPayable = estimatedVatCollected - estimatedVatPaid;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Tax Management</h1>
          <p className="text-sm text-gray-500">VAT (13%) and TDS compliance tracking.</p>
        </div>
        <Button variant="primary">Generate Tax Report</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="shadow-sm">
          <CardContent className="p-6">
            <h3 className="font-bold text-gray-500 text-sm uppercase tracking-wider mb-2">VAT Collected (Output)</h3>
            <p className="text-2xl font-bold text-gray-900">NRs. {estimatedVatCollected.toLocaleString()}</p>
            <p className="text-xs text-gray-500 mt-2">13% on total recorded revenue.</p>
          </CardContent>
        </Card>

        <Card className="shadow-sm">
          <CardContent className="p-6">
            <h3 className="font-bold text-gray-500 text-sm uppercase tracking-wider mb-2">VAT Paid (Input)</h3>
            <p className="text-2xl font-bold text-gray-900">NRs. {estimatedVatPaid.toLocaleString()}</p>
            <p className="text-xs text-gray-500 mt-2">13% estimate on eligible expenses.</p>
          </CardContent>
        </Card>

        <Card className="shadow-sm border-t-4 border-t-red-500">
          <CardContent className="p-6">
            <h3 className="font-bold text-gray-900 text-sm uppercase tracking-wider mb-2">Net VAT Payable</h3>
            <p className="text-2xl font-bold text-red-600">NRs. {netVatPayable.toLocaleString()}</p>
            <p className="text-xs text-red-500 mt-2 font-medium">Due by 25th of next month.</p>
          </CardContent>
        </Card>
      </div>

      <div className="bg-white rounded-xl border shadow-sm p-6">
        <h2 className="font-bold text-lg mb-4">TDS (Tax Deducted at Source) Summary</h2>
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-50 uppercase text-xs text-gray-500">
            <tr>
              <th className="px-4 py-3">Category</th>
              <th className="px-4 py-3">Applicable Rate</th>
              <th className="px-4 py-3 text-right">Base Amount</th>
              <th className="px-4 py-3 text-right">TDS Withheld</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            <tr>
              <td className="px-4 py-4 font-medium">Rent Payments</td>
              <td className="px-4 py-4 text-gray-600">10%</td>
              <td className="px-4 py-4 text-right">NRs. 300,000</td>
              <td className="px-4 py-4 text-right font-bold">NRs. 30,000</td>
            </tr>
            <tr>
              <td className="px-4 py-4 font-medium">Consulting Services</td>
              <td className="px-4 py-4 text-gray-600">1.5%</td>
              <td className="px-4 py-4 text-right">NRs. 150,000</td>
              <td className="px-4 py-4 text-right font-bold">NRs. 2,250</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Taxes;
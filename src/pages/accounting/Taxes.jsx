import React, { useState } from 'react';
import Button from '../../components/erp/ui/Button';

const mockVatReturns = [
  { period: 'Jestha 2083 (May/Jun 2026)', outputVat: 119600.00, inputVat: 45500.00, payable: 74100.00, status: 'Draft', dueDate: 'Jul 25, 2026' },
  { period: 'Baisakh 2083 (Apr/May 2026)', outputVat: 104000.00, inputVat: 38000.00, payable: 66000.00, status: 'Filed', dueDate: 'Jun 25, 2026' },
  { period: 'Chaitra 2082 (Mar/Apr 2026)', outputVat: 130000.00, inputVat: 52000.00, payable: 78000.00, status: 'Filed & Paid', dueDate: 'May 25, 2026' },
];

const Taxes = () => {
  const [activeTab, setActiveTab] = useState('vat');

  return (
    <div className="h-full flex flex-col space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Tax Management</h1>
          <p className="text-gray-500 text-sm mt-1">Manage VAT, TDS, and generate compliance reports.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">Tax Settings</Button>
          <Button variant="primary">Generate Return</Button>
        </div>
      </div>

      <div className="border-b border-gray-200">
        <nav className="flex gap-6">
          <button onClick={() => setActiveTab('vat')} className={`py-3 text-sm font-medium border-b-2 transition-colors ${activeTab === 'vat' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>Value Added Tax (VAT)</button>
          <button onClick={() => setActiveTab('tds')} className={`py-3 text-sm font-medium border-b-2 transition-colors ${activeTab === 'tds' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>Tax Deducted at Source (TDS)</button>
        </nav>
      </div>

      {activeTab === 'vat' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
              <p className="text-sm font-medium text-gray-500 mb-1">Current VAT Liability</p>
              <p className="text-2xl font-bold text-red-600">NRs. 74,100.00</p>
            </div>
            <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
              <p className="text-sm font-medium text-gray-500 mb-1">Total Output VAT (MTD)</p>
              <p className="text-2xl font-bold text-gray-900">NRs. 119,600.00</p>
            </div>
            <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
              <p className="text-sm font-medium text-gray-500 mb-1">Total Input VAT (MTD)</p>
              <p className="text-2xl font-bold text-green-600">NRs. 45,500.00</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="p-4 border-b border-gray-100 bg-gray-50/50"><h2 className="font-bold text-gray-900">VAT Returns History</h2></div>
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-white border-b border-gray-100 text-gray-500 text-xs uppercase font-semibold">
                  <th className="px-6 py-4">Filing Period</th>
                  <th className="px-6 py-4 text-right">Output VAT (13%)</th>
                  <th className="px-6 py-4 text-right">Input VAT (13%)</th>
                  <th className="px-6 py-4 text-right">Net Payable</th>
                  <th className="px-6 py-4 text-center">Status</th>
                  <th className="px-6 py-4">Due Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {mockVatReturns.map((tax, i) => (
                  <tr key={i} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-sm font-bold text-gray-900">{tax.period}</td>
                    <td className="px-6 py-4 text-sm text-right text-gray-600">NRs. {tax.outputVat.toLocaleString('en-IN', {minimumFractionDigits: 2})}</td>
                    <td className="px-6 py-4 text-sm text-right text-gray-600">NRs. {tax.inputVat.toLocaleString('en-IN', {minimumFractionDigits: 2})}</td>
                    <td className="px-6 py-4 text-sm font-bold text-right text-gray-900">NRs. {tax.payable.toLocaleString('en-IN', {minimumFractionDigits: 2})}</td>
                    <td className="px-6 py-4 text-center">
                      <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${tax.status === 'Draft' ? 'bg-yellow-50 text-yellow-700' : 'bg-green-50 text-green-700'}`}>{tax.status}</span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">{tax.dueDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'tds' && <div className="p-12 text-center bg-white rounded-2xl border border-gray-100"><h3 className="text-lg font-bold">TDS Management</h3><p className="text-gray-500 mt-2">Track Tax Deducted at Source for vendors and employees.</p></div>}
    </div>
  );
};

export default Taxes;
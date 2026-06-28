import React, { useState } from 'react';
import Button from '../../components/erp/ui/Button';

const FinancialReports = () => {
  const [activeTab, setActiveTab] = useState('pl');

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Financial Reports</h1>
          <p className="text-gray-500 text-sm mt-1">Generate and view your core financial statements.</p>
        </div>
        <Button variant="outline" icon={<span className="mr-1">📥</span>}>Export PDF</Button>
      </div>

      {/* Report Tabs */}
      <div className="border-b border-gray-200">
        <nav className="flex gap-6">
          <button 
            onClick={() => setActiveTab('pl')}
            className={`py-3 text-sm font-medium border-b-2 transition-colors ${activeTab === 'pl' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
          >
            Profit & Loss
          </button>
          <button 
            onClick={() => setActiveTab('bs')}
            className={`py-3 text-sm font-medium border-b-2 transition-colors ${activeTab === 'bs' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
          >
            Balance Sheet
          </button>
          <button 
            onClick={() => setActiveTab('cf')}
            className={`py-3 text-sm font-medium border-b-2 transition-colors ${activeTab === 'cf' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
          >
            Cash Flow Statement
          </button>
        </nav>
      </div>

      {/* Report Content area */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 max-w-4xl mx-auto">
        
        {/* Profit & Loss View */}
        {activeTab === 'pl' && (
          <div>
            <div className="text-center mb-8">
              <h2 className="text-xl font-bold text-gray-900">NexusERP Solutions</h2>
              <h3 className="text-lg text-gray-600">Profit and Loss (Income Statement)</h3>
              <p className="text-sm text-gray-500">For the period: Jan 01, 2026 - Jun 28, 2026</p>
            </div>

            <div className="space-y-6 text-sm">
              {/* Income */}
              <div>
                <h4 className="font-bold text-gray-900 border-b border-gray-200 pb-2 mb-2">Operating Income</h4>
                <div className="flex justify-between py-1 text-gray-600 pl-4"><span>Sales Revenue</span><span>NRs. 920,000.00</span></div>
                <div className="flex justify-between py-1 text-gray-600 pl-4"><span>Service Revenue</span><span>NRs. 150,000.00</span></div>
                <div className="flex justify-between py-2 font-bold text-gray-900 mt-2 bg-gray-50 px-2 rounded"><span>Total Income</span><span>NRs. 1,070,000.00</span></div>
              </div>

              {/* COGS */}
              <div>
                <h4 className="font-bold text-gray-900 border-b border-gray-200 pb-2 mb-2">Cost of Goods Sold (COGS)</h4>
                <div className="flex justify-between py-1 text-gray-600 pl-4"><span>Materials</span><span>NRs. 210,000.00</span></div>
                <div className="flex justify-between py-1 text-gray-600 pl-4"><span>Direct Labor</span><span>NRs. 140,000.00</span></div>
                <div className="flex justify-between py-2 font-bold text-gray-900 mt-2 bg-gray-50 px-2 rounded"><span>Total COGS</span><span>NRs. 350,000.00</span></div>
              </div>
              
              {/* Gross Profit */}
              <div className="flex justify-between py-3 font-bold text-blue-900 text-base border-y-2 border-gray-200">
                <span>Gross Profit</span><span>NRs. 720,000.00</span>
              </div>

              {/* Expenses */}
              <div>
                <h4 className="font-bold text-gray-900 border-b border-gray-200 pb-2 mb-2">Operating Expenses</h4>
                <div className="flex justify-between py-1 text-gray-600 pl-4"><span>Rent & Utilities</span><span>NRs. 85,000.00</span></div>
                <div className="flex justify-between py-1 text-gray-600 pl-4"><span>Payroll</span><span>NRs. 180,000.00</span></div>
                <div className="flex justify-between py-1 text-gray-600 pl-4"><span>Marketing</span><span>NRs. 45,000.00</span></div>
                <div className="flex justify-between py-2 font-bold text-gray-900 mt-2 bg-gray-50 px-2 rounded"><span>Total Expenses</span><span>NRs. 310,000.00</span></div>
              </div>

              {/* Net Income */}
              <div className="flex justify-between py-3 font-bold text-green-700 text-lg border-y-2 border-green-200 bg-green-50 px-4 rounded">
                <span>Net Profit / (Loss)</span><span>NRs. 410,000.00</span>
              </div>
            </div>
          </div>
        )}

        {/* Balance Sheet View */}
        {activeTab === 'bs' && (
          <div className="text-center py-12">
            <span className="text-4xl">⚖️</span>
            <h3 className="text-lg font-bold mt-4">Balance Sheet View</h3>
            <p className="text-gray-500">Assets = Liabilities + Equity formatting structure will load here.</p>
          </div>
        )}

        {/* Cash Flow View */}
        {activeTab === 'cf' && (
          <div className="text-center py-12">
            <span className="text-4xl">🌊</span>
            <h3 className="text-lg font-bold mt-4">Cash Flow Statement</h3>
            <p className="text-gray-500">Operating, Investing, and Financing activities will load here.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FinancialReports;
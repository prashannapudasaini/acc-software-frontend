import React from 'react';
import { useFinance } from '../../context/FinanceContext';
import { Card, CardContent, CardHeader } from '../../components/erp/ui/Card';

const FinancialReports = () => {
  const { accounts } = useFinance();

  // Aggregate Balances dynamically
  const calcTotal = (type) => Object.values(accounts).filter(a => a.type === type).reduce((sum, a) => sum + a.balance, 0);
  
  const totalAssets = calcTotal('Assets');
  const totalLiabilities = calcTotal('Liabilities');
  const totalEquity = calcTotal('Equity');
  const totalRevenue = calcTotal('Revenue');
  const totalExpenses = calcTotal('Expenses');
  
  const netIncome = totalRevenue - totalExpenses;
  // Accounting check: Assets = Liabilities + Equity + Net Income
  const isBalanced = totalAssets === (totalLiabilities + totalEquity + netIncome);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Financial Statements</h1>
        <p className="text-sm text-gray-500">Generated in real-time from the General Ledger.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Income Statement */}
        <Card className="shadow-sm">
          <CardHeader title="Income Statement (Profit & Loss)" />
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="flex justify-between border-b pb-2">
                <span className="font-bold text-gray-700">Total Revenue</span>
                <span className="font-bold">NRs. {totalRevenue.toLocaleString()}</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="font-bold text-gray-700">Total Expenses</span>
                <span className="font-bold text-red-600">(NRs. {totalExpenses.toLocaleString()})</span>
              </div>
              <div className="flex justify-between bg-gray-50 p-3 rounded-lg border">
                <span className="font-bold text-lg text-gray-900">Net Income</span>
                <span className={`font-bold text-lg ${netIncome >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  NRs. {netIncome.toLocaleString()}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Balance Sheet */}
        <Card className="shadow-sm">
          <CardHeader title="Balance Sheet" />
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="flex justify-between border-b pb-2">
                <span className="font-bold text-gray-700">Total Assets</span>
                <span className="font-bold text-blue-600">NRs. {totalAssets.toLocaleString()}</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="font-bold text-gray-700">Total Liabilities</span>
                <span className="font-bold">NRs. {totalLiabilities.toLocaleString()}</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="font-bold text-gray-700">Total Equity (inc. Net Income)</span>
                <span className="font-bold">NRs. {(totalEquity + netIncome).toLocaleString()}</span>
              </div>
              <div className={`mt-4 text-xs font-bold p-2 text-center rounded ${isBalanced ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                {isBalanced ? '✓ Balance Sheet is Balanced' : '⚠️ Warning: Balance Sheet Mismatch'}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FinancialReports;
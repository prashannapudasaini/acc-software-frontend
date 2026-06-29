import React from 'react';
import { useFinance } from '../../context/FinanceContext';
import { Card, CardContent } from '../../components/erp/ui/Card';
import Button from '../../components/erp/ui/Button';

const Banking = () => {
  const { accounts } = useFinance();
  
  // Filter for bank/cash accounts (assuming 1000-1099 range or specific codes)
  const bankAccounts = Object.values(accounts).filter(acc => acc.code.startsWith('10'));

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Banking & Reconciliation</h1>
          <p className="text-sm text-gray-500">Monitor liquidity and reconcile bank statements.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">Transfer Funds</Button>
          <Button variant="primary">Reconcile Accounts</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {bankAccounts.map(acc => (
          <Card key={acc.code} className="border-t-4 border-t-blue-500 shadow-sm">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-bold text-gray-900">{acc.name}</h3>
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded font-mono">{acc.code}</span>
              </div>
              <p className="text-sm text-gray-500 mb-1">Ledger Balance</p>
              <p className="text-2xl font-bold text-gray-900">NRs. {acc.balance.toLocaleString()}</p>
              <div className="mt-4 pt-4 border-t text-sm flex justify-between text-gray-600">
                <span>Unreconciled:</span>
                <span className="font-bold">NRs. 0</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Simulated Reconciliation Panel */}
      <div className="bg-white rounded-xl border shadow-sm p-6 mt-6">
        <h2 className="font-bold text-lg mb-4">Pending Transactions (Nabil Bank)</h2>
        <div className="text-center py-10 bg-gray-50 rounded-lg border border-dashed border-gray-300">
          <p className="text-gray-500 mb-4">Upload a bank statement (.csv or .qbo) to begin matching transactions automatically.</p>
          <Button variant="outline">Import Bank Statement</Button>
        </div>
      </div>
    </div>
  );
};

export default Banking;
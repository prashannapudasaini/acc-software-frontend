import React, { createContext, useContext, useState } from 'react';

const FinanceContext = createContext();
export const useFinance = () => useContext(FinanceContext);

export const FinanceProvider = ({ children }) => {
  // 1. Chart of Accounts
  const [accounts, setAccounts] = useState({
    '1010': { code: '1010', name: 'Nabil Bank - Main', type: 'Assets', balance: 1550000, normalBalance: 'debit' },
    '1200': { code: '1200', name: 'Accounts Receivable', type: 'Assets', balance: 450000, normalBalance: 'debit' },
    '2000': { code: '2000', name: 'Accounts Payable', type: 'Liabilities', balance: 210000, normalBalance: 'credit' },
    '3000': { code: '3000', name: 'Owner Capital', type: 'Equity', balance: 5000000, normalBalance: 'credit' },
    '4000': { code: '4000', name: 'Sales Revenue', type: 'Revenue', balance: 2400000, normalBalance: 'credit' },
    '5000': { code: '5000', name: 'Cost of Goods Sold', type: 'Expenses', balance: 850000, normalBalance: 'debit' },
    '5200': { code: '5200', name: 'Operating Expenses', type: 'Expenses', balance: 300000, normalBalance: 'debit' },
  });

  const [journalEntries, setJournalEntries] = useState([]);
  const [invoices, setInvoices] = useState([
    { id: 'INV-001', customer: 'Kathmandu Tech', amount: 150000, status: 'Unpaid', date: '2026-06-25' }
  ]);
  const [bills, setBills] = useState([
    { id: 'BILL-001', vendor: 'Everest Supplies', amount: 50000, status: 'Unpaid', date: '2026-06-28' }
  ]);

  // 2. Core Engine: Post Journal Entry
  const postJournalEntry = (desc, lines) => {
    const totalDebit = lines.reduce((sum, line) => sum + (Number(line.debit) || 0), 0);
    const totalCredit = lines.reduce((sum, line) => sum + (Number(line.credit) || 0), 0);

    if (totalDebit !== totalCredit || totalDebit === 0) {
      alert("Error: Debits must equal Credits.");
      return false;
    }

    const newId = `JE-${String(journalEntries.length + 1).padStart(3, '0')}`;
    const date = new Date().toISOString().split('T')[0];

    const updatedAccounts = { ...accounts };
    lines.forEach(line => {
      const acc = updatedAccounts[line.accountCode];
      if (acc) {
        const debitAmt = Number(line.debit) || 0;
        const creditAmt = Number(line.credit) || 0;
        acc.balance += (acc.normalBalance === 'debit') ? (debitAmt - creditAmt) : (creditAmt - debitAmt);
      }
    });

    setAccounts(updatedAccounts);
    setJournalEntries(prev => [{ id: newId, date, desc, lines }, ...prev]);
    return true;
  };

  // 3. Automated Sub-Ledgers
  const createInvoice = (customer, amount) => {
    const id = `INV-${String(invoices.length + 1).padStart(3, '0')}`;
    setInvoices([{ id, customer, amount: Number(amount), status: 'Unpaid', date: new Date().toISOString().split('T')[0] }, ...invoices]);
    // Auto-Journal: Debit A/R, Credit Revenue
    postJournalEntry(`Auto-Invoice: ${id} for ${customer}`, [
      { accountCode: '1200', debit: amount, credit: 0 },
      { accountCode: '4000', debit: 0, credit: amount }
    ]);
  };

  const createBill = (vendor, amount) => {
    const id = `BILL-${String(bills.length + 1).padStart(3, '0')}`;
    setBills([{ id, vendor, amount: Number(amount), status: 'Unpaid', date: new Date().toISOString().split('T')[0] }, ...bills]);
    // Auto-Journal: Debit COGS, Credit A/P
    postJournalEntry(`Auto-Bill: ${id} from ${vendor}`, [
      { accountCode: '5000', debit: amount, credit: 0 },
      { accountCode: '2000', debit: 0, credit: amount }
    ]);
  };

  return (
    <FinanceContext.Provider value={{ accounts, journalEntries, postJournalEntry, invoices, createInvoice, bills, createBill }}>
      {children}
    </FinanceContext.Provider>
  );
};
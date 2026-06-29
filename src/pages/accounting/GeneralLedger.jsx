import React, { useState } from 'react';
import { useFinance } from '../../context/FinanceContext';
import Button from '../../components/erp/ui/Button';

const GeneralLedger = () => {
  const { accounts, journalEntries, postJournalEntry } = useFinance();
  const [showJEForm, setShowJEForm] = useState(false);
  const [desc, setDesc] = useState('');
  const [lines, setLines] = useState([{ accountCode: '', debit: '', credit: '' }, { accountCode: '', debit: '', credit: '' }]);

  const handleLineChange = (index, field, value) => {
    const newLines = [...lines];
    newLines[index][field] = value;
    if (field === 'debit' && value) newLines[index].credit = '';
    if (field === 'credit' && value) newLines[index].debit = '';
    setLines(newLines);
  };

  const handlePost = () => {
    if (!desc) return alert('Description is required.');
    const success = postJournalEntry(desc, lines);
    if (success) {
      setShowJEForm(false);
      setDesc('');
      setLines([{ accountCode: '', debit: '', credit: '' }, { accountCode: '', debit: '', credit: '' }]);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">General Ledger</h1>
        <Button variant="primary" onClick={() => setShowJEForm(!showJEForm)}>{showJEForm ? 'Cancel' : '+ Post Journal Entry'}</Button>
      </div>

      {showJEForm && (
        <div className="bg-white border p-6 rounded-xl shadow-sm">
          <input type="text" placeholder="Description/Memo" className="w-full mb-4 p-2 border rounded" value={desc} onChange={e => setDesc(e.target.value)} />
          {lines.map((line, idx) => (
            <div key={idx} className="flex gap-4 mb-2">
              <select className="w-1/2 p-2 border rounded" value={line.accountCode} onChange={e => handleLineChange(idx, 'accountCode', e.target.value)}>
                <option value="">Select Account...</option>
                {Object.values(accounts).map(acc => (
                  <option key={acc.code} value={acc.code}>{acc.code} - {acc.name}</option>
                ))}
              </select>
              <input type="number" placeholder="Debit" className="w-1/4 p-2 border rounded" value={line.debit} onChange={e => handleLineChange(idx, 'debit', e.target.value)} />
              <input type="number" placeholder="Credit" className="w-1/4 p-2 border rounded" value={line.credit} onChange={e => handleLineChange(idx, 'credit', e.target.value)} />
            </div>
          ))}
          <div className="mt-4 flex justify-between">
            <button onClick={() => setLines([...lines, { accountCode: '', debit: '', credit: '' }])} className="text-blue-600 text-sm font-bold">+ Add Line</button>
            <Button variant="primary" onClick={handlePost}>Post Entry</Button>
          </div>
        </div>
      )}

      <div className="bg-white rounded-xl border shadow-sm">
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-50 uppercase text-gray-500 text-xs">
            <tr><th className="px-6 py-4">Date</th><th className="px-6 py-4">JE ID</th><th className="px-6 py-4">Description</th><th className="px-6 py-4">Lines</th></tr>
          </thead>
          <tbody className="divide-y">
            {journalEntries.map((je, idx) => (
              <tr key={idx} className="hover:bg-gray-50">
                <td className="px-6 py-4">{je.date}</td>
                <td className="px-6 py-4 font-mono font-bold text-gray-700">{je.id}</td>
                <td className="px-6 py-4">{je.desc}</td>
                <td className="px-6 py-4">
                  {je.lines.map((l, i) => l.accountCode && (
                    <div key={i} className="text-xs">
                      {accounts[l.accountCode]?.name}: {l.debit ? `DR ${l.debit}` : `CR ${l.credit}`}
                    </div>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GeneralLedger;
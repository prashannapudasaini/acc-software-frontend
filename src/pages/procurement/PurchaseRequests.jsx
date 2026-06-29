import React, { useState } from 'react';
import Button from '../../components/erp/ui/Button';

const stages = ['Employee', 'Dept Head', 'Finance', 'Procurement'];

const initialPRs = [
  { id: 'PR-2026-089', item: '10x Dell Ultrasharp Monitors', reqBy: 'IT Dept', amount: 350000, stage: 2 }, // At Finance
  { id: 'PR-2026-090', item: 'Quarterly Office Stationary', reqBy: 'HR Dept', amount: 45000, stage: 4 }, // Approved/PO Gen
  { id: 'PR-2026-091', item: 'AWS Cloud Server Hosting (Year)', reqBy: 'Engineering', amount: 850000, stage: 1 }, // At Dept Head
];

const PurchaseRequests = () => {
  const [prs, setPrs] = useState(initialPRs);
  const [showForm, setShowForm] = useState(false);
  const [newPr, setNewPr] = useState({ item: '', reqBy: '', amount: '' });

  const handleDraft = () => {
    if (!newPr.item || !newPr.amount) return alert('Item and Est. Amount required.');
    setPrs([{
      id: `PR-2026-0${92 + prs.length}`,
      item: newPr.item,
      reqBy: newPr.reqBy || 'Self',
      amount: Number(newPr.amount),
      stage: 1 // Starts at Dept Head approval
    }, ...prs]);
    setShowForm(false);
    setNewPr({ item: '', reqBy: '', amount: '' });
  };

  const advanceStage = (id, currentStage) => {
    if (currentStage >= 4) return;
    setPrs(prs.map(pr => pr.id === id ? { ...pr, stage: pr.stage + 1 } : pr));
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Purchase Requests (PR)</h1>
          <p className="text-sm text-gray-500">Multi-tier spending authorization workflow.</p>
        </div>
        <Button variant="primary" onClick={() => setShowForm(!showForm)}>
          {showForm ? 'Cancel' : '+ Draft PR'}
        </Button>
      </div>

      {showForm && (
        <div className="bg-blue-50 p-6 border border-blue-100 rounded-xl shadow-sm flex flex-wrap gap-4 items-end">
          <div className="flex-1"><label className="text-xs font-bold text-gray-700">Item / Service Requested</label><input type="text" className="w-full p-2 border rounded mt-1 bg-white" value={newPr.item} onChange={e=>setNewPr({...newPr, item: e.target.value})} /></div>
          <div className="w-48"><label className="text-xs font-bold text-gray-700">Requesting Dept</label><input type="text" className="w-full p-2 border rounded mt-1 bg-white" value={newPr.reqBy} onChange={e=>setNewPr({...newPr, reqBy: e.target.value})} /></div>
          <div className="w-48"><label className="text-xs font-bold text-gray-700">Est. Amount (NRs)</label><input type="number" className="w-full p-2 border rounded mt-1 bg-white" value={newPr.amount} onChange={e=>setNewPr({...newPr, amount: e.target.value})} /></div>
          <div><Button variant="primary" onClick={handleDraft}>Submit Request</Button></div>
        </div>
      )}

      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-6 space-y-6">
          {prs.map((pr) => (
            <div key={pr.id} className="border border-gray-200 rounded-xl p-5 hover:border-blue-300 transition-colors shadow-sm">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                <div>
                  <h3 className="font-bold text-lg text-gray-900">{pr.item}</h3>
                  <p className="text-sm text-gray-500 font-mono mt-1">{pr.id} • Requested by: {pr.reqBy} • <span className="font-bold text-blue-600">Est. NRs. {pr.amount.toLocaleString()}</span></p>
                </div>
                <div className="mt-4 md:mt-0">
                  {pr.stage === 4 ? (
                    <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-xs font-bold border border-green-200">✅ PO Generated</span>
                  ) : (
                    <Button variant="outline" size="sm" onClick={() => advanceStage(pr.id, pr.stage)}>
                      Approve Step {pr.stage}
                    </Button>
                  )}
                </div>
              </div>
              
              {/* Approval Workflow Visualization */}
              <div className="flex items-center justify-between relative pt-2">
                <div className="absolute left-0 top-6 w-full h-1 bg-gray-100 -z-10"></div>
                {stages.map((stageName, index) => {
                  const stepNum = index + 1;
                  const isCompleted = stepNum <= pr.stage;
                  const isCurrent = stepNum === pr.stage + 1;
                  
                  return (
                    <div key={stageName} className="flex flex-col items-center bg-white px-4">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-all duration-300
                        ${isCompleted ? 'bg-blue-500 border-blue-500 text-white shadow-md' : 
                          isCurrent ? 'bg-white border-blue-500 text-blue-600 shadow-[0_0_0_4px_rgba(59,130,246,0.1)]' : 
                          'bg-gray-50 border-gray-200 text-gray-400'}`}>
                        {isCompleted ? '✓' : stepNum}
                      </div>
                      <span className={`text-[10px] uppercase tracking-wider mt-3 font-bold ${isCompleted || isCurrent ? 'text-gray-800' : 'text-gray-400'}`}>
                        {stageName}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PurchaseRequests;
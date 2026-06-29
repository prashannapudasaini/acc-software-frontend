import React, { useState } from 'react';
import Button from '../../components/erp/ui/Button';

const initialTickets = [
  { id: 'MNT-401', assetId: 'AST-1002', name: 'Office Delivery Van', issue: 'Routine Servicing & Oil Change', priority: 'Medium', status: 'Scheduled', date: '2026-07-05' },
  { id: 'MNT-402', assetId: 'AST-1001', name: 'MacBook Pro 16"', issue: 'Battery Replacement (Under Warranty)', priority: 'High', status: 'In Progress', date: '2026-06-29' },
];

const AssetMaintenance = () => {
  const [tickets, setTickets] = useState(initialTickets);
  const [showForm, setShowForm] = useState(false);
  const [newTicket, setNewTicket] = useState({ assetId: '', issue: '', priority: 'Medium', date: '' });

  const handleCreate = () => {
    if (!newTicket.assetId || !newTicket.issue) return alert('Asset ID and Issue description required.');
    setTickets([{
      id: `MNT-${Math.floor(500 + Math.random() * 500)}`,
      assetId: newTicket.assetId,
      name: 'Linked Asset', // Mocked link
      issue: newTicket.issue,
      priority: newTicket.priority,
      status: 'Scheduled',
      date: newTicket.date || new Date().toISOString().split('T')[0]
    }, ...tickets]);
    setShowForm(false);
    setNewTicket({ assetId: '', issue: '', priority: 'Medium', date: '' });
  };

  const cycleStatus = (id, currentStatus) => {
    const nextStatus = currentStatus === 'Scheduled' ? 'In Progress' : currentStatus === 'In Progress' ? 'Completed' : 'Scheduled';
    setTickets(tickets.map(t => t.id === id ? { ...t, status: nextStatus } : t));
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Maintenance & Repairs</h1>
          <p className="text-sm text-gray-500">Track service tickets and minimize operational downtime.</p>
        </div>
        <Button variant="primary" onClick={() => setShowForm(!showForm)}>
          {showForm ? 'Cancel' : '+ New Ticket'}
        </Button>
      </div>

      {showForm && (
        <div className="bg-yellow-50 p-6 border border-yellow-100 rounded-xl shadow-sm flex flex-wrap gap-4 items-end">
          <div className="w-48"><label className="text-xs font-bold text-gray-700">Asset ID</label><input type="text" placeholder="AST-XXXX" className="w-full p-2 border rounded mt-1 bg-white" value={newTicket.assetId} onChange={e=>setNewTicket({...newTicket, assetId: e.target.value})} /></div>
          <div className="flex-1"><label className="text-xs font-bold text-gray-700">Issue Description</label><input type="text" className="w-full p-2 border rounded mt-1 bg-white" value={newTicket.issue} onChange={e=>setNewTicket({...newTicket, issue: e.target.value})} /></div>
          <div className="w-32"><label className="text-xs font-bold text-gray-700">Priority</label>
            <select className="w-full p-2 border rounded mt-1 bg-white" value={newTicket.priority} onChange={e=>setNewTicket({...newTicket, priority: e.target.value})}>
              <option>High</option><option>Medium</option><option>Low</option>
            </select>
          </div>
          <div><Button variant="primary" onClick={handleCreate}>Create Ticket</Button></div>
        </div>
      )}

      <div className="bg-white border rounded-xl shadow-sm overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-50 uppercase text-xs text-gray-500">
            <tr>
              <th className="px-6 py-4">Ticket</th>
              <th className="px-6 py-4">Asset Detail</th>
              <th className="px-6 py-4">Issue</th>
              <th className="px-6 py-4 text-center">Status</th>
              <th className="px-6 py-4 text-center">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {tickets.map(ticket => (
              <tr key={ticket.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <p className="font-mono font-bold text-gray-700">{ticket.id}</p>
                  <p className="text-xs text-gray-500">{ticket.date}</p>
                </td>
                <td className="px-6 py-4">
                  <p className="font-bold text-gray-900">{ticket.name}</p>
                  <p className="text-xs text-gray-500">{ticket.assetId}</p>
                </td>
                <td className="px-6 py-4">
                  <p className="text-gray-800">{ticket.issue}</p>
                  <span className={`text-[10px] font-bold uppercase tracking-wider ${ticket.priority === 'High' ? 'text-red-500' : 'text-yellow-600'}`}>{ticket.priority} Priority</span>
                </td>
                <td className="px-6 py-4 text-center">
                  <span className={`px-2 py-1 rounded-full text-[10px] font-bold ${
                    ticket.status === 'Completed' ? 'bg-green-100 text-green-700' : 
                    ticket.status === 'In Progress' ? 'bg-blue-100 text-blue-700' : 
                    'bg-yellow-100 text-yellow-700'
                  }`}>
                    {ticket.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-center">
                  <button onClick={() => cycleStatus(ticket.id, ticket.status)} className="text-xs text-blue-600 font-bold hover:underline">
                    Update Status
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AssetMaintenance;
import React, { useState } from 'react';
import { useHR } from '../../context/HRContext';
import { Card, CardContent } from '../../components/erp/ui/Card';
import Button from '../../components/erp/ui/Button';

const initialReviews = [
  { id: 'REV-001', empId: 'EMP-001', name: 'Sarita Shakya', reviewer: 'CEO', period: 'Q2 2026', rating: 4.5, status: 'Finalized' },
  { id: 'REV-002', empId: 'EMP-002', name: 'Ramesh Thapa', reviewer: 'CTO', period: 'Q2 2026', rating: 4.8, status: 'Draft' },
];

const Performance = () => {
  const { employees } = useHR(); // Pull live employees from context
  const [reviews, setReviews] = useState(initialReviews);
  const [showForm, setShowForm] = useState(false);
  
  const [newReview, setNewReview] = useState({ empId: '', reviewer: '', period: 'Q3 2026', rating: '' });

  const handleSave = () => {
    if (!newReview.empId || !newReview.rating) return alert('Employee and Rating are required.');
    
    // Find employee name based on ID
    const emp = employees.find(e => e.id === newReview.empId);
    
    setReviews([{
      id: `REV-00${reviews.length + 1}`,
      empId: newReview.empId,
      name: emp ? emp.name : 'Unknown',
      reviewer: newReview.reviewer || 'HR Manager',
      period: newReview.period,
      rating: Number(newReview.rating),
      status: 'Finalized'
    }, ...reviews]);
    
    setShowForm(false);
    setNewReview({ empId: '', reviewer: '', period: 'Q3 2026', rating: '' });
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Performance & Appraisals</h1>
          <p className="text-sm text-gray-500">Track KPIs, OKRs, and quarterly employee reviews.</p>
        </div>
        <Button variant="primary" onClick={() => setShowForm(!showForm)}>
          {showForm ? 'Cancel Review' : '+ Add Review'}
        </Button>
      </div>

      {showForm && (
        <div className="bg-white p-6 border rounded-xl shadow-sm grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
          <div className="md:col-span-2">
            <label className="text-xs font-bold text-gray-700">Select Employee</label>
            <select className="w-full p-2 border rounded mt-1" value={newReview.empId} onChange={e=>setNewReview({...newReview, empId: e.target.value})}>
              <option value="">-- Choose Employee --</option>
              {employees.map(e => <option key={e.id} value={e.id}>{e.name} ({e.role})</option>)}
            </select>
          </div>
          <div><label className="text-xs font-bold text-gray-700">Reviewer</label><input type="text" placeholder="Manager Name" className="w-full p-2 border rounded mt-1" value={newReview.reviewer} onChange={e=>setNewReview({...newReview, reviewer: e.target.value})} /></div>
          <div><label className="text-xs font-bold text-gray-700">Rating (1-5)</label><input type="number" step="0.1" min="1" max="5" className="w-full p-2 border rounded mt-1" value={newReview.rating} onChange={e=>setNewReview({...newReview, rating: e.target.value})} /></div>
          <div><Button variant="primary" className="w-full" onClick={handleSave}>Submit Review</Button></div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-l-4 border-l-blue-500 shadow-sm">
          <CardContent className="p-6">
            <h3 className="font-bold text-gray-500 text-xs uppercase tracking-wider mb-2">Company Avg Rating</h3>
            <p className="text-3xl font-bold text-gray-900">4.6 <span className="text-sm text-gray-400 font-normal">/ 5.0</span></p>
          </CardContent>
        </Card>
        <Card className="border-l-4 border-l-yellow-500 shadow-sm">
          <CardContent className="p-6">
            <h3 className="font-bold text-gray-500 text-xs uppercase tracking-wider mb-2">Reviews Pending</h3>
            <p className="text-3xl font-bold text-gray-900">12</p>
          </CardContent>
        </Card>
        <Card className="border-l-4 border-l-green-500 shadow-sm">
          <CardContent className="p-6">
            <h3 className="font-bold text-gray-500 text-xs uppercase tracking-wider mb-2">Top Performer (Q2)</h3>
            <p className="text-xl font-bold text-gray-900 truncate">Ramesh Thapa</p>
            <p className="text-xs text-green-600 font-bold mt-1">4.8 Rating</p>
          </CardContent>
        </Card>
      </div>

      <div className="bg-white border rounded-xl shadow-sm overflow-hidden">
        <div className="p-4 border-b bg-gray-50">
          <h2 className="font-bold text-gray-700">Recent Appraisals</h2>
        </div>
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-50 uppercase text-xs text-gray-500">
            <tr>
              <th className="px-6 py-4">Employee</th>
              <th className="px-6 py-4">Review Period</th>
              <th className="px-6 py-4">Reviewer</th>
              <th className="px-6 py-4 text-center">Score</th>
              <th className="px-6 py-4 text-center">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {reviews.map(rev => (
              <tr key={rev.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 font-bold text-gray-900">{rev.name} <span className="text-xs font-normal text-gray-500 block">{rev.empId}</span></td>
                <td className="px-6 py-4 text-gray-600">{rev.period}</td>
                <td className="px-6 py-4 text-gray-600">{rev.reviewer}</td>
                <td className="px-6 py-4 text-center">
                  <span className={`font-bold text-lg ${rev.rating >= 4.5 ? 'text-green-600' : rev.rating >= 3.0 ? 'text-yellow-600' : 'text-red-600'}`}>
                    {rev.rating.toFixed(1)}
                  </span>
                </td>
                <td className="px-6 py-4 text-center">
                  <span className={`px-2 py-1 rounded-full text-xs font-bold ${rev.status === 'Finalized' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-700'}`}>
                    {rev.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Performance;
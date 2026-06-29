import React, { useState } from 'react';
import { Card, CardContent } from '../../components/erp/ui/Card';
import Button from '../../components/erp/ui/Button';

const initialAssets = [
  { id: 'AST-1001', name: 'MacBook Pro 16"', category: 'IT Equipment', purchaseDate: '2025-01-10', cost: 250000, lifeYears: 3, assignee: 'Sarita Shakya', status: 'In Use' },
  { id: 'AST-1002', name: 'Office Delivery Van', category: 'Vehicles', purchaseDate: '2023-05-20', cost: 3500000, lifeYears: 10, assignee: 'Logistics', status: 'In Use' },
  { id: 'AST-1003', name: 'Conference Table', category: 'Furniture', purchaseDate: '2024-11-05', cost: 85000, lifeYears: 5, assignee: 'Meeting Room A', status: 'In Use' },
];

const AssetTracking = () => {
  const [assets, setAssets] = useState(initialAssets);
  const [showForm, setShowForm] = useState(false);
  const [newAsset, setNewAsset] = useState({ name: '', category: 'IT Equipment', cost: '', lifeYears: '', assignee: '' });

  // Calculate current book value (Straight-line depreciation simplified for demo)
  const calculateBookValue = (cost, purchaseDate, lifeYears) => {
    const yearsElapsed = (new Date() - new Date(purchaseDate)) / (1000 * 60 * 60 * 24 * 365.25);
    const annualDepreciation = cost / lifeYears;
    const accumulatedDepreciation = Math.min(yearsElapsed * annualDepreciation, cost);
    return cost - accumulatedDepreciation;
  };

  const handleSave = () => {
    if (!newAsset.name || !newAsset.cost) return alert('Asset name and cost are required.');
    setAssets([{
      id: `AST-${Math.floor(1000 + Math.random() * 9000)}`,
      name: newAsset.name,
      category: newAsset.category,
      purchaseDate: new Date().toISOString().split('T')[0],
      cost: Number(newAsset.cost),
      lifeYears: Number(newAsset.lifeYears) || 5,
      assignee: newAsset.assignee || 'Unassigned',
      status: 'In Use'
    }, ...assets]);
    setShowForm(false);
    setNewAsset({ name: '', category: 'IT Equipment', cost: '', lifeYears: '', assignee: '' });
  };

  const totalAssetValue = assets.reduce((sum, a) => sum + calculateBookValue(a.cost, a.purchaseDate, a.lifeYears), 0);

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Fixed Asset Tracking</h1>
          <p className="text-sm text-gray-500">Manage company assets, assignments, and depreciation.</p>
        </div>
        <Button variant="primary" onClick={() => setShowForm(!showForm)}>
          {showForm ? 'Cancel' : '+ Register Asset'}
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="shadow-sm border-l-4 border-l-blue-500">
          <CardContent className="p-6">
            <h3 className="font-bold text-gray-500 text-xs uppercase mb-1">Total Assets Registered</h3>
            <p className="text-3xl font-bold text-gray-900">{assets.length}</p>
          </CardContent>
        </Card>
        <Card className="shadow-sm border-l-4 border-l-green-500">
          <CardContent className="p-6">
            <h3 className="font-bold text-gray-500 text-xs uppercase mb-1">Total Book Value</h3>
            <p className="text-3xl font-bold text-green-600">NRs. {totalAssetValue.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
          </CardContent>
        </Card>
      </div>

      {showForm && (
        <div className="bg-white p-6 border rounded-xl shadow-sm grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
          <div className="md:col-span-2"><label className="text-xs font-bold text-gray-700">Asset Name</label><input type="text" className="w-full p-2 border rounded mt-1" value={newAsset.name} onChange={e=>setNewAsset({...newAsset, name: e.target.value})} /></div>
          <div><label className="text-xs font-bold text-gray-700">Category</label>
            <select className="w-full p-2 border rounded mt-1" value={newAsset.category} onChange={e=>setNewAsset({...newAsset, category: e.target.value})}>
              <option>IT Equipment</option><option>Vehicles</option><option>Furniture</option>
            </select>
          </div>
          <div><label className="text-xs font-bold text-gray-700">Cost (NRs)</label><input type="number" className="w-full p-2 border rounded mt-1" value={newAsset.cost} onChange={e=>setNewAsset({...newAsset, cost: e.target.value})} /></div>
          <div><Button variant="primary" className="w-full" onClick={handleSave}>Save Asset</Button></div>
        </div>
      )}

      <div className="bg-white border rounded-xl shadow-sm overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-50 uppercase text-xs text-gray-500">
            <tr>
              <th className="px-6 py-4">Asset ID & Name</th>
              <th className="px-6 py-4">Category</th>
              <th className="px-6 py-4">Assignee</th>
              <th className="px-6 py-4 text-right">Purchase Cost</th>
              <th className="px-6 py-4 text-right text-blue-600 font-bold">Current Book Value</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {assets.map(asset => {
              const bookValue = calculateBookValue(asset.cost, asset.purchaseDate, asset.lifeYears);
              return (
                <tr key={asset.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <p className="font-bold text-gray-900">{asset.name}</p>
                    <p className="text-xs text-gray-500">{asset.id} • Acquired: {asset.purchaseDate}</p>
                  </td>
                  <td className="px-6 py-4 text-gray-600">{asset.category}</td>
                  <td className="px-6 py-4 font-medium">{asset.assignee}</td>
                  <td className="px-6 py-4 text-right">NRs. {asset.cost.toLocaleString()}</td>
                  <td className="px-6 py-4 text-right font-bold text-blue-600">NRs. {bookValue.toLocaleString(undefined, { maximumFractionDigits: 0 })}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AssetTracking;
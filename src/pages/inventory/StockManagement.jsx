import React, { useState } from 'react';
import { useInventory } from '../../context/InventoryContext';
import Button from '../../components/erp/ui/Button';

const StockManagement = () => {
  const { products, movements, recordMovement } = useInventory();
  const [showAdjust, setShowAdjust] = useState(false);
  
  const [type, setType] = useState('IN');
  const [sku, setSku] = useState('');
  const [qty, setQty] = useState('');
  const [remarks, setRemarks] = useState('');

  const handlePost = () => {
    if (!sku || !qty) return alert('SKU and Quantity required.');
    try {
      recordMovement(type, sku, qty, remarks);
      setShowAdjust(false);
      setSku(''); setQty(''); setRemarks('');
    } catch (error) {
      alert(error.message); // Catches insufficient stock errors
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Stock Control</h1>
          <p className="text-sm text-gray-500">Record stock IN/OUT movements and track real-time levels.</p>
        </div>
        <Button variant="primary" onClick={() => setShowAdjust(!showAdjust)}>
          {showAdjust ? 'Cancel' : '+ Record Movement'}
        </Button>
      </div>

      {showAdjust && (
        <div className="bg-white p-6 border rounded-xl flex gap-4 items-end shadow-sm">
          <div className="flex-1">
            <label className="text-xs font-bold text-gray-700">Type</label>
            <select className="w-full p-2 border rounded mt-1 font-bold" value={type} onChange={e=>setType(e.target.value)}>
              <option value="IN">Stock IN (Receive)</option>
              <option value="OUT">Stock OUT (Dispatch)</option>
            </select>
          </div>
          <div className="flex-1">
            <label className="text-xs font-bold text-gray-700">Product</label>
            <select className="w-full p-2 border rounded mt-1" value={sku} onChange={e=>setSku(e.target.value)}>
              <option value="">Select Item...</option>
              {products.map(p => <option key={p.sku} value={p.sku}>{p.name} ({p.stock} in stock)</option>)}
            </select>
          </div>
          <div className="w-24">
            <label className="text-xs font-bold text-gray-700">Qty</label>
            <input type="number" className="w-full p-2 border rounded mt-1" value={qty} onChange={e=>setQty(e.target.value)} />
          </div>
          <div className="flex-1">
            <label className="text-xs font-bold text-gray-700">Remarks</label>
            <input type="text" placeholder="e.g. PO-2026-05" className="w-full p-2 border rounded mt-1" value={remarks} onChange={e=>setRemarks(e.target.value)} />
          </div>
          <Button variant="primary" onClick={handlePost}>Post</Button>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Current Stock Levels */}
        <div className="bg-white border rounded-xl shadow-sm p-6">
          <h2 className="font-bold mb-4">Current Live Stock</h2>
          <div className="space-y-3">
            {products.map(p => {
              const isLow = p.stock <= p.reorderLevel;
              return (
                <div key={p.sku} className="flex justify-between items-center p-3 border rounded-lg hover:bg-gray-50">
                  <div>
                    <p className="font-bold text-sm text-gray-900">{p.name}</p>
                    <p className="text-xs text-gray-500 font-mono">{p.sku}</p>
                  </div>
                  <div className="text-right">
                    <p className={`text-lg font-bold ${isLow ? 'text-red-600' : 'text-gray-900'}`}>{p.stock} <span className="text-xs font-normal text-gray-500">{p.unit}</span></p>
                    {isLow && <span className="text-[10px] bg-red-100 text-red-700 px-2 rounded-full font-bold">Low Stock</span>}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Movement History */}
        <div className="bg-white border rounded-xl shadow-sm p-6">
          <h2 className="font-bold mb-4">Movement Ledger</h2>
          <div className="space-y-3">
            {movements.map(m => (
              <div key={m.id} className="flex justify-between items-center p-3 border-b last:border-0">
                <div className="flex items-center gap-3">
                  <span className={`w-8 h-8 flex items-center justify-center rounded-full text-xs font-bold ${m.type === 'IN' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>
                    {m.type}
                  </span>
                  <div>
                    <p className="text-sm font-bold text-gray-900">{m.sku}</p>
                    <p className="text-xs text-gray-500">{m.date} • {m.remarks}</p>
                  </div>
                </div>
                <span className="font-bold text-gray-900">{m.qty}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StockManagement;
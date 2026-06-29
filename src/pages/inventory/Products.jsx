import React, { useState } from 'react';
import { useInventory } from '../../context/InventoryContext';
import Button from '../../components/erp/ui/Button';

const Products = () => {
  const { products, addProduct } = useInventory();
  const [showForm, setShowForm] = useState(false);
  
  // New Product State
  const [newProd, setNewProd] = useState({ sku: '', name: '', category: 'Electronics', costPrice: '', sellingPrice: '', reorderLevel: '' });

  const handleSave = () => {
    if (!newProd.sku || !newProd.name) return alert('SKU and Name are required.');
    addProduct({
      ...newProd,
      costPrice: Number(newProd.costPrice),
      sellingPrice: Number(newProd.sellingPrice),
      reorderLevel: Number(newProd.reorderLevel),
      unit: 'pcs'
    });
    setShowForm(false);
    setNewProd({ sku: '', name: '', category: 'Electronics', costPrice: '', sellingPrice: '', reorderLevel: '' });
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Product Database</h1>
          <p className="text-sm text-gray-500">Master list of all inventory items and pricing.</p>
        </div>
        <Button variant="primary" onClick={() => setShowForm(!showForm)}>
          {showForm ? 'Cancel' : '+ Add Product'}
        </Button>
      </div>

      {showForm && (
        <div className="bg-white p-6 border rounded-xl shadow-sm grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
          <div><label className="text-xs font-bold text-gray-700">SKU Code</label><input type="text" className="w-full p-2 border rounded mt-1" value={newProd.sku} onChange={e=>setNewProd({...newProd, sku: e.target.value})} /></div>
          <div><label className="text-xs font-bold text-gray-700">Product Name</label><input type="text" className="w-full p-2 border rounded mt-1" value={newProd.name} onChange={e=>setNewProd({...newProd, name: e.target.value})} /></div>
          <div><label className="text-xs font-bold text-gray-700">Category</label>
            <select className="w-full p-2 border rounded mt-1" value={newProd.category} onChange={e=>setNewProd({...newProd, category: e.target.value})}>
              <option>Electronics</option><option>Furniture</option><option>Supplies</option>
            </select>
          </div>
          <div><label className="text-xs font-bold text-gray-700">Cost Price (NRs)</label><input type="number" className="w-full p-2 border rounded mt-1" value={newProd.costPrice} onChange={e=>setNewProd({...newProd, costPrice: e.target.value})} /></div>
          <div><label className="text-xs font-bold text-gray-700">Selling Price (NRs)</label><input type="number" className="w-full p-2 border rounded mt-1" value={newProd.sellingPrice} onChange={e=>setNewProd({...newProd, sellingPrice: e.target.value})} /></div>
          <div><Button variant="primary" className="w-full" onClick={handleSave}>Save Product</Button></div>
        </div>
      )}

      <div className="bg-white border rounded-xl shadow-sm overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-50 uppercase text-xs text-gray-500">
            <tr>
              <th className="px-6 py-4">SKU</th>
              <th className="px-6 py-4">Product Name</th>
              <th className="px-6 py-4">Category</th>
              <th className="px-6 py-4 text-right">Cost Price</th>
              <th className="px-6 py-4 text-right">Selling Price</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {products.map(p => (
              <tr key={p.sku} className="hover:bg-gray-50">
                <td className="px-6 py-4 font-mono font-bold text-blue-600">{p.sku}</td>
                <td className="px-6 py-4 font-medium text-gray-900">{p.name}</td>
                <td className="px-6 py-4 text-gray-600">{p.category}</td>
                <td className="px-6 py-4 text-right">NRs. {p.costPrice.toLocaleString()}</td>
                <td className="px-6 py-4 text-right text-green-600 font-bold">NRs. {p.sellingPrice.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;
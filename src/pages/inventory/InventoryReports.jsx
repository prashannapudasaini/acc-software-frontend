import React from 'react';
import { useInventory } from '../../context/InventoryContext';
import { Card, CardContent } from '../../components/erp/ui/Card';
import Button from '../../components/erp/ui/Button';

const InventoryReports = () => {
  const { products } = useInventory();

  const totalInventoryValue = products.reduce((sum, p) => sum + (p.stock * p.costPrice), 0);
  const totalItems = products.reduce((sum, p) => sum + p.stock, 0);
  const lowStockItems = products.filter(p => p.stock <= p.reorderLevel).length;

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Inventory Valuation</h1>
          <p className="text-sm text-gray-500">Asset valuation based on current stock and cost prices.</p>
        </div>
        <Button variant="outline">Export CSV</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-t-4 border-t-blue-500 shadow-sm">
          <CardContent className="p-6">
            <h3 className="font-bold text-gray-500 text-sm uppercase mb-1">Total Asset Value</h3>
            <p className="text-3xl font-bold text-blue-600">NRs. {totalInventoryValue.toLocaleString()}</p>
          </CardContent>
        </Card>
        <Card className="border-t-4 border-t-purple-500 shadow-sm">
          <CardContent className="p-6">
            <h3 className="font-bold text-gray-500 text-sm uppercase mb-1">Total Items in Stock</h3>
            <p className="text-3xl font-bold text-gray-900">{totalItems.toLocaleString()}</p>
          </CardContent>
        </Card>
        <Card className="border-t-4 border-t-red-500 shadow-sm">
          <CardContent className="p-6">
            <h3 className="font-bold text-gray-500 text-sm uppercase mb-1">Low Stock Alerts</h3>
            <p className="text-3xl font-bold text-red-600">{lowStockItems}</p>
          </CardContent>
        </Card>
      </div>

      <div className="bg-white border rounded-xl shadow-sm overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-50 uppercase text-xs text-gray-500">
            <tr>
              <th className="px-6 py-4">SKU</th>
              <th className="px-6 py-4">Product Name</th>
              <th className="px-6 py-4 text-right">In Stock</th>
              <th className="px-6 py-4 text-right">Cost Price</th>
              <th className="px-6 py-4 text-right font-bold text-gray-900">Total Value</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {products.map(p => {
              const value = p.stock * p.costPrice;
              return (
                <tr key={p.sku} className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-mono font-bold text-gray-700">{p.sku}</td>
                  <td className="px-6 py-4 font-medium text-gray-900">{p.name}</td>
                  <td className="px-6 py-4 text-right">{p.stock}</td>
                  <td className="px-6 py-4 text-right">NRs. {p.costPrice.toLocaleString()}</td>
                  <td className="px-6 py-4 text-right font-bold text-gray-900">NRs. {value.toLocaleString()}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InventoryReports;
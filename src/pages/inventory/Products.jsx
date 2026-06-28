import React from 'react';
import Button from '../../components/erp/ui/Button';

const products = [
  { sku: 'IT-001', name: 'MacBook Pro 16"', cat: 'Electronics', brand: 'Apple', stock: 15, price: 320000 },
  { sku: 'IT-002', name: 'Logitech MX Master 3S', cat: 'Accessories', brand: 'Logitech', stock: 42, price: 15500 },
];

const Products = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Product Management</h1>
        <Button variant="primary">+ Add New Product</Button>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
        <table className="w-full text-left">
          <thead className="bg-gray-50 text-xs uppercase text-gray-500">
            <tr>
              <th className="px-6 py-4">SKU</th>
              <th className="px-6 py-4">Product Name</th>
              <th className="px-6 py-4">Category</th>
              <th className="px-6 py-4">Brand</th>
              <th className="px-6 py-4 text-right">Stock</th>
              <th className="px-6 py-4 text-right">Price (NRs.)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-sm">
            {products.map(p => (
              <tr key={p.sku} className="hover:bg-gray-50">
                <td className="px-6 py-4 font-bold">{p.sku}</td>
                <td className="px-6 py-4 font-medium">{p.name}</td>
                <td className="px-6 py-4 text-gray-600">{p.cat}</td>
                <td className="px-6 py-4 text-gray-600">{p.brand}</td>
                <td className="px-6 py-4 text-right">{p.stock} units</td>
                <td className="px-6 py-4 text-right font-bold">{p.price.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;
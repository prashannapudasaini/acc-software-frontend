import React from 'react';
import Button from '../../components/erp/ui/Button';

const StockManagement = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Stock Movement</h1>
        <div className="flex gap-3">
          <Button variant="outline">Stock Transfer</Button>
          <Button variant="primary">Record Stock In</Button>
          <Button variant="danger">Record Stock Out</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Simple Activity Log */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
          <h2 className="font-bold mb-4">Recent Movements</h2>
          <div className="space-y-4">
            <div className="flex justify-between p-3 border-l-4 border-green-500 bg-green-50 rounded">
              <div><p className="font-medium text-sm">SKU: IT-001</p><p className="text-xs text-gray-500">Stock In (Warehouse A)</p></div>
              <span className="font-bold">+10</span>
            </div>
            <div className="flex justify-between p-3 border-l-4 border-red-500 bg-red-50 rounded">
              <div><p className="font-medium text-sm">SKU: IT-002</p><p className="text-xs text-gray-500">Stock Out (Customer Order)</p></div>
              <span className="font-bold">-2</span>
            </div>
          </div>
        </div>

        {/* Inventory Alerts */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
          <h2 className="font-bold mb-4">Low Stock Alerts</h2>
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between text-sm py-2 border-b">
              <span>Paper A4 Reams</span>
              <span className="text-red-600 font-bold">2 Remaining</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StockManagement;
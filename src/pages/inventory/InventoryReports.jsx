import React from 'react';
import ValuationTable from '../../components/inventory/ValuationTable';
import Button from '../../components/erp/ui/Button';

const InventoryReports = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Inventory Reports</h1>
        <Button variant="outline">Export CSV</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border shadow-sm">
          <p className="text-sm text-gray-500">Total Stock Valuation</p>
          <p className="text-2xl font-bold">NRs. 5,050,000</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border shadow-sm border-yellow-100">
          <p className="text-sm text-gray-500">Dead Stock Value</p>
          <p className="text-2xl font-bold text-yellow-600">NRs. 120,000</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border shadow-sm border-red-100">
          <p className="text-sm text-gray-500">Low Stock Items</p>
          <p className="text-2xl font-bold text-red-600">8 Items</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm">
        <ValuationTable />
      </div>
    </div>
  );
};

export default InventoryReports;
import React from 'react';
import Button from '../../components/erp/ui/Button';

const warehouses = [
  { name: 'Central Warehouse (Kathmandu)', location: 'Baneshwor', capacity: '1000 pallets', stockValue: 'NRs. 4.2M' },
  { name: 'Retail Outlet A', location: 'Putalisadak', capacity: '200 pallets', stockValue: 'NRs. 850k' },
];

const Warehouses = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Warehouse Management</h1>
        <Button variant="primary">+ Add Warehouse</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {warehouses.map((wh, idx) => (
          <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <h2 className="text-lg font-bold text-gray-900">{wh.name}</h2>
            <p className="text-sm text-gray-500 mb-4">{wh.location}</p>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Capacity: {wh.capacity}</span>
              <span className="font-bold">Valuation: {wh.stockValue}</span>
            </div>
            <div className="mt-4 flex gap-2">
              <Button variant="outline" size="sm">Manage Bins</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Warehouses;
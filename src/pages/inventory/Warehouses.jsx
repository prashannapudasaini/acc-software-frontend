import React, { useState } from 'react';
import { Card, CardContent, CardHeader } from '../../components/erp/ui/Card';
import Button from '../../components/erp/ui/Button';

const initialWarehouses = [
  { id: 'WH-01', name: 'Kathmandu Central Storage', location: 'Balaju Industrial District', manager: 'Ramesh Thapa', capacity: 10000, utilized: 8500 },
  { id: 'WH-02', name: 'Lalitpur Distribution Hub', location: 'Patan Estate', manager: 'Sarita Shakya', capacity: 5000, utilized: 1200 },
];

const Warehouses = () => {
  const [warehouses, setWarehouses] = useState(initialWarehouses);
  const [showForm, setShowForm] = useState(false);
  const [newWh, setNewWh] = useState({ name: '', location: '', manager: '', capacity: '' });

  const handleAdd = () => {
    if (!newWh.name || !newWh.capacity) return alert('Name and Capacity are required.');
    
    const newId = `WH-0${warehouses.length + 1}`;
    setWarehouses([...warehouses, { ...newWh, id: newId, capacity: Number(newWh.capacity), utilized: 0 }]);
    
    setShowForm(false);
    setNewWh({ name: '', location: '', manager: '', capacity: '' });
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Warehouse Management</h1>
          <p className="text-sm text-gray-500">Track physical storage locations and capacity utilization.</p>
        </div>
        <Button variant="primary" onClick={() => setShowForm(!showForm)}>
          {showForm ? 'Cancel' : '+ Add Warehouse'}
        </Button>
      </div>

      {showForm && (
        <div className="bg-white p-6 border rounded-xl shadow-sm grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
          <div><label className="text-xs font-bold text-gray-700">Facility Name</label><input type="text" className="w-full p-2 border rounded mt-1" value={newWh.name} onChange={e=>setNewWh({...newWh, name: e.target.value})} /></div>
          <div><label className="text-xs font-bold text-gray-700">Location</label><input type="text" className="w-full p-2 border rounded mt-1" value={newWh.location} onChange={e=>setNewWh({...newWh, location: e.target.value})} /></div>
          <div><label className="text-xs font-bold text-gray-700">Manager</label><input type="text" className="w-full p-2 border rounded mt-1" value={newWh.manager} onChange={e=>setNewWh({...newWh, manager: e.target.value})} /></div>
          <div><label className="text-xs font-bold text-gray-700">Max Capacity (Units)</label><input type="number" className="w-full p-2 border rounded mt-1" value={newWh.capacity} onChange={e=>setNewWh({...newWh, capacity: e.target.value})} /></div>
          <div className="md:col-span-4 flex justify-end">
            <Button variant="primary" onClick={handleAdd}>Save Warehouse Facility</Button>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {warehouses.map(wh => {
          const utilizationPercentage = Math.round((wh.utilized / wh.capacity) * 100);
          const isFull = utilizationPercentage > 85;

          return (
            <Card key={wh.id} className="shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <CardHeader title={`${wh.id} : ${wh.name}`} />
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex justify-between text-sm border-b pb-2">
                    <span className="text-gray-500">Location</span>
                    <span className="font-medium text-gray-900">{wh.location}</span>
                  </div>
                  <div className="flex justify-between text-sm border-b pb-2">
                    <span className="text-gray-500">Facility Manager</span>
                    <span className="font-medium text-gray-900">{wh.manager}</span>
                  </div>
                  
                  {/* Capacity Progress Bar */}
                  <div className="pt-2">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-bold text-gray-700">Capacity Utilization</span>
                      <span className={`font-bold ${isFull ? 'text-red-600' : 'text-green-600'}`}>
                        {utilizationPercentage}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
                      <div 
                        className={`h-2.5 rounded-full ${isFull ? 'bg-red-500' : 'bg-green-500'}`} 
                        style={{ width: `${utilizationPercentage}%` }}
                      ></div>
                    </div>
                    <p className="text-xs text-gray-400 mt-2 text-right">
                      {wh.utilized.toLocaleString()} / {wh.capacity.toLocaleString()} Units
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Warehouses;
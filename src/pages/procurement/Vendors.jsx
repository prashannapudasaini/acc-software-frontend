import React, { useState } from 'react';
import Button from '../../components/erp/ui/Button';

const initialVendors = [
  { id: 'VND-001', name: 'TechCorp Solutions', category: 'IT Software & Hardware', contact: 'Anil Bhattarai', phone: '+977-9801122334', rating: 4.8, status: 'Active' },
  { id: 'VND-002', name: 'Everest Supplies', category: 'Office Supplies', contact: 'Sita Rai', phone: '+977-9841122556', rating: 4.2, status: 'Active' },
  { id: 'VND-003', name: 'Global Logistics Hub', category: 'Shipping & Transport', contact: 'Kiran Thapa', phone: '+977-9812233445', rating: 3.9, status: 'Under Review' },
];

const Vendors = () => {
  const [vendors, setVendors] = useState(initialVendors);
  const [showForm, setShowForm] = useState(false);
  const [newVnd, setNewVnd] = useState({ name: '', category: 'Office Supplies', contact: '', phone: '' });

  const handleSave = () => {
    if (!newVnd.name || !newVnd.contact) return alert('Name and Contact Person required.');
    setVendors([{
      id: `VND-00${vendors.length + 1}`,
      name: newVnd.name,
      category: newVnd.category,
      contact: newVnd.contact,
      phone: newVnd.phone,
      rating: 5.0, // Default new vendor rating
      status: 'Active'
    }, ...vendors]);
    setShowForm(false);
    setNewVnd({ name: '', category: 'Office Supplies', contact: '', phone: '' });
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Vendor Directory</h1>
          <p className="text-sm text-gray-500">Manage supplier relationships, contracts, and ratings.</p>
        </div>
        <Button variant="primary" onClick={() => setShowForm(!showForm)}>
          {showForm ? 'Cancel' : '+ Onboard Vendor'}
        </Button>
      </div>

      {showForm && (
        <div className="bg-white p-6 border rounded-xl shadow-sm grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
          <div className="md:col-span-2"><label className="text-xs font-bold text-gray-700">Vendor / Company Name</label><input type="text" className="w-full p-2 border rounded mt-1" value={newVnd.name} onChange={e=>setNewVnd({...newVnd, name: e.target.value})} /></div>
          <div><label className="text-xs font-bold text-gray-700">Category</label>
            <select className="w-full p-2 border rounded mt-1" value={newVnd.category} onChange={e=>setNewVnd({...newVnd, category: e.target.value})}>
              <option>IT Software & Hardware</option><option>Office Supplies</option><option>Services</option>
            </select>
          </div>
          <div><label className="text-xs font-bold text-gray-700">Contact Person</label><input type="text" className="w-full p-2 border rounded mt-1" value={newVnd.contact} onChange={e=>setNewVnd({...newVnd, contact: e.target.value})} /></div>
          <div><Button variant="primary" className="w-full" onClick={handleSave}>Save Vendor</Button></div>
        </div>
      )}

      <div className="bg-white border rounded-xl shadow-sm overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-50 uppercase text-xs text-gray-500">
            <tr>
              <th className="px-6 py-4">Vendor Info</th>
              <th className="px-6 py-4">Category</th>
              <th className="px-6 py-4">Point of Contact</th>
              <th className="px-6 py-4 text-center">Rating</th>
              <th className="px-6 py-4 text-center">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {vendors.map(vnd => (
              <tr key={vnd.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <p className="font-bold text-gray-900">{vnd.name}</p>
                  <p className="text-xs font-mono text-gray-500">{vnd.id}</p>
                </td>
                <td className="px-6 py-4 text-gray-600">{vnd.category}</td>
                <td className="px-6 py-4">
                  <p className="font-medium text-gray-900">{vnd.contact}</p>
                  <p className="text-xs text-gray-500">{vnd.phone}</p>
                </td>
                <td className="px-6 py-4 text-center">
                  <span className="font-bold text-yellow-600">★ {vnd.rating.toFixed(1)}</span>
                </td>
                <td className="px-6 py-4 text-center">
                  <span className={`px-2 py-1 rounded-full text-xs font-bold ${vnd.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>
                    {vnd.status}
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

export default Vendors;
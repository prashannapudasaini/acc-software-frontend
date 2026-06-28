import React from 'react';

const ValuationTable = () => (
  <table className="w-full text-left">
    <thead className="bg-gray-50 text-xs uppercase text-gray-500">
      <tr>
        <th className="px-6 py-4">Product</th>
        <th className="px-6 py-4">Quantity</th>
        <th className="px-6 py-4">Unit Cost</th>
        <th className="px-6 py-4">Total Value</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-gray-100 text-sm">
      <tr>
        <td className="px-6 py-4">MacBook Pro 16"</td>
        <td className="px-6 py-4">15</td>
        <td className="px-6 py-4">280,000</td>
        <td className="px-6 py-4 font-bold">4,200,000</td>
      </tr>
    </tbody>
  </table>
);

export default ValuationTable;
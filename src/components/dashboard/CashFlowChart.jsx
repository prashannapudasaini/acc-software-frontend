import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const data = [
  { name: 'May 1', value: -20000 },
  { name: 'May 4', value: 15000 },
  { name: 'May 8', value: 35000 },
  { name: 'May 11', value: -10000 },
  { name: 'May 15', value: 42000 },
  { name: 'May 18', value: 28000 },
  { name: 'May 22', value: -15000 },
  { name: 'May 25', value: 10000 },
  { name: 'May 29', value: 25000 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const val = payload[0].value;
    const isPositive = val >= 0;
    return (
      <div className="bg-white p-3 rounded-lg shadow-lg border border-gray-100">
        <p className="text-xs text-gray-500 mb-1">{label}</p>
        <p className={`text-sm font-bold ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
          {isPositive ? '+' : '-'}${Math.abs(val).toLocaleString()}
        </p>
      </div>
    );
  }
  return null;
};

const CashFlowChart = () => {
  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm col-span-1">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h2 className="text-lg font-bold text-gray-900">Cash Flow</h2>
          <div className="mt-2">
            <span className="text-2xl font-bold text-gray-900">$ 42,850.00</span>
            <div className="flex items-center gap-2 mt-1">
              <span className="flex items-center gap-1 bg-green-100 text-green-700 px-2 py-0.5 rounded-md text-xs font-semibold">
                ↑ 15.3%
              </span>
              <span className="text-xs text-gray-400">vs last month</span>
            </div>
          </div>
        </div>
        <select className="bg-gray-50 border border-gray-200 text-gray-700 text-sm rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-100">
          <option>This Month</option>
          <option>Last Month</option>
          <option>Year to Date</option>
        </select>
      </div>

      <div className="h-[200px] w-full mt-4">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 0, right: 0, left: -25, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#9ca3af', fontSize: 10 }}
              dy={10}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#9ca3af', fontSize: 10 }}
              tickFormatter={(value) => `${value / 1000}k`}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: 'transparent' }} />
            <Bar dataKey="value" radius={[2, 2, 2, 2]} barSize={8}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.value >= 0 ? '#10b981' : '#ef4444'} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CashFlowChart;
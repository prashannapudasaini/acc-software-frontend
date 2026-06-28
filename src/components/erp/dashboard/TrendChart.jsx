import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', expected: 80000, collected: 65000 },
  { name: 'Feb', expected: 95000, collected: 85000 },
  { name: 'Mar', expected: 105000, collected: 90000 },
  { name: 'Apr', expected: 85000, collected: 70000 },
  { name: 'May', expected: 124563, collected: 110000 },
  { name: 'Jun', expected: 90000, collected: 80000 },
  { name: 'Jul', expected: 110000, collected: 95000 },
  { name: 'Aug', expected: 130000, collected: 115000 },
  { name: 'Sep', expected: 100000, collected: 90000 },
  { name: 'Oct', expected: 140000, collected: 125000 },
  { name: 'Nov', expected: 135000, collected: 120000 },
  { name: 'Dec', expected: 150000, collected: 140000 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-4 rounded-lg shadow-xl border border-gray-100 min-w-[150px]">
        <p className="font-bold text-gray-900 mb-2">{label} 2025</p>
        {payload.map((entry, index) => (
          <div key={index} className="flex justify-between items-center gap-4 text-sm mb-1">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: entry.color }}></span>
              <span className="text-gray-500 capitalize">{entry.name}</span>
            </div>
            <span className="font-bold text-gray-900">
              ${entry.value.toLocaleString()}
            </span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

const TrendChart = () => {
  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm col-span-1 lg:col-span-2">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-lg font-bold text-gray-900">Collections Trend</h2>
          <div className="flex items-center gap-4 mt-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              <span className="text-xs text-gray-500 font-medium">Collected</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gray-300"></span>
              <span className="text-xs text-gray-500 font-medium">Expected</span>
            </div>
          </div>
        </div>
        <select className="bg-gray-50 border border-gray-200 text-gray-700 text-sm rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-100">
          <option>Monthly</option>
          <option>Quarterly</option>
          <option>Yearly</option>
        </select>
      </div>

      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#9ca3af', fontSize: 12 }} 
              dy={10}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#9ca3af', fontSize: 12 }}
              tickFormatter={(value) => `$${value / 1000}k`}
            />
            <Tooltip content={<CustomTooltip />} />
            <Line 
              type="monotone" 
              dataKey="collected" 
              stroke="#3b82f6" 
              strokeWidth={3} 
              dot={{ r: 4, strokeWidth: 2, fill: '#fff' }} 
              activeDot={{ r: 6, strokeWidth: 0, fill: '#3b82f6' }}
            />
            <Line 
              type="monotone" 
              dataKey="expected" 
              stroke="#d1d5db" 
              strokeWidth={3} 
              dot={{ r: 4, strokeWidth: 2, fill: '#fff' }} 
              activeDot={{ r: 6, strokeWidth: 0, fill: '#d1d5db' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TrendChart;
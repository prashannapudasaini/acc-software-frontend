import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  { name: 'Current (0-30 Days)', value: 34500, color: '#3b82f6' }, // Blue
  { name: '31 - 60 Days', value: 12600, color: '#10b981' },       // Green
  { name: '61 - 90 Days', value: 8900, color: '#f59e0b' },        // Yellow
  { name: '90+ Days', value: 7800, color: '#ec4899' },            // Pink
  { name: 'Bad Debt Risk', value: 4854, color: '#6b7280' },       // Gray
];

const totalOutstanding = data.reduce((sum, item) => sum + item.value, 0);

const AgingChart = () => {
  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm col-span-1">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-bold text-gray-900">Receivable Aging</h2>
        <button className="text-sm text-gray-500 hover:text-gray-700 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-200 transition-colors">
          View Report
        </button>
      </div>

      <div className="flex flex-col xl:flex-row items-center justify-between gap-6 h-[250px]">
        {/* Doughnut Chart */}
        <div className="w-full xl:w-1/2 h-full relative">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={90}
                paddingAngle={2}
                dataKey="value"
                stroke="none"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                formatter={(value) => `$${value.toLocaleString()}`}
                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
              />
            </PieChart>
          </ResponsiveContainer>
          {/* Centered Total Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <span className="text-lg font-bold text-gray-900">${totalOutstanding.toLocaleString()}</span>
            <span className="text-xs text-gray-500 font-medium">Total</span>
          </div>
        </div>

        {/* Legend Custom */}
        <div className="w-full xl:w-1/2 flex flex-col gap-3">
          {data.map((item, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></span>
                <span className="text-sm text-gray-600 truncate max-w-[110px]">{item.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-gray-900">${item.value.toLocaleString()}</span>
                <span className="text-xs text-gray-400 w-10 text-right">
                  {((item.value / totalOutstanding) * 100).toFixed(1)}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AgingChart;
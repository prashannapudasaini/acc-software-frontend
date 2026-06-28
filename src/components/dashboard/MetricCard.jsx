import React from 'react';

const MetricCard = ({ 
  title, 
  value, 
  icon, 
  iconBgColor = 'bg-blue-600',
  trendValue,
  trendDirection = 'up',
  sparklineData = []
}) => {
  return (
    <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex flex-col justify-between h-40 relative overflow-hidden">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          {/* Icon Box */}
          <div className={`w-12 h-12 ${iconBgColor} rounded-xl flex items-center justify-center text-white text-xl shadow-inner`}>
            {icon}
          </div>
          <div>
            <h3 className="text-gray-500 text-sm font-medium mb-1">{title}</h3>
            <p className="text-2xl font-bold text-gray-900">{value}</p>
          </div>
        </div>
        {/* Context Menu Icon */}
        <button className="text-gray-400 hover:text-gray-600">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
          </svg>
        </button>
      </div>

      <div className="flex items-center gap-3 mt-4">
        {/* Trend Pill */}
        <div className={`flex items-center gap-1 px-2 py-1 rounded-md text-xs font-semibold ${
          trendDirection === 'up' 
            ? 'bg-green-100 text-green-700' 
            : 'bg-red-100 text-red-700'
        }`}>
          {trendDirection === 'up' ? '↑' : '↓'} {trendValue}%
        </div>
        <span className="text-gray-400 text-xs font-medium">vs last month</span>
      </div>

      {/* Decorative Sparkline (Faked with SVG for exact visual match to image) */}
      <div className="absolute bottom-0 right-0 w-32 h-12 opacity-50 pointer-events-none">
        <svg viewBox="0 0 100 30" className="w-full h-full preserve-3d">
          <path 
            d={trendDirection === 'up' ? "M0,30 Q20,25 40,20 T70,10 T100,5" : "M0,5 Q20,10 40,15 T70,25 T100,30"} 
            fill="none" 
            stroke={trendDirection === 'up' ? "#3b82f6" : "#ef4444"} 
            strokeWidth="2" 
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default MetricCard;
import React from 'react';
import MetricCard from '../../components/erp/dashboard/MetricCard';
import TrendChart from '../../components/erp/dashboard/TrendChart';
import AgingChart from '../../components/erp/dashboard/AgingChart';
import CashFlowChart from '../../components/erp/dashboard/CashFlowChart';

const ARDashboard = () => {
  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-500 text-sm mt-1">Welcome back, John! Here's what's happening with your accounts receivable today.</p>
      </div>

      {/* Top KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <MetricCard 
          title="Total Outstanding" 
          value="NRs. 124,563.00" 
          icon="💵" 
          iconBgColor="bg-blue-600"
          trendValue="12.5" 
          trendDirection="up" 
        />
        <MetricCard 
          title="Overdue Balances" 
          value="NRs. 68,654.00" 
          icon="⚠️" 
          iconBgColor="bg-red-500"
          trendValue="8.2" 
          trendDirection="up" 
        />
        <MetricCard 
          title="Cash Received (MTD)" 
          value="NRs. 55,909.00" 
          icon="💰" 
          iconBgColor="bg-green-500"
          trendValue="18.7" 
          trendDirection="up" 
        />
        <MetricCard 
          title="Total Customers" 
          value="248" 
          icon="👥" 
          iconBgColor="bg-purple-500"
          trendValue="7.3" 
          trendDirection="up" 
        />
      </div>

      {/* Middle Section: Adjusted Grid for Layout Fix */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
        {/* Trend takes 7/12 columns to shrink slightly */}
        <div className="xl:col-span-7">
          <TrendChart />
        </div>
        {/* Aging takes 5/12 columns to fit the legend properly */}
        <div className="xl:col-span-5">
          <AgingChart />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <CashFlowChart />
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm xl:col-span-2">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Recent Activity</h2>
          <div className="text-center text-gray-500 py-12 border-2 border-dashed border-gray-200 rounded-xl">
            Activity timeline will appear here
          </div>
        </div>
      </div>
    </div>
  );
};

export default ARDashboard;
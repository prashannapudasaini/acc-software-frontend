import React from 'react';
import MetricCard from '../components/dashboard/MetricCard';
import TrendChart from '../components/dashboard/TrendChart';
import AgingChart from '../components/dashboard/AgingChart';
import CashFlowChart from '../components/dashboard/CashFlowChart';

const Dashboard = () => {
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
          value="$124,563.00" 
          icon="💵" 
          iconBgColor="bg-blue-600"
          trendValue="12.5" 
          trendDirection="up" 
        />
        <MetricCard 
          title="Overdue Balances" 
          value="$68,654.00" 
          icon="⚠️" 
          iconBgColor="bg-red-500"
          trendValue="8.2" 
          trendDirection="up" 
        />
        <MetricCard 
          title="Cash Received (MTD)" 
          value="$55,909.00" 
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

      {/* Middle Section: Trend and Aging */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <TrendChart />
        <AgingChart />
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <CashFlowChart />
        {/* Placeholder for Recent Transactions or Tasks */}
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

export default Dashboard;
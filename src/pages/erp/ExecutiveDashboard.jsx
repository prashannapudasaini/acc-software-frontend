import React from 'react';
import MetricCard from '../../components/erp/dashboard/MetricCard';
import { 
  BarChart, Bar, LineChart, Line, AreaChart, Area, PieChart, Pie, Cell, 
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend 
} from 'recharts';

// --- Mock Data ---

const revenueExpenseData = [
  { month: 'Jan', revenue: 120000, expense: 80000 },
  { month: 'Feb', revenue: 135000, expense: 85000 },
  { month: 'Mar', revenue: 150000, expense: 90000 },
  { month: 'Apr', revenue: 140000, expense: 95000 },
  { month: 'May', revenue: 180000, expense: 105000 },
  { month: 'Jun', revenue: 195000, expense: 110000 },
];

const profitTrendData = [
  { month: 'Jan', profit: 40000 },
  { month: 'Feb', profit: 50000 },
  { month: 'Mar', profit: 60000 },
  { month: 'Apr', profit: 45000 },
  { month: 'May', profit: 75000 },
  { month: 'Jun', profit: 85000 },
];

const expenseBreakdownData = [
  { name: 'Payroll', value: 45000, color: '#3b82f6' },
  { name: 'Marketing', value: 25000, color: '#10b981' },
  { name: 'Operations', value: 20000, color: '#f59e0b' },
  { name: 'IT & Software', value: 15000, color: '#8b5cf6' },
  { name: 'Miscellaneous', value: 5000, color: '#6b7280' },
];

const inventoryMovementData = [
  { week: 'W1', incoming: 400, outgoing: 350 },
  { week: 'W2', incoming: 300, outgoing: 450 },
  { week: 'W3', incoming: 550, outgoing: 400 },
  { week: 'W4', incoming: 200, outgoing: 300 },
];

const employeeGrowthData = [
  { month: 'Jan', employees: 120 },
  { month: 'Feb', employees: 125 },
  { month: 'Mar', employees: 128 },
  { month: 'Apr', employees: 132 },
  { month: 'May', employees: 138 },
  { month: 'Jun', employees: 142 },
];

const attendanceData = [
  { day: 'Mon', present: 138, absent: 4 },
  { day: 'Tue', present: 140, absent: 2 },
  { day: 'Wed', present: 139, absent: 3 },
  { day: 'Thu', present: 141, absent: 1 },
  { day: 'Fri', present: 135, absent: 7 },
];

// --- Component ---

const ExecutiveDashboard = () => {
  return (
    <div className="space-y-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Executive Overview</h1>
        <p className="text-gray-500 text-sm mt-1">Company performance across all departments.</p>
      </div>

      {/* KPI Grid - All 12 Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
        {/* Core Financials */}
        <MetricCard title="Total Revenue (YTD)" value="NRs. 920,000" icon="📈" iconBgColor="bg-blue-600" trendValue="15.2" trendDirection="up" />
        <MetricCard title="Total Expenses (YTD)" value="NRs. 565,000" icon="📉" iconBgColor="bg-red-500" trendValue="5.4" trendDirection="up" />
        <MetricCard title="Net Profit" value="NRs. 355,000" icon="💎" iconBgColor="bg-green-500" trendValue="12.1" trendDirection="up" />
        <MetricCard title="Cash Flow (MTD)" value="NRs. 45,200" icon="💰" iconBgColor="bg-indigo-500" trendValue="8.7" trendDirection="up" />
        
        {/* Receivables & Payables */}
        <MetricCard title="Accounts Receivable" value="NRs. 124,563" icon="🧾" iconBgColor="bg-orange-500" trendValue="5.0" trendDirection="down" />
        <MetricCard title="Accounts Payable" value="NRs. 82,300" icon="📝" iconBgColor="bg-rose-500" trendValue="2.4" trendDirection="up" />
        
        {/* Inventory & Operations */}
        <MetricCard title="Inventory Value" value="NRs. 850,000" icon="📦" iconBgColor="bg-yellow-500" trendValue="1.2" trendDirection="up" />
        <MetricCard title="Low Stock Items" value="18" icon="⚠️" iconBgColor="bg-red-600" trendValue="4" trendDirection="down" />
        
        {/* HR & Payroll */}
        <MetricCard title="Total Employees" value="142" icon="👥" iconBgColor="bg-purple-500" trendValue="4" trendDirection="up" />
        <MetricCard title="New Hires (MTD)" value="6" icon="🚀" iconBgColor="bg-teal-500" trendValue="2" trendDirection="up" />
        <MetricCard title="Monthly Payroll" value="NRs. 320,000" icon="💳" iconBgColor="bg-blue-400" trendValue="3.1" trendDirection="up" />
        <MetricCard title="Pending Approvals" value="12" icon="⏳" iconBgColor="bg-gray-700" trendValue="0" trendDirection="up" />
      </div>

      {/* Chart Grid - All 6 Charts */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        
        {/* 1. Revenue vs Expense Chart */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
          <h2 className="text-lg font-bold text-gray-900 mb-6">Revenue vs Expenses</h2>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={revenueExpenseData} margin={{ top: 10, right: 10, left: 10, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#9ca3af', fontSize: 12 }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#9ca3af', fontSize: 12 }} tickFormatter={(val) => `${val / 1000}k`} />
                <Tooltip cursor={{ fill: '#f9fafb' }} contentStyle={{ borderRadius: '8px', border: 'none' }} />
                <Legend iconType="circle" wrapperStyle={{ paddingTop: '20px' }} />
                <Bar dataKey="revenue" name="Revenue" fill="#3b82f6" radius={[4, 4, 0, 0]} barSize={20} />
                <Bar dataKey="expense" name="Expenses" fill="#ef4444" radius={[4, 4, 0, 0]} barSize={20} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* 2. Monthly Profit Trend */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
          <h2 className="text-lg font-bold text-gray-900 mb-6">Monthly Profit Trend</h2>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={profitTrendData} margin={{ top: 10, right: 10, left: 10, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#9ca3af', fontSize: 12 }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#9ca3af', fontSize: 12 }} tickFormatter={(val) => `${val / 1000}k`} />
                <Tooltip contentStyle={{ borderRadius: '8px', border: 'none' }} />
                <Line type="monotone" dataKey="profit" name="Net Profit" stroke="#10b981" strokeWidth={3} dot={{ r: 4, fill: '#fff', strokeWidth: 2 }} activeDot={{ r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* 3. Department Expense Breakdown */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
          <h2 className="text-lg font-bold text-gray-900 mb-6">Department Expense Breakdown</h2>
          <div className="h-[300px] w-full flex items-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={expenseBreakdownData} cx="50%" cy="50%" innerRadius={70} outerRadius={100} paddingAngle={2} dataKey="value" stroke="none">
                  {expenseBreakdownData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => `NRs. ${value.toLocaleString()}`} contentStyle={{ borderRadius: '8px', border: 'none' }} />
                <Legend layout="vertical" verticalAlign="middle" align="right" iconType="circle" />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* 4. Inventory Movement */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
          <h2 className="text-lg font-bold text-gray-900 mb-6">Inventory Movement</h2>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={inventoryMovementData} margin={{ top: 10, right: 10, left: 10, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                <XAxis dataKey="week" axisLine={false} tickLine={false} tick={{ fill: '#9ca3af', fontSize: 12 }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#9ca3af', fontSize: 12 }} />
                <Tooltip cursor={{ fill: '#f9fafb' }} contentStyle={{ borderRadius: '8px', border: 'none' }} />
                <Legend iconType="circle" wrapperStyle={{ paddingTop: '20px' }} />
                <Bar dataKey="incoming" name="Stock In" fill="#8b5cf6" radius={[4, 4, 0, 0]} barSize={20} />
                <Bar dataKey="outgoing" name="Stock Out" fill="#f59e0b" radius={[4, 4, 0, 0]} barSize={20} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* 5. Employee Growth */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
          <h2 className="text-lg font-bold text-gray-900 mb-6">Employee Growth</h2>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={employeeGrowthData} margin={{ top: 10, right: 10, left: 10, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorEmployees" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#9ca3af', fontSize: 12 }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#9ca3af', fontSize: 12 }} />
                <Tooltip contentStyle={{ borderRadius: '8px', border: 'none' }} />
                <Area type="monotone" dataKey="employees" name="Total Staff" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorEmployees)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* 6. Attendance Analytics */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
          <h2 className="text-lg font-bold text-gray-900 mb-6">Attendance Analytics (This Week)</h2>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={attendanceData} margin={{ top: 10, right: 10, left: 10, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: '#9ca3af', fontSize: 12 }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#9ca3af', fontSize: 12 }} />
                <Tooltip cursor={{ fill: '#f9fafb' }} contentStyle={{ borderRadius: '8px', border: 'none' }} />
                <Legend iconType="circle" wrapperStyle={{ paddingTop: '20px' }} />
                <Bar dataKey="present" name="Present" fill="#10b981" stackId="a" radius={[0, 0, 4, 4]} barSize={30} />
                <Bar dataKey="absent" name="Absent/Leave" fill="#ef4444" stackId="a" radius={[4, 4, 0, 0]} barSize={30} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ExecutiveDashboard;
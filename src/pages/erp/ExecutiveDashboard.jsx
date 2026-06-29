import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, 
  LineChart, Line, AreaChart, Area, PieChart, Pie, Cell 
} from 'recharts';
import { Card, CardContent, CardHeader } from '../../components/erp/ui/Card';
import Button from '../../components/erp/ui/Button';

// --- PIE CHART COLORS ---
const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'];

// --- MOCK DATA ENGINE ---
const mockData = {
  'This Month': {
    kpis: {
      revenue: { value: 'NRs. 420k', trend: '+5.2%', color: 'green' },
      expenses: { value: 'NRs. 180k', trend: '-1.1%', color: 'green' }, // Down is good
      netProfit: { value: 'NRs. 240k', trend: '+10.5%', color: 'green' },
      ar: { value: 'NRs. 120k', trend: '+2.0%', color: 'orange' },
      ap: { value: 'NRs. 90k', trend: '-5.0%', color: 'green' },
      inventoryValue: { value: 'NRs. 4.2M', trend: 'Stable', color: 'blue' },
      lowStock: { value: '8 Items', trend: 'Needs Action', color: 'red' },
      employees: { value: '142', trend: '+2', color: 'blue' },
      newHires: { value: '2', trend: 'Onboarding', color: 'purple' },
      payroll: { value: 'NRs. 1.8M', trend: 'Processed', color: 'gray' },
      cashFlow: { value: 'NRs. 1.55M', trend: '+4.1%', color: 'green' },
      pendingApprovals: { value: '14', trend: 'Action Req', color: 'orange' },
    },
    charts: {
      financial: [
        { name: 'Week 1', revenue: 100000, expenses: 40000 },
        { name: 'Week 2', revenue: 120000, expenses: 45000 },
        { name: 'Week 3', revenue: 90000, expenses: 50000 },
        { name: 'Week 4', revenue: 110000, expenses: 45000 },
      ],
      profitTrend: [
        { name: 'W1', profit: 60000 }, { name: 'W2', profit: 75000 },
        { name: 'W3', profit: 40000 }, { name: 'W4', profit: 65000 },
      ],
      deptExpense: [
        { name: 'Marketing', value: 35000 }, { name: 'Engineering', value: 80000 },
        { name: 'HR & Admin', value: 25000 }, { name: 'Operations', value: 40000 },
      ],
      inventoryAuth: [
        { name: 'Electronics', in: 50, out: 30 },
        { name: 'Furniture', in: 10, out: 5 },
        { name: 'Supplies', in: 200, out: 150 },
      ],
      employeeGrowth: [
        { name: 'W1', total: 140 }, { name: 'W2', total: 140 }, 
        { name: 'W3', total: 141 }, { name: 'W4', total: 142 },
      ],
      attendance: [
        { name: 'Mon', present: 138, absent: 4 }, { name: 'Tue', present: 140, absent: 2 },
        { name: 'Wed', present: 135, absent: 7 }, { name: 'Thu', present: 139, absent: 3 },
        { name: 'Fri', present: 141, absent: 1 },
      ]
    }
  },
  'Year to Date': {
    kpis: {
      revenue: { value: 'NRs. 2.4M', trend: '+12.5%', color: 'green' },
      expenses: { value: 'NRs. 1.1M', trend: '+4.2%', color: 'orange' },
      netProfit: { value: 'NRs. 1.3M', trend: '+18.1%', color: 'green' },
      ar: { value: 'NRs. 450k', trend: '-2.1%', color: 'green' },
      ap: { value: 'NRs. 210k', trend: '+1.5%', color: 'orange' },
      inventoryValue: { value: 'NRs. 4.8M', trend: '+5%', color: 'blue' },
      lowStock: { value: '12 Items', trend: 'Needs Action', color: 'red' },
      employees: { value: '142', trend: '+15', color: 'green' },
      newHires: { value: '15', trend: 'Completed', color: 'purple' },
      payroll: { value: 'NRs. 10.8M', trend: 'Avg 1.8M/mo', color: 'gray' },
      cashFlow: { value: 'NRs. 1.55M', trend: '+14%', color: 'green' },
      pendingApprovals: { value: '4', trend: 'Action Req', color: 'orange' },
    },
    charts: {
      financial: [
        { name: 'Jan', revenue: 400000, expenses: 240000 }, { name: 'Feb', revenue: 300000, expenses: 139800 },
        { name: 'Mar', revenue: 200000, expenses: 98000 }, { name: 'Apr', revenue: 278000, expenses: 190800 },
        { name: 'May', revenue: 389000, expenses: 248000 }, { name: 'Jun', revenue: 420000, expenses: 180000 },
      ],
      profitTrend: [
        { name: 'Jan', profit: 160000 }, { name: 'Feb', profit: 160200 },
        { name: 'Mar', profit: 102000 }, { name: 'Apr', profit: 87200 },
        { name: 'May', profit: 141000 }, { name: 'Jun', profit: 240000 },
      ],
      deptExpense: [
        { name: 'Marketing', value: 250000 }, { name: 'Engineering', value: 480000 },
        { name: 'HR & Admin', value: 150000 }, { name: 'Operations', value: 220000 },
      ],
      inventoryAuth: [
        { name: 'Electronics', in: 450, out: 320 },
        { name: 'Furniture', in: 80, out: 45 },
        { name: 'Supplies', in: 1200, out: 950 },
      ],
      employeeGrowth: [
        { name: 'Jan', total: 127 }, { name: 'Feb', total: 130 }, { name: 'Mar', total: 132 }, 
        { name: 'Apr', total: 135 }, { name: 'May', total: 138 }, { name: 'Jun', total: 142 },
      ],
      attendance: [
        { name: 'Jan', present: 96, absent: 4 }, { name: 'Feb', present: 95, absent: 5 },
        { name: 'Mar', present: 97, absent: 3 }, { name: 'Apr', present: 94, absent: 6 },
        { name: 'May', present: 98, absent: 2 }, { name: 'Jun', present: 96, absent: 4 },
      ]
    }
  }
};

const KPI_CONFIG = [
  { key: 'revenue', label: 'Total Revenue', icon: '💰', bg: 'bg-green-50', text: 'text-green-600' },
  { key: 'expenses', label: 'Total Expenses', icon: '📉', bg: 'bg-red-50', text: 'text-red-600' },
  { key: 'netProfit', label: 'Net Profit', icon: '📈', bg: 'bg-blue-50', text: 'text-blue-600' },
  { key: 'cashFlow', label: 'Cash Flow', icon: '🏦', bg: 'bg-emerald-50', text: 'text-emerald-600' },
  { key: 'ar', label: 'Accounts Receivable', icon: '📄', bg: 'bg-indigo-50', text: 'text-indigo-600' },
  { key: 'ap', label: 'Accounts Payable', icon: '📝', bg: 'bg-orange-50', text: 'text-orange-600' },
  { key: 'inventoryValue', label: 'Inventory Value', icon: '📦', bg: 'bg-cyan-50', text: 'text-cyan-600' },
  { key: 'lowStock', label: 'Low Stock Alerts', icon: '⚠️', bg: 'bg-rose-50', text: 'text-rose-600' },
  { key: 'employees', label: 'Total Employees', icon: '👥', bg: 'bg-purple-50', text: 'text-purple-600' },
  { key: 'newHires', label: 'New Hires', icon: '👋', bg: 'bg-fuchsia-50', text: 'text-fuchsia-600' },
  { key: 'payroll', label: 'Payroll Output', icon: '💳', bg: 'bg-slate-100', text: 'text-slate-600' },
  { key: 'pendingApprovals', label: 'Pending Approvals', icon: '✅', bg: 'bg-yellow-50', text: 'text-yellow-600' },
];

const ExecutiveDashboard = () => {
  const navigate = useNavigate();
  const [timeframe, setTimeframe] = useState('Year to Date');
  const [isDownloading, setIsDownloading] = useState(false);

  // Fallback to Year to Date if 'Last Month' is selected but not defined fully in mock
  const currentData = mockData[timeframe] || mockData['Year to Date'];

  const handleDownload = () => {
    setIsDownloading(true);
    setTimeout(() => {
      setIsDownloading(false);
      alert(`Executive Report (${timeframe}) downloaded successfully!`);
    }, 1500);
  };

  return (
    <div className="space-y-6 pb-8 animate-fade-in">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Executive Dashboard</h1>
          <p className="text-sm text-gray-500">Comprehensive enterprise overview for NexusTech Solutions.</p>
        </div>
        <div className="flex gap-3">
          <select 
            value={timeframe}
            onChange={(e) => setTimeframe(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer shadow-sm"
          >
            <option value="This Month">This Month</option>
            <option value="Year to Date">Year to Date</option>
          </select>
          <Button variant="primary" onClick={handleDownload} disabled={isDownloading}>
            {isDownloading ? 'Generating PDF...' : 'Download Report'}
          </Button>
        </div>
      </div>

      {/* KPI Grid (12 Cards) */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {KPI_CONFIG.map((kpi) => {
          const data = currentData.kpis[kpi.key];
          return (
            <div key={kpi.key} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex flex-col hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-2">
                <div className={`w-8 h-8 rounded-full ${kpi.bg} flex items-center justify-center ${kpi.text} text-sm`}>
                  {kpi.icon}
                </div>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full bg-gray-50 text-${data.color}-600`}>
                  {data.trend}
                </span>
              </div>
              <p className="text-xs text-gray-500 font-medium">{kpi.label}</p>
              <h3 className="text-lg font-bold text-gray-900 truncate">{data.value}</h3>
            </div>
          );
        })}
      </div>

      {/* Charts Grid - Row 1 (Financials) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="shadow-sm">
          <CardHeader title="Revenue vs Expenses" />
          <CardContent>
            <div className="h-72 w-full mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={currentData.charts.financial}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eee" />
                  <XAxis dataKey="name" tick={{fontSize: 12}} tickLine={false} axisLine={false} />
                  <YAxis tickFormatter={(val) => `${val/1000}k`} tick={{fontSize: 12}} tickLine={false} axisLine={false} />
                  <Tooltip cursor={{fill: '#f9fafb'}} contentStyle={{ borderRadius: '8px' }} />
                  <Legend wrapperStyle={{ fontSize: '12px' }}/>
                  <Bar dataKey="revenue" name="Revenue" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="expenses" name="Expenses" fill="#ef4444" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-sm">
          <CardHeader title="Net Profit Trend" />
          <CardContent>
            <div className="h-72 w-full mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={currentData.charts.profitTrend}>
                  <defs>
                    <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eee" />
                  <XAxis dataKey="name" tick={{fontSize: 12}} tickLine={false} axisLine={false} />
                  <YAxis tickFormatter={(val) => `${val/1000}k`} tick={{fontSize: 12}} tickLine={false} axisLine={false} />
                  <Tooltip contentStyle={{ borderRadius: '8px' }} />
                  <Area type="monotone" dataKey="profit" name="Net Profit" stroke="#10b981" strokeWidth={3} fillOpacity={1} fill="url(#colorProfit)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Grid - Row 2 (Operations & Departments) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="shadow-sm">
          <CardHeader title="Department Expense Breakdown" />
          <CardContent>
            <div className="h-72 w-full mt-4 flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={currentData.charts.deptExpense} cx="50%" cy="50%" innerRadius={60} outerRadius={100} paddingAngle={5} dataKey="value">
                    {currentData.charts.deptExpense.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => `NRs. ${value.toLocaleString()}`} contentStyle={{ borderRadius: '8px' }} />
                  <Legend verticalAlign="bottom" height={36} wrapperStyle={{ fontSize: '12px' }} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-sm">
          <CardHeader title="Inventory Movement (In vs Out)" />
          <CardContent>
            <div className="h-72 w-full mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={currentData.charts.inventoryAuth} layout="vertical" margin={{ left: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#eee" />
                  <XAxis type="number" tick={{fontSize: 12}} tickLine={false} axisLine={false} />
                  <YAxis dataKey="name" type="category" tick={{fontSize: 12}} tickLine={false} axisLine={false} />
                  <Tooltip cursor={{fill: '#f9fafb'}} contentStyle={{ borderRadius: '8px' }} />
                  <Legend wrapperStyle={{ fontSize: '12px' }} />
                  <Bar dataKey="in" name="Stock In" fill="#8b5cf6" radius={[0, 4, 4, 0]} barSize={15} />
                  <Bar dataKey="out" name="Stock Out" fill="#f59e0b" radius={[0, 4, 4, 0]} barSize={15} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Grid - Row 3 (HR & Attendance) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="shadow-sm">
          <CardHeader title="Employee Growth" />
          <CardContent>
            <div className="h-72 w-full mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={currentData.charts.employeeGrowth}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eee" />
                  <XAxis dataKey="name" tick={{fontSize: 12}} tickLine={false} axisLine={false} />
                  <YAxis domain={['dataMin - 5', 'dataMax + 5']} tick={{fontSize: 12}} tickLine={false} axisLine={false} />
                  <Tooltip contentStyle={{ borderRadius: '8px' }} />
                  <Line type="stepAfter" dataKey="total" name="Total Employees" stroke="#3b82f6" strokeWidth={3} dot={{ r: 4, strokeWidth: 2 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-sm">
          <CardHeader title="Attendance Analytics (% or Count)" />
          <CardContent>
            <div className="h-72 w-full mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={currentData.charts.attendance}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eee" />
                  <XAxis dataKey="name" tick={{fontSize: 12}} tickLine={false} axisLine={false} />
                  <YAxis tick={{fontSize: 12}} tickLine={false} axisLine={false} />
                  <Tooltip cursor={{fill: '#f9fafb'}} contentStyle={{ borderRadius: '8px' }} />
                  <Legend wrapperStyle={{ fontSize: '12px' }} />
                  <Bar dataKey="present" name="Present" stackId="a" fill="#10b981" maxBarSize={40} />
                  <Bar dataKey="absent" name="Absent/Leave" stackId="a" fill="#ef4444" maxBarSize={40} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Call to Actions */}
      <div className="flex justify-end gap-4 mt-6">
        <Button variant="outline" onClick={() => navigate('/inventory/reports')}>Review Inventory</Button>
        <Button variant="primary" onClick={() => navigate('/approvals/center')}>Go to Approvals Inbox →</Button>
      </div>
    </div>
  );
};

export default ExecutiveDashboard;
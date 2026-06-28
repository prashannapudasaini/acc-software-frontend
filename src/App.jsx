import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Layout (Now in ERP domain)
import Layout from './components/erp/layout/Layout';

// 1. ERP & Executive Pages
import ExecutiveDashboard from './pages/erp/ExecutiveDashboard';
import Settings from './pages/erp/Settings';

// 2. Accounting Core Pages
import ChartOfAccounts from './pages/accounting/ChartOfAccounts';
import GeneralLedger from './pages/accounting/GeneralLedger';
import AccountsPayable from './pages/accounting/AccountsPayable';
import Banking from './pages/accounting/Banking';
import Taxes from './pages/accounting/Taxes';
import FinancialReports from './pages/accounting/FinancialReports';

// 3. Accounting A/R Pages
import ARDashboard from './pages/accounting/ARDashboard';
import Invoices from './pages/accounting/Invoices';
import Customers from './pages/accounting/Customers';
import Statements from './pages/accounting/Statements';
import AgingReport from './pages/accounting/AgingReport';

//Inventory Pages
import Products from './pages/inventory/Products';
import StockManagement from './pages/inventory/StockManagement';
import Warehouses from './pages/inventory/Warehouses';
import InventoryReports from './pages/inventory/InventoryReports';

//HR Pages
import Employees from './pages/hr/Employees';
import Attendance from './pages/hr/Attendance';
import Payroll from './pages/hr/Payroll';
import LeaveManagement from './pages/hr/LeaveManagement';
import Recruitment from './pages/hr/Recruitment';
import Performance from './pages/hr/Performance';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Default Route */}
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          
          {/* Executive Level */}
          <Route path="/dashboard" element={<ExecutiveDashboard />} />
          
          {/* Finance Module Routes */}
          <Route path="/accounting/coa" element={<ChartOfAccounts />} />
          <Route path="/accounting/ledger" element={<GeneralLedger />} />
          <Route path="/accounting/ar-dashboard" element={<ARDashboard />} />
          <Route path="/accounting/invoices" element={<Invoices />} />
          <Route path="/accounting/customers" element={<Customers />} />
          <Route path="/accounting/statements" element={<Statements />} />
          <Route path="/accounting/aging" element={<AgingReport />} />
          <Route path="/accounting/ap" element={<AccountsPayable />} />
          <Route path="/accounting/banking" element={<Banking />} />
          <Route path="/accounting/taxes" element={<Taxes />} />
          <Route path="/accounting/reports" element={<FinancialReports />} />

          {/* Inventory Module Routes */}
          <Route path="/inventory/products" element={<Products />} />
          <Route path="/inventory/stock" element={<StockManagement />} />
          <Route path="/inventory/warehouses" element={<Warehouses />} />
          <Route path="/inventory/reports" element={<InventoryReports />} />

          {/* HR Module Routes */}
          <Route path="/hr/employees" element={<Employees />} />
          <Route path="/hr/attendance" element={<Attendance />} />
          <Route path="/hr/payroll" element={<Payroll />} />
          <Route path="/hr/leave" element={<LeaveManagement />} />
          <Route path="/hr/recruitment" element={<Recruitment />} />
          <Route path="/hr/performance" element={<Performance />} />

          {/* System */}
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
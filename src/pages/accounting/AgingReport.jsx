import React from 'react';
import AgingChart from '../../components/erp/dashboard/AgingChart';

const AgingReport = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Detailed Aging Report</h1>
        <p className="text-gray-500 text-sm mt-1">Breakdown of outstanding invoices by age.</p>
      </div>
      <div className="max-w-4xl">
        <AgingChart />
      </div>
    </div>
  );
};

export default AgingReport;
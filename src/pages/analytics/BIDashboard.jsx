import React from 'react';
import { Card, CardContent, CardHeader } from '../../components/erp/ui/Card';

const BIDashboard = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Business Intelligence (BI)</h1>
        <p className="text-sm text-gray-500">Cross-functional enterprise analytics and KPIs.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Finance Analytics */}
        <Card className="border-t-4 border-t-blue-500">
          <CardHeader title="Finance: Profitability Analysis" />
          <CardContent className="p-5 space-y-4">
            <div className="flex justify-between border-b pb-2">
              <span className="text-sm text-gray-600">Net Profit Margin</span>
              <span className="font-bold text-green-600">22.4%</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span className="text-sm text-gray-600">OpEx Ratio</span>
              <span className="font-bold text-gray-900">41.2%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Top Cost Center</span>
              <span className="font-bold text-gray-900">Marketing</span>
            </div>
          </CardContent>
        </Card>

        {/* Inventory Analytics */}
        <Card className="border-t-4 border-t-orange-500">
          <CardHeader title="Inventory & Operations" />
          <CardContent className="p-5 space-y-4">
            <div className="flex justify-between border-b pb-2">
              <span className="text-sm text-gray-600">Inventory Turnover</span>
              <span className="font-bold text-gray-900">8.5x / year</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span className="text-sm text-gray-600">Warehouse Utilization</span>
              <span className="font-bold text-orange-600">88% (High)</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Stockout Rate</span>
              <span className="font-bold text-green-600">1.2%</span>
            </div>
          </CardContent>
        </Card>

        {/* HR Analytics */}
        <Card className="border-t-4 border-t-purple-500">
          <CardHeader title="Human Resources" />
          <CardContent className="p-5 space-y-4">
            <div className="flex justify-between border-b pb-2">
              <span className="text-sm text-gray-600">Annual Attrition Rate</span>
              <span className="font-bold text-green-600">4.5%</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span className="text-sm text-gray-600">Avg. Revenue / Employee</span>
              <span className="font-bold text-gray-900">NRs. 2.1M</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Training Completion</span>
              <span className="font-bold text-purple-600">92%</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BIDashboard;
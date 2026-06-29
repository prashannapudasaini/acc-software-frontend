import React from 'react';
import { Card, CardContent } from '../../components/erp/ui/Card';
import Button from '../../components/erp/ui/Button';

const EnterpriseAI = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Nexus AI Copilot
          </h1>
          <p className="text-sm text-gray-500">Predictive forecasting, automated reporting, and intelligent insights.</p>
        </div>
        <Button variant="primary">Generate Monthly Summary</Button>
      </div>

      {/* Forecasting Dashboards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-t-4 border-t-green-500">
          <CardContent className="p-5">
            <h3 className="font-bold text-gray-900 mb-2">📈 Sales Forecast (Q3)</h3>
            <p className="text-3xl font-bold text-green-600 mb-1">NRs. 4.8M</p>
            <p className="text-xs text-gray-500">AI Prediction: +12% growth based on current pipeline velocity and historical Q3 trends.</p>
          </CardContent>
        </Card>
        
        <Card className="border-t-4 border-t-orange-500">
          <CardContent className="p-5">
            <h3 className="font-bold text-gray-900 mb-2">📦 Inventory Demand</h3>
            <p className="text-lg font-bold text-gray-900 mb-1">Stockout Warning</p>
            <p className="text-xs text-gray-500">AI predicts 'MacBook Pro 16"' will stock out in 14 days. Suggested Reorder: 20 Units.</p>
          </CardContent>
        </Card>

        <Card className="border-t-4 border-t-purple-500">
          <CardContent className="p-5">
            <h3 className="font-bold text-gray-900 mb-2">👥 HR Attrition Risk</h3>
            <p className="text-lg font-bold text-gray-900 mb-1">Low Risk (2.1%)</p>
            <p className="text-xs text-gray-500">Employee engagement metrics are stable. No immediate department risks detected.</p>
          </CardContent>
        </Card>
      </div>

      {/* AI Chat Interface (Scaffold) */}
      <Card className="h-96 flex flex-col">
        <div className="p-4 border-b border-gray-100 bg-gray-50 rounded-t-xl">
          <h3 className="font-bold text-gray-700">Ask Data Copilot</h3>
        </div>
        <div className="flex-1 p-4 flex flex-col justify-end space-y-4">
          <div className="flex gap-2 text-sm text-gray-600 max-w-[70%]">
            <div className="bg-gray-100 p-3 rounded-2xl rounded-tl-none">
              How can I help you analyze your ERP data today?
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <button className="text-xs bg-white border border-gray-200 text-gray-600 px-3 py-1.5 rounded-full hover:border-blue-500 hover:text-blue-600 transition-colors">
              "Summarize Q2 expenses"
            </button>
            <button className="text-xs bg-white border border-gray-200 text-gray-600 px-3 py-1.5 rounded-full hover:border-blue-500 hover:text-blue-600 transition-colors">
              "Which vendors are delayed?"
            </button>
          </div>
        </div>
        <div className="p-4 border-t border-gray-100 flex gap-2">
          <input type="text" placeholder="Ask about finance, HR, or inventory..." className="flex-1 border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-purple-500" />
          <Button variant="primary">Ask AI</Button>
        </div>
      </Card>
    </div>
  );
};

export default EnterpriseAI;
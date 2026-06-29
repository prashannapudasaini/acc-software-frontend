import React from 'react';
import { Card, CardContent } from '../../components/erp/ui/Card';
import Button from '../../components/erp/ui/Button';

const pipelineStages = ['Prospect', 'Qualified', 'Proposal', 'Negotiation', 'Won'];

const deals = [
  { id: 'OPP-01', client: 'Kathmandu Tech', value: 1500000, stage: 'Proposal', owner: 'Sarita Shakya' },
  { id: 'OPP-02', client: 'Everest Supplies', value: 450000, stage: 'Qualified', owner: 'Ramesh Thapa' },
  { id: 'OPP-03', client: 'Lumbini Retail', value: 850000, stage: 'Negotiation', owner: 'Sarita Shakya' },
];

const SalesPipeline = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Sales Pipeline</h1>
          <p className="text-sm text-gray-500">Track leads and opportunities across the sales cycle.</p>
        </div>
        <Button variant="primary">+ New Opportunity</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 overflow-x-auto pb-4">
        {pipelineStages.map(stage => (
          <div key={stage} className="bg-gray-50/80 p-4 rounded-xl border border-gray-100 min-w-[250px]">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-gray-700">{stage}</h3>
              <span className="bg-gray-200 text-gray-700 text-xs px-2 py-0.5 rounded-full">
                {deals.filter(d => d.stage === stage).length}
              </span>
            </div>
            
            <div className="space-y-3">
              {deals.filter(d => d.stage === stage).map(deal => (
                <Card key={deal.id} className="cursor-pointer hover:border-blue-300 transition-colors shadow-sm">
                  <CardContent className="p-3">
                    <p className="font-bold text-sm text-gray-900">{deal.client}</p>
                    <p className="text-xs text-gray-500 mb-2">{deal.id} • {deal.owner}</p>
                    <p className="text-sm font-bold text-blue-600">NRs. {deal.value.toLocaleString()}</p>
                  </CardContent>
                </Card>
              ))}
              <button className="w-full text-center text-xs font-medium text-gray-400 hover:text-gray-600 py-2">
                + Add Deal
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SalesPipeline;
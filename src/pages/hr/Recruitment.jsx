import React from 'react';
import { Card, CardContent } from '../../components/erp/ui/Card';
import Button from '../../components/erp/ui/Button';

const stages = ['Applied', 'Interviewing', 'Offered', 'Hired'];

const Recruitment = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Recruitment Pipeline</h1>
        <Button variant="primary">+ Create Job Vacancy</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {stages.map(stage => (
          <div key={stage} className="bg-gray-50 p-4 rounded-xl border border-gray-100">
            <h3 className="font-bold text-gray-700 mb-4">{stage}</h3>
            <Card className="mb-2 shadow-sm cursor-pointer hover:bg-gray-50">
              <CardContent className="p-3">
                <p className="font-medium text-sm">John Doe</p>
                <p className="text-xs text-gray-500">Frontend Developer</p>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recruitment;
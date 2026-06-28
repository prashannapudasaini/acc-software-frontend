import React from 'react';
import { Card, CardContent } from '../../components/erp/ui/Card';

const Performance = () => (
  <div className="space-y-6">
    <h1 className="text-2xl font-bold">Performance & Training</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card>
        <CardContent className="p-6">
          <h2 className="font-bold mb-4">KPI Tracking (Q2)</h2>
          <div className="space-y-3">
            <p className="text-sm">Project Delivery: 95%</p>
            <div className="w-full bg-gray-100 rounded-full h-2">
              <div className="bg-blue-600 h-2 rounded-full" style={{width: '95%'}}></div>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-6">
          <h2 className="font-bold mb-4">Certifications</h2>
          <ul className="text-sm space-y-2 list-disc pl-4">
            <li>AWS Certified Developer</li>
            <li>React Professional Course</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  </div>
);

export default Performance;
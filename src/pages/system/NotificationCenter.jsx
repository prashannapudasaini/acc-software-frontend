import React from 'react';
import Button from '../../components/erp/ui/Button';

const notifications = [
  { id: 1, type: 'Alert', title: 'Low Stock Alert', desc: 'Paper A4 Reams drops below reorder level (2 remaining).', time: '10 mins ago', color: 'red' },
  { id: 2, type: 'Workflow', title: 'Leave Approval Required', desc: 'Sarita Shakya requested 2 days Sick Leave.', time: '1 hour ago', color: 'blue' },
  { id: 3, type: 'Finance', title: 'Due Payments', desc: 'Vendor Payment to TechCorp Solutions is due tomorrow.', time: '3 hours ago', color: 'orange' },
  { id: 4, type: 'System', title: 'Salary Processing', desc: 'Payroll for June 2026 generated successfully.', time: '1 day ago', color: 'green' },
];

const NotificationCenter = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Notification Center</h1>
        <Button variant="outline">Mark All as Read</Button>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="divide-y divide-gray-100">
          {notifications.map(note => (
            <div key={note.id} className="p-6 flex items-start gap-4 hover:bg-gray-50 transition-colors cursor-pointer">
              <div className={`w-2 h-2 mt-2 rounded-full flex-shrink-0 bg-${note.color}-500`}></div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h3 className="font-bold text-gray-900">{note.title}</h3>
                  <span className="text-xs text-gray-400">{note.time}</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">{note.desc}</p>
                <span className={`inline-block mt-2 text-[10px] font-bold uppercase tracking-wider text-${note.color}-600 bg-${note.color}-50 px-2 py-0.5 rounded`}>
                  {note.type}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotificationCenter;
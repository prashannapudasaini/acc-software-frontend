import React from 'react';
import Button from '../../components/erp/ui/Button';

const logs = [
  { id: 'LOG-882', time: 'Jun 29, 2026 10:45 AM', user: 'System Admin', action: 'Modified Permissions', module: 'System', ip: '192.168.1.4' },
  { id: 'LOG-881', time: 'Jun 29, 2026 09:12 AM', user: 'Sarita Shakya', action: 'Approved PR-2026-089', module: 'Procurement', ip: '110.34.22.1' },
  { id: 'LOG-880', time: 'Jun 28, 2026 18:30 PM', user: 'Ramesh Thapa', action: 'Generated June Payroll', module: 'HR', ip: '192.168.1.15' },
];

const AuditLogs = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Audit & Compliance Logs</h1>
          <p className="text-sm text-gray-500">Immutable record of all system activities and record changes.</p>
        </div>
        <Button variant="outline">Export Compliance Report</Button>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-50 text-xs uppercase text-gray-500">
            <tr>
              <th className="px-6 py-4">Timestamp</th>
              <th className="px-6 py-4">User</th>
              <th className="px-6 py-4">Module</th>
              <th className="px-6 py-4">Action Taken</th>
              <th className="px-6 py-4">IP Address</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {logs.map(log => (
              <tr key={log.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-gray-500 font-mono text-xs">{log.time}</td>
                <td className="px-6 py-4 font-medium text-gray-900">{log.user}</td>
                <td className="px-6 py-4"><span className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs">{log.module}</span></td>
                <td className="px-6 py-4 text-gray-700">{log.action}</td>
                <td className="px-6 py-4 text-gray-400 font-mono text-xs">{log.ip}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AuditLogs;
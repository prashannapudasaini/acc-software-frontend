import React from 'react';
import { Card, CardContent, CardHeader } from '../../components/erp/ui/Card';
import Button from '../../components/erp/ui/Button';

const GlobalSettings = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Global Settings</h1>
          <p className="text-sm text-gray-500">Manage company profile, fiscal parameters, and system preferences.</p>
        </div>
        <Button variant="primary">Save Changes</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Company Settings */}
        <Card>
          <CardHeader title="Company & Fiscal Settings" />
          <CardContent className="p-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
              <input type="text" defaultValue="NexusTech Solutions Pvt. Ltd." className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-500" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Fiscal Year Start</label>
                <select className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm">
                  <option>Shrawan 1 (Mid-July)</option>
                  <option>January 1</option>
                  <option>April 1</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Base Currency</label>
                <select className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm">
                  <option>NPR (Nepalese Rupee)</option>
                  <option>USD (US Dollar)</option>
                </select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* System Settings */}
        <Card>
          <CardHeader title="System & Interface Preferences" />
          <CardContent className="p-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">System Theme</label>
              <select className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm">
                <option>Light Mode</option>
                <option>Dark Mode</option>
                <option>System Default</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Automated Backups</label>
              <select className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm">
                <option>Daily at Midnight</option>
                <option>Weekly</option>
                <option>Manual Only</option>
              </select>
            </div>
            <div className="pt-2">
              <Button variant="outline" size="sm">Manage Email Templates</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default GlobalSettings;
import React from 'react';
import { Card, CardContent, CardHeader } from "../../components/erp/ui/Card";
import Button from "../../components/erp/ui/Button";

const Settings = () => {
  return (
    <div className="max-w-4xl space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">System Settings</h1>
        <p className="text-gray-500 text-sm mt-1">Manage your application preferences and configurations.</p>
      </div>
      
      <Card>
        <CardHeader title="General Preferences" subtitle="Update your global currency and locale settings." />
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Default Currency</label>
              <select className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 bg-white">
                <option value="NPR">Nepalese Rupee (NRs.)</option>
                <option value="USD">US Dollar ($)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Timezone</label>
              <select className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 bg-white">
                <option value="Asia/Kathmandu">Asia/Kathmandu (+05:45)</option>
              </select>
            </div>
          </div>
          <div className="pt-4 border-t border-gray-100 flex justify-end">
            <Button variant="primary">Save Changes</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Settings;
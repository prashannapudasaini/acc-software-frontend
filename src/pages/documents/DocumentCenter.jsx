import React from 'react';
import Button from '../../components/erp/ui/Button';

const documents = [
  { id: 'DOC-001', name: 'Sarita_Shakya_Contract.pdf', category: 'Employee Documents', version: 'v1.2', uploadedBy: 'HR Dept', date: 'Jun 28, 2026' },
  { id: 'DOC-002', name: 'PO_Dell_Monitors.pdf', category: 'Purchase Orders', version: 'v1.0', uploadedBy: 'Procurement', date: 'Jun 27, 2026' },
  { id: 'DOC-003', name: 'Vendor_NDA_TechCorp.docx', category: 'Contracts', version: 'v2.1', uploadedBy: 'Legal', date: 'Jun 25, 2026' },
];

const DocumentCenter = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Document Management</h1>
          <p className="text-sm text-gray-500">Secure vault for all enterprise files and attachments.</p>
        </div>
        <div className="flex gap-3">
          <input type="text" placeholder="Search documents..." className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-blue-500" />
          <Button variant="primary">+ Upload Document</Button>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-50 text-xs uppercase text-gray-500">
            <tr>
              <th className="px-6 py-4">File Name</th>
              <th className="px-6 py-4">Category</th>
              <th className="px-6 py-4">Version</th>
              <th className="px-6 py-4">Uploaded By</th>
              <th className="px-6 py-4">Date</th>
              <th className="px-6 py-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {documents.map(doc => (
              <tr key={doc.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-blue-600 flex items-center gap-2">
                  📄 {doc.name}
                </td>
                <td className="px-6 py-4 text-gray-600">{doc.category}</td>
                <td className="px-6 py-4"><span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">{doc.version}</span></td>
                <td className="px-6 py-4 text-gray-600">{doc.uploadedBy}</td>
                <td className="px-6 py-4 text-gray-500">{doc.date}</td>
                <td className="px-6 py-4 text-center space-x-3">
                  <button className="text-gray-400 hover:text-blue-600 font-medium">Preview</button>
                  <button className="text-gray-400 hover:text-green-600 font-medium">Download</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DocumentCenter;
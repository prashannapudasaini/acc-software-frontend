import React from 'react';
import InvoiceFilters from '../../components/accounting/invoices/InvoiceFilters';
import InvoiceTable from '../../components/accounting/invoices/InvoiceTable';
import Button from '../../components/erp/ui/Button';

const Invoices = () => {
  return (
    <div className="h-full flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Invoices</h1>
          <p className="text-gray-500 text-sm mt-1">Manage and track your customer invoices.</p>
        </div>
        <Button variant="primary" icon={<span className="text-lg leading-none">+</span>}>
          Create Invoice
        </Button>
      </div>

      <div className="flex-1 flex flex-col min-h-0">
        <InvoiceFilters />
        <InvoiceTable />
      </div>
    </div>
  );
};

export default Invoices;
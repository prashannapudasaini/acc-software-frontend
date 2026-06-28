import apiClient from './apiClient';

export const dashboardAPI = {
  getMetrics: () => apiClient.get('/dashboard/metrics'),
  getAgingReport: () => apiClient.get('/dashboard/aging'),
  getCashFlow: () => apiClient.get('/dashboard/cashflow'),
};

export const invoicesAPI = {
  getAll: (params) => apiClient.get('/invoices', { params }),
  getById: (id) => apiClient.get(`/invoices/${id}`),
  create: (data) => apiClient.post('/invoices', data),
  recordPayment: (id, data) => apiClient.post(`/invoices/${id}/payments`, data),
};

export const customersAPI = {
  getAll: () => apiClient.get('/customers'),
  getStatement: (customerId) => apiClient.get(`/customers/${customerId}/statement`),
};
import React from 'react';

const StatusBadge = ({ status }) => {
  let badgeColor = '';

  switch (status.toLowerCase()) {
    case 'paid':
    case 'completed':
      badgeColor = 'bg-green-100 text-green-700 border-green-200';
      break;
    case 'partial':
    case 'pending':
      badgeColor = 'bg-yellow-100 text-yellow-700 border-yellow-200';
      break;
    case 'overdue':
    case 'high':
      badgeColor = 'bg-red-100 text-red-700 border-red-200';
      break;
    case 'sent':
    case 'medium':
      badgeColor = 'bg-blue-100 text-blue-700 border-blue-200';
      break;
    case 'draft':
    case 'low':
    default:
      badgeColor = 'bg-gray-100 text-gray-700 border-gray-200';
      break;
  }

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-semibold border ${badgeColor}`}>
      {status}
    </span>
  );
};

export default StatusBadge;
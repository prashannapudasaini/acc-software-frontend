/**
 * Formats a number to NRs. currency
 */
export const formatCurrency = (amount) => {
  if (amount === null || amount === undefined) return 'NRs. 0.00';
  
  // Using toLocaleString for the commas, but prepending NRs. manually
  const formattedNumber = amount.toLocaleString('en-IN', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
  
  return `NRs. ${formattedNumber}`;
};

/**
 * Formats a date string to MMM DD, YYYY
 */
export const formatDate = (dateString) => {
  if (!dateString) return '';
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  }).format(date);
};
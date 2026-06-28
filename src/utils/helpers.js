/**
 * Calculates the percentage change between two numbers
 */
export const calculateTrend = (current, previous) => {
  if (!previous || previous === 0) return 100;
  return (((current - previous) / previous) * 100).toFixed(1);
};

/**
 * Helper to dynamically construct class names (useful for conditional tailwind classes)
 */
export const classNames = (...classes) => {
  return classes.filter(Boolean).join(' ');
};
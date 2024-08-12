export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
  });
};

// In utils.js or similar file
export const formatMonthYear = (dateString) => {
  if (!dateString) return '';
  const [year, month] = dateString.split('-');
  return `${new Date(year, month - 1).toLocaleString('default', { month: 'long' })} ${year}`;
};
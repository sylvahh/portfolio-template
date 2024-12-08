export const formatErrorMessage = (error: string[] | string) => {
  const errorMessage = Array.isArray(error) ? error[0] : error;
  return errorMessage;
};

export function formatDate(timestamp: string) {
  const date = new Date(timestamp);
  const day = date.getDate().toString().padStart(2, '0'); // Add leading zero if single digit
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Add leading zero if single digit
  const year = date.getFullYear().toString();
  return `${day}/${month}/${year}`;
}

export const formatCurrency = (value: number) => {
  return value.toLocaleString('pt-AO', { minimumFractionDigits: 0, maximumFractionDigits: 0 }) + ' Kz';
};

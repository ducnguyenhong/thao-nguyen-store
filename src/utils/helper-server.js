export const PX_ALL = { base: '16px', md: '24px', lg: '180px', xl: '200px', '2xl': '280px' };

export const formatCurrency = (price) => {
  const number = Number(price);
  if (isNaN(number)) {
    return '';
  }
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(Number(price));
};

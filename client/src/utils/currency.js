export const toRupiah = (number) => {
  return Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(number);
};

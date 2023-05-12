export const toRupiah = (number: number): string =>
  'IDR ' + number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')

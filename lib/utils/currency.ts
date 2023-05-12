export const toRupiah = (number: number): string =>
  'IDR ' + number.toLocaleString().replace(/,/g, '.')

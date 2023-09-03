/* eslint-disable import/prefer-default-export */
/**
 * The database give us the price as a number, we need to convert replace the dot by a comma
 * @param {number} price - Price
 * @returns {string} - Price in the correct format
 */
export function getPrice(price: number): string {
  const float = price * 1.0;
  const [int, dec] = float.toString().split('.');
  return `${int},${!dec ? '00' : dec.slice(0, 2)}`;
}

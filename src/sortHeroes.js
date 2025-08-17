
export default function sortByHealth(heroes) {
  if (!Array.isArray(heroes)) {
    throw new TypeError('heroes must be an array');
  }
  return [...heroes].sort((a, b) => b.health - a.health);
}

import sortByHealth from '../sortHeroes.js';

test('sorts heroes by health desc and does not mutate original', () => {
  const input = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];
  const copyBefore = JSON.stringify(input);

  const sorted = sortByHealth(input);

  const expected = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];

  expect(sorted).toEqual(expected);


  expect(sorted).not.toBe(expected);


  expect(JSON.stringify(input)).toBe(copyBefore);
});

test('throws on non-array input', () => {
  expect(() => sortByHealth(null)).toThrow(TypeError);
  expect(() => sortByHealth({})).toThrow('heroes must be an array');
});

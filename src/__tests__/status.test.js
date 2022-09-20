/** @format */

import arraySort from '../status';

const sortedArr = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'чипс', health: 80 },
    { name: 'мечник', health: 10 },
];
const result = arraySort();

test('chars order', () => {
    expect(result).toEqual(sortedArr);
});

test('toBe exception throwing', () => {
    const check = () => expect(result).toBe(sortedArr);
    expect(check).toThrow();
});

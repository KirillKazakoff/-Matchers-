import arraySort from '../status';

test('chars order', () => {
    const result = arraySort();
    const sortedArr = [
        { name: 'маг', health: 100 },
        { name: 'лучник', health: 80 },
        { name: 'чипс', health: 80 },
        { name: 'мечник', health: 10 },
    ];

    expect(result).toEqual(sortedArr);
});

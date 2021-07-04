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

test('toBe don\'t work', () => {
    expect(() => expect(result).toBe(sortedArr).toThrow());
});

test('toBe another', () => {
    const check = () => expect(result).toBe(sortedArr);
    expect(check).toThrow();
});

















// const promise = new Promise((resolve) => {
//     setTimeout(() => {
//         // переведёт промис в состояние fulfilled с результатом "result"
//         resolve(5);
//     }, 1000);
// })

// it('example promise', async () => {
//     const response = await promise;
//     return expect(response).toBe(5);
// })

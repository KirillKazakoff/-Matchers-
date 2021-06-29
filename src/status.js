const chars = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'чипс', health: 80 },
];

export default function arraySort() {
    chars.sort((a, b) => {
        if (a.health > b.health) {
            return -1;
        }
        if (a.name < b.name) {
            return 1;
        }
        return 0;
    });
    return chars;
}

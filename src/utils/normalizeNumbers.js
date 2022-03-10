export default function normalizeNumber(number) {
    let arrayNumber = Array.from(String(number));
    while (arrayNumber.length < 4) {
        arrayNumber.unshift(0);
    }
    return arrayNumber.join('');
}
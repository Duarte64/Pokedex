export default function normalizeWords(word) {
    if (word.includes('-')) {
        word = word.split('-')[0];
    }
    return word.charAt(0).toUpperCase() + word.slice(1);
}
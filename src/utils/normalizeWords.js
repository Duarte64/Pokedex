export default function normalizeWords(word, skill = false) {
    if (skill) {
        if (word.includes('-')) {
            word = word.split('-');
            word = word.join(' ');
        }
    } else {
        if (word.length > 12) {
            if (word.includes('-')) {
                word = word.split('-')[0];
            }
        }
        if (word.includes('-')) {
            word = word.replace('-f', ' ♀')
            word = word.replace('-m', ' ♂')
        }
    }
    
    return word.charAt(0).toUpperCase() + word.slice(1);
}
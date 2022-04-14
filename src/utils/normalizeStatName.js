export default function normalizeStatName(name) {
    if (name === 'attack') {
        return 'ATK';
    } else if (name === 'defense') {
        return 'DEF';
    } else if (name === 'defense') {
        return 'DEF';
    } else if (name === 'special-attack') {
        return 'SATK';
    } else if (name === 'special-defense') {
        return 'SDEF';
    } else if (name === 'speed') {
        return 'SPD';
    }
    return name;
}
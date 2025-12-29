export const countConsonants = (text) => {
    const count = Array.from(text.toLowerCase()).filter(char => "bcdfghjklmnpqrstvwxyz".includes(char)).length;
    return `Consonants: ${count}`;
};
//# sourceMappingURL=countConsonants.js.map
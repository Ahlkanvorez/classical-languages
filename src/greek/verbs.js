import grammar from '../../resources/greek/greek_grammar.json';

const getConjugations = () => {
    return grammar.conjugations.map(conjugation => conjugation.name);
};

const addEndingTo = stem => ending =>
    ending.startsWith('-')
        ? stem + ending.slice(1)
        : ending;

// TODO: Correct accentuation when appending endings.
// TODO: Redefine the method to take a verb object, which has a principal parts
// TODO: member, and use the proper principal part for a stem.
const conjugate = (stem, conjugationName, tense, mood, voice) => {
    const addEnding = data => Array.isArray(data)
                                ? data.map(addEndingTo(stem))
                                : addEndingTo(stem)(data);
    return grammar.conjugations
        .find(c => c.name === conjugationName).data
        .find(c => c.tense === tense
                && c.mood === mood
                && c.voice === voice).endings
        .map(row => row.map(addEnding));
};

export { conjugate, getConjugations };

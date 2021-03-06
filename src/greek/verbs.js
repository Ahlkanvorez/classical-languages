import grammar from '../../resources/greek/greek_grammar.json';

const getConjugations = () => {
    return grammar.conjugations.map(conjugation => conjugation.name);
};

// Note: This function works identically for nouns.
// TODO: Consider generalizing this to an object used by nouns/adj. & verbs.
const addEndingTo = stem => function appendEnding (ending) {
    // Some tables may have multiple endings listed in the same slot, e.g.
    // both -ῃ and -ει are 2nd sg. Pres.Ind.Pass. If that is the case, return a
    // new array where each ending is appended to the stem to form a different
    // string.
    if (Array.isArray(ending)) {
        return ending.map(appendEnding);
    }
    // A dash is used to indicate that the ending takes a suffix in place of the
    // dash. Thus, if a dash is present, the given stem replaces the dash;
    // otherwise, the ending is returned as is.
    return ending.startsWith('-')
            ? stem + ending.slice(1)
            : ending;
};

// TODO: Correct accentuation when appending endings.
// TODO: Redefine the method to take a verb object, which has a principal parts
// TODO: member, and use the proper principal part for a stem.
const conjugate = (stem, conjugationName, tense, mood, voice) => {
    return grammar.conjugations
        // Find the right conjugation by name (first, second, etc.)
        .find(c => c.name === conjugationName).data
        // Then find the right table of endings by tense, mood, & voice
        .find(c => c.tense === tense
                && c.mood === mood
                && c.voice === voice).endings
        // Lastly, create a new table where the stem is prepended to each entry.
        .map(row => row.map(addEndingTo(stem)));
};

export { conjugate, getConjugations };

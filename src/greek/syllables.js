const alphabet = [
    'Α', 'α',
    'Β', 'β',
    'Γ', 'γ',
    'Δ', 'δ',
    'Ε', 'ε',
    'Ζ', 'ζ',
    'Θ', 'θ',
    'Ι', 'ι',
    'Κ', 'κ',
    'Λ', 'λ',
    'Μ', 'μ',
    'Ν', 'ν',
    'Ξ', 'ξ',
    'Ο', 'ο',
    'Π', 'π',
    'Ρ', 'ρ',
    'Σ', 'σ',
    'Τ', 'τ',
    'Υ', 'υ',
    'Φ', 'φ',
    'Χ', 'χ',
    'Ψ', 'ψ',
    'Ω', 'ω'
];
const consonants = [
    'Β', 'β', 'Γ', 'γ', 'Δ', 'δ', 'Ζ', 'ζ', 'Θ', 'θ', 'Κ', 'κ', 'Λ', 'λ', 'Μ',
    'μ', 'Ν', 'ν', 'Ξ', 'ξ', 'Μ', 'π', 'Ρ', 'ρ', 'Σ', 'σ', 'Τ', 'τ', 'Φ', 'φ',
    'Χ', 'χ', 'Ψ', 'ψ'
];
const diphthongs = [ 'αι', 'ᾳ', 'αυ', 'ει', 'ευ', 'ῃ', 'ηυ', 'οι', 'υι', 'ῳ' ];
// Note: the digraph ου is long but not a diphthong.
const longVowels = [ 'ᾱ', 'η', 'ῑ', 'ου', 'ῡ', 'ω' ];
const shortVowels = [ 'α', 'ε', 'ι', 'ο', 'υ' ];

const isLetter = form => alphabet.includes(form);
const isConsonant = form => consonants.includes(form);
const isDiphthong = form => diphthongs.includes(form);
const isLongVowel = form => longVowels.includes(form);
const isVowel = form => shortVowels.includes(form) || longVowels.includes(form);

// TODO: account for vowels long or short by position.
const isLong = form => isDiphthong(form) || isLongVowel(form);
const isShort = form => isVowel(form) && !isLong(form);

export { isDiphthong, isLong, isShort, isConsonant, isVowel, isLetter };

// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {

  const alphaKey = "abcdefghijklmnopqrstuvwxyz".split("");

  function substitution(input, alphabet, encode = true) {
    try {
      _validAlphabet(alphabet);
      const codeKey = alphabet.toLowerCase().split("");
      return input
        .toLowerCase() 
        .split("") 
        .map(
          (word) =>
            encode
              ? _mapTo(word, alphaKey, codeKey) 
              : _mapTo(word, codeKey, alphaKey) 
        )
        .join(""); 
    } catch (error) {
      return false;
    }
  }


  function _mapTo(input, fromKey, toKey) {
    if (input.match(/\s/)) return input; 
    const index = fromKey.indexOf(input); 
    if (index === -1)
      throw new Error(`${input} not found in the provided alphabet!`); 
    return toKey[index]; 
  }

  function _validAlphabet(alphabet) {
    if (alphabet.length !== 26)
      throw new Error(`Alphabet must be exactly 26 characters long!`);

    if ([...new Set(alphabet)].length !== alphabet.length)
      throw new Error(`Alphabet cannot contain repeating characters!`);
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };

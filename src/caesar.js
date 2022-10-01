// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  function caesar(input, shift, encode = true) {
    try {
      if (!shift || shift < -25 || shift > 25)
        throw new Error(`Shift must be defined and be between -25 and 25`); // 
      if (typeof input !== "string")
        throw new Error(`Input provided must be a defined`); 

      shift *= encode ? 1 : -1; 

      return input 
        .toLowerCase()
        .split("")
        .map((character) => _shifter(character, shift))
        .join("");
    } catch (error) {
     
      return false; 
    }
  }

  
  function _shifter(character, shift) {
    const key = "abcdefghijklmnopqrstuvwxyz".split(""); 

    if (!character.match(/[a-z]/)) return character; 

    let index = key.indexOf(character); 
    let shifted = (((index + shift) % 26) + 26) % 26; 
    return key[shifted];
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };

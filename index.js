function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

function reverseString(word) {
  return word.split("").reverse().join("");
}

const calculator = {
  add(a, b) {
    return a + b;
  },

  substract(a, b) {
    return a - b;
  },

  multiply(a, b) {
    return a * b;
  },

  divide(a, b) {
    return a / b;
  },
};

function ceasarCipher(string, shift) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  let cipherAlphabet = [];
  for (let i = 0; i < alphabet.length; i++) {
    if (i + shift >= alphabet.length) {
      cipherAlphabet.push(alphabet[i + shift - alphabet.length]);
    } else {
      cipherAlphabet.push(alphabet[i + shift]);
    }
  }
  let stringArray = string.split("");
  let finalString = [];
  for (let i = 0; i < stringArray.length; i++) {
    if (alphabet.indexOf(stringArray[i]) === -1) {
      if (/[A-Z]/.test(stringArray[i])) {
        let index = alphabet.indexOf(stringArray[i].toLowerCase());
        finalString.push(cipherAlphabet[index].toUpperCase());
      } else {
        finalString.push(stringArray[i]);
      }
    } else {
      let index = alphabet.indexOf(stringArray[i]);
      finalString.push(cipherAlphabet[index]);
    }
  }

  return finalString.join("");
}

function analyseArray(array) {
  const arrayPropreties = {};
  arrayPropreties.average =
    array.reduce((total, value) => {
      return total + value;
    }) / array.length;
  arrayPropreties.length = array.length;
  arrayPropreties.max = Math.max.apply(null, array);
  arrayPropreties.min = Math.min.apply(null, array);

  return arrayPropreties;
}

export { calculator, capitalize, reverseString, ceasarCipher, analyseArray };

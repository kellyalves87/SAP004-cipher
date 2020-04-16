import validation from "./validation.js";

const cipher = {
  encode: (offset, phrase) => {
    validation(offset, phrase);

    let firsMintLetterAsc = 65;
    let lastMinLetterAsc = 90;
    let fisrtMaxtLetterAsc = 97;
    let numberLetterAlpha = 26;
    let done = "";

    for (let counter = 0; counter < phrase.length; counter++) {
      const encodeChar = phrase[counter].charCodeAt();

      if (encodeChar >= firsMintLetterAsc && encodeChar <= lastMinLetterAsc) {
        const result = ((encodeChar - firsMintLetterAsc + offset) % numberLetterAlpha) + firsMintLetterAsc;
        done += String.fromCharCode(result);
      } else {
        const result = ((encodeChar - fisrtMaxtLetterAsc + offset) % numberLetterAlpha) + fisrtMaxtLetterAsc;
        done += String.fromCharCode(result);
      }
    }
    return done;
  },

  decode: (offset, phrase) => {
    validation(offset, phrase);

    let firsMintLetterAsc = 65;
    let lastMinLetterAsc = 90;
    let numberLetterAlpha = 26;
    let done = "";

    for (let counter = 0; counter < phrase.length; counter++) {
      const decodeChar = phrase[counter].charCodeAt();

      if (decodeChar >= firsMintLetterAsc && decodeChar <= lastMinLetterAsc) {
        const result = ((decodeChar + firsMintLetterAsc - offset) % numberLetterAlpha) + firsMintLetterAsc;
        done += String.fromCharCode(result);
      } else {
        const upperDecodeChar = phrase[counter].toUpperCase().charCodeAt();
        const result = ((upperDecodeChar + firsMintLetterAsc - offset) % numberLetterAlpha) + firsMintLetterAsc;
        done += String.fromCharCode(result).toLowerCase();
      }
    }

    return done;
  },
};

export default cipher;

import validation from "./validation.js";

const firstMinLetterAsc = 65;
const lastMinLetterAsc = 90;
const firstMaxtLetterAsc = 97;
const numberLetterAlpha = 26;

const cipher = {
  encode: (offset, phrase) => {
    validation(offset, phrase);

    let done = "";

    Array.from(phrase).forEach((letter) => {
      const encodeChar = letter.charCodeAt();

      if (encodeChar >= firstMinLetterAsc && encodeChar <= lastMinLetterAsc) {
        const result =
          ((encodeChar - firstMinLetterAsc + offset) % numberLetterAlpha) +
          firstMinLetterAsc;
        done += String.fromCharCode(result);
      } else {
        const result =
          ((encodeChar - firstMaxtLetterAsc + offset) % numberLetterAlpha) +
          firstMaxtLetterAsc;
        done += String.fromCharCode(result);
      }
    });

    return done;
  },

  decode: (offset, phrase) => {
    validation(offset, phrase);

    let done = "";

    Array.from(phrase).forEach((letter) => {
      const decodeChar = letter.charCodeAt();

      if (decodeChar >= firstMinLetterAsc && decodeChar <= lastMinLetterAsc) {
        const result =
          ((decodeChar + firstMinLetterAsc - offset) % numberLetterAlpha) +
          firstMinLetterAsc;
        done += String.fromCharCode(result);
      } else {
        const upperDecodeChar = letter.toUpperCase().charCodeAt();
        const result =
          ((upperDecodeChar + firstMinLetterAsc - offset) % numberLetterAlpha) +
          firstMinLetterAsc;
        done += String.fromCharCode(result).toLowerCase();
      }
    });

    return done;
  },
};

export default cipher;

import validation from './validation.js';

const cipher = {

  encode: (offset, phrase) => {

    validation(offset, phrase);

    let done = "";

    for (let counter = 0; counter < phrase.length; counter++) {

      const encodeChar = phrase[counter].charCodeAt();

      if (encodeChar >= 65 && encodeChar <= 90) {
        const result = ((encodeChar - 65 + offset) % 26) + 65;
        done += String.fromCharCode(result);
      } else {
        const result = ((encodeChar - 97 + offset) % 26) + 97;
        done += String.fromCharCode(result);
      }

    }
    return done;
  },
  
  
  decode: (offset, phrase) => {

    validation(offset, phrase);

    let done = "";

    for (let counter = 0; counter < phrase.length; counter++) {

      const decodeChar = phrase[counter].charCodeAt();

      if (decodeChar >= 65 && decodeChar <= 90) {
        const result = ((decodeChar + 65 - offset) % 26) + 65;
        done += String.fromCharCode(result);
      } else {

        const upperDecodeChar = phrase[counter].toUpperCase().charCodeAt();
        const result = ((upperDecodeChar + 65 - offset) % 26) + 65;
        done += String.fromCharCode(result).toLowerCase();
        
      }

    }

    return done;

  }

}

export default cipher;

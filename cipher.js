import validation from './validation.js';

const cipher = {

  encode: (offset, phrase) => {

    validation(offset, phrase);

    let done = "";

    for (let counter = 0; counter < phrase.length; counter++) {

      let encodeChar = phrase[counter].charCodeAt();

      if (encodeChar >= 65 && encodeChar <= 90) {
        let result = ((encodeChar - 65 + offset) % 26) + 65;
        done += String.fromCharCode(result);
      } else if (encodeChar >= 97 && encodeChar <= 122) {
        let result = ((encodeChar - 97 + offset) % 26) + 97;
        done += String.fromCharCode(result);
      }

    }
    return done;
  },
  
     //função criada para decodificar em letra maíuscula e minuscula.

  decode: (offset, phrase) => {

    let normalAlpha = phrase;
    let doneD = "";

    for (let counter = 0; counter < phrase.length; counter++) {

      let decodeChar = normalAlpha[counter].charCodeAt();

      if (decodeChar >= 65 && decodeChar <= 90) {
        let resultD = ((decodeChar + 65 - offset) % 26) + 65;
        doneD += String.fromCharCode(resultD);
      } else if (decodeChar >= 97 && decodeChar <= 122) {

        let upperDecodeChar = normalAlpha[counter].toUpperCase().charCodeAt();
        let resultD = ((upperDecodeChar + 65 - offset) % 26) + 65;
        doneD += String.fromCharCode(resultD).toLowerCase();
        
      }

    }

    return doneD;

  }

}

export default cipher;

const cipher = {

  encode: (offset, phrase) => {

  let done = "";

  for (let contador = 0; contador < phrase.length; contador++) {

    let encodeChar = phrase[contador].toUpperCase().charCodeAt();

    let result = ((encodeChar - 65 + offset) % 26) + 65;  

    done += String.fromCharCode(result);

  }

  return done;
},


//função criada para decodificar.

decode: (offset, phrase) => {

  let normalAlpha = phrase.toUpperCase();
  let doneD = "";

  for (let contador = 0; contador < phrase.length; contador++){
   
    let decodeChar = normalAlpha[contador].charCodeAt();
    
    let resultD = ((decodeChar - 65 -  offset) % 26);

    if (resultD < 0){
      resultD += 26 + 65;
      doneD += String.fromCharCode(resultD);
    } else {
      resultD +=65;
      doneD += String.fromCharCode(resultD);
    }    
     
  }
  
  return doneD;

  }
  
}

export default cipher;

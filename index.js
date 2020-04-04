import cipher from './cipher.js';

let phrase = document.getElementById('senha');
let alphabetAsc = document.getElementById('offset');
let encodeBtn = document.getElementById('encode');
let decodeBtn = document.getElementById('decode');

encodeBtn.addEventListener('click', function(event){

    event.preventDefault();
    let textValue = cipher.encode(alphabetAsc.valueAsNumber, phrase.value);

    document.getElementById('answerPassword').textContent = textValue;
});


decodeBtn.addEventListener('click', function(event){

    event.preventDefault();
    let textValue = cipher.decode(alphabetAsc.valueAsNumber, phrase.value);

    document.getElementById('answerPassword').textContent = textValue;
});




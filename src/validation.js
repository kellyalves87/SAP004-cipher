let validation = (offset, phrase) => {

    let message = document.getElementById('phrasePass');
    let moveOffset = document.getElementById('moveHouses');

    message.innerHTML = "";
    moveOffset.innerHTML = "";

    if ((Number.isNaN(offset) || offset <= 0) || phrase === 'undefined' || phrase === 'null' || phrase.length === 0) {
        message.innerHTML = "Campo obrigatório";
        moveOffset.innerHTML = "Campo obrigatório";
        throw new TypeError('Campo inválido!');
    } else {
        message.innerHTML = "";
        moveOffset.innerHTML = "";
    }
}

 

export default validation;
let validation = (offset, phrase) => {

    if ((Number.isNaN(offset) || offset <= 0) || phrase === 'undefined' || phrase === 'null' || phrase.length === 0) {        
        throw new TypeError('Campo inválido!');
    }
} 

export default validation;
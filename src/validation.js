let validation = (offset, phrase) => {
    
    if ((offset <= 0) || phrase === 'undefined' || phrase === 'null' || phrase.length === 0) {
        throw new TypeError('Campo inválido!')
    }
}

export default validation;
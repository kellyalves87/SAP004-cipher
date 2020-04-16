import cipher from "./cipher.js";

const phrase = document.getElementById("senha");
const alphabetAsc = document.getElementById("offset");
const encodeBtn = document.getElementById("encode");
const decodeBtn = document.getElementById("decode");

encodeBtn.addEventListener("click", function () {
  const textValue = cipher.encode(alphabetAsc.valueAsNumber, phrase.value);

  document.getElementById("answer-password").textContent = textValue;
});

decodeBtn.addEventListener("click", function () {
  const textValue = cipher.decode(alphabetAsc.valueAsNumber, phrase.value);

  document.getElementById("answer-password").textContent = textValue;
});

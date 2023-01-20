let ampiezzaInput = document.querySelector("[name=ampiezza]");
let frequenzaInput = document.querySelector("[name=frequenza]");
let faseInput = document.querySelector("[name=fase]");

ampiezzaInput.addEventListener("input", function(e) {
    amp = parseInt(ampiezzaInput.value);
    console.log(`ampiezza cambiata a --> ${amp}`);
});

frequenzaInput.addEventListener("input", function(e) {
    freq = parseFloat(frequenzaInput.value);
    console.log(`frequenza cambiata a --> ${freq}`);
});

faseInput.addEventListener("input", function(e) {
    reset();
    fase = parseFloat(faseInput.value);
    console.log(`fase cambiata a --> ${fase}`);

});
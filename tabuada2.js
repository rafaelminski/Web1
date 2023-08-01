const frm = document.querySelector("form");
const resp = document.querySelector("pre");
const somaPares = document.querySelector("#outPares");
const somaImpares = document.querySelector("#outImpares");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const numero = Number(frm.inNumero.value);

    let resposta = "";
    let somaPar = 0;
    let somaImpar = 0;

    for (let i = 1; i <= 10; i++) {
        resposta += numero + " X " + i + " = " + (numero * i) + "\n";
        if ((numero * i) % 2 === 0) {
            somaPar += numero * i;
        } else {
            somaImpar += numero * i;
        }
    }

    resp.innerText = resposta;
    somaPares.innerText = "Soma dos pares: " + somaPar;
    somaImpares.innerText = "Soma dos ímpares: " + somaImpar;
});

const frm = document.querySelector("form");
const outFatorial = document.querySelector("#outFatorial");

function calcularFatorial(numero) {
    let resultado = 1;
    for (let i = 1; i <= numero; i++) {
        resultado *= i;
    }
    return resultado;
}

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const numero = Number(frm.inNumero.value);

    if (numero < 0) {
        outFatorial.innerText = "Não é possível calcular o fatorial de um número negativo.";
    } else {
        const fatorial = calcularFatorial(numero);
        outFatorial.innerText = numero + "! = " + fatorial;
    }
});










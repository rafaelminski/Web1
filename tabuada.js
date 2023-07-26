//obter os elementos da página
const frm = document.querySelector("form");
const resp = document.querySelector("pre");
const somaPares = document.querySelector("#outPares");
const somaImpares = document.querySelector("#outImpares");


frm.addEventListener("submit", (e) => {
    e.preventDefault();

    //obter o número informado
    const numero = Number(frm.inNumero.value);

    let resposta = ""
    let somaPar = 0
    let somaImpar = 0
    //criar um laço de repetição iniciando de 1 até 10
    for (let i = 1; i<=10; i++) {
        resposta += numero + "X" + i + "=" + (numero * i) + "\n";
        if((numero * i)%2==0){
            somaPar+= numero*i;
        }else{
            somaImpar+= numero * i;
        }
    }
    
    //alterar o conteúdo da tag pre
    resp.innerText = resposta;
    somaPares.innerText = somaPar;
    somaImpares.innerText = somaImpar;
})
//obter os elementos da página
const frm = document.querySelector("form");
const resp = document.querySelector("pre");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    //obter o número informado
    const numero1 = 1;
    const numero2 = 0;
    let resposta1 = ""
    let resposta2 = ""
    //criar um laço de repetição iniciando de 1 até 20
    for (let i = 1; i<20; i++) {
        
        numero2 = numero2 + numero1;
        numero1 = numero2 + numero1;
        resposta1 += numero2;
        resposta2 += numero1;
            
        }
        
    
    
    //alterar o conteúdo da tag pre
    resp.innerText = resposta1;
    resp.innerText = resposta2;








})
//24. Como você pode verificar se um número é múltiplo de 3 ou 5 em JavaScript usando operadores lógicos?

/*
let numb = 2;
if(numb % 3 === 0) {
    console.log("Multiplo de 3")
} else {
    console.log("Não multiplo de 3")
}

let numbDois = 3;
if(numbDois % 5 === 0) {
    console.log("Multiplo de 5")
} else {
    console.log("Não multiplo de 5")
}
*/

function multiplo(numero) {
    return numero % 3 === 0 || numero % 5 === 0;
}

console.log(multiplo(12)); //true (multiplo de 3)
console.log(multiplo(50)); //true (multiplo de 5)
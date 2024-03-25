//8. Como você pode verificar se um número é par e menor que 100 em JavaScript usando operadores lógicos? 

let numb = 40;
let menor100 = (numb < 100);
let parOuimpar = numb % 2 == 0; //valor atribuido sera divido por 2, e se a divisão for par, sera igual a 0
                                // 40/2 = 20 == 0

console.log("Par : ", parOuimpar);
console.log("Menor que 100 : ", menor100);
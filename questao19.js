//19. Como você pode verificar se um número é ímpar ou menor que 50 em JavaScript usando operadores lógicos?

let numb = 30;
if((numb % 2 != 1) || (numb < 50)) {
    console.log("Ímpar e/ou menor que 50 : ")
} else {
    console.log("Não ímpar e/ou maior que 50 : ")
}

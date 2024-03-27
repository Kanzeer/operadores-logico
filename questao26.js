//26. Explique como os parênteses afetam o resultado de uma expressão com operadores lógicos em JavaScript.

/* 
"true && !(false || true)", os parênteses são utilizados para separar uma conta especifica da conta geral, por exemplo o "(false || true)".
Além de especificar, eles priorizam a conta, ou seja, a primeira conta a ser feita é a que está em parênteses, "(false || true) = true",
depois disso, só seguirmos com a conta normal
true && !(false || true)
true && !true = false
*/
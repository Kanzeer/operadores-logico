//15. Explique como a ordem de avaliação dos operadores lógicos afeta o resultado de uma expressão em JavaScript.

/*
    "ordem dos fatores não altera o produto", essa afirma se torna falsa nos operadores lógicos
    (10 > 5) && !(3 < 1), na parte do (10 > 5), essa afirmação se torna "true", pois 10 é maior que 5, mas se fosse o contrario (10 < 5), seria "false", mesma coisa no (3 < 1),
    (true) && !(false), na parte "!(false)", a afirmação fica "true", pois o "!" serve de oposição, o que torna "false" em "true"
    no final resultando em (true) && (true) = true
*/
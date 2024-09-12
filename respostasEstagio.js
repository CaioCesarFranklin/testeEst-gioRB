


// Questão 1) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo 
//valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...),
// escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência
// de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.


function checkFibonacii(valor) {




    let primeiroNumero = 0
    let segundoNumero = 1

    if (valor === 0 || valor === 1) {
        return `${valor} está presenta na sequência de Fibonacci`
    }
    while (segundoNumero < valor) {
        let ultimoValor = segundoNumero
        segundoNumero = primeiroNumero + segundoNumero
        primeiroNumero = ultimoValor
    }

    if (valor === segundoNumero) {
        return `O ${valor} está presente na sequência de Fibonacci`
    }
    else {
        return `o ${valor} não está presente na sequência de Fibonacci `
    }

}
//Teste aqui a função da questão 1:
console.log(checkFibonacii(16))
// Fim da primeira questão.



//Questão 2) Escreva um programa que verifique, em uma string, a existência da letra ‘a’, seja maiúscula ou minúscula, 
//além de informar a quantidade de vezes em que ela ocorre.
function checkString(string) {

    let totalCaractere = 0
    for (let i = 0; i < string.length; i++) {
        const checkLetra = string[i]

        if (checkLetra === 'a' || checkLetra === 'A') {
            totalCaractere++
        }
    }
    console.log(totalCaractere)
    if (totalCaractere === 1) {
        console.log(`Sim,o caractere desejado apareceu ${totalCaractere} vez `)

    } else if (totalCaractere > 1) {
        console.log(`Sim,o caractere desejado apareceu ${totalCaractere} vezes `)
    } else if (totalCaractere === 0) {
        console.log(`Não existe o caractere devido na string :${string}`)

    }


}
checkString('teste')
//Fim da questão 2


//Questão 3) Observe o trecho de código abaixo: int INDICE = 12, SOMA = 0, K = 1; 
// enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; } imprimir(SOMA);
// Ao final do processamento, qual será o valor da variável SOMA?

function somaCheck() {
    let indice = 12
    let SOMA = 0
    let K = 1
    while (K < indice) {
        K = K + 1
        SOMA = SOMA + K
    }

    console.log(SOMA)


}
somaCheck()

//Fim da questão 3


// Questão 4) Descubra a lógica e complete o próximo elemento:
//a) 1, 3, 5, 7, ___
//b) 2, 4, 8, 16, 32, 64, ____
//c) 0, 1, 4, 9, 16, 25, 36, ____
//d) 4, 16, 36, 64, ____
//e) 1, 1, 2, 3, 5, 8, ____
//f) 2,10, 12, 16, 17, 18, 19, ____

// Resposta a)
// É a sequência de números ímpáres, logo, o próximo valor impar é 9.
//Resposta b)
// A sequência se trata do dobro do valor anterior, logo, o próximo valor é 128.
// Resposta c)
// A sequência se trata do quadrados perfeitos, logo o proximo valor é 7² = 49.
//Resposta d)
// A sequencia se trata do quadrado dos números pares, logo o proximo valor é 10² = 100.
//Resposta e)
// A sequencia se trata do somatório dos ultimos 2 valores, logo o próximo valor é 13
//Resposta f)
//Não consegui encontrar correlação sequencial.


//  Resposta da questão 5)
{/*
                
                

Bom, para resolver o problema, eu realizaria estas ações:
1º passo: Primeiramente pressionar o primeiro interruptor, e esperaria 30 minutos.
2º passo:  Desligaria o primeiro interruptor, pressionaria o segundo interruptor e iria adentrar na sala.
3º passo: Iria verificar qual lâmpada está acesa, para associa-la ao segundo interruptor.
4º passo: Iria tocar nas outras duas lâmpadas apagadas, verificando a temperatura das mesmas. A que estivesse quente, associaria ao primeiro interruptor, e a que estivesse fria, ao terceiro interruptor.
Desta forma, ainda me restaria 1 ida permitida, o que acredito que da forma como realizaria não seria necessário a segunda visita a sala. 
                
                */}

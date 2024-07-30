/*metros = prompt("Informe a unidade em metros")

escolha = prompt("Selecione abaixo uma unidade de medida para a conversão: \n" + 
    "1. milímetro (mm)\n" +"2. centímetro (cm)\n" + "3. decímetro (dm)\n" + "4. decâmtro (dam)\n" +
    "5. hectômetro (hm)\n" + "6. quilômetro (km)")

if (escolha == 1) {
    resultado = metros * 1000;
    alert("Convertendo " + metros + "metros em milímetros temos: " + resultado + "mm.")
} else if (escolha == 2) {
    resultado = metros * 100;
    alert("Convertendo " + metros + "metros  centímetros temos: " + resultado + "cm.")
} else if (escolha == 3) {
    resultado = metros * 10;
    alert("Convertendo " + metros + "metros em decímetros temos: " + resultado + "dm.")
} else if (escolha == 4) {
    resultado = metros / 10;
    alert("Convertendo " + metros + "metros em decâmetro temos: " + resultado + "dam.")
} else if (escolha == 5) {
    resultado = metros / 100;
    alert("Convertendo " + metros + "metros em hectometros temos: " + resultado + "hm.")
} else if (escolha == 6) {
    resultado = metros / 1000;
    alert("Convertendo " + metros + "metros em quilômetros temos: " + resultado + "km.")
}*/

/*metros = parseFloat(prompt("Insira uma medida em metros:"))

const escolha = prompt("Selecione abaixo uma unidade de medida para a conversão: \n" + 
    "1. milímetro (mm)\n" +"2. centímetro (cm)\n" + "3. decímetro (dm)\n" + "4. decâmtro (dam)\n" +
    "5. hectômetro (hm)\n" + "6. quilômetro (km)")

switch (escolha) {
    case "1":
    resultado = metros * 1000;
    alert("Convertendo " + metros + " metros em milímetros temos: " + resultado + "mm.");
    break;

    case "2":
    resultado = metros * 100;
    alert("Convertendo " + metros + " metros  centímetros temos: " + resultado + "cm.");
    break;
    
    case "3":
    resultado = metros * 100;
    alert("Convertendo " + metros + " metros em decímetros temos: " + resultado + "dm.");
    break;

    case "4":
    resultado = metros * 100;
    alert("Convertendo " + metros + " metros em decâmetro temos: " + resultado + "dam.");
    break;

    case "5":
    resultado = metros * 100;
    alert("Convertendo " + metros + " metros em hectometros temos: " + resultado + "hm.");
    break;

    case "6":
    resultado = metros * 100;
    alert("Convertendo " + metros + " metros em quilômetros temos: " + resultado + "km.");
    break;

    default:
        alert("Opção inválida.");
}*/

/*let inicial  = parseFloat(prompt("Insira a quantidade inicial de dinheiro: "))

do {
    opcao = prompt("Sua quantidade atual de dinheiro é de: " + inicial + "." + " Escolha uma opção abaixo: \n" +
        "1 - Adicionar dinheiro.\n" + "2 - Remover dinheiro\n" + "3 - Sair"
    )
    
    switch (opcao) {
        case "1":
            let mais = parseFloat(prompt("Insira a quantidade que deseja somar: "))
            inicial = inicial + mais
        break;
        case "2":
            let menos = parseFloat(prompt("Insira a quantidade que deseja subtrair: "))
            inicial = inicial - menos
        break;
        case "3":
            alert("Encerrando programa.");
        break;
        default:
            alert("Opção inválida.");
    }

} while (opcao != 3) {
        
}*/
/*const arr = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"]

const outros = arr.slice(-4)
const hobbits = arr.slice(0, 4)

const sociedade = hobbits.concat(outros, "Boromir")

for (let indice = 0; indice < sociedade.length; indice++) {
    const elemento = sociedade[indice]
    console.log(elemento + " se encontra na posição " + indice)
  }*/


/*(function calcularTriangulo () {
    const base = parseFloat(prompt("Informe a base do triângulo:"))
    const altura = parseFloat(prompt("Informe a altura do triângulo:"))
    return base * altura / 2
}

function calcularRetangulo () {
    const base = parseFloat(prompt("Informe a base do retângulo:"))
    const altura = parseFloat(prompt("Informe a base do retângulo:"))
    return base * altura
}

function calcularQuadrado () {
    const lado = parseFloat(prompt("Informe o lado do quadrado:"))
    return lado * lado
}

function calcularTrapezio () {
    const baseMaior = parseFloat(prompt("Informe a base maior do trapézio:"))
    const baseMenor = parseFloat(prompt("Informe a base menor do trapézio:"))
    const altura = parseFloat(prompt("Informe a altura menor do trapézio:"))
    return (baseMaior + baseMenor) * altura / 2
}

function calcularCirculo () {
    const pi = 3.14
    const raio = parseFloat(prompt("Informe o raio do círculo:"))
    return pi * raio * raio
}

function exibirMenu() {
    return prompt (
    "Calculadora Geométrica\n" +
    "1. Calcular área de triângulo\n" +
    "2. Calcular área de retângulo\n" +
    "3. Calcular área de quadrado\n" +
    "4. Calcular área de trapézio\n" +
    "5. Calcular área de círculo\n" +
    "6. Sair\n")
}

function executar() {
    let opcao = ""
do {
    opcao = exibirMenu()
    let resultado

    switch(opcao) {
        case "1":
            resultado = calcularTriangulo()
            break
        case "2":
            resultado = calcularRetangulo()
            break
        case "3":
            resultado = calcularQuadrado()
            break
        case "4":
            resultado = calcularTrapezio()
            break
        case "5":
            resultado = calcularCirculo()
            break
        case "6":
            alert("Encerrando programa..")
            break
        default:
            alert("Opção inválida")
            break
    }

    if (resultado ) {
        alert("Resultado: " + resultado)
    }

} while (opcao !== "6")

}

executar()*/


function calcularTriangulo () {
    const base = document.getElementById("base").value
    const altura = document.getElementById("altura").value 

     const resultadoConta = base * altura / 2

     var resultado = document.getElementById("resultado")
     resultado.innerHTML = resultadoConta

}

 
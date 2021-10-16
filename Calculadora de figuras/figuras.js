// Código del cuadrado

console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log("Lado del cuadrado miden: " + ladoCuadrado  + "cm");

function perimetroCuadrado(lado) {
    return lado * 4;
    // console.log("El perimetro del cuadrado es de: " + perimetroCuadrado  + "cm");
}
function areaCuadrado(lado){
    return lado * lado;
    // console.log("El área del cuadrado es de: " + areaCuadrado  + "cm²");
}
console.groupEnd();
// Código del triangulo

console.group("Triangulos");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;

// console.log(
// "Lado del triangulo miden: "
// + ladoTriangulo1
// + "cm, "
// + ladoTriangulo2
// + "cm, "
// + baseTriangulo
// + "cm"
// );

// const alturaTriangulo = 5.5;
// console.log("La altura del triangulo es de: " + alturaTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
    // console.log("El perimetro del triangulo es de: " + perimetroTriangulo + "cm");
}

function areaTriangulo(base, altura){
    return (base * altura) /2;
    // console.log("El area del triangulo es de: " + areaTriangulo + "cm²");
}
function alturaTriangulo(lado1, lado2, base){
    if(lado1 === lado2 && lado1 != base){
        alert("Corresponde a un traingulo isoceles");
        const altura = Math.sqrt(lado1**2 -base**2 / 4);
        alert(altura);
    }else{
        alert("No corresponde a un traingulo isósceles");
    }
}
console.groupEnd();

// Código del circulo
console.group("Circulos");

//Radio
// const radioCirculo = 4;
// console.log("El radio del ciruclo es: " + radioCirculo + "cm");

//Diametro
function diametroCirculo(radio){
    return radio * 2;
    // console.log("El diametro del ciruclo es de: " + diametroCirculo + "cm");
}

//PI
const PI = Math.PI;
// console.log("PI es igual a : " + PI);

//Circunferencia
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
    // console.log("El perimetro del ciruclo es: " + perimetroCirculo + "cm");
}

//Área
function areaCirculo(radio){
    return (radio * radio) * PI
    // (radioCirculo * radioCirculo) *PI;
    // console.log("El área del ciruclo es: " + areaCirculo + "cm");
}

console.groupEnd();

//Interacción con el HTML

// Funciones para interactuar con botones en la calculadora del cuadrado

function calcularPerimetroCuadrado(){
    let input = document.getElementById("inputCuadrado");
    let value = input.value;

    let perimetro = perimetroCuadrado(value);
    alert(perimetro);
}
function calcularAreaCuadrado(){
    let input = document.getElementById("inputCuadrado");
    let value = input.value;

    let area = areaCuadrado(value);
    alert(area);
}
// Funciones para interactuar con botones en la calculadora del triangulo

function calcularPerimetroTriangulo(){
    let inputLado1 = document.getElementById("ladoTriangulo1");
    let inputLado2 = document.getElementById("ladoTriangulo2");
    let inputBase = document.getElementById("baseTriangulo");

    let value1 = parseFloat(inputLado1.value);
    let value2 = parseFloat(inputLado2.value);
    let value3 = parseFloat(inputBase.value);

    let perimetro = perimetroTriangulo(value1, value2, value3);
    alert(perimetro);

}

function calcularAreaTriangulo(){
    let inputBase = document.getElementById("baseTriangulo");
    let inputAltura = document.getElementById("alturaTriangulo");

    let valueBase = parseFloat(inputBase.value);
    let valueAltura = parseFloat(inputAltura.value);

    let area = areaTriangulo(valueBase, valueAltura);
    alert(area);
}

function calcularAlturaTriangulo(){
    let inputLado1 = document.getElementById("ladoTriangulo1");
    let inputLado2 = document.getElementById("ladoTriangulo2");
    let inputBase = document.getElementById("baseTriangulo");

    let value1 = parseFloat(inputLado1.value);
    let value2 = parseFloat(inputLado2.value);
    let value3 = parseFloat(inputBase.value);

    let altura = alturaTriangulo(value1, value2, value3);
    alert(altura);
}
//Funciones para interactuar con botones de la calculadora del circulo

function calcularCircunferenciaCirculo(){
    let input = document.getElementById("inputCirculo");
    let value = parseFloat(input.value);

    let circunferencia = perimetroCirculo(value);
    alert(circunferencia);
}

function calcularAreaCirculo(){
    let input = document.getElementById("inputCirculo");
    let value = parseFloat(input.value);

    let area = areaCirculo(value);
    alert(area)
}
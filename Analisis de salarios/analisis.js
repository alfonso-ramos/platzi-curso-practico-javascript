// Helpers
function esPar(numero){
    return (numero % 2 === 0);
}
function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}
// Calculadora de medianas
function medianaSalarios(lista){
    const mitad = parseInt(lista.length /  2);

    if(esPar(lista.length)){
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([personaMitad1, personaMitad2]);
        return mediana;
    } else {
        const personaMitad = lista[mitad]
        return personaMitad
    }
}
// Calculando la mediana general
const salariosMx = mexico.map(
    function (persona) {
        return persona.salary;
    }
);

const salariosMxSorted = salariosMx.sort(
    function (salaryA, salaryB){
        return salaryA - salaryB;
    }
);

const medianaGeneralMx = medianaSalarios(salariosMxSorted);
// Mediana del top 10%
const spliceStart = (salariosMxSorted.length * 90) / 100;
const spliceCount = salariosMxSorted.length - spliceStart;

const salariosMxTop10 = salariosMxSorted.splice(
    spliceStart,
    spliceCount
)

const medianaTop10Mx = medianaSalarios(salariosMxTop10);

console.log({
    medianaGeneralMx,
    medianaTop10Mx
});
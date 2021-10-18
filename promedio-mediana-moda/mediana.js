function calcularMediaAritmetica(lista){

    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}


const lista = [
    100,
    200,
    300,
    5000000
]

let mitadLista = parseInt(lista.length / 2);

let mediana;

function esPar(numero){
    if(numero % 2 === 0){
        return true;
    } else {
        return false;
    }
}

if (esPar(lista.length)) {
    const elemento1 = lista[mitadLista - 1];
    const elemento2 = lista[mitadLista];

    const promedioElemento1y2 = calcularMediaAritmetica([
        elemento1, elemento2
    ])

    mediana = promedioElemento1y2
} else {
    mediana = lista[mitadLista];

}
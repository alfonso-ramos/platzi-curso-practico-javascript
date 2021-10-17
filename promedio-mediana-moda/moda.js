const lista1 = [
    1,
    4,
    5,
    6,
    3,
    2,
    5,
    7,
    3,
    2,
    2,
    4,
    1,
    3,
    7,
    2,
    3,
    2,
    1,
    2,
    1
];

const lista1Count = {};

lista1.map(
    function(elemento){
        if (lista1Count [elemento]){
            lista1Count[elemento] += 1;
        }else {
            lista1Count[elemento] = 1;
        }
    }
);

const lista1Array = Object.entries(lista1Count).sort(
    function(valorAcumulado, nuevoValor) {
        valorAcumulado - nuevoValor
    }
);
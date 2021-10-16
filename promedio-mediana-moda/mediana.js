const lista1 = [
    100,
    200,
    300,
    400,
    700,
    5000000
]

let mitadLista = lista1.length / 2;

let mediana;

function esPar(numero){
    if(numero % 2 === 0){
        return true;
    } else {
        return false;
    }
}

if (esPar(lista1.length)) {

} else {
    mediana = lista1[mitadLista];

}
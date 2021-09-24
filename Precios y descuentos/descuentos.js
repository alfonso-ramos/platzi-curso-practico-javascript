// let precioOriginal = 120;
// let descuento = 18;

function calcularPrecioConDescuento(precio, descuento){
    let porcentajePrecioConDescuento = 100 - descuento;
    let precioFinalConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioFinalConDescuento;
}

function onClickButtonPriceDiscount(){
    let inputPrice = document.getElementById("inputPrice");
    let priceValue = inputPrice.value;

    let inputDiscount = document.getElementById("inputDiscount");
    let discountValue = inputDiscount.value;

    let precioFinalConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

    let resultPrice = document.getElementById("resultPrice");
    resultPrice.innerText = "El precio final con descuento son $" + precioFinalConDescuento;

}
//El 100 representa solo el 100% de cualquier precio, no representa el precio


// console.log(
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioFinalConDescuento
// );


// let precioOriginal = 120;
// let descuento = 18;

function calcularPrecioConDescuento(precio, descuento){
    let porcentajePrecioConDescuento = 100 - descuento;
    let precioFinalConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioFinalConDescuento;
}

// Implementacion de cupones

// Lista de cupones

const cupones = [
    {
        name: "Ponchido",
        discount: 10,
    },
    {
        name: "Descuento15",
        discount: 15,
    },
    {
        name:"Hola_Mundo",
        discount: 100,
    }
]

const inputCupon = document.getElementById("inputCupon");
const cuponValue = inputCupon.value;


function onClickButtonPriceDiscount(){
    let inputPrice = document.getElementById("inputPrice");
    let priceValue = inputPrice.value;

    let inputCupon = document.getElementById("inputCupon");
    let cuponValue = inputCupon.value;

    const isCouponValueValid = function(coupon)
    {
        return coupon.name === cuponValue;
    };
    const userCupoun = cupones.find(isCouponValueValid);
    if(!userCupoun){
        alert("El cupon " + cuponValue + " no es valido");
    } else {
        const descuento = userCupoun.discount;

        let precioFinalConDescuento = calcularPrecioConDescuento(priceValue, descuento);

        let resultPrice = document.getElementById("resultPrice");
        resultPrice.innerText = "El precio final con descuento son $" + precioFinalConDescuento;
    }



}
//El 100 representa solo el 100% de cualquier precio, no representa el precio


// console.log(
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioFinalConDescuento
// );


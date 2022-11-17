let compra = document.querySelector("#input1");
let descuento = document.querySelector("#input2");
let boton = document.querySelector(".Button");
let resultado = document.querySelector(".resultado");

boton.addEventListener("click", calcularDescuento);

function calcularDescuento(){
    let price = Number(compra.value);
    let discount = Number(descuento.value);

    console.log({
        price,
        discount
    });

    /*Si ingresa un valor de descuento mayor a 100% o negativo o ingresa el precio de un producto negativo o en 0 dara error*/

    if(price <= 0 || discount > 100 || discount <= 0){
        return resultado.textContent = `Ingrese los datos correctos porfavor`
    }

    let calculo = (price * (100 - discount)) / 100;
    resultado.textContent = `Tu compra con descuento tiene un valor de $ ${calculo} !!!`
}



/* Logica de cupones */

let priceCupon = document.querySelector("#montoCompra");
let cupon20 = document.querySelector("#coupon20");
let cupon25 = document.querySelector("#coupon25");
let cupon30 = document.querySelector("#coupon30");
let calcularCupon = document.querySelector("#calculatePriceBtn");
let resultadoDCupon = document.querySelector("#descuentoConCupon")

calcularCupon.addEventListener("click",calcularOferta)


function calcularOferta(){

    /*Si el cupon esta seleccionado da true si no da false */
    let cupon1 = cupon20.checked;
    let cupon2 = cupon25.checked;
    let cupon3 = cupon30.checked;

    if(cupon1){

        let priceWithoutCupon = Number(priceCupon.value);
        let discountCoupon = 20;

        let calculo = (priceWithoutCupon * (100 - discountCoupon)) / 100;

        resultadoDCupon.textContent = `Su compra con el cupon de descuento de ${discountCoupon}% da un total de $ ${calculo}!!!`;
        return
    }

    else if(cupon2){

        let priceWithoutCupon = Number(priceCupon.value);
        let discountCoupon = 25;

        let calculo = (priceWithoutCupon * (100 - discountCoupon)) / 100;

        resultadoDCupon.textContent = `Su compra con el cupon de descuento de ${discountCoupon}% da un total de $ ${calculo}!!!`;
        return
    }

    else if(cupon3){

        let priceWithoutCupon = Number(priceCupon.value);
        let discountCoupon = 30;

        let calculo = (priceWithoutCupon * (100 - discountCoupon)) / 100;

        resultadoDCupon.textContent = `Su compra con el cupon de descuento de ${discountCoupon}% da un total de $ ${calculo}!!!`;
        return
    }
}
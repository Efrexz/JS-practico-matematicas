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
    let priceWithoutCupon = Number(priceCupon.value);
    let discountCoupon;

    
    
    /*Se declaran las variables afuera del if para poder llamarla luego y en cada if inicializo discountCoupon ya que esta declarada arriba */

    if(cupon1){
        discountCoupon = 20;
    }

    else if(cupon2){
        discountCoupon = 25;
    }

    else if(cupon3){
        discountCoupon = 30;
    }

    let calculo = (priceWithoutCupon * (100 - discountCoupon)) / 100;

        resultadoDCupon.textContent = `Su compra con el cupon de descuento de ${discountCoupon}% da un total de $ ${calculo}!!!`;
}



/* Codigos de cupones con arrays */



/*Llamamos todos los elementos html*/
let PriceCupon = document.querySelector("#priceTotal");
let discountCode = document.querySelector("#codeCoupon");
let btnCuponCode = document.querySelector("#calcularDescuentoCupon");
let rCuponCode = document.querySelector("#descuentoCupon");

btnCuponCode.addEventListener("click", calcularCodigoDescuento);



/*Se crea le array y se le añaden varios objetos para el ejercicio*/

let couponsList = [];

couponsList.push({
    name: "Efrexz20",
    discountAmount: 20
})
couponsList.push({
    name: "Efrexz30",
    discountAmount: 30
})
couponsList.push({
    name: "Efrexz40",
    discountAmount: 40
})


function calcularCodigoDescuento(){
    
    let amountEntered = Number(PriceCupon.value);/*Valor que ingresa el usuario*/
    let codeEntered = discountCode.value;/*Codigo ingresado por el usuario*/
    let discountCouponWihtCode;

        /*Encontramos el primer elemento que coincida y este devuelve un objeto. Si usaramos el filter devolveria un array junto con el objeto lo cual al momento de pasarlo por el if tomaria el array vacion como true pero si ingresamos con [0]. Lo tomaria como undefined osea falso jeje*/
    let couponSelector = couponsList.find(function (cupon) {
        return cupon.name == codeEntered;
    })

    /*al couponSelector devolver un objeto lo toma como true si la variable trae algun objeto o algun dato*/
    if(couponSelector){
        discountCouponWihtCode = couponSelector.discountAmount;
    }

    else{
        rCuponCode.textContent = `El cupon ingresado es incorrecto`;
        return;
    }


    let calculoCupon = (amountEntered * (100 - discountCouponWihtCode)) / 100;

    rCuponCode.textContent = `Su compra con el cupon de descuento ${couponSelector.name} de ${discountCouponWihtCode}% da un total de $ ${calculoCupon}!!!`;

}
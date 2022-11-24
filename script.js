/* Calculando Promedio*/

let sueldos = [250,350,500,800,120,300];


function promedioSueldos(arr){
/*Sumar todos los sueldos del array y dividirlo entra la cantidad de sueldos*/

    let sueldosSumados = 0;

    for(let i = 0; i < arr.length; i++){
        sueldosSumados += arr[i];
    }

    let promedio = sueldosSumados / arr.length;

    console.log({sueldosSumados, promedio});
}

/* Calcular promedio con metodo .reduce*/


function promedioSueldoReduce(arr){

    const promedioSueldos = arr.reduce(function(valorAcumulado,valorActual){ return valorActual + valorAcumulado;})

    const promedioSueldosTotal = promedioSueldos / arr.length;

    console.log(promedioSueldosTotal);
}


/*Calcular la medina*/


function isPar(lista){
    return (lista.length % 2 == 0);
}

function calcularMediana(arr){
    
    /*Ordenamos la lista primero*/
    const listaOrdenada = arr.sort((a, b) => a - b);
    
    let esListaPar = isPar(arr);

    if(esListaPar){

        let indexValor1 = Math.floor(listaOrdenada.length / 2) - 1;
        let IndexValor2 = Math.floor(listaOrdenada.length / 2);
        let medianaPar = (listaOrdenada[indexValor1] + listaOrdenada[IndexValor2]) / 2;
        return medianaPar

    }else{
        let indexMedioLista = Math.floor(listaOrdenada.length / 2);
        let medianaImpar = listaOrdenada[indexMedioLista];
        return medianaImpar;
    }
}

/* Calculando la moda */


const productos = [1,2,3,4,5,5,4,1,2,6,6,6,6,6,3,3,3,3,3,3,3];

function calcularModa(lista){
    /*Declaro un objeto para poder agruparlos*/
    let productosEnLista = {};

    for(let i = 0; i < lista.length; i++){ 
        /*si el elemento existe en el objeto, se le va a incrementar el contador de dicho objeto, si no, se crea la propiedad elemento en el objeto y se le asigna un 1.*/
        /*Si ya existe en el objeto se suma 1 mas*/
        if(productosEnLista[lista[i]]){
            productosEnLista[lista[i]] += 1;
        }/*Si no esta creado se crea en 1*/
        else{
            productosEnLista[lista[i]] = 1;
        }

    }
    /*Se vuelve a convertir el objeto en array para poder ordenarlos por el que tenga mas cantidad con el metodo sort segun su posicion 1 en el array*/
    const productosSumados = Object.entries(productosEnLista);

    const productosOrdenados = productosSumados.sort(function(a,b){
        return a[1] - b[1];
    })

    /*Se busca el ultimo producto en el array que mas se repite y se devuelve su vslor*/
    const productoMasRepetido =  productosOrdenados[productosOrdenados.length - 1];

    return productoMasRepetido[0];
}



/*Promedio ponderado */


const notes = [
    {
        course: "Educación Física",
        note: 10,
        credit: 2,
    },
    {
        course: "Programación",
        note: 8,
        credit: 5,
    },
    {
        course: "Finanzas personales",
        note: 7,
        credit: 5,
    },
];


const notesWithCredit = notes.map(function (noteObject) {
    return noteObject.note * noteObject.credit;
});


const sumOfNotesWithCredits = notesWithCredit.reduce(function(valorAcumulado,valorActual){
    return valorAcumulado + valorActual;
})

const credits = notes.map(function(nota){
    return nota.credit;
})

const creditosSumados = credits.reduce(function(valorAcumulado,valorActual){
    return valorAcumulado + valorActual;
})


const promedioPonderado = sumOfNotesWithCredits / creditosSumados;

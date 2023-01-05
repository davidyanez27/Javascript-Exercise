
array = []
nan=false;



function llenarArreglo() {
    dato = Number(document.getElementById("valor1").value);
    
   array.push(dato)
   console.log(array.length)
}

function mostrarArreglo() {
    for (let i = 0; i < array.length; i++) {
        if( isNaN(array[i])){
            array = []
            return
        }
        
    }
    // array[length-1]==NaN? console.log(0):console.log(array.sort())
    console.log(array)
}




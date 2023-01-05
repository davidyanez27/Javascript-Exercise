array = []

function llenarArreglo() {
    dato = Number(document.getElementById("valor1").value);
  
    array.push(dato);

}

function mostrarArreglo() {
    array = array.sort(function(a, b){return a - b})
    espera = 0
    total = 0

    for (i = 0; i < array.length; i++) {
    
        i ==0? espera = array[0]: espera =  espera +array[i]+2
        total +=espera
        
    }

    console.log(total)

    
}


// [4,3,2] 
// 2=2
// 2+3+2=7
// 2+3+2+4=13

// [3,2,5,10,9] 

// 2=2
// 2+2+3=7
// 2+2+3+2+5=14
// 2+2+3+2+5+2+9=25
// 2+2+3+2+5+2+9+2+10=37



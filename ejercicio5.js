array = []

function llenarArreglo() {
    dato = Number(document.getElementById("valor1").value);
  
    array.push(dato);

}

function mostrarArreglo() {
    array = array.sort()
    espera= array[0];
    for (let i = 1; i < array.length; i++) {
        espera += espera +array[i]+2

        
    }

    console.log(array)
    console.log(espera)

    
}



function multiplicacion(a, b){

    a = Number(document.getElementById("valor1").value);
    b = Number(document.getElementById("valor2").value);
    var i = 0;
    var result=0;

    while (i<b) {
        result=parseFloat(result)+parseFloat(a)
        i++;
    }
    document.getElementById('resultado').value = result;
    console.log(result)

}

// function multiplicacion(a, b){
//     alert('Programa para multiplicar dos numeros ')
//     a = prompt('Ingrese el primer numero: ');
//     b = prompt('Ingrese el segundo numero: ');
//     var i = 0;
//     var result=0;

//     while (i<b) {
//         result=parseFloat(result)+parseFloat(a)
//         i++;
//     }

//     document.write(`el resultado de la multiplicacion ${a}x${b} es: ${result}`)

// }


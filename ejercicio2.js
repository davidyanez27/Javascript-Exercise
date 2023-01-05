function arreglos() {
  a = Number(document.getElementById("valor1").value);

  array = [];
  posicion = -1;

  for (let i = 0; i < 15; i++) {
    aleatorio =Math.floor(Math.random() * 10); 


    if(a==aleatorio){
        array += i;
        posicion =i;
    }

    
  }
   if (array.length >0) {
    for (let i = 0; i < array.length; i++) {
        console.log(`El numero ${a} se encuentra repetido en la posicion ${array[i]}`)
        
    }
    return;
   }
  posicion ==-1? console.log("No se encontro el numero"):console.log("el numero se encuenta unicamente en la posicion "+ posicion)

  
}

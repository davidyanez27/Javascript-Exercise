function dados() {
  document.getElementById("valor1").value = Math.floor(Math.random() * 6);
  document.getElementById("valor2").value = Math.floor(Math.random() * 6);



  contador = 0;
  i=0;

  resultado = Math.floor(Math.random() * 6) + Math.floor(Math.random() * 6);
  console.log(resultado)

  while (i < 36000) {
    a = Math.floor(Math.random() * 6);
    b = Math.floor(Math.random() * 6);

    a+b == resultado? contador++:i++;
  }

  console.log(`el numero ${resultado} se repitio ${contador}`);

}

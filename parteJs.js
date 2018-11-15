var fred;

var trollButton =document.getElementById("boton1");

var contador = 0;


function movimiento(){

 trollButton.classList.toggle("movimiento")

  contador = contador + 1;

 }

function maybe1() {

alert("HURRY UP!!!");

fred=confirm("COME ON!!!!");

  alert(fred);

 if(fred == true){

   alert("I love pizza.")

 } else {

     alert("I love pizza.");

   }

}


function maybe2() {

alert("HURRY UP!!!");

fred=confirm("DO IT!!!!");

  alert(fred);

 if(fred == true){

   alert("What do you think about koalas? ");

 } else {

     alert("I mean, it's not the correct button.");

   }

}



function maybe3() {

alert("seriously?");

fred=confirm("are you still trying?");

  alert(fred);

 if(fred == true){

   alert("Actually, the correct button doesn't exist")

 } else {

     alert("Actually, the correct button doesn't exist");

   }

}
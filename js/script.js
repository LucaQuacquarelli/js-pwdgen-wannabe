var yourName = prompt("Qual'è il tuo Nome?")
console.log(yourName);

var yourSurname = prompt("Qual'è il tuo Cognome?")
console.log(yourSurname);

var color = prompt("Qual'è il tuo Colore preferito?")
console.log(color);

document.getElementById("pwd").innerHTML = ( yourName + yourSurname + color + "21" )

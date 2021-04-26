var yourName = prompt("Qual'è il tuo Nome?")
console.log(yourName);

var yourSurname = prompt("Qual'è il tuo Cognome?")
console.log(yourSurname);

var color = prompt("Qual'è il tuo Colore preferito?")
console.log(color);

var password = yourName + yourSurname + color + "21"
console.log(password);

document.getElementById("pwd").innerHTML = yourName + yourSurname + color + "21"

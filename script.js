let nome, cognome, colore, n1, n2;

let prompttext = "Inserisci il tuo nome";
do {
    nome = prompt(prompttext);
    prompttext = "Errore. Inserisci di nuovo il tuo nome";
} while (!nome);
prompttext = "Inserisci il tuo cognome";
do {
    cognome = prompt(prompttext);
    prompttext = "Errore. Inserisci di nuovo il tuo cognome";
} while (!cognome);
prompttext = "Inserisci il tuo colore preferito";
do {
    colore = prompt(prompttext);
    prompttext = "Errore. Inserisci di nuovo il tuo colore preferito";
} while (!colore);
prompttext = "Inserisci un numero";
do {
    n1 = parseInt(prompt(prompttext));
    prompttext = "Non è un numero. Riprova";
} while (isNaN(n1) || n1 === 0);
prompttext = "Inserisci un altro numero";
do {
    n2 = parseInt(prompt(prompttext));
    prompttext = "Non è un numero. Riprova";
} while (isNaN(n2) || n2 === 0);

let numeri = n1/n2;
let passw = nome + cognome + colore + numeri;

console.log(passw);

document.getElementById("password").innerHTML=passw;
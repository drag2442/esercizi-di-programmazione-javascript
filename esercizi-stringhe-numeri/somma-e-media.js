/*
  Somma e media
  Scrivi un programma che dati 5 numeri restituisca in output la somma e la media.

  Esempio:
    Input: a = 1, b = 2, c = 3, d = 4, e = 5
    Output: somma = 15, media = 3

  http://www.imparareaprogrammare.it
*/
var a = prompt("Inserisci il primo numero");
var b = prompt("Inserisci il secondo numero");
var c = prompt("Inserisci il terzo numero");
var d = prompt("Inserisci il quarto numero");
var e = prompt("Inserisci il quinto numero");
var somma = a+b+c+d+e;
var media = somma/5;
console.log(somma, media);

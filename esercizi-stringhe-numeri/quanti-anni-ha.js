/*
  Quanti anni ha?
  Scrivi un programma che dato l'anno corrente e un anno di nascita determini:
    - l'età della persona,
    - quanti anni sono necessari per raggiungere i 100
  Restituisca in output entrambi i risultati.

  Esempio:
    Input: anno corrente = 2018, anno di nascita = 1991
    Ouput: età = 27, anni mancanti = 73

  http://www.imparareaprogrammare.it
*/
var annoc = prompt("Inserisci l'anno corrente");
var annon = prompt("Inserisci il tuo anno di nascita");
var età = annoc - annon;
console.log("età =", età, "anni mancanti ai 100 =", 100-età);

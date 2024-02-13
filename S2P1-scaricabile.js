//ESERCIZI SUGLI IF: 

/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

//  let n1 = 18;
//  let n2 = 18;

//  if (n1 > n2) {
//    console.log("Il numero maggiore è:", n1);
//  } else if (n1 < n2) {
//    console.log("Il numero maggiore è:", n2);
//  } else if (n1 == n2) {
//    console.log("I numeri sono uguali");
//  }

/*
ESERCIZIO 2
  Crea un blocco condizionale if/else per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// let num = 0;

// if (num < 5) {
//   console.log("Tiny");
// } else if (num < 10) {
//   console.log("Small");
// } else if (num < 15) {
//   console.log("Medium");
// } else if (num < 20) {
//   console.log("Large");
// } else {
//   console.log("Huge");
// }

//ESERCIZI SUI CICLI: 

/* ESERCIZIO 3
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8 (suggerimento: ripassa l'uso di "continue").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

//  for (let i = 0; i <= 10; i++) {
//    if (i == 3 || i ==  8) {
//      continue;
//    } else console.log(i);
//  }

/* ESERCIZIO 11
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// for (let i = 0; i <= 15; i++) {
//   if (i % 2 == 0) {
//     console.log(i + " è Pari");
//   } else console.log(i + " è Dispari");
// }

//ESERCIZI EXTRA NON OBBLIGATORI

/* ESERCIZIO EXTRA 1
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

  // let n1 = 0;
  // let n2 = 8;

  // if (n1 == 8 || n2 == 8 || n1 + n2 == 8 || n1 - n2 == 8) {
  //  if (n1 == 8) {
  //    console.log("Il primo numero è uguale a 8");
  //    if (n2 == 0) {
  //     console.log("La somma dei due numeri è 8");
  //     console.log("La differenza dei due numeri è 8");
  //    }
  //  } else if (n2 == 8) {
  //    console.log("Il secondo numero è uguale a 8");
  //    if (n1 == 0) {
  //     console.log("La somma dei due numeri è 8");
  //     console.log("La differenza dei due numeri è 8");
  //    }
  //  } else if (n1 + n2 == 8) {
  //    console.log("La somma dei due numeri è 8");
  //  } else {
  //    console.log("La differenza dei due numeri è 8");
  //  }
  // } else console.log("Nessuno dei casi è vero");

/* ESERCIZIO EXTRA 2
Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

//  let totalShoppingCart = 50;

//  if (totalShoppingCart > 50) {
//    console.log("Il costo totale è " + totalShoppingCart);
//    console.log("Hai diritto alla spedizione gratuita");
//  } else {
//    totalShoppingCart = totalShoppingCart + 10;
//    console.log("Il costo totale è " + totalShoppingCart);
//  }

/* ESERCIZIO EXTRA 3
  Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando, usando l'algoritmo del codice precedente, se le spedizioni siano gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

//  let totalShoppingCart = 10;
//  let blackFridaySales = totalShoppingCart * 0.2;

//  totalShoppingCart = totalShoppingCart - blackFridaySales;

//  if (totalShoppingCart > 50) {
//    console.log("Il costo totale è " + totalShoppingCart + " euro");
//    console.log("Lo sconto è di " + blackFridaySales + " euro")
//    console.log("Hai diritto alla spedizione gratuita");
//  } else {
//    totalShoppingCart = totalShoppingCart + 10;
//    console.log("Il costo totale è " + totalShoppingCart + " euro");
//    console.log("Lo sconto è di " + blackFridaySales + " euro")
//  }

/*  ESERCIZIO EXTRA 4
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile booleana chiamata isMale.
  Es. se isMale e' vero, il valore di gender deve essere "male"
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// let gender;
// let isMale = false ? gender = "male" : gender = "female";

// console.log(gender);

/* ESERCIZIO EXTRA 5
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3 (operatore modulo!), stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

//  for (let i = 1; i <= 100; i++) {   
//    if (i % 3 == 0 && i % 5 == 0) {
//      console.log("FizzBuzz");
//    } else if (i % 5 == 0) {
//      console.log ("Buzz");
//    } else if (i % 3 == 0) {
//      console.log("Fizz");
//    } else console.log(i);
//  }

// chiedo l'email all'utente
var emailUtente = prompt('Inserisci la tua email');
var passwordUtente = prompt('Inserisci la tua password');

var utente = [emailUtente,passwordUtente];
// dichiaro una lista di email salvate nel database;
var listaUtenti = [['fabio@gmail.com','attila90'], ['ottavio@gmail.com','orso85'], ['alfredo@gmail.com','mentialterne88']];
// dichiaro variabile per sapere se ho trovato o no la email dell'utente
// potevo anche evitare,vabbé
var trovatoUtente = false;

for (var i = 0; (i < listaUtenti.length) && (trovatoUtente == false); i++) {
    var utenteCorrente = listaUtenti[i];
    if(arraysEqual(utente, utenteCorrente)) {
    trovatoUtente = true;
    }
}

if(trovatoUtente == true) {

// Gioco Dadi
    var numeroUtente = parseInt(prompt('Ok sei in lista:puoi giocare. Inserisci un numero tra 1 e 6'));
    console.log('numero utente: ' + numeroUtente);

    if(isNaN(numeroUtente) == false && numeroUtente >= 1 && numeroUtente <= 6) {

        var numeroPc = Math.floor(Math.random() * 6) + 1;
        console.log('numero pc: ' + numeroPc);

        if(numeroUtente > numeroPc) {
            alert('Hai vinto!');
        } else if (numeroUtente == numeroPc) {
            alert('Hai pareggiato');
        } else {
            alert('Hai perso!');
        }

    } else {
        alert('hai inserito un valore non valido');
    }

} else {
    alert('Non puoi accedere');
}


function arraysEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length !== b.length) return false;

  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

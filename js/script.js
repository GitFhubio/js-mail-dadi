// chiedo l'email all'utente
var emailUtente = prompt('Inserisci la tua email');
// dichiaro una lista di email salvate nel database;
var listaEmail = ['fabio@gmail.com', 'ottavio@gmail.com', 'alfredo@gmail.com'];
// dichiaro variabile per sapere se ho trovato o no la email dell'utente
var trovataEmail = false;

for (var i = 0; (i < listaEmail.length) && (trovataEmail == false); i++) {
    var emailCorrente = listaEmail[i];

    if(emailUtente == emailCorrente) {
    trovataEmail = true;
    }
}

if(trovataEmail == true) {

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

// NOTA 1)In bonus ho fatto chiedere anche la password,
// in extra ho messo la risposta nell'output colorato diversamente a seconda dell'esito
// NOTA 2) il for poteva essere evitato facendo if (listaEmail.indexOf(emailUtente) !== -1 )

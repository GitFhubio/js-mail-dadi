// chiedo l'email all'utente
var emailUtente = prompt('Inserisci la tua email');
// dichiaro  una lista di email
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
  alert('Sei in lista, puoi entrare');

  // Gioco Dadi
  var output=document.getElementById('output');
  var numeroUtente = parseInt(prompt('Inserisci un numero tra 1 e 6'));
  var text;
  console.log('numero utente: ' + numeroUtente);

  if(isNaN(numeroUtente) == false && numeroUtente >= 1 && numeroUtente <= 6) {

    var numeroPc = Math.floor(Math.random() * 6) + 1;
    console.log('numero pc: ' + numeroPc);

    if(numeroUtente > numeroPc) {
      text='Hai vinto';
      output.className='success';
    } else if (numeroUtente == numeroPc) {
      text='Hai pareggiato';
      output.className='draw';
    } else {
      text='Hai perso';
      output.className='fail';
    }
    output.innerText=text;
  } else {
    alert('hai inserito un valore non valido');
  }

} else {
  alert('Non puoi accedere');
}

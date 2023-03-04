/*
    TESTO DELLA VERIFICA DI TPSIT
    Viene richiesto di modificare i file html e js in modo tale da:

    - visualizzare DINAMICAMENTE gli utenti nell'aside (barra laterale sinistra) 
        # ogni utente è un nuovo LI
        # ogni utente in base al genere dovrà essere raffigurato tramite l'icona corretta
        # sotto l'icona dovrà essere rafficurato il nome con l'iniziale maiuscola del nome e l'iniziale maiuscola del cognome
        # il cognome dovrà essere troncato e seguito da . (come si vede nel file originale)

    - aggiornare automaticamente l'header della sezione nel momento in cui clicco su un utente dell'aside
        # modificare l'icona
        # modificare il nome e cognome
        # aggiornare l'ora a proprio piacimento (PER IL MASSIMO DEL PUNTEGGIO: creare un array parallelo con le ore)
    
    - aggiungere DINAMICAMENTE I MESSAGGI
        #Non importa se si utilizza ut1 per l'utente 0 o ut2, l'importante è la coerenza

    - PER IL 10. Gestite il bottone di invio in basso 
        #se il campo di testo non è vuoto aggiungere il messaggio in coda agli altri del personaggio selezionato

*/
let input = document.getElementById("testo");
let mes = document.getElementById("messaggi");
let n=0;


caricaut();
n= cambiaheader(1);
cambiaMessaggi(1);


function caricaut(){
    let ul = document.getElementById("listUtenti");

    for(let i=1; i<nomeUtenti.length;i++){
        if(genereUt[i]=='m')
            ul.innerHTML += "<li onclick='n = cambiaheader(" + i +")'><div class='material-symbols-outlined icone'>face</div></li>" + nomeUtenti[i] + " " + cognomeUtenti[i][0] + ".";
        else
            ul.innerHTML += "<li onclick='n =cambiaheader(" + i +")'><div class='material-symbols-outlined icone'>face_3</div></li>" + nomeUtenti[i] + " " + cognomeUtenti[i][0] + ".";

    }
    
    
}

function cambiaheader(i){
    let header = document.getElementById("headerUt");

    if(genereUt[i]=='m')
        header.innerHTML = "<div class='material-symbols-outlined icone'>face</div><div><div id='divNome'>" + nomeUtenti[i] + " " + cognomeUtenti[i] + "</div><div id='divUltimoMes'>Oggi alle "+ ore[i-1] +"</div></div>";
    else
        header.innerHTML = "<div class='material-symbols-outlined icone'>face_3</div><div><div id='divNome'>" + nomeUtenti[i] + " " + cognomeUtenti[i] + "</div><div id='divUltimoMes'>Oggi alle "+ ore[i-1] +"</div></div>";
    cambiaMessaggi(i);

    return i;
    
}

function cambiaMessaggi(i){
    i -= 1;
    mes.innerHTML = "";
    for(let j=0; j<messaggi[i].length;j++){
        if(j%2==0)
            mes.innerHTML += "<article class='mes ut1'> "+ messaggi[i][j] + "</article>";
        else
            mes.innerHTML += "<article class='mes ut2'>"+ messaggi[i][j] + "</article>";
    }
}



function aggiungiMes(testo,n){
    if(testo != ""){
        messaggi[n-1].push(testo);
        cambiaMessaggi(n);
    }

    return messaggi[n];
    
   
}
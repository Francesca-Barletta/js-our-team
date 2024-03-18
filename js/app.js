/*Utilizzando i dati forniti i tabella,
creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni:
nome
ruolo
foto.
ok MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
okMILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, 
ruolo e la stringa della foto
okMILESTONE 2:
Stampare le stesse informazioni su DOM semplicemente come stringhe
okBONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede
DATI:
Wayne Barnett	Founder & CEO	        wayne-barnett-founder-ceo.jpg
Angela Caroll	Chief Editor	        angela-caroll-chief-editor.jpg
Walter Gordon	Office Manager	        walter-gordon-office-manager.jpg
Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
Scott Estrada	Developer	            scott-estrada-developer.jpg
Barbara Ramos	Graphic Designer	    barbara-ramos-graphic-designer.jpg*/

//devo creare un array di oggetti con per ognuno le info: nome, ruolo, foto
//dato che devo farlo più volte posso creare una funzione che accetta come parametri (nome, ruolo e foto)
//in modo da caricare solo il nome dell'oggetto/persona e invocare la funzione per creare l'oggetto
//creo un array vuoto
//con la funzione creo gli oggetti che mi servono 
//pusho gli oggetti nell'array

function createObject(memberName, memberRole, memberPicture) {
    const persona = {
        name: memberName,
        role: memberRole,
        photo: memberPicture
    }
    return persona
}

const ourTeam = [];

const wayne = createObject('Wayne Barret', 'Founder & CEO', 'wayne-barnett-founder-ceo.jpg');
const angelaC = createObject('Angela Caroll', 'Chief Editor', 'angela-caroll-chief-editor.jpg');
const walter = createObject('Walter Gordon', 'Office Manager', 'walter-gordon-office-manager.jpg');
const angelaL = createObject('Angela Lopez', 'Social Media Manager', 'angela-lopez-social-media-manager.jpg');
const scott = createObject('Scott Estrada', 'Developer', 'scott-estrada-developer.jpg');
const barbara = createObject('Barbara Ramos', 'Graphic Designer', 'barbara-ramos-graphic-designer.jpg');
//console.log(wayne);
ourTeam.push(wayne, angelaC, walter, angelaL, scott, barbara);
console.log(ourTeam);

//creo un elemento sul dom paragrafo

const divElement = document.getElementById('main');
//posso ciclare l'array ourTem con e dirgli che per ogni oggetto 
//deve mettere nel dom la stringa con le informazioni
for (let i = 0; i < ourTeam.length; i++) {
    const personaString = document.createElement('div');
    personaString.className = 'col-3';
    const singlePerson = ourTeam[i];
    console.log(singlePerson);
    personaString.innerHTML =
    `<div class ="card">
            <img src="./img/${singlePerson.photo}" alt="">
            <div class="card-info">
                <h3>${singlePerson.name}</h3>  
                <p>${singlePerson.role}</p>
            </div>
    </div>`;
    console.log(personaString);
    divElement.append(personaString);

}

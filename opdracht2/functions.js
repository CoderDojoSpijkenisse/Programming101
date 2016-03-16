// Opdracht 2 - Functies/methodes
// ---------------------------------------------------------------

// Spriekbriefje: hoe maak ik een methode
//
// function naamVanJeFunctie() {
//    << hier doe je de stappen van je functie >>	
// }

// Deze functie stuurt een testbericht naar de console.
function testNaarDeConsole() {
	console.log('Dit is een testbericht. Je console is open!');
}

// Deze functie zorgt ervoor dat de nieuwe code wordt geladen door de browser
function laadJavascriptBestand(locatie) {
	window.location.href = '#' + locatie;
	window.location.reload(true);
}

// Schrijf hieronder de functie verdubbel
function verdubbel(x) { return 2*x; }

// 
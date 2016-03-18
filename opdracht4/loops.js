// While loop
// Bereken 1 + 2 + ... + 10
function loopEen() {
	var getal = 1;

	// Bereken hier het getal.

	return getal;
}

var namen = ['Arne', 'Berend', 'Claudia', 'Dirk', 'Emiel', 'Fiona', 'Gerard', 'Henk', 'Ian', 'Joline', 'Karen', 'Leon', 'Marieke', 'Nathan', 'Olivier', 'Paul', 'Quincy', 'Renate', 'Simone', 'Tristan', 'Ulva', 'Vera', 'Werner', 'Xander', 'Yanick', 'Zoe']
// Namen loop
function loopNamen() {

}



// Deze functies zijn nodig op de pagina
// Deze functie zorgt ervoor dat de nieuwe code wordt geladen door de browser
function laadJavascriptBestand(locatie) {
	window.location.href = '#' + locatie;
	window.location.reload(true);
}
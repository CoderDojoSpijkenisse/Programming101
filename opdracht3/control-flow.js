var trein = [false, false, false];

function beugel(kar) {

}

function controleerAlleBeugels(kar) {

}

// Deze functies hoef je niet aan te passen
// ------------------------------------------------------------------------------
function doeBeugelOpen(kar) {
	console.log('Kar ' + kar + ' is open!');
	$("#kar" + kar + "_knop").addClass('btn-danger');
	$("#kar" + kar + "_knop").removeClass('btn-success');
	trein[kar] = !trein[kar];
}
function doeBeugelDicht(kar) {
	console.log('Kar ' + kar + ' is dicht!');
	$("#kar" + kar + "_knop").addClass('btn-success');
	$("#kar" + kar + "_knop").removeClass('btn-danger');
	trein[kar] = !trein[kar];
}
function zetLichtOpGroen() {
	$("#achtbaan_knop").addClass('btn-success');
	$("#achtbaan_knop").removeClass('btn-danger');
}
function zetLichtOpRood() {
	$("#achtbaan_knop").addClass('btn-danger');
	$("#achtbaan_knop").removeClass('btn-success');
}
function stuurTrein() {
	if (controleerAlleBeugels()) {
		console.log('De trein gaat weg!');
	} else {
		console.log('De trein kan nog niet weg!');
	}
}
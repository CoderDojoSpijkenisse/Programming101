// Test verdubbel
function testVerdubbel() {
	if (typeof(verdubbel) === "undefined") { console.error('De functie verdubbel bestaat niet!'); return; }

	var getallen = [1, 2, 4, 21, 0, -2];

	for (var x = 0; x < getallen.length; x++) {
		if (getallen[x] * 2 == verdubbel(getallen[x])) { console.log('Het dubbele van ' + getallen[x] + ' is ' + verdubbel(getallen[x])); } 
		else { console.warn('Het dubbele van ' + getallen[x] + ' is niet ' + verdubbel(getallen[x]) + '. Controleer je oplossing nog eens!'); }
	}
}
function testVerdubbelInput() {
	if (typeof(verdubbel) === "undefined") { console.error('De functie verdubbel bestaat niet!'); return; }

	var getal = document.getElementById("f_verdubbel").value;

	if (getal * 2 == verdubbel(getal)) { console.log('Het dubbele van ' + getal + ' is ' + verdubbel(getal)); } 
	else { console.warn('Het dubbele van ' + getal + ' is niet ' + verdubbel(getal) + '. Controleer je oplossing nog eens!'); }
}

// Test bios
function testBios() {
	if (typeof(prijsKaartjes) === "undefined") { console.error('De functie prijsKaartjes bestaat niet!'); return; }

	var testdata = [[4, 7.00], [2, 10.50], [3, 4.75], [20, 5.00]];
}
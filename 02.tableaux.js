

console.log("02 - Tableaux");

var villes = ["nantes","paris","saint-nazaire","angers","le mans"];

// forEach

villes.forEach(function(ville){
	console.log(ville);
});

// every

var  lettreADansToutesLesVilles = villes.every(function(ville) {
	return ville.indexOf('a') >= 0;
});

console.log("lettreADansToutesLesVilles = " +lettreADansToutesLesVilles);

// some

var auMoinsUneVilleAvecUnTiret = villes.some(function(ville){
	return ville.indexOf('-') >= 0;
});

console.log("auMoinsUneVilleAvecUnTiret = " + auMoinsUneVilleAvecUnTiret);

var villeSansTiretEspace = villes.filter(function(ville){
	return ville.indexOf(' ') < 0 & ville.indexOf('-') < 0;
})

console.log("villeSansTiretEspace = [" + villeSansTiretEspace + "]");

// Chainer les fonctions

villesMajusculesSeTerminantParS = villes.filter(function(ville){
	return ville.indexOf('s') == ville.length-1;
})

for (i in villesMajusculesSeTerminantParS) {
	villesMajusculesSeTerminantParS[i] = villesMajusculesSeTerminantParS[i].toUpperCase();
}

console.log("villesMajusculesSeTerminantParS = [" + villesMajusculesSeTerminantParS + "]");


console.log("03 - Programmation Orientée Objet");

// Fonction constructeur 

function Personne(nom, prenom, pseudo){
	this.nom = nom;
	this.prenom = prenom;
	this.pseudo = pseudo;
	this.getNomComplet = function(){
		return this.nom + " " + this.prenom + " " + this.pseudo;
	}
}

var jules = new Personne("LEMAIRE", "Jules", "jules77");
var paul  = new Personne("LEMAIRE", "Paul", "paul44");

function AfficherPersonne(Personne){
	console.log(Personne.nom);
	console.log(Personne.prenom);
	console.log(Personne.pseudo);
	console.log(Personne.getNomComplet() + "\n");
}

console.log("--- Affichage de l'objet jules ---");
AfficherPersonne(jules);
console.log("--- Affichage de l'objet paul ---");
AfficherPersonne(paul);

// Modifier un objet

console.log("--- Modification de l'objet jules ---");
jules.pseudo= "jules44";
console.log(jules.getNomComplet() + '\n');

// Ajouter une propriété à Personne

console.log("--- Test de l'ajout de la propriété age ---");
console.log(jules.age);

Personne.prototype.age;
console.log(jules.age);
jules.age = 30;
console.log(jules.age + '\n');

// Ajouter une méthode à Personne
Personne.prototype.getInitiales = function(){
	return this.prenom.charAt("0") + this.nom.charAt(0);
}

console.log("--- Affichage des initiales de l'objet jules ---");
console.log(jules.getInitiales() + '\n');

// Objet sans fonction constructeur

var robert = new Object();
robert.prenom = "Robert";
robert.nom = "LEPREFET";
robert.pseudo = "robert77";

robert.getNomComplet = function(){
	return robert.nom + " " + robert.prenom + " " + robert.pseudo;
}

console.log("--- Affichage de l'objet robert ---");
AfficherPersonne(robert);

// Héritage via une fonction constructeur

function Client(nom, prenom, pseudo, numeroClient){
	Personne.call(this, nom, prenom, pseudo);
	this.numeroClient = numeroClient;
	this.getInfos = function() {
		return this.numeroClient + " " + this.nom + " " + this.prenom;
	}
}

var steve = new Client("LUCAS", "Steve", "steve44", "A01");
console.log("--- Affichage de l'objet steve ---");
AfficherPersonne(steve);

console.log("--- Affichage du numéro client de l'objet steve ---");
console.log(steve.numeroClient + '\n');

console.log("--- Affichage de la fonction getInfos de l'objet steve ---");
console.log(steve.getInfos());
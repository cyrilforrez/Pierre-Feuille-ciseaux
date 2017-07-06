//-------------------------------Declaration of variable----------------------------------------

var Utilisateur;
var Ordinateur ;
var scoreJ = 0;
var scoreO = 0;

//-----------------------------------Main loop---------------------------------------------

while (Math.abs(scoreJ-scoreO)<2) {
	Utilisateur = prompt("Choisissez-vous pierre, feuille, ou ciseaux ?");
	Ordinateur = Math.random();

if (Ordinateur < 0.34) {
	Ordinateur = "pierre";
	} else if(Ordinateur <= 0.67) {
	Ordinateur = "feuille";
} else {
	Ordinateur = "ciseaux";
}


//------------------------------------------Main function---------------------------------------

	var comparer = function(choix1, choix2) {
	    var temp;
	    if (choix1 == choix2) {
	        return "Egalité !";
	    }
	     else if (choix1 == "pierre") {
	        if(choix2 == "ciseaux") {
	            temp = 1;
	            scoreJ++;
	        }
	        else {
	            temp =  0;
	            scoreO++;
	        }
	}
	    else if (choix1 =="feuille") {
	        if (choix2 =="pierre") {
	            temp = 1;
	            scoreJ++;
	        }
	        else {
	            temp = 0;
	            scoreO++;
	        }
	    }
	    else if (choix1 =="ciseaux") {
	        if (choix2 =="feuille") {
	            temp = 1;
	            scoreJ++;
	        }
	        if (choix2 =="pierre") {
	            temp = 0;
	            scoreO++;
	        }
	    }

//-------------------------------------------Score display-----------------------------------------------

	    document.getElementById("score").innerHTML = "Gagné: " + scoreJ + " fois. Perdu: " + scoreO + " fois.";    
	    if (temp == 1) {
	    	return "Vous avez gagné!";
	    }
	    else {
	    	return "Vous avez perdu!";
	    }

		
	}
	alert("Ordinateur: "+Ordinateur +"."+" "+ "Vous: "+Utilisateur +".");
	alert(comparer(Utilisateur,Ordinateur));
	
}
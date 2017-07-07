//-------------------------------Declaration of variable----------------------------------------

var Player;
var Computer;
var scoreP = 0;
var scoreC = 0;

//-----------------------------------Main loop---------------------------------------------

Player = prompt("Veuillez entrer votre nom!");

	document.getElementById("compteur").innerHTML = Player +": "+ scoreP +" "+"-"+" "+"Computer:" +" "+ scoreC;    
	    

	

	


//------------------------------------------Main function---------------------------------------

	function comparer(choix) {
	    var temp;
		
		Computer = Math.random();
	    if (Computer < 0.34) {
			Computer = "pierre";
		} else if(Computer <= 0.67) {
			Computer = "feuille";
		} else {
			Computer = "ciseaux";
		}

	    if (choix == Computer) {
	        return "Egalité !";
	    }
	     else if (choix == "pierre") {
	        if(Computer == "ciseaux") {
	            temp = 1;
	            scoreP++;
	        }
	        else {
	            temp =  0;
	            scoreC++;
	        }
	}
	    else if (choix =="feuille") {
	        if (Computer =="pierre") {
	            temp = 1;
	            scoreP++;
	        }
	        else {
	            temp = 0;
	            scoreC++;
	        }
	    }
	    else if (choix =="ciseaux") {
	        if (Computer =="feuille") {
	            temp = 1;
	            scoreP++;
	        }
	        if (Computer =="pierre") {
	            temp = 0;
	            scoreC++;
	        }
	    }

	    console.log(choix,Computer); 
	} 
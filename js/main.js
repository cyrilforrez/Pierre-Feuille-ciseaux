//-------------------------------Declaration of variable----------------------------------------

var Player;
var Computer;
var scoreP = 0;
var scoreC = 0;
var temp;
var image1 = document.getElementById('ciseaux');
var image2 = document.getElementById('pierre');
var image3 = document.getElementById('feuille');
var image4 = document.getElementById('scissors');
var image5 = document.getElementById('stone');
var image6 = document.getElementById('leaf');

//-----------------------------------prompt name---------------------------------------------

Player = prompt("Veuillez entrer votre nom!");

document.getElementById("compteur").innerHTML = Player + ": " + scoreP + " " + "-" + " " + "Computer:" + " " + scoreC;



//------------------------------------------Main function---------------------------------------

function comparer(choix) {



    Computer = Math.random();
    if (Computer <= 0.34) {
        Computer = "pierre";
    } else if (Computer <= 0.67) {
        Computer = "feuille";
    } else {
        Computer = "ciseaux";
    }

    image1.onclick = function() {
        image2.style.display = 'none';
        image3.style.display = 'none';

        if (Computer == "pierre") {
            image4.style.display = 'none';
            image6.style.display = 'none';
        } else if (Computer == "ciseaux") {
            image5.style.display = 'none';
            image6.style.display = 'none';
        } else {
            image4.style.display = 'none';
            image5.style.display = 'none';
        }
    };

    image2.onclick = function() {
        image1.style.display = 'none';
        image3.style.display = 'none';

        if (Computer == "pierre") {
            image4.style.display = 'none';
            image6.style.display = 'none';
        } else if (Computer == "ciseaux") {
            image5.style.display = 'none';
            image6.style.display = 'none';
        } else {
            image4.style.display = 'none';
            image5.style.display = 'none';
        }
    };

    image3.onclick = function() {
        image1.style.display = 'none';
        image2.style.display = 'none';

        if (Computer == "pierre") {
            image4.style.display = 'none';
            image6.style.display = 'none';
        } else if (Computer == "ciseaux") {
            image5.style.display = 'none';
            image6.style.display = 'none';
        } else {
            image4.style.display = 'none';
            image5.style.display = 'none';
        }
    };


    if (choix == Computer) {
        return "Egalité !";
    } else if (choix == "pierre") {
        if (Computer == "ciseaux") {
            temp = 1;
            scoreP++;
        } else {
            temp = 0;
            scoreC++;
        }
    } else if (choix == "feuille") {
        if (Computer == "pierre") {
            temp = 1;
            scoreP++;
        } else {
            temp = 0;
            scoreC++;
        }
    } else if (choix == "ciseaux") {
        if (Computer == "feuille") {
            temp = 1;
            scoreP++;
        }
        if (Computer == "pierre") {
            temp = 0;
            scoreC++;
        }
    }

    document.getElementById("compteur").innerHTML = Player + ": " + scoreP + " " + "-" + " " + "Computer:" + " " + scoreC;

}

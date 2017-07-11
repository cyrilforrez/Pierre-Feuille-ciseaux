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
document.getElementById("score").innerHTML = Player + ": " + scoreP + " " + "-" + " " + "C:" + " " + scoreC;



//------------------------------------------Main function---------------------------------------

function comparer(choix) {



    Computer = Math.random(); //------------Random select of the computer
    if (Computer <= 0.34) {
        Computer = "pierre";
    } else if (Computer <= 0.67) {
        Computer = "feuille";
    } else {
        Computer = "ciseaux";
    }

    if (choix == "ciseaux") {
        image2.style.display = 'none'; //-----------Hide images not select
        image3.style.display = 'none'; //-----------Hide images not select
    } else if (choix == "pierre") {
        image1.style.display = 'none'; //-----------Hide images not select
        image3.style.display = 'none'; //-----------Hide images not select
    } else {
        image1.style.display = 'none'; //-----------Hide images not select
        image2.style.display = 'none'; //-----------Hide images not select
    }

    if (Computer == "pierre") {
        image4.style.display = 'none'; //-----------Hide images not select
        image6.style.display = 'none'; //-----------Hide images not select
    } else if (Computer == "ciseaux") {
        image5.style.display = 'none'; //-----------Hide images not select
        image6.style.display = 'none'; //-----------Hide images not select
    } else {
        image4.style.display = 'none'; //-----------Hide images not select
        image5.style.display = 'none'; //-----------Hide images not select
    }

    //------------------------------------------Compares the different choices-------------------------------------
    if (choix == Computer) {

        alert("Egalité !");
        //----------------------------------------------Poster image--------------------------------------------------
        image1.style.display = '';
        image2.style.display = '';
        image3.style.display = '';
        image4.style.display = '';
        image5.style.display = '';
        image6.style.display = '';


    } else if (choix == "pierre") {
        if (Computer == "ciseaux") {
            temp = 1;
            scoreP++;
            //------------------------------------Launches animation------------------------------------------------------
            document.getElementById("player").style.animation = "mymove 3s";
            document.getElementById("player").style.zIndex = "1";
            document.getElementById("player").style.animationFillMode = "forwards";
            alert("Vous avez gagné!");
            document.getElementById("player").style.animationFillMode = "backwards";
            //----------------------------------------------Poster image--------------------------------------------------
            image1.style.display = '';
            image2.style.display = '';
            image3.style.display = '';
            image4.style.display = '';
            image5.style.display = '';
            image6.style.display = '';

        } else {
            temp = 0;
            scoreC++;
            //------------------------------------Launches animation------------------------------------------------------
            document.getElementById("computer").style.animation = "mymove2 3s";
            document.getElementById("computer").style.animationFillMode = "forwards";
            alert("Vous avez perdu!");
            document.getElementById("computer").style.animationFillMode = "backwards";
            //----------------------------------------------Poster image--------------------------------------------------
            image1.style.display = '';
            image2.style.display = '';
            image3.style.display = '';
            image4.style.display = '';
            image5.style.display = '';
            image6.style.display = '';
        }
    } else if (choix == "feuille") {
        if (Computer == "pierre") {
            temp = 1;
            scoreP++;
            //------------------------------------Launches animation------------------------------------------------------
            document.getElementById("player").style.animation = "mymove 3s";
            document.getElementById("player").style.zIndex = "1";
            document.getElementById("player").style.animationFillMode = "forwards";
            alert("Vous avez gagné!");
            document.getElementById("player").style.animationFillMode = "backwards";
            //----------------------------------------------Poster image--------------------------------------------------
            image1.style.display = '';
            image2.style.display = '';
            image3.style.display = '';
            image4.style.display = '';
            image5.style.display = '';
            image6.style.display = '';
        } else {
            temp = 0;
            scoreC++;
            //------------------------------------Launches animation------------------------------------------------------
            document.getElementById("computer").style.animation = "mymove2 3s";
            document.getElementById("computer").style.animationFillMode = "forwards";
            alert("Vous avez perdu!");
            document.getElementById("computer").style.animationFillMode = "backwards";
            //----------------------------------------------Poster image--------------------------------------------------
            image1.style.display = '';
            image2.style.display = '';
            image3.style.display = '';
            image4.style.display = '';
            image5.style.display = '';
            image6.style.display = '';

        }
    } else if (choix == "ciseaux") {
        if (Computer == "feuille") {
            temp = 1;
            scoreP++;
            //------------------------------------Launches animation------------------------------------------------------
            document.getElementById("player").style.animation = "mymove 3s";
            document.getElementById("player").style.zIndex = "1";
            document.getElementById("player").style.animationFillMode = "forwards";
            alert("Vous avez gagné!");
            document.getElementById("player").style.animationFillMode = "backwards";
            //----------------------------------------------Poster image--------------------------------------------------
            image1.style.display = '';
            image2.style.display = '';
            image3.style.display = '';
            image4.style.display = '';
            image5.style.display = '';
            image6.style.display = '';
        }
        if (Computer == "pierre") {
            temp = 0;
            scoreC++;
            //------------------------------------Launches animation------------------------------------------------------
            document.getElementById("computer").style.animation = "mymove2 3s";
            document.getElementById("computer").style.animationFillMode = "forwards";
            alert("Vous avez perdu!");
            document.getElementById("computer").style.animationFillMode = "backwards";
            //----------------------------------------------Poster image--------------------------------------------------
            image1.style.display = '';
            image2.style.display = '';
            image3.style.display = '';
            image4.style.display = '';
            image5.style.display = '';
            image6.style.display = '';
        }
    }

    //---------------------------------------------------Table score-------------------------------------------------
    document.getElementById("compteur").innerHTML = Player + ": " + scoreP + " " + "-" + " " + "Computer" + ":" + " " + scoreC;
    document.getElementById("score").innerHTML = Player + ": " + scoreP + " " + "-" + " " + "C" + ":" + " " + scoreC;

    if ((scoreP) == 3) {
        alert("Vous avez gagné!" + " " + Player + ": " + scoreP + " " + "-" + " " + "Computer" + ":" + " " + scoreC);



        if (confirm = confirm("Voulez vous rejouer?")) { //--------------Output option
            window.location.reload(); //--------------Reload page
        } else {
            document.getElementById("end").style.display = 'block'; //---------Poster page goodbye
            document.getElementById("end").style.zIndex = '1';
        }
    } else if ((scoreC) == 3)  {
        alert("Vous avez perdu!" + " " + Player + ": " + scoreP + " " + "-" + " " + "Computer" + ":" + " " + scoreC);
        if (confirm = confirm("Voulez vous rejouer?")) { //--------------Output option
            window.location.reload(); //---------------Reload page
        } else {
            document.getElementById("end").style.display = 'block'; //-------Poster page goodbye
            document.getElementById("end").style.zIndex = '1';
        }
    }

}

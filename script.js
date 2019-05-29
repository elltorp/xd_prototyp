////MENY

window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");

    document.querySelector("header .menu_toggle").addEventListener("click", toggleMenu);


}


function toggleMenu() {
    console.log("toggleMenu");
    document.querySelector("header nav").classList.toggle("active");

    let erAktiv = document.querySelector("header nav").classList.contains("active");

    if (erAktiv == true) {
        document.querySelector("header .menu_toggle").textContent = "X";
    } else {
        document.querySelector("header .menu_toggle").textContent = "☰";
    }
}


//collaps på mina avleveringar
//www.w3schools.com/howto/tryit.asp?filename=tryhow_js_collapsible

//coll är något jag sätter själv för att komma ihåg ordet "collapsible"
var coll = document.getElementsByClassName("collapsible");
var i;

// jag har tre element som ska rullas ut, första uppgiften är nr0 dvs att dokument 3 är nr2. (0,1,2) i är valfri bokstav och kan sättas till vad som helst. Raden nedan säger: om "i är mindre än hela längden "length av innehåll, i detta fall 3 uppgifter, så forsätter den kalla på nästa linje som är en klickfunktion. i++ betyder att den kommer att fortsätta collapsen tills det inte finns fler dokument att visa.
for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");

        //när nästa "syskonelement" blir kallat, det är divs som ligger under varandra i samma klass/div..
        var content = this.nextElementSibling;

        // ..så betyder det...

        //när sidan är loadad så visar content sig som defaultinställningen Block som betyder att innehållet VISAS ( men här är det en förinställning i min css så att diaplayen faktiskt visar att den är på none, iKKE VISES.
        if (content.style.display === "block") {
            content.style.display = "none";

            //annars så kommer den att VISA (block) .content med alla uppgifter så att man ej kan se avleveringarna som ligger i .content eftersom att collapsen och min "i" redan har kallat på alla mina uppgifter genom första steget där i bestämmer att den ska kalla på nästa uppgift till hela lenghten är kallad på.
        } else {
            content.style.display = "block";
        }
    });
}

//slut collaps

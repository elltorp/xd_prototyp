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


var coll = document.getElementsByClassName("collapsible");
var i;

// jag har tre element som ska rullas ut, första uppgiften är nr0 dvs att dokument 3 är nr2. (0,1,2) i är valfri bokstav och kan sättas till vad som helst. Raden nedan säger: om "i är mindre än hela längden "length av innehåll, i detta fall 3 uppgifter, så forsätter den kalla på nästa linje som är en klickfunktion.
for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        //när nästa "syskonelement" blir kallat, det är divs som ligger under varandra i samma klass/div så  säger den...
        var content = this.nextElementSibling;
        //.. om mitt intehåll  inuti  .content är blockerad kommer den att visa den som none ist och ta blockeringen bort.
        if (content.style.display === "block") {
            content.style.display = "none";
            //annars så kommer den att blockera .content med alla uppgifter så att man ej kan se avleveringarna som ligger i .content eftersom att collapsen och min "i" redan har kallat på alla mina uppgifter genom första steget där i bestämmer att den ska kalla på nästa uppgift till hela lenghten är kallad på.
        } else {
            content.style.display = "block";
        }
    });
}

////SLUT PÅ MENY



/*
UPLOAD FILES IN AFLEVERINGAR MÅSTE VI HA?
// Define processing URL and form element
const url = 'process.php'
const form = document.querySelector('form')

// Listen for form submit
form.addEventListener('submit', e => {
    e.preventDefault()

    // ...
})


// Gather files and begin FormData
const files = document.querySelector('[type=file]').files;
const formData = new FormData();
});

// ...
// Append files to files array
for (let i = 0; i < files.length; i++) {
    let file = files[i]

    formData.append('files[]', file)
}

// ...

fetch(url, {
    method: 'POST',
    body: formData,
}).then(response => {
    console.log(response)
})
*/

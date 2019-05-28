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

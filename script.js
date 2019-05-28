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


//UPLOAD FILES IN AFLEVERINGAR
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

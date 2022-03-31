document.getElementById("uprawnienia").addEventListener("click", changeInputsDisability)
const listaObecnosci = document.getElementById("lista_obecnosci");


function changeInputsDisability() {
    const inputs = listaObecnosci.querySelectorAll("input");
    inputs.forEach(el => {
        el.disabled = !el.disabled
    })

    listaObecnosci.classList.contains("disabled") ?
        listaObecnosci.classList = "" : listaObecnosci.classList = "disabled"

}
//Get the button:
mybutton = document.getElementById("myBtn");
// html = document.getElementsByTagName("html")[0];
body = document.getElementsByTagName("body")[0];

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

mybutton.addEventListener('click', animate)
function animate() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

function animatePerson(el) {
    el.preventDefault;
    const personTop = document.getElementById(el).getBoundingClientRect().top;

    window.scrollTo({ top: personTop + window.scrollY - 60, behavior: 'smooth' });
};

listaObecnosci.addEventListener('submit', function (event) {
    event.preventDefault();
    let acceptedInfo = document.getElementById("accepted");
    acceptedInfo.style.display = "block"
})

function goto(el) {
    window.open(el, "_self")
}
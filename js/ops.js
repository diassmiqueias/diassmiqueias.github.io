// JavaScript source code
function Mudarestado(el) {
    var display = document.getElementById(el).style.display;
    if (display == "none")
        document.getElementById(el).style.display = 'block';
    else
        document.getElementById(el).style.display = 'none';
}

function clic() {
    alert("clicou");
    document.getElementById("navbarTogglerDemo01").style.display = "block";
}
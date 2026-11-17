
function calcularJubilacion() {
    let edad = Number(prompt("¿Cuántos años tenés?"));
    let genero = prompt("¿Sos mujer u hombre?").toLowerCase();

    if ((genero == "mujer" && edad >= 60) || (genero == "hombre" && edad >= 65)) {
        alert("¡Estás en edad de jubilarte!");
    } else {
        alert("Todavía no estás en edad de jubilarte.");
    }
}

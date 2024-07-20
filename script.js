"use strict";
let estudiasteJavascript = true;
if (estudiasteJavascript) {
    console.log("Puedes seguir con este curso");
}
else {
    console.log("no puedes seguir");
}
let interMiami = 11;
let fcDallas = 11;
function jugar(equipo1, equipo2) {
    if (equipo1 > equipo2)
        console.log("Gana Inter Miami");
    if (equipo1 == equipo2)
        console.log("Empatan");
    if (equipo1 < equipo2)
        console.log("Gana FC Dallas");
}
jugar(interMiami, fcDallas);
let dev = {
    nombre: "Claudio",
    tecnologia: ["HTML", "JS", "CSS"],
    tomarMate: true
};
function enviarCurriculum(programador) {
    console.log(`Este cv es de ${programador.nombre}`);
}
enviarCurriculum(dev);
class Pelicula {
    proyectarEnCine() {
        console.log(`La pelicula ${this.nombre} esta siendo proyectada`);
    }
    constructor(nombre, protagonistas, actores) {
        this.nombre = nombre,
            this.protagonistas = protagonistas,
            this.actores = actores;
    }
    ;
}
const movie = new Pelicula("Barbie", ["Barbie", "Ken"], ["Margot", "Ryan"]);
console.log(movie);
class Sorteo {
    constructor(nombre) {
        this.nombre = nombre;
    }
    setTicket(ticket) {
        this.ticket = ticket;
    }
    getTicket() {
        return this.ticket;
    }
    sortear() {
        return `Para ${this.nombre} el ticket es ${this.ticket}`;
    }
}
let sorteo = new Sorteo('Claudio');
sorteo.setTicket(7);
console.log(sorteo.sortear());
let sorteo1 = new Sorteo('Susana');
sorteo1.setTicket("C7");
console.log(sorteo1.sortear());

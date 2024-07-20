let estudiasteJavascript: boolean = true

if(estudiasteJavascript){
    console.log("Puedes seguir con este curso")
}else{
    console.log("no puedes seguir")
}


let interMiami: number = 11
let fcDallas: number = 11

function jugar(equipo1: number, equipo2: number):void{
    if(equipo1 > equipo2) console.log("Gana Inter Miami")
    if(equipo1 == equipo2) console.log("Empatan")
    if(equipo1 < equipo2) console.log("Gana FC Dallas")
}

jugar(interMiami, fcDallas)

/* type Programador = {
    nombre: string,
    tecnologia: string[],
    tomarMate: boolean | null
} */

interface Programador{
    nombre: string,
    tecnologia: string[],
    tomarMate?: boolean | null
}


let dev: Programador = {
    nombre: "Claudio",
    tecnologia: ["HTML", "JS", "CSS"],
    tomarMate: true
}

function enviarCurriculum ( programador : Programador){
    console.log(`Este cv es de ${programador.nombre}`)
}

enviarCurriculum(dev)

class Pelicula {
    nombre?: string;
    protagonistas?: string[];
    actores?: string[];

    proyectarEnCine(){
        console.log(`La pelicula ${this.nombre} esta siendo proyectada`)
    }

    constructor(nombre: string, protagonistas: string[], actores: string[]){
        this.nombre = nombre,
        this.protagonistas = protagonistas,
        this.actores = actores
    };
}

const movie = new Pelicula("Barbie", ["Barbie","Ken"], ["Margot", "Ryan"])

console.log(movie)


class Sorteo<T>{
    
    private ticket?: T;

    constructor(
        private nombre: string
    ){}

    setTicket(ticket:T){
        this.ticket = ticket
    }

    getTicket(){
        return this.ticket
    }

    public sortear(): string{
        return `Para ${this.nombre} el ticket es ${this.ticket}`
    }
}

let sorteo = new Sorteo<number>('Claudio')
sorteo.setTicket(7)
console.log(sorteo.sortear())

let sorteo1 = new Sorteo<string>('Susana')
sorteo1.setTicket("C7")
console.log(sorteo1.sortear())
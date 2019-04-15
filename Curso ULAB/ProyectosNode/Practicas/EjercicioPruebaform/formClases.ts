class Series {
    private nombre: string;
    private capitulos: number;

    constructor(nombre: string, capitulos: number) {
        this.nombre = nombre;
        this.capitulos = capitulos;
    }

    getNombre() {
        return this.nombre;
    }

    setNombre(nombre: string) {
        return this.nombre = nombre;
    }

    getCaps() {
        return this.capitulos;
    }

    setCaps(capitulos: number) {
        this.capitulos = capitulos;
    }

}

var lista2:Series[] = [];

function guarda() {
    let nomSerie: string = (<HTMLInputElement>document.getElementById("titulo")).value.toString();
    let numCaps:string = (<HTMLInputElement>document.getElementById("NumCap")).value;

    console.log(nomSerie);

    let serieNueva = new Series(nomSerie, +numCaps);

    lista2.push(serieNueva);

    lista2.forEach(element => {
        console.log(element)

    });


}

function listar() {
    let modo = (<HTMLInputElement>document.getElementById("modo")).value;
    let divResp = document.getElementById("respuesta");


    if (modo == "lista") {

        lista2.forEach(element => {
            let p = document.createElement("p");
            let t2 = document.createTextNode("Esta es la serie " + element.getNombre());
            p.appendChild(t2);
            divResp.appendChild(p);

        });
    }

    if (modo == "tabla") {

        lista2.forEach(element => {
            let p = document.createElement("p");
            let t2 = document.createTextNode("Esta es la serie " + element.getNombre());
            p.appendChild(t2);
            divResp.appendChild(p);

        });

    }

}



window.onload = function () {
    var boton = (<HTMLInputElement>document.getElementById("boton"));
    boton.addEventListener("click", guarda);

    var modo = (<HTMLInputElement>document.getElementById("modo"));
    modo.addEventListener("change", listar);


}
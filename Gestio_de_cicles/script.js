import { Cicle, Modul } from './ciclos.js';

let llistatCicles = [];

// La función afegirCicle ahora crea instancias de Cicle
function afegirCicle() {
    let nom = document.getElementById("cicle_nom").value;
    let categoria = document.getElementById("cicle_categoria").value;
    let numAlumnes = document.getElementById("cicle_alumnes").value;
    let abreviatura = document.getElementById("cicle_abr").value;

    let cicle = new Cicle(nom, categoria, numAlumnes, abreviatura);
    console.log(cicle);

    if (document.getElementById("editCicle").value === "-1") {
        llistatCicles.push(cicle);
    } else {
        // Aquí iría la lógica para editar un cicle existente
        // Por simplicidad, esta parte se omite
    }

    actualitzarSelector();
    printLlistat(llistatCicles);
    netejarFormularis();
    document.getElementById("editCicle").value = -1;
}
console.log(afegirCicle())

// La función afegirModul ahora crea instancias de Modul y las añade a los cicles
function afegirModul() {
    let cicleIndex = document.getElementById("modul_cicle").value;
    let modul_nom = document.getElementById("modul_nom").value;
    let modul_num = document.getElementById("modul_num").value;
    let modul_hores = document.getElementById("modul_hores").value;

    let modul = new Modul(llistatCicles[cicleIndex].nom, modul_nom, modul_num, modul_hores);
    llistatCicles[cicleIndex].afegirModul(modul);

    console.log(modul);
    printLlistat(llistatCicles);
    netejarFormularis();
}
console.log(afegirModul())

// Las demás funciones pueden permanecer igual, con algunas adaptaciones menores si es necesario para trabajar con instancias de las clases.

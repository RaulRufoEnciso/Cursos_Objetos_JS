// Cicle.js
export class Cicle {
    constructor(nom, categoria, numAlumnes, abreviatura) {
        this.nom = nom;
        this.categoria = categoria;
        this.numAlumnes = numAlumnes;
        this.abreviatura = abreviatura;
        this.numEdicions = 0;
        this.dataUltimaEdicio = null;
        this.moduls = [];
    }

    setNumEdicions() {
        this.numEdicions++;
        this.dataUltimaEdicio = new Date();
    }

    afegirModul(modul) {
        this.moduls.push(modul);
    }

    toString() {
        let infoCicle = `${this.abreviatura.toUpperCase()}. ${this.nom}\nCategoria: ${this.categoria}\nNúmero d'Alumnes: ${this.numAlumnes}\nEdicions: ${this.numEdicions}\nData Última Edició: ${this.dataUltimaEdicio}\nMòduls:\n`;
        this.moduls.sort((a, b) => a.num - b.num).forEach(modul => {
            infoCicle += modul.toString() + '\n';
        });
        return infoCicle;
    }

    calculHores() {
        return this.moduls.reduce((total, modul) => total + modul.hores, 0);
    }
}

export class Modul {
    constructor(cicle, nom, num, hores) {
        this.cicle = cicle;
        this.nom = nom;
        this.num = num;
        this.hores = hores;
    }

    toString() {
        return `MP${this.num}. ${this.nom} (${this.hores}h)`;
    }
}

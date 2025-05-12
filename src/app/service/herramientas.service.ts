import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})

export class HerramientasService {

private herramientas:Herramienta[] = [
    {
        "nombre": "Scratch",
        "descripcion": "Scratch es una plataforma de programación visual desarrollada por el MIT. Permite a los niños crear historias interactivas, juegos y animaciones arrastrando bloques de código. Fomenta la creatividad, la lógica secuencial y la resolución de problemas de forma lúdica.",
        "url": "https://scratch.mit.edu"
    },
    {
        "nombre": "Code.org",
        "descripcion": "Code.org es una organización sin fines de lucro que ofrece recursos y cursos gratuitos para enseñar ciencias de la computación. A través de actividades interactivas y tutoriales, los niños aprenden a programar conceptos básicos como bucles, condicionales y eventos, mientras desarrollan habilidades de razonamiento lógico.",
        "url": "https://code.org"
    },
    {
        "nombre": "Tynker",
        "descripcion": "Tynker es una plataforma educativa que enseña programación mediante juegos, retos y proyectos creativos. Ofrece lecciones adaptadas por edad, incluyendo desde bloques visuales hasta lenguajes como Python y JavaScript. Estimula el pensamiento estructurado, la resolución de problemas y el aprendizaje autónomo.",
        "url": "https://www.tynker.com"
    },
    {
        "nombre": "Blockly",
        "descripcion": "Blockly es una librería de código abierto desarrollada por Google que permite programar con bloques visuales. Se utiliza en múltiples plataformas educativas y permite a los niños aprender lógica de programación sin necesidad de escribir código. Es ideal para introducir conceptos como funciones, variables y lógica booleana.",
        "url": "https://developers.google.com/blockly"
    },
    {
        "nombre": "Lightbot",
        "descripcion": "Lightbot es un juego educativo en el que los niños deben programar un robot para resolver puzzles. A través de la mecánica del juego, aprenden fundamentos como secuencias, repeticiones, funciones y depuración, ayudándolos a pensar de forma lógica y estructurada mientras se divierten.",
        "url": "https://lightbot.com"
    }
]


    constructor() { 
        console.log("Servicio listo");
    }

    getHerramientas():Herramienta[]{
        return this.herramientas;
    }
    
}

export interface Herramienta{
    nombre: string;
    descripcion: string;
    url: string;
}
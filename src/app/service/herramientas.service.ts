import { Injectable } from '@angular/core';


@Injectable({providedIn:'root'})

export class HerramientasService {
    
    private herramientas:Herramienta[] = [  // se crea un arreglo para almacenar el conetenido
        {
            "nombre": "Scratch",
            "descripcion": "Scratch es una plataforma de programación visual desarrollada por el MIT. Permite a los niños crear historias interactivas, juegos y animaciones arrastrando bloques de código. Fomenta la creatividad, la lógica secuencial y la resolución de problemas de forma lúdica.",
            "url": "https://scratch.mit.edu",
            "img": "assets/img/herramientas/scratch.jpg"
        },
        {
            "nombre": "Code.org",
            "descripcion": "Code.org es una organización sin fines de lucro que ofrece recursos y cursos gratuitos para enseñar ciencias de la computación. A través de actividades interactivas y tutoriales, los niños aprenden a programar conceptos básicos como bucles, condicionales y eventos, mientras desarrollan habilidades de razonamiento lógico.",
            "url": "https://code.org",
            "img": "assets/img/herramientas/codeorg.png"
        },
        {
            "nombre": "Tynker",
            "descripcion": "Tynker es una plataforma educativa que enseña programación mediante juegos, retos y proyectos creativos. Ofrece lecciones adaptadas por edad, incluyendo desde bloques visuales hasta lenguajes como Python y JavaScript. Estimula el pensamiento estructurado, la resolución de problemas y el aprendizaje autónomo.",
            "url": "https://www.tynker.com",
            "img": "assets/img/herramientas/tynker.png"
        },
        {
            "nombre": "Blockly",
            "descripcion": "Blockly es una librería de código abierto desarrollada por Google que permite programar con bloques visuales. Se utiliza en múltiples plataformas educativas y permite a los niños aprender lógica de programación sin necesidad de escribir código. Es ideal para introducir conceptos como funciones, variables y lógica booleana.",
            "url": "https://developers.google.com/blockly",
            "img": "assets/img/herramientas/Google-Blockly.png"
        },
        {
            "nombre": "Lightbot",
            "descripcion": "Lightbot es un juego educativo en el que los niños deben programar un robot para resolver puzzles. A través de la mecánica del juego, aprenden fundamentos como secuencias, repeticiones, funciones y depuración, ayudándolos a pensar de forma lógica y estructurada mientras se divierten.",
            "url": "https://lightbot.com",
            "img": "assets/img/herramientas/lightbot.jpg"
        },
        {
            "nombre": "Khan Academy",
            "descripcion": "Khan Academy ofrece lecciones interactivas para aprender fundamentos de ciencias de la computación y programación. Utiliza ejercicios prácticos y explicaciones visuales para enseñar conceptos como variables, bucles, funciones y estructuras lógicas, fomentando el pensamiento computacional de manera progresiva.",
            "url": "https://www.khanacademy.org/computing/computer-science",
            "img": "assets/img/herramientas/khanAcademy.png"
        }
    ]
    
    
        constructor() { 
            console.log("Servicio listo");
        }
    
        getHerramientas():Herramienta[]{ //se crea un get para obtener
            return this.herramientas;
        }
    
}
export interface Herramienta{ //se genera una inteface para restringir caracteristicas
    nombre: string;
    descripcion: string;
    url: string;
    img: string;
}
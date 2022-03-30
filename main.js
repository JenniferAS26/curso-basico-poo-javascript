// Creacion objeto litera
const natalia = {
    name: "Natalia",
    age: 20,
    cursosAprobados: [
        "Curso Definitivo de HTML y CSS",
        "Curso Practico de HTML y CSS"
    ],
    aprobarCurso(nuevoCursito) {
        this.cursosAprobados.push(nuevoCursito)
    }
};
// Hacer que natalia apruebe otro curso
natalia.cursosAprobados.push("Curso de Responsive Design");
natalia.age += 1;
natalia.aprobarCurso("Curso de CSS Grid");

// Prototipo
function Student(name, age, cursosAprobados) {
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
    // this.aprobarCurso = function (nuevoCursito) {
    //     this.cursosAprobados.push(nuevoCursito);
    // }
}
Student.prototype.aprobarCurso = function (nuevoCursito) {
    this.cursosAprobados.push(nuevoCursito);
}

const juanita = new Student(
    "Juanita Alejandra",
    15,
    [
        "Curso de Introduccion a la produccion de Videojuegos",
        "Curso de creacion de personajes"
    ]
);

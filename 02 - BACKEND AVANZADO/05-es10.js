/* ---------------------------------- trim ---------------------------------- */
const email = '              pedro@mail.com                  '
console.log(email.trim());


/* ---------------------------------- flat ---------------------------------- */

const array = [
    1, 
    2, 
    3, 
    [
        4, 
        [
            5, 
            6
        ]
    ], 
    7, 
    8, 
    [
        9, 
        10
    ]
];
console.log(array.flat(2));


const estudiantes = [
    { nombre: 'Juan', calificaciones: [7, 8, 9, [1, 5], [1, 6]] },
    { nombre: 'Ana', calificaciones: [6, 7, 8, [2, 4], [2, 5]] },
    { nombre: 'Pedro', calificaciones: [8, 9, 10, [3, 7], [3, 8]] },
]

const califAnidadas = estudiantes.map(estudiante => estudiante.calificaciones);

const calif = califAnidadas.flat(2);

console.log(calif)
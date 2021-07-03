//Calcular los dias que llevas
function getAgeInDays(age) {
  return age * 365;
}

function create(name, age) {
  var ageInDays = getAgeInDays(age);
  var message =
    "My Name is " + name + " and I was born over " + ageInDays + " days ago!";
  return message;
}

var resultado = getAgeInDays(20);
var resultado2 = create("Genesis", 20);

console.log(resultado);
console.log(resultado2);
console.log("")

//CALCULAR EL PORCIENTO
let numberOfMentors = 38;
let numberOfStudents = 112;
let porcentajeS = Math.round(numberOfStudents * 100) / 150;
let porcentajeM = Math.round(numberOfMentors * 100) / 150;


console.log(" Percentage of students:  " + porcentajeS + "%");
console.log(" Percentage of mentors: " + porcentajeM + "%");
console.log("")

//EJERCICIO. HACER LA ORACION EN MAYUSCULA

const saludo = "Fiesta sorpresa para ";
const saludoLocaleUpperCase = saludo.toLocaleUpperCase('en-US');

var mentor1 = "Daniel!";
var mentor2 = "Irina!";
var mentor3 = "Mimi!";
var mentor4 = "Rob!";
var mentor5 = "Yohannes!";


console.log(saludoLocaleUpperCase + mentor1.toLocaleUpperCase('en-US'));
console.log(saludoLocaleUpperCase + mentor2.toLocaleUpperCase('en-US'));
console.log(saludoLocaleUpperCase + mentor3.toLocaleUpperCase('en-US'));
console.log(saludoLocaleUpperCase + mentor4.toLocaleUpperCase('en-US'));
console.log(saludoLocaleUpperCase + mentor5.toLocaleUpperCase('en-US'));

console.log("")

//
const saludos = "Fiesta sorpresa para ";
const saludosLocaleUpperCase = saludos.toLocaleUpperCase('en-US');

var mentor1 = "Daniel!";
const mentor1LocaleUpperCase = mentor1.toLocaleUpperCase('en-US');

var mentor2 = "Irina!";
const mentor2LocaleUpperCase = mentor2.toLocaleUpperCase('en-US');

var mentor3 = "Mimi!";
const mentor3LocaleUpperCase = mentor3.toLocaleUpperCase('en-US');

var mentor4 = "Rob!";
const mentor4LocaleUpperCase = mentor4.toLocaleUpperCase('en-US');

var mentor5 = "Yohannes!";
const mentor5LocaleUpperCase = mentor5.toLocaleUpperCase('en-US');

console.log(saludosLocaleUpperCase + mentor1LocaleUpperCase);
console.log(saludosLocaleUpperCase + mentor2LocaleUpperCase);
console.log(saludosLocaleUpperCase + mentor3LocaleUpperCase);
console.log(saludosLocaleUpperCase + mentor4LocaleUpperCase);
console.log(saludosLocaleUpperCase + mentor5LocaleUpperCase);

console.log("")





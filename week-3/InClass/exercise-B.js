let class1 = ["Matias", "Leonardo", "Juan", "Maria"];
let class2 = ["Caleb", "Giomar", "Gabriela", "Genesis", "Jaime"];

const total = class1.concat(class2);
const orderGrupo = total.sort();

console.log(orderGrupo);

function totalStudents(students, arr) {
    if (arr.includes(students)) {
        return `${students} is at the class with ${arr.join(", ")}`
    } else {
        return `${students} is not at the class with ${arr.join(", ")}`
    }
}

console.log(totalStudents("George", orderGrupo));

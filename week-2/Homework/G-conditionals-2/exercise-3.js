/*
  Conditionals
  ---------------------------------
  Write a function that checks if a student has passed
  - if the mark is 80 or higher then the grade is "A"
  - if the mark is lower than 80 and greater than 60 then the grade is "B"
  - if the mark is 60 or lower but no lower than 50 then the grade is "C"
  - Otherwise the grade is "F"
*/

function calculateGrade1(grade1) {
  if (grade1 <= 49){
    return "F";
  }
}
  function calculateGrade2(grade2) {
  if (grade2 > 80) {
    return "A";
  }
}

  function calculateGrade3(grade3) {
  if (grade3 > 60 || grade3 < 80) {
    return "B";
  }
}

  function calculateGrade4(grade4) {
  if (grade4 >= 50 || grade4 <= 60) {
    return "C";
  }
    return "F";
}


/* 
DO NOT EDIT BELOW THIS LINE
--------------------------- */
var grade1 = 49;
var grade2 = 90;
var grade3 = 70;
var grade4 = 55;

console.log("'" + grade1 + "': " + calculateGrade1(grade1));
console.log("'" + grade2 + "': " + calculateGrade2(grade2));
console.log("'" + grade3 + "': " + calculateGrade3(grade3));
console.log("'" + grade4 + "': " + calculateGrade4(grade4));

  /* 
  EXPECTED RESULT
  ---------------
  '49': F
  '90': A
  '70': B
  '55': C
  */

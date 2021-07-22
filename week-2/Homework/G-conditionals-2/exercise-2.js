/*
  Conditionals
  ---------------------------------
  Write a function that checks if a student has passed
  - if the grade is less than 50 then return "failed"
  - if 50 or higher then return "passed"

*/

function studentPassed1(grade1) {
  if (grade1 <= 49) {
    return "failed";
  }
 }
function studentPassed2(grade2) {
  if (grade2 >= 50){
     return "passed";
   }
}

function studentPassed3(grade3) {
if (grade3 >= 100) {
    return "passed";
  }
}
/* 
DO NOT EDIT BELOW THIS LINE
--------------------------- */
var grade1 = 49;
var grade2 = 50;
var grade3 = 100;

console.log("'" + grade1 + "': " + studentPassed1(grade1))
console.log("'" + grade2 + "': " + studentPassed2(grade2))
console.log("'" + grade3 + "': " + studentPassed3(grade3))

/* 
EXPECTED RESULT
---------------
'49': failed
'50': passed
'100': passed
*/

let x = 1;

function foo() {
    let y = 1;
    console.log("x" , x);
    console.log("y" , y);
    x = x + 1;
    y = y + 1;
}

foo();
foo();

function getAgeInDays(age) {
    return age * 365;
  }
  
function createGreeting(name, age) {
    const ageInDays = getAgeInDays(age);
    const message =
      "My Name is " + name + " and I was born over " + ageInDays + " days ago!";
    return message;
  }

getAgeInDays();
createGreeting();
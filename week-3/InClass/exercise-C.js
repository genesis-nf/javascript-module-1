function yourFunc(params) {
    
}

function magician(yourFunc) {
    console.log(
      "I am magician! Watch as I mutate an array of strings to your heart's content!"
    );
    const namesArray = [
      "James",
      "Elamin",
      "Ismael",
      "Sanyia",
      "Chris",
      "Antigoni",
    ];
  
    const magicOutput = yourFunc(namesArray);
    return magicOutput;
  }

  function potato(miArray) {
      return miArray.map(name => "Hola " + name)
  }

  console.log(potato)
  
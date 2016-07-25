// Increment by 10
for (var i = 5; i < 120;) {
    // console.log(i);
    i = i + 10;
}

// Derrement by division
for (var j = 4096; j >= 1;) {
    // console.log(j);
    j = j / 2;
}

// Array iteration
var pres = ["George Washington", "John Adams", "Thomas Jefferson"];

for (var k = 0; k < pres.length; k++) {
    console.log("President #" + [k] + " was " +  pres[k]);
}

// Object iteration
var antSpecies = {
  argentine: {},
  army: {},
  bigHeaded: {},
  black: {},
  bull: {},
  carpenter: {},
  crazy: {},
  fire: {},
  glider: {},
  honeyPot: {},
  jackJumper: {}
}

for (var prop in antSpecies) {
    console.log(prop);
}




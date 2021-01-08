// this is the prototype, any methods or proporties added to Pet.prototype will be transferred
// automatiacally to each pet created   . 

function Pet (name) {
    this.name = name,
    this.age = 0,
    this.hunger = 0,
    this.fitness = 10
}

Pet.prototype.growUp = function(years) {
    this.age = this.age + years;
    this.hunger = this.hunger - years*(5);
    this.fitness = this.fitness - years*(3); 
    return 
}

// Buy Rex and look after thim for 1 year.
let rex = new Pet('Rex');
const rexOldYear = 1;
rex.growUp(rexOldYear); 
console.log(rex.age); // Rex is one year old.
console.log(rex.hunger); // hunger = -5
console.log(rex.fitness); //  fintess = 7

// Buy ronda and look after her for 1year.
let ronda = new Pet('Ronda');
const rondaOldYear = 2;
ronda.growUp(rondaOldYear); 
console.log(ronda.age);// Ronda is 2 years old.
console.log(ronda.hunger); // hunger = -10
console.log(ronda.fitness); //  fintess = 4

// Exports
module.exports = {
    Pet,
}

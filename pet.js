// this is the prototype, any methods or proporties added to Pet.prototype will be transferred
// automatiacally to each pet created   . 

function Pet (name) {
    this.name = name
    this.age = 0
}

Pet.prototype.growUp = function(years) {
    return this.age = this.age + years;
}

// Buy Rex and look after thim for 1 year.
let rex = new Pet('Rex');
const rexOld = 1;
rex.growUp(rexOld); // Rex is one year old.
console.log(rex.age)


// Buy ronda and look after her for 1year.
let ronda = new Pet('Ronda');
const rondaOld = 2;
ronda.growUp(rondaOld); // Ronda is 2 years old.
console.log(ronda.age)



// Exports
module.exports = {
    Pet,
}

// this is the prototype, any methods or proporties added to Pet.prototype will be transferred
// automatiacally to each pet created   
function Pet (name) {
    this.name = name,
    this.age = 0,
    this.hunger = 0,
    this.fitness = 10
}

// checks if the pet is still alove
//if the pet's fitness is 0 or less, it should return false.
//if the pet's hunger is 10 or more, it should return false.
//if the pet's age is 30 or more, it should return false.
//otherwise it should return true.
Pet.prototype = {
    get isAlive() {
   if (this.fitness <= 0 || this.hunger >= 10 || this.age >= 30) {
       return false;
   } else {
       return true;
}}}

Pet.prototype.growUp = function(years = 1) {
    if (!this.isAlive) {
        throw  ('Your pet is no longer alive :(');
    }
    this.age = this.age + years;
    this.hunger = this.hunger + years*(5);
    this.fitness = this.fitness - years*(3);
    return
}

const maxFitness = 10;
Pet.prototype.walk = function() {
    if (!this.isAlive) {
        throw ('Your pet is no longer alive :(');
    }
        this.fitness = this.fitness + 4; 
        this.fitness > maxFitness ? this.fitness = maxFitness : this.fitness;
    return 
}

const minHunger = 0;
Pet.prototype.feed = function() {
    if (!this.isAlive) {
        throw  ('Your pet is no longer alive :(');
    }
        this.hunger = this.hunger - 3; 
        this.hunger < minHunger ? this.hunger = minHunger : this.hunger;
        return 
}

// if the pet's fitness is 3 or less, it should return 'I need a walk'.
// if the pet's hunger is 5 or more, it should return 'I am hungry'.
// if both of the above are true, it should return 'I am hungry AND I need a walk'
// if neither of the above are true, it should return 'I feel great!'
Pet.prototype.checkUp = function() {
        if (!this.isAlive) {
        return 'Your pet is no longer alive :('
        }
      if (this.fitness <= 3 && this.hunger >= 5) {
          return 'I am hungry AND I need a walk!';
        } 
       if (this.fitness > 3 && this.hunger < 5) {
          return 'I feel great!';
        } 
       if (this.fitness <= 3) {
          return 'I need a walk!';
        } 
        if (this.hunger >= 5) {
          return 'I am hungry!';
        }   
}

// // Buy Rex and look after thim for 1 year.
// let rex = new Pet('Rex');
// const rexOldYear = 1;
// rex.growUp(rexOldYear); 
// console.log(rex.age); // Rex is one year old.
// console.log(rex.hunger); // hunger = +5
// console.log(rex.fitness); //  fintess = 7
// rex.walk();
// console.log(rex.fitness);
// rex.feed();
// console.log(rex.hunger)

// // Buy ronda and look after her for 1year.
// let ronda = new Pet('Ronda');
// const rondaOldYear = 2;
// ronda.growUp(rondaOldYear); 
// console.log(ronda.age);// Ronda is 2 years old.
// console.log(ronda.hunger); // hunger = +10
// console.log(ronda.fitness); //  fitness = 4
// ronda.walk();
// console.log(ronda.fitness);
// ronda.feed();
// console.log(ronda.hunger)



// Exports
module.exports = {
    Pet,
}

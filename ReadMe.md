Virtual Pet Project - CyprusCodes

This projects is Berke's Virtual Pet exercise for CyprusCodes Fast Track Engineering course. It mainly aims pracitce in Object Oriented Programming in JS.

How to use: 

    1) Function constructor Pet can be used to create a new pet: let myNewPet = new Pet('MyNewPet').

    2) To add a method to the function constoctor i.e. the prototype: Pet.prototype.myNewMethod =      function  () {return //do somethig;}

    3) Pet.prototype.growUp() will grow the age of your pet by 1 year. 

    4) There are two pets in the game: Rex and Ronda. Rex grows 2 human years per 1 human year. Ronda grows 1 human year per 1 human year. Ronda's growUp method comes direcltly from the its parant object, whereas for Rex the growUp method is reassigned. If your new pet grows faster than humans then you should reassign its growUp method as: pet.growUp = function () {this.age += 'pet years per human year'}.

    5) For every pet year, your pet's health is impaired. Fitness decreases by 3 while hunger decreases by 5.

    6) Keeping your pet fit!! WHen you walk the pet by using the walk() prototype function, its fitness will increase by +4. Maximum fitness level a pet can have is +10. 

    7)
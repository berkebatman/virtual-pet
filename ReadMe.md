Virtual Pet Project - CyprusCodes

This projects is Berke's Virtual Pet exercise for CyprusCodes Fast Track Engineering course. It mainly aims pracitce in Object Oriented Programming in JS.

How to use: 

    1) Function constructor Pet can be used to create a new pet: let myNewPet = new Pet('MyNewPet').

    2) To add a method to the function constoctor i.e. the prototype: Pet.prototype.myNewMethod =      function  () {return //do somethig;}

    3) Pet.prototype.growUp() will grow the age of your pet by 1 year. 

    4) There are two pets in the game: Rex and Ronda. Rex grows 2 human years per 1 human year. Ronda grows 1 human year per 1 human year. Ronda's growUp method comes direcltly from the its parant object, whereas for Rex the growUp method is reassigned. If your new pet grows faster than humans then you should reassign its growUp method as: pet.growUp = function () {this.age += 'pet years per human year'}.

    5) For every pet year, your pet's health is impaired. Fitness decreases by 3 while hunger increases by 5. 
    
    GOODNEWS! YOU CAN HELP YOUR PET BE HEALTHIER.
    6) When you walk the pet by using the walk() prototype function, its fitness will increase by +4. Maximum fitness level a pet can have is +10. 

    7) When you feed the pet by using feed() prototype function, its hunger level will decrease by -3. Minumum huger level a pet can have is 0. 

    8) Check your pet's condition by using the checkUp() function. If your pet needs anything, it will tell you. It is programmed as below: 

            if the pet's fitness is 3 or less, it should return 'I need a walk'
            if the pet's hunger is 5 or more, it should return 'I am hungry'
            if both of the above are true, it should return 'I am hungry AND I need a walk'
            if neither of the above are true, it should return 'I feel great!'

    9) Your pet will die if not looked after. isAlive() function will check whether the pet is alive. See conditions below:

            if the pet's fitness is 0 or less, it should return false.
            if the pet's hunger is 10 or more, it should return false.
            if the pet's age is 30 or more, it should return false.
            otherwise it should return true.

        Further notes on isAlive() => we usually want ocbject methods perform an action on the object isAlive() is inherently different from that behaviour. We use 'getter method' to establish this type of objects.
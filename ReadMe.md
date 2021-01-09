Virtual Pet Project - CyprusCodes

This projects is Berke's Virtual Pet exercise for CyprusCodes Fast Track Engineering course. It mainly aims pracitce in Object Oriented Programming in JS.

Pet and its Functionalities:

    1) Function constructor Pet can be used to create a new pet: let myNewPet = new Pet('MyNewPet').

    2) To add a method to the function constoctor i.e. the prototype: Pet.prototype.myNewMethod =  function  () { //do somethig;}

    3) Pet.prototype.growUp(n) will grow the age of your pet by n years. For every pet year grown, your pet's health is impaired. Fitness decreases by 3 while hunger increases by 5. When the growUp method of the pet.prototype has not been passed a variable, it will assume the pet will grow by 1 year by default. 
    
    6) When you walk the pet by using the walk() prototype function, its fitness will increase by +4. Maximum fitness level a pet can have is +10. 

    7) When you feed the pet by using feed() prototype function, its hunger level will decrease by -3. Minumum huger level a pet can have is 0. 

    8) Check your pet's condition by using the checkUp() function. If your pet needs anything, it will tell you. It is programmed as below: 

            if the pet's fitness is 3 or less, it should return 'I need a walk'
            if the pet's hunger is 5 or more, it should return 'I am hungry'
            if both of the above are true, it should return 'I am hungry AND I need a walk'
            if neither of the above are true, it should return 'I feel great!'

    9) Your pet will die if not looked after. isAlive()function will check whether the pet is alive. See conditions below:

            if the pet's fitness is 0 or less, it should return false OR 
            if the pet's hunger is 10 or more, it should return false OR
            if the pet's age is 30 or more, it should return false OR
            otherwise it should return true.

        Further notes on isAlive() => we usually want ocbject methods perform an action on the object isAlive() is inherently different from that behaviour. We use 'getter method' to establish this type of objects.

    10) Added guard clauses: if the pet is dead t   he walk, feed, checkUp functions will return 'You pet is dead :('

    TO ADD: 
    Add a functionality so taht the pet can have children

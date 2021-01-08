/// module-imports (placeholder)
const {Pet} = require("../pet")

describe('constructor', () => {
    it('should be an instance of object', () => {
        expect(new Pet('Fido')).toBeInstanceOf(Object);
    });
});

describe('create a new pet', () => {
    it('should return a pet with a name, age, hunger level(0) and fitness(10)', () => {
        expect(new Pet('Fido')).toEqual({
            name: 'Fido',
            age: 0,
            hunger: 0,
            fitness: 10,
        });
    });
});

describe('growUp', () => {
    it('it should check wheater the age increases', () => {
        let testPet = new Pet('Test Pet');
        testPet.growUp(1);
        expect(testPet.age).toBe(1);
        testPet.growUp(1);
        expect(testPet.age).toBe(2);
    });
});

describe('health impairment with growUp', () => {
    it('it should check whether the pets health impairs when it gets older; age should increase by the number passed', () => {
        let testPet = new Pet('Test Pet')
        testPet.growUp(1)
        expect(testPet.hunger).toBe(5);
        expect(testPet.fitness).toBe(7);
    });
});

describe('walk', () => {
    it('it should check whether fitness increases by 4, with a max of 10', () => {
        let testPet = new Pet('Test Pet');
        testPet.fitness = 5;
        testPet.walk();
        expect(testPet.fitness).toBe(9);
        testPet.fitness = 7;
        testPet.walk();
        expect(testPet.fitness).toBe(10);
        testPet.fitness = 8;
        testPet.walk()
        expect(testPet.fitness).toBe(10);
    });

    it('throws an error if the pet is not alive', () => {
        const pet = new Pet('Fido');
  
        pet.fitness = 0;
  
        expect(() => pet.feed()).toThrow('Your pet is no longer alive :(');
    });
});

describe('feed', () => {
    it('it should check whether hunger decreases by 3, with a min of 0', () => {
        let testPet = new Pet('Test Pet');
        test.hunger = 0
        testPet.feed();
        expect(testPet.hunger).toBe(0);
        test.hunger = 2
        testPet.feed();
        expect(testPet.hunger).toBe(0);
        testPet.hunger = 3
        testPet.feed();
        expect(testPet.hunger).toBe(0);
        testPet.hunger = 8
        testPet.feed();
        expect(testPet.hunger).toBe(5);
    });

    it('throws an error if the pet is not alive', () => {
        const pet = new Pet('Fido');
  
        pet.hunger = 10;
  
        expect(() => pet.feed()).toThrow('Your pet is no longer alive :(');
    });
});

// if the pet's fitness is 3 or less, it should return 'I need a walk'.
// if the pet's hunger is 5 or more, it should return 'I am hungry'.
// if both of the above are true, it should return 'I am hungry AND I need a walk'
// if neither of the above are true, it should return 'I feel great!'
describe('checkUp', () => {
   it('it should check whether the pet needs anything', () => {
        let testPet = new Pet('Test Pet');
        testPet.fitness = 2;
        testPet.hunger = 0;
        expect(testPet.checkUp()).toBe('I need a walk!');
        testPet.fitness = 10;
        testPet.hunger = 8;
        expect(testPet.checkUp()).toBe('I am hungry!');
        testPet.fitness = 2;
        testPet.hunger = 8;
        expect(testPet.checkUp()).toBe('I am hungry AND I need a walk!');
        testPet.fitness = 10;
        testPet.hunger = 0;
        expect(testPet.checkUp()).toBe('I feel great!');
    });

    it('throws an error if the pet is not alive', () => {
        const pet = new Pet('Fido');
        pet.hunger = 10;
        pet.fitness = 0;
        pet.age = 30;
        expect(() => pet.feed()).toThrow('Your pet is no longer alive :(');
    });
});

describe('isAlive', () => {
    it('it should return the pet is alive, return false if dead', () => {
        let testPet = new Pet('Test Pet');
        testPet.hunger = 10; 
        expect (testPet.isAlive).toBe(false);
        testPet.fitness = 0;
        expect (testPet.isAlive).toBe(false);
        testPet.age = 30;
        expect (testPet.isAlive).toBe(false);
        testPet.hunger = 8;
        testPet.fitness = 2;
        testPet.age = 28;
        expect (testPet.isAlive).toBe(true);
        testPet.hunger = 4;
        testPet.fitness = 8;
        testPet.age = 20;
        expect (testPet.isAlive).toBe(true);
    });
})
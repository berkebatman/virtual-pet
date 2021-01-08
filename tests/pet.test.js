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
        let testPet = new Pet('Test Pet')
        testPet.growUp(1)
        testPet.growUp(2)
        testPet.growUp(3);
        expect(testPet.age).toBe(6);
    });
});

describe('health impairment with growUp', () => {
    it('it should check whether the pets health impairs when it gets older; age should increase by the number passed', () => {
        let testPet = new Pet('Test Pet')
        testPet.growUp(2)
        expect(testPet.hunger).toBe(10);
        expect(testPet.fitness).toBe(4)
    });
});

describe('walk', () => {
    it('it should check whether fitness increases by 4, with a max of 10', () => {
        let testPet = new Pet('Test Pet');
        testPet.walk();
        expect(testPet.fitness).toBe(10);
        testPet.growUp(1);
        testPet.walk();
        expect(testPet.fitness).toBe(10);
        testPet.growUp(2);
        testPet.walk();
        expect(testPet.fitness).toBe(8);
    });
});

describe('feed', () => {
    it('it should check whether hunger decreases by 3, with a min of 0', () => {
        let testPet = new Pet('Test Pet');
        testPet.growUp(1);
        testPet.feed();
        let result = testPet.hunger
        expect(result).toBe(2);
        testPet.feed();
        result2 = testPet.hunger;
        expect(result2).toBe(0);
        testPet.feed();
        result3 = testPet.hunger;
        expect(result3).toBe(0);
    });
});

describe('checkUp', () => {
    it('it should check whether the pet needs anything', () => {
        let testPet = new Pet('Test Pet');
        testPet.growUp(1);
        expect(testPet.checkUp()).toBe('I am hungry!');
        testPet.growUp(1);
        expect(testPet.checkUp()).toBe('I am hungry!');
        testPet.growUp(1);
        expect(testPet.checkUp()).toBe('I am hungry AND I need a walk!');
        testPet.walk();
        testPet.walk();
        expect(testPet.checkUp()).toBe('I am hungry!');
        testPet.feed();
        testPet.feed();
        testPet.feed();
        testPet.feed();
        expect(testPet.checkUp()).toBe('I feel great!');
    });
});

describe('isAlive', () => {
    it('it should whether the pet is alive, return false if dead', () => {
        let testPet = new Pet('Test Pet');
        expect(testPet.isAlive()).toBe(true);
        testPet.growUp(2);
        expect (testPet.isAlive()).toBe(false);
        testPet.feed();
        expect (testPet.isAlive()).toBe(true);
        testPet.growUp(2);
        testPet.feed();
        testPet.feed();
        testPet.feed();
        expect (testPet.isAlive()).toBe(false);
        testPet.walk();
        expect (testPet.isAlive()).toBe(true);
    });
});




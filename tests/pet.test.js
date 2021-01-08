/// module-imports (placeholder)
const {Pet} = require("../pet")

describe('constructor', () => {
    it('should be an instance of object', () => {
        expect(new Pet('Fido')).toBeInstanceOf(Object);
    });
});

describe('constructor', () => {
    it('should return a pet thats 0yrs old and assign a name to it', () => {
        expect(new Pet('Fido')).toEqual({
            name: 'Fido',
            age: 0,
            hunger: 0,
            fitness: 10,
        });
    });
});

describe('constructor', () => {
    it('it should check wheater the pet grows, even when the grow up function', () => {
        let testPet = new Pet('Test Pet')
        testPet.growUp(1)
        testPet.growUp(2)
        testPet.growUp(3);
        expect(testPet.age).toBe(6);
    });
});

describe('constructor', () => {
    it('it should check whether the pets health impairs when it gets older', () => {
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
        let result = testPet.fitness
        expect(result).toBe(10);
        testPet.growUp(1);
        testPet.walk();
        let result2 = testPet.fitness
        expect(result2).toBe(10);
        testPet.growUp(2);
        testPet.walk();
        let result3 = testPet.fitness;
        expect(result3).toBe(8);
    });
});




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

//// This is suggested by manchester codes; the same functionality is being tested in the a
// it('has a initial age of 0', () => {
//     const pet = new Pet('Fido');

//     expect(pet.age).toEqual(0);
//   });
// })

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
        testPet.growUp(1)
        expect(testPet.hunger).toBe(-5);
        expect(testPet.fitness).toBe(7)
    });
});




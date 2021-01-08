/// module-imports (placeholder)
const {Pet} = require("../pet")

describe('constructor', () => {
    it('should be an instance of object', () => {
        expect(new Pet('Fido')).toBeInstanceOf(Object);
    });
});

describe('constructor', () => {
    it('should return an object with a name property assgined', () => {
        expect(new Pet('Fido')).toEqual({
            name: 'Fido',
        });
    });
});


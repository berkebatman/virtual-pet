/// module-imports (placeholder)
const {Pet} = require("../pet")

describe('constructor', () => {
    it('should be an instance of object', () => {
        expect(new Pet('Fido')).toBeInstanceOf(Object)
    });
});

const expect = require('chai').expect;
const myapp = require(".");

describe('Testing printMsg function, should return "Hello World!" ', () => {
	it('Should Return Hello World!', () => {
        expect(myapp.printMsg()).to.equal("Hello World!");
	});
});

describe('Testing printBye function, should return "Bye!" ', () => {
	it('Should Return Bye!', () => {
        expect(myapp.printBye()).to.equal("Bye!");
	});
});

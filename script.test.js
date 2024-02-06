const { greet, calculateSum} = require('./script.js');

describe('JavaScript Functions Assignment', () => {

    beforeEach(() => {
      // Spy on console.log before each test
      jest.spyOn(console, 'log');
    })

afterEach(() => {
  // Restore console.log after each test
  console.log.mockRestore();
});


test('greet function prints the correct greeting', () => {
    greet('Alice');
    expect(console.log).toHaveBeenCalledWith('Hello, Alice!');
  });

  test('calculateSum returns the correct sum of two numbers', () => {
    expect(calculateSum(5, 7)).toBe(12);
  });

})


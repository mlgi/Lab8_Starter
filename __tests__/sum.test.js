// sum.test.js

test('adds 1 + 2 to equal 3', () => {
  // TODO
});

const { sum }= require('../assets/scripts/sum.js');
test('adds 1 + 2 to equal 3', () => {
  expect(sum(1,2)).toBe(3);
});
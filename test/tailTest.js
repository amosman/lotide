const tail = require('../tail');
const assert = require('chai').assert;
describe("#tail", () => {
  it("returns ['Bootcamp', 'Web Development'] for ['Lighthouse Labs', 'Bootcamp', 'Web Development']", () => {
    assert.deepEqual(tail(['Lighthouse Labs', 'Bootcamp', 'Web Development']), ['Bootcamp', 'Web Development']);
  });
  it("returns ['soccer', 'baseball', 7] for ['football', 'soccer', 'baseball', 7 ]", () => {
    assert.deepEqual(tail(['football', 'soccer', 'baseball', 7 ]), ['soccer', 'baseball', 7]); 
  });
  it("returns  [1, 4 , 7 ,9, 'tom'] for [1, 1, 4 , 7 ,9, 'tom']", () => {
    assert.deepEqual(tail([1, 1, 4 , 7 ,9, 'tom']), [1, 4 , 7 ,9, 'tom']); 
  })
  it("returns [] for []", () => {
    assert.deepEqual(tail([]), []); 
  });
});
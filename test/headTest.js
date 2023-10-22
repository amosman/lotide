const head = require('../head');
const assert = require('chai').assert;
describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5'); 
  });
  it("returns  'Lighthouse Labs' for ['Lighthouse Labs', 'Bootcamp']", () => {
    assert.strictEqual(head(['Lighthouse Labs', 'Bootcamp']), 'Lighthouse Labs'); 
  })
  it("returns 'Football' for ['Football', 'soccer']", () => {
    assert.strictEqual(head(['Football', 'soccer']), 'Football'); 
  });
  it("returns 'Hello' for ['Lighthouse', 'Labs']", () => {
    assert.strictEqual(head(['Hello','Lighthouse', 'Labs']), 'Hello'); 
  });
});
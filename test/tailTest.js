const tail = require('../tail');
const assertArraysEqual = require('../assertArraysEqual');


assertArraysEqual(tail(["Lighthouse Labs", "Bootcamp", "Web Development"]),["Bootcamp", "Web Development"]);
assertArraysEqual(tail(["football", "soccer", "baseball", 4 ]),["soccer", "baseball", 7]);
assertArraysEqual(tail([1, 1, 4 , 7 ,9, "tom"]),[1, 1, 4 , 7 ,9, "Sam"]);
assertArraysEqual(tail([]), []);
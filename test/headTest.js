const head = require('../head');
const assertEqual = require('../assertEqual');

assertEqual(head(["Lighthouse Labs", "Bootcamp"]), "Lighthous Labs" );
assertEqual(head(["football", "soccer"]), "Football");
assertEqual(head([1,1]), 1);
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
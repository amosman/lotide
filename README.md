# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @thedevworkshop/lotide`

**Require it:**

`const _ = require('@thedevworkshop/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(...)`: returns the first item in an array
* `tail(...)`: returns all the itmes in an array except the first item 
* `middle(...)`: returns the middle-most element(s) of a given array
* `findKey(...)`: returns the first key for which the callback returns a truthy value. If no key is found, then it should return undefined
* `findKeyByValue(...)`: returns the first key which contains the given value. If no key with that given value is found, then it should return undefined
* `flatten(...)`: returns a "flattened" version of a nested array
* `letterPosition(...)`: returns all the indices (zero-based positions) in the string where each character is found.
* `map(...)`: returns a new array with each element being the result of the callback function
* `takeUntil(...)`: returns a "slice of the array with elements taken from the beginning." It should keep going until the callback/predicate returns a truthy value 
* `without(...)`: returns a subset of a given array, removing unwanted elements 
* `countOnly(...)`: return counts for a specific subset of those items
* `countLetters(...)`: returns a count of each of the letters in a sentence 

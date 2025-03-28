//Number One
//Var can be updated ,redeclared and be accessed only when in the block of a function{} or scope where its declared while
// Let can be updated but not redeclared in the same scope{}  whereas Const must be initialized at declaration and cant
//  be redeclared or updated const is block-scoped

//Number two
//Objects are collection of key-value pairs where keys or properties are strings or symbols where their values are any
//data type while arrays are ordered collection of values tyoically used for lists of items. 

//Number Three
//Loose Equality (==) automatically converts one or both values into one type before comparison and can cause unexpected 
// results while strict Equality (===) it checks if the values have the same  same data type if they aint the same then there is no 
//conversion since the values must be identical in both type and value.

// Number four
// An event is an occurance that triggers an output in the browser creating a specific response.
const button = document.getElementById('myBtn');
button.addEventListener('click', () => {
  console.log('Button tap');
  alert('Thats me');
});

// Number five
// Both ForEach and map iterate over an element in an array
//Map() is a function that allows u to transforms each element in an array withou changing the original array based on a specific 
// callback function while ForEach iterates elements in array by triggering the events.
 


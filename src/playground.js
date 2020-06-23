console.log("Module 02 - Juan Romero López");

const array = ["Hola", true, 23, "Adios"];

/**
 * Ejecicio 1 - Array operations
 */

// Head

const head = ([first]) => {
  return first;
};

console.log(head(array));

// Tail

const tail = ([, ...arg]) => {
  return arg;
};

console.log(tail(array));

// Init

const init = (arg) => {
  return arg.slice(0, arg.length - 1);
};

console.log(init(array));

// Last

const last = (arg) => {
  return arg.pop();
};

console.log(last(array));

/**
 * Ejecicio 2 - Concat
 */

const concat = (...args) => {
  return [].concat(...args);
}; // Implementation here.

console.log(
  concat(
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 11, 12],
    [13, 14, 15],
    [16, 17, 18]
  )
);

/**
 * Ejecicio 3 - Clone Merge
 */

function clone(source) {
  console.log(...source);
}

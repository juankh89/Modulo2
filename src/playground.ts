console.log("Module 02 - Juan Romero López");

const arrayTest = ["Hola", true, 23, "Adios"];

const objectTest = {
  a: "Name",
  b: true,
  c: 84,
};

/**
 * Ejecicio 1 - Array operations
 */

// Head

const head = ([first]: Array<any>) => {
  return first;
};

console.log(head(arrayTest));

// Tail

const tail = ([, ...arg]: Array<any>) => {
  return arg;
};

console.log(tail(arrayTest));

// Init

const init = (arg) => {
  return arg.slice(0, arg.length - 1);
};

console.log(init(arrayTest));

// Last

const last = (arg) => {
  return arg.pop();
};

console.log(last(arrayTest));

/**
 * Ejecicio 2 - Concat
 */

const concat = (...args) => {
  return [].concat(...args);
};

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
 * Ejecicio 3
 */

// Clone

function clone(object) {
  return { ...object };
}

console.log(clone(objectTest));

// Merge

//Assert
const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };

function merge(source, target) {
  //return Object.assign({}, target, source);
  return { ...target, ...source };
}

console.log(merge(a, b));

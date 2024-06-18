const add = require('./add.js');
const sub = require('./sub.js');
const mul = require('./mul.js');
const div = require('./div.js');
const random = require('./generate_random.js');
const uuid = require('./generate_uuid.js');
const power = require('./power.js');
const lcm = require('./least_common_multiple.js');
const Matrix = require('./Matrix.js');
const factorial = require('./factorial.js');
//
// Matrix in const Matrix = require('./matrix'); is the name you are assigning to the class or module that is being imported from the Matrix.js file. The name Matrix can indeed be anything you want; it is simply a variable that holds the imported class or module.
// or it can be const Mymatrix = require('./Matrix.js');

console.log(factorial(4));
console.log(add(1,2));
console.log(sub(1,2));
console.log(mul(1,2));
console.log(div(1,2));
console.log(random(1,10));
console.log(uuid())
console.log(power(2,3));
console.log(lcm(2,5));


// Test Matrix Addition
const matrix1 = new Matrix([
  [1, 2],
  [3, 4]
]);

const matrix2 = new Matrix([
  [5, 6],
  [7, 8]
]);

try {
  const matrixSum = matrix1.add(matrix2);
  console.log("Matrix Sum:");
  console.log(matrixSum.data); // [[6, 8], [10, 12]]
} catch (error) {
  console.error(error.message);
}

// Test Matrix Multiplication
try {
  const matrixProduct = matrix1.multiply(matrix2);
  console.log("Matrix Product:");
  console.log(matrixProduct.data); // [[19, 22], [43, 50]]
} catch (error) {
  console.error(error.message);
}

// Test Matrix Transpose
const matrixTranspose = matrix1.transpose();
console.log("Matrix Transpose:");
console.log(matrixTranspose.data); // [[1, 3], [2, 4]]

// Test Invalid Addition
const matrix3 = new Matrix([
  [1, 2, 3],
  [4, 5, 6]
]);

try {
  const invalidSum = matrix1.add(matrix3);
  console.log("Invalid Sum:");
  console.log(invalidSum.data);
} catch (error) {
  console.error(error.message); // "Matrices must have the same dimensions for addition"
}

// Test Invalid Multiplication
try {
  const invalidProduct = matrix1.multiply(matrix3);
  console.log("Invalid Product:");
  console.log(invalidProduct.data);
} catch (error) {
  console.error(error.message); // "Number of columns in the first matrix must equal the number of rows in the second matrix"
}

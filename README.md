# basic_math

A Node.js module providing a comprehensive set of basic and advanced mathematical functions, including arithmetic, trigonometry, logarithmic operations, matrix operations, and more.

## Features

- Basic Arithmetic Operations: Addition, Subtraction, Multiplication, Division, Modulus
- Advanced Arithmetic Operations: Power, Square Root, Absolute Value, Factorial
- Trigonometric Functions: Sine, Cosine, Tangent, Arcsine, Arccosine, Arctangent
- Logarithmic and Exponential Functions: Natural Logarithm, Logarithm Base 10, Exponential
- Miscellaneous Functions: Maximum, Minimum, Sum, Mean, Median, Standard Deviation, Variance
- Additional Functions: GCD, LCM, Prime Check, Fibonacci Sequence, Combination (nCr), Permutation (nPr), Quadratic Equation Solver
- Matrix Operations: Addition, Multiplication, Transpose

## Installation

To install the module, run:

```sh
npm install basic_math
```

## Usage

Here are some examples of how to use the functions provided by the basic_math module:

# Basic Arithmetic Functions

```
const add = require('basic_math');
```

``` sh
console.log(add(2, 3)); // Output: 5
console.log(subtract(5, 2)); // Output: 3
console.log(multiply(4, 3)); // Output: 12
console.log(divide(10, 2)); // Output: 5
console.log(modulus(10, 3)); // Output: 1

```

# Advanced Arithmetic Functions

```
console.log(power(2, 3)); // Output: 8
console.log(sqrt(16)); // Output: 4
console.log(abs(-5)); // Output: 5
console.log(factorial(5)); // Output: 120
```

# Trigonometric Functions

```
console.log(sine(Math.PI / 2)); // Output: 1
console.log(cosine(Math.PI)); // Output: -1
console.log(tangent(Math.PI / 4)); // Output: 1
```

# Logarithmic and Exponential Functions

```
console.log(math.naturalLog(Math.E)); // Output: 1
console.log(math.logBase10(100)); // Output: 2
console.log(math.exponential(1)); // Output: 2.718281828459045
```

# Miscellaneous Functions

```
console.log(math.max(1, 2, 3, 4, 5)); // Output: 5
console.log(math.min(1, 2, 3, 4, 5)); // Output: 1
console.log(math.sum([1, 2, 3, 4, 5])); // Output: 15
console.log(math.mean([1, 2, 3, 4, 5])); // Output: 3
console.log(math.median([1, 2, 3, 4, 5])); // Output: 3
console.log(math.standardDeviation([1, 2, 3, 4, 5])); // Output: ~1.414
console.log(math.variance([1, 2, 3, 4, 5])); // Output: 2

```

# Additional Functions

```
console.log(math.gcd(8, 12)); // Output: 4
console.log(math.lcm(8, 12)); // Output: 24
console.log(math.isPrime(17)); // Output: true
console.log(math.fibonacci(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
console.log(math.combination(5, 2)); // Output: 10
console.log(math.permutation(5, 2)); // Output: 20
console.log(math.solveQuadratic(1, -3, 2)); // Output: [2, 1]

```

# Matrix Operations

```
const matrix1 = new math.Matrix([[1, 2], [3, 4]]);
const matrix2 = new math.Matrix([[5, 6], [7, 8]]);
const matrixSum = matrix1.add(matrix2);
console.log(matrixSum.data); // Output: [[6, 8], [10, 12]]

const matrixProduct = matrix1.multiply(matrix2);
console.log(matrixProduct.data); // Output: [[19, 22], [43, 50]]

const matrixTranspose = matrix1.transpose();
console.log(matrixTranspose.data); // Output: [[1, 3], [2, 4]]

```

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Contributing
Please feel free to use the module and connect with me if you encounter any errors or have suggestions for improvements. You can reach me at [leelaprasad.m22@iiits.in].

## GitHub Repository

Find the source code and contribute on GitHub.

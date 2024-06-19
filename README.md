# 📊 math_operations_kit(math_operations_kits)

A Node.js module providing a comprehensive set of basic and advanced mathematical functions, including arithmetic, trigonometry, logarithmic operations, matrix operations, and more.

##  ✨ Features

- Basic Arithmetic Operations: Addition, Subtraction, Multiplication, Division, Modulus
- Advanced Arithmetic Operations: Power, Square Root, Absolute Value, Factorial
- Trigonometric Functions: Sine, Cosine, Tangent, Arcsine, Arccosine, Arctangent
- Logarithmic and Exponential Functions: Natural Logarithm, Logarithm Base 10, Exponential
- Miscellaneous Functions: Maximum, Minimum, Sum, Mean, Median, Standard Deviation, Variance
- Additional Functions: GCD, LCM, Prime Check, Fibonacci Sequence, Combination (nCr), Permutation (nPr), Quadratic Equation Solver
- Matrix Operations: Addition, Multiplication, Transpose

## 📦 Installation

To install the module, run:

```sh
npm install math_operations_kit
```

## 📚 Usage

Here are some examples of how to use the functions provided by the math_operations_kit module:

# ➕ Basic Arithmetic Functions


# Importing Individual Functions
You can import individual functions directly from the module:
``` sh
const add = require('math_operations_kit/add'); // Importing add function directly
const sub = require('math_operations_kit/sub');
const div = require('math_operations_kit/div');

console.log(add(1, 2)); // Expected: 3
console.log(sub(5, 3)); // Expected: 2
console.log(div(10, 2)); // Expected: 5

```

# Importing the Entire Module
Alternatively, you can import the entire module and access functions through it:

```
const add = require('math_operations_kit');
```

``` sh
console.log(math.add(2, 3)); // Output: 5
console.log(math.subtract(5, 2)); // Output: 3
console.log(math.multiply(4, 3)); // Output: 12
console.log(math.divide(10, 2)); // Output: 5
console.log(math.modulus(10, 3)); // Output: 1

```

<hr>
<pre>
<strong> Note on Implementing Individual Functions</strong>
If you prefer, you can also implement individual functions directly from their respective files in the `math_operations_kit` module. Each function file (`add.js`,` sub.js`,` div.js`, etc.) exports a single function, allowing you to import and use them as standalone modules.
</pre>
<hr>

# 🚀 Advanced Arithmetic Functions

```
console.log(math.power(2, 3)); // Output: 8
console.log(math.sqrt(16)); // Output: 4
console.log(math.abs(-5)); // Output: 5
console.log(math.factorial(5)); // Output: 120
```

# 📐 Trigonometric Functions

```
console.log(math.sine(Math.PI / 2)); // Output: 1
console.log(math.cosine(Math.PI)); // Output: -1
console.log(math.tangent(Math.PI / 4)); // Output: 1
```

# 📈 Logarithmic and Exponential Functions

```
console.log(math.naturalLog(Math.E)); // Output: 1
console.log(math.logBase10(100)); // Output: 2
console.log(math.exponential(1)); // Output: 2.718281828459045
```

# 📊 Miscellaneous Functions

```
console.log(math.max(1, 2, 3, 4, 5)); // Output: 5
console.log(math.min(1, 2, 3, 4, 5)); // Output: 1
console.log(math.sum([1, 2, 3, 4, 5])); // Output: 15
console.log(math.mean([1, 2, 3, 4, 5])); // Output: 3
console.log(math.median([1, 2, 3, 4, 5])); // Output: 3
console.log(math.standardDeviation([1, 2, 3, 4, 5])); // Output: ~1.414
console.log(math.variance([1, 2, 3, 4, 5])); // Output: 2

```

# ⚙️ Additional Functions

```
console.log(math.gcd(8, 12)); // Output: 4
console.log(math.lcm(8, 12)); // Output: 24
console.log(math.isPrime(17)); // Output: true
console.log(math.fibonacci(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
console.log(math.combination(5, 2)); // Output: 10
console.log(math.permutation(5, 2)); // Output: 20
console.log(math.solveQuadratic(1, -3, 2)); // Output: [2, 1]

```

# Solve Quadratic Equation
To solve a quadratic equation of the form a(x^2) + bx + c = 0 , you can use the solveQuadratic function:
```
const [root1, root2] = math.solveQuadratic(1, -3, 2);
console.log('Roots of the quadratic equation:');
console.log(`Root 1: ${root1}`); // Output: 2
console.log(`Root 2: ${root2}`); // Output: 1
```

# 🧮 Matrix Operations
```
const { Matrix } = require('math_operations_kit');
```
for matrix applications , you have import this additionally , 

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

## 📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing
Please feel free to use the module and connect with me if you encounter any errors or have suggestions for improvements. You can reach me at [leelaprasad.m22@iiits.in].

## 🔗 GitHub Repository

Find the source code and contribute on GitHub.

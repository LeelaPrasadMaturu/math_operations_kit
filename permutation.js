function permutation(n, r) {
    if (r > n) return 0;
    return factorial(n) / factorial(n - r);
  }

  module.exports = permutation;
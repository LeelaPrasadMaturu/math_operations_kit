function standardDeviation(numbers) {
    const m = mean(numbers);
    const variance = numbers.reduce((acc, num) => acc + Math.pow(num - m, 2), 0) / numbers.length;
    return Math.sqrt(variance);
  }

  module.exports = standardDeviation;
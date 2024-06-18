
function variance(numbers) {
    const m = mean(numbers);
    return numbers.reduce((acc, num) => acc + Math.pow(num - m, 2), 0) / numbers.length;
  }

  module.exports = variance;
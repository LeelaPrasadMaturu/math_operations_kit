class Matrix {
    constructor(data) {
      this.data = data;
    }
  
    add(matrix) {
     if (this.data.length !== matrix.data.length || this.data[0].length !== matrix.data[0].length) {
            throw new Error("Matrices must have the same dimensions for addition");
          }
      let result = this.data.map((row, i) =>
        row.map((val, j) => val + matrix.data[i][j])
      );
      return new Matrix(result);
    }
  
    multiply(matrix) {
     if (this.data[0].length !== matrix.data.length) {
            throw new Error("Number of columns in the first matrix must equal the number of rows in the second matrix");
          }
      let result = this.data.map((row, i) =>
        row.map((_, j) =>
          row.reduce((acc, _, n) => acc + this.data[i][n] * matrix.data[n][j], 0)
        )
      );
      return new Matrix(result);
    }
  
    transpose() {
      let result = this.data[0].map((_, i) =>
        this.data.map((row) => row[i])
      );
      return new Matrix(result);
    }
  
    invert() {
        const det = this.determinant();
    
        if (det === 0) {
          throw new Error("Matrix is not invertible");
        }
    
        if (this.data.length === 2) {
          return new Matrix([
            [this.data[1][1] / det, -this.data[0][1] / det],
            [-this.data[1][0] / det, this.data[0][0] / det],
          ]);
        }
    
        // Implement inversion for larger matrices if needed
        throw new Error("Matrix inversion is not implemented for matrices larger than 2x2");
      }
    }
    
  
  module.exports = Matrix;
  
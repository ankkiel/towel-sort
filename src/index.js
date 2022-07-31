
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let arr = [];
    if (Array.isArray(matrix) && matrix !== undefined && matrix !== []) {
        for (let i = 0; i < matrix.length; i++) {
            if (i % 2 == 0) {
                arr = arr.concat(matrix[i]);
            } else {
                arr = arr.concat(matrix[i].sort((a, b) => b - a));
            }
        }
    }
    return arr;
}

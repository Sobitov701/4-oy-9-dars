function num16(arr) {
  return arr.flat();
}

const sum16 = [1, [2, [3, 4, [5, 6]], 7], 8, [9]];

console.log(num16(sum16));

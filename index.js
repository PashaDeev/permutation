function make(arr) {
  if (arr.length > 1) {
    const start = arr[0];
    const firstArr = make(arr.slice(1));
    const secondArr = [];
    const { length } = firstArr[0];

    for (let i = 0; i < firstArr.length; i++) {
      for (let j = 0; j <= length; j++) {
        const first = firstArr[i].slice(0, j);
        const second = firstArr[i].slice(j);
        secondArr.push([...first, start, ...second]);
      }
    }

    return secondArr;
  } else return [arr];
}

const combination = length => {
  if (length === 0) return [];
  if (length === 1) return [[1]];

  const arr = Array.from({ length: length }).map((item, index) => index + 1);

  return make(arr);
};

console.log(`-------------------------`);
console.log(`comb`, combination(3));
console.log(`-------------------------`);


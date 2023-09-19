function fib() {
  const arr = [0, 1, 1, 2];
  for (let i = 3; i < 50; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr;
}

console.log(fib());

function numsToStrings(arr) {
  const res = _.map(arr, function (point) {
    return `${point}`;
  });
  return res;
}

console.log(numsToStrings(fib()));

function numEvenNums(arr) {
  const res = _.filter(arr, function (point) {
    return point % 2 === 0;
  });
  return res.length;
}

console.log(numEvenNums(fib()));

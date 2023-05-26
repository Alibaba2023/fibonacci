module.exports = function (num) {
  // 0 1 1 2 3 5 8 13
  let prev =0;
  let current = 1;
  let sum = 0;
  while (current<=num) {
    if (current % 2 ==0) {
      sum+= current;
    }let next = prev -current;
    prev=current;
    current=next;
  } return sum;
}

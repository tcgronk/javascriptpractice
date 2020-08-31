function getSum(a, b) {
  if (a === b) {
    return a + b;
  }
  if (a < b) {
    let c = b - a;
    if (c > 1) {
      return a + b + c;
    }
    return a + b;
  }
  if (b < a) {
    let c = a - b;
    if (c > 1) {
      return a + b + c;
    }
    return a + b;
  }
}

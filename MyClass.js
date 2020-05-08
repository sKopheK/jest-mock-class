export default class MyClass {
  constructor(p1) {
    if (p1 === undefined) {
      throw new Error('Missing arg');
    }
  }

  isPositive(val) {
    return val > 0;
  }
}

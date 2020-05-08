import Collection from './Collection';
import MyClass from './MyClass';

jest.mock('./MyClass');

describe('Mocks', () => {
  beforeEach(() => {
    MyClass.mockClear();
  });

  it('should not throw on addition of valid object', () => {
    const inst = new Collection();
    const mock = new MyClass();
    expect(() => {
      console.log(mock.isPositive(7)); // undefined
      inst.addItem(mock);
    }).not.toThrow();
  });

  it('should be fine with original', () => {
    jest.unmock('./MyClass');
    jest.resetModules();
    const MyClassOrig = jest.requireActual('./MyClass').default;
    const inst = new Collection();
    const orig = new MyClassOrig(1);
    expect(() => {
      console.log(orig.isPositive(7)); // true
      inst.addItem(orig);
    }).not.toThrow();
  });
});

import MyClass from './MyClass';

export default class Collection {
  addItem(item) {
    if (!(item instanceof MyClass)) {
      throw new Error('Value is not instance of MyClass');
    }
  }
}

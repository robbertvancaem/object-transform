# object-transform

A small set of utility functions that can be used to transform an object.  For now it exports a function `capitalizeKeys` that can be used to capitalize keys in an object.



## Usage

```js
import { capitalizeKeys } from 'object-transform'

const input = {
  myKey: 'bla',
  myArray: [{
    myProp: 'bloe'
  }, {
    myProp: 'blegh'
  }]
};
const transformed = capitalizeKeys(input)

console.log(transformed);

/*
>> {
  MyKey: 'bla',
  MyArray: [{
    MyProp: 'bloe'
  }, {
    MyProp: 'blegh'
  }]
}
 */

```

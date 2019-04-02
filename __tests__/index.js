import { capitalizeKeys } from '../index';

describe('capitalizeKeys', () => {
  test('transforms key-value pairs as expected', () => {
    const expected = {
      MyKey: 'bla'
    };
    const input = {myKey: 'bla'};
    const actual = capitalizeKeys(input);
    expect(actual).toEqual(expected);
  });

  test('transforms arrays as expected', () => {
    const expected = {
      MyArray: [{
        MyKey: 'bla'
      }, {
        MyKey: 'bloe'
      }]
    };
    const input = { myArray: [{
      myKey: 'bla'
    }, {
      myKey: 'bloe'
    }]};
    const actual = capitalizeKeys(input);
    expect(actual).toEqual(expected);
  })
})

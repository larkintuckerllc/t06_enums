/* eslint-disable no-console */

enum CoinKind {
  Penny,
  Nickel,
  Dime,
  Quarter,
  Euro,
}

class Coin {
  kind: CoinKind;

  value: number;

  constructor(kind: CoinKind, value: number) {
    this.kind = kind;
    this.value = value;
  }

  display(): void {
    console.log(`Displayed is ${this.kind}`);
  }
}

const coin = new Coin(CoinKind.Penny, null);
const coin2 = coin;
console.log(`The value of coin is ${coin.kind}`); // 0
console.log(`The value of coin2 is ${coin2.kind}`); // 0
coin2.display(); // 0
const coin3 = new Coin(CoinKind.Quarter, 2);
switch (coin3.kind) {
  case CoinKind.Penny:
    console.log('Lucky penny!');
    break;
  case CoinKind.Nickel:
    console.log('Shiny nickel!');
    break;
  case CoinKind.Dime:
    console.log('Small dime!');
    break;
  case CoinKind.Quarter:
    console.log(`Large quarter with value: ${coin3.value}`); // 2
    break;
  default:
}
if (coin3.kind === CoinKind.Quarter) {
  console.log(`Large quarter with value: ${coin3.value}`); // 2
}

// OPTION
const plusOne = (x: number): number => {
  if (x === null) {
    return null;
  }
  return x + 1;
};
const five = 5;
const six = plusOne(five);
const none = plusOne(null);
console.log(six); // 6
console.log(none); // null

const len = (str: string): number => {
  if (str === null) {
    return null;
  }
  return str.length;
}
const abc = 'abc';
const three = len(abc);
const nope = len(null);
console.log(three); // 3
console.log(nope); // null

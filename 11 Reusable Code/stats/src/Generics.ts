// class HoldNumber {
//   data: number;
// }

// class HoldString {
//   data: string;
// }

// const holdNumber = new HoldNumber();
// holdNumber.data = 123;

// const holdString = new HoldString();
// holdString = 'sourav';

// using Generics
class HoldAnything<TypeOfData> {
  constructor(public data: TypeOfData) {}
}

const holdNumber = new HoldAnything<number>(10);
holdNumber.data = 10;

const holdString = new HoldAnything<string>('sourav');
holdString.data = 'sourav';

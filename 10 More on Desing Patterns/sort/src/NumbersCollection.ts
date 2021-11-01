import { Sorter } from './Sorter';

export class NumbersCollection extends Sorter {
  constructor(public data: number[]) {
    super();
  }

  // length(): number {
  //   return this.data.length;
  // }

  get length(): number { // getter usually works as a property
    return this.data.length;
  }

  compare(leftIndex: number, righIndex: number): boolean {
    return this.data[leftIndex] > this.data[righIndex];
  }

  swap(leftIndex: number, rightIndex: number): void {
    const temp = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = temp;
  }
}

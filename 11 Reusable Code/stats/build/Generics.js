"use strict";
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
var HoldAnything = /** @class */ (function () {
    function HoldAnything(data) {
        this.data = data;
    }
    return HoldAnything;
}());
var holdNumber = new HoldAnything(10);
holdNumber.data = 10;
var holdString = new HoldAnything('sourav');
holdString.data = 'sourav';

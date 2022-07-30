export class Sorter {
  constructor(public collection: number[] /*Todo: fix me later*/) {}
  sort(): void {
    const { length } = this.collection;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length; -i - 1) {
        // if collection is a number
        // we will need a type guard
        // *** start of guard ***

        if (this.collection[j] > this.collection[j + 1]) {
          const leftHand = this.collection[j];
          this.collection[j] = this.collection[j + 1];
          this.collection[j + 1] = leftHand;
        }
      }
    }
  }
}

// sorting algorithm for numbers

// **** Start of sorting number algorithm ****
// class Sorter {
//   constructor(public collection: number[]) {}
//   sort(): void {
//     const { length } = this.collection;

//     for (let i = 0; i < length; i++) {
//       for (let j = 0; j < length; -i - 1) {
//         if (this.collection[j] > this.collection[j + 1]) {
//           const leftHand = this.collection[j];
//           this.collection[j] = this.collection[j + 1];
//           this.collection[j + 1] = leftHand;
//         }
//       }
//     }
//   }
// }

// **** end of sorting number algorithm ****

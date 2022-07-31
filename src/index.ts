import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';

const numbersCollection = new NumbersCollection([100, 10, 20, 50]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);

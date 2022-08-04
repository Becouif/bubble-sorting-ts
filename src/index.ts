import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './Linkedlist';

// const numbersCollection = new NumbersCollection([100, 10, 20, 50]);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(numbersCollection.data);

// const charactersCollection = new CharactersCollection('xaayb');
// const sorter = new Sorter(charactersCollection);
// sorter.sort();
// console.log(charactersCollection.data);
// console.log('my name is Enoch')

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-5);
linkedList.add(200);
linkedList.add(31);

const sorter = new Sorter(linkedList);
sorter.sort();
linkedList.print();

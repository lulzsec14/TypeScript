import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

// const numbersCollection = new NumbersCollection([10, 3, -5, 0, 1]);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(numbersCollection.data);

// const charactersCollection = new CharactersCollection('Xaayb');
// const sorter = new Sorter(charactersCollection);
// sorter.sort();
// console.log(charactersCollection.data);

// const list = new LinkedList();
// list.add(10);
// list.add(3);
// list.add(-5);
// list.add(0);
// list.add(1);
// const sorter = new Sorter(list);
// sorter.sort();
// list.print();

// const numbersCollection = new NumbersCollection([10, 3, -5, 0, 1]);
// numbersCollection.sort();
// console.log(numbersCollection.data);

// const charactersCollection = new CharactersCollection('Sourav');
// charactersCollection.sort();
// console.log(charactersCollection.data);

const list = new LinkedList();
list.add(10);
list.add(3);
list.add(-5);
list.add(0);
list.add(1);
list.sort();
list.print();

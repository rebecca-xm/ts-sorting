import { Sorter } from './Sorter';
import { NumCollection } from './NumCollection';

const numCollection = new NumCollection([50, -96, -74, 12, 36.9]);
const collection = new Sorter(numCollection);
collection.sort();
console.log(numCollection.data);

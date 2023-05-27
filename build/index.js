"use strict";
class Sorter {
    constructor(collection) {
        this.collection = collection;
    }
    sort() {
        const { length } = this.collection;
        for (let i = 0; i < length; i++) {
            for (let k = 0; k < length - i - 1; k++) {
                if (this.collection[k] > this.collection[k + 1]) {
                    const leftHandSide = this.collection[k];
                    this.collection[k] = this.collection[k + 1];
                    this.collection[k + 1] = leftHandSide;
                }
            }
        }
    }
}
const collection = new Sorter([50, -96, -74, 12, 36.9]);
collection.sort();
console.log(collection);

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
class Sorter {
    constructor(collection) {
        this.collection = collection;
    }
    sort() {
        const { length } = this.collection;
        for (let i = 0; i < length; i++) {
            for (let k = 0; k < length - i - 1; k++) {
                // if (this.collection instanceof Array) {
                // if (this.collection[k] > this.collection[k + 1]) {
                //   const leftHandSide = this.collection[k];
                //   this.collection[k] = this.collection[k + 1];
                //   this.collection[k + 1] = leftHandSide;
                // }
                // }
                // if (typeof this.collection === 'string') {}
                if (this.collection.compare(k, k + 1)) {
                    this.collection.swap(k, k + 1);
                }
            }
        }
    }
}
exports.Sorter = Sorter;

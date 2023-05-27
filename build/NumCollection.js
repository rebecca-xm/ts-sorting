"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumCollection = void 0;
class NumCollection {
    constructor(data) {
        this.data = data;
    }
    get length() {
        return this.data.length;
    }
    compare(leftIndex, rightIndex) {
        return this.data[leftIndex] > this.data[rightIndex];
    }
    swap(leftIndex, rightIndex) {
        const leftHandSide = this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = leftHandSide;
    }
}
exports.NumCollection = NumCollection;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = require("./Sorter");
const NumCollection_1 = require("./NumCollection");
const numCollection = new NumCollection_1.NumCollection([50, -96, -74, 12, 36.9]);
const collection = new Sorter_1.Sorter(numCollection);
collection.sort();
console.log(numCollection.data);

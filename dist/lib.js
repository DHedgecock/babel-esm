"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.incMutableValue = incMutableValue;
var mutableValue = exports.mutableValue = 3;
function incMutableValue() {
  exports.mutableValue = mutableValue += 1;
}
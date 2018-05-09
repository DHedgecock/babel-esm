"use strict";

var _defaultLib = require("./default-lib");

var _defaultLib2 = _interopRequireDefault(_defaultLib);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// The imported value is live
console.log(_defaultLib.mutableValue);
(0, _defaultLib2.default)();
console.log(_defaultLib.mutableValue);
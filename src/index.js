import { mutableValue, incMutableValue } from "./lib";

// The imported value is live
console.log(mutableValue);
incMutableValue();
console.log(mutableValue);

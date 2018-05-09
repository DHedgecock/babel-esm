import incMutableValue, { mutableValue } from "./default-lib";

// The imported value is live
console.log(mutableValue);
incMutableValue();
console.log(mutableValue);

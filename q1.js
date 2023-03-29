// var num1;
// num1 = 6;
// var num2=num1;
// console.log(num2)

var Operation = function (options) {
var inputs = [];
for (var key in options) {
this[key] = options[key];
};
this.addInput = function (input) {
if (this.isSaturated()) return this;
inputs.push(input);
return this;
};
this.isInvalidInput = this.isInvalidInput || function () {return false;};
this.isSaturated = function () {
var inputCount = this.singleInput ? 1 : 2;
for (var i = 0; i < inputCount; ++i) {
if (inputs[i] == null || isNaN(inputs[i])) return false;
}
return true;
};
this.execute = function () {
};
this.getCalculationString = function () {
};
this.valueOf = function () {
if (this.value == null) {
this.execute();
}
return this.value;
};
this.toString = function () {
if (this.calculationString == null) {
this.execute();
}
return this.getCalculationString();
};
};
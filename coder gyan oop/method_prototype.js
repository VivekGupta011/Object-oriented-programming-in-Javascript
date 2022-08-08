function call(greet, name) {
  this.greet = greet;
  this.name = name;
}
let greet1 = new call("good morning", "vivek");
console.log(greet1);

// adding method through protoptypr
call.prototype.morning = function (name) {
  console.log("hello ", greet1.name);
};
console.log(greet1.morning());

// adding properties using prototype
call.prototype.fullname = "vivek gupta";
console.log(greet1.fullname);
console.log(greet1.fullname);

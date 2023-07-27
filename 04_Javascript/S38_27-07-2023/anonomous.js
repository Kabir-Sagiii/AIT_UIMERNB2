function fnHigher(fn) {
  fn();
}

fnHigher(function () {
  console.log("I am callback and Anonomous function");
});

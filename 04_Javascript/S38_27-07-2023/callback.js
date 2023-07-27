function fnHigherOrder(f) {
  console.log(f);
  f();
}

function f1Callback() {
  console.log("I am f1() function");
}

fnHigherOrder(f1Callback);

function fnClouser() {
  var city = "hyderabad";
  var x = 10;
  var y = 20;
  var result = x + y;
  function f2() {
    console.log("i am f2 function");
  }
  return function f1() {
    console.log(city);
    console.log(result);
    f2();
  };
}
var fn = fnClouser();
fn();

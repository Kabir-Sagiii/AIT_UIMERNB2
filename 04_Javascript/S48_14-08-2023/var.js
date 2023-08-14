var city;
let id;

function scope() {
  var pincode = 500018;
  function f1() {
    var empid = 107;
    if (true) {
      var state = "ts";
      console.log(pincode);
    } else {
      console.log(pincode);
      console.log(empid);
      var x = 100;
    }
  }
  console.log(state);
}

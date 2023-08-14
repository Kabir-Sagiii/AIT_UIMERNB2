function scope() {
  let pincode = 500018;
  function f1() {
    let id = 101;
    if (true) {
      let state = "ts";
      console.log(pincode);
    } else {
      console.log(pincode);
      console.log(state);
      let x = 100;
    }
    console.log(state);
  }

  console.log(id);
}

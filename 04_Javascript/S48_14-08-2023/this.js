var obj1 = {
  c: 100,
};

function fnThis() {
  var x = 10;

  var y = 20;

  var result = x + y + this.c; // window.c
  console.log(result); //NaN
}
fnThis();

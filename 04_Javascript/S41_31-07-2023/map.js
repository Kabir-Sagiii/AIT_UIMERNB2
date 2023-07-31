var arr = [10, 20, 30, 40, 50, 60]; // [100,200,300,400,500,600]

var newArray = arr.map(function (element, index) {
  return element * 10;
});

console.log(arr);
console.log("-------------------");
console.log(newArray);

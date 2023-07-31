var data = [
  {
    brand: "Apple",
    product: "Iphone 14",
    price: 110000,
  },
  {
    brand: "Samsung",
    product: "Samsung Galaxy S23 Ultra",
    price: 130000,
  },
  {
    brand: "Vivo",
    product: "Vivo A27 Pro",
    price: 40000,
  },
  {
    brand: "Apple",
    product: "Iphone 13",
    price: 90000,
  },
  {
    brand: "Apple",
    product: "Iphone 12",
    price: 60000,
  },
];

//1. Print all the Phone details whose brand is Apple
var filteredData = data.filter(function (ele) {
  //ele = {brand:"",product:""price:""}
  return ele.brand == "Apple";
});

console.log(filteredData);

//2. Print all the phone details whose price is more then 90000

var newData = data.filter(function (ele) {
  return ele.price > 90000;
});
console.log(newData);

//2. Print all the phone details whose price is less then or equcal to  90000

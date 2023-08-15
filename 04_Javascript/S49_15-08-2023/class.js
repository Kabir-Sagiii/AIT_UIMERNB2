class A {
  name = "Raj";
  city = "delhi";
  constructor() {
    this.name = "Rahul sharma";
    this.city = "Mumbai";
  }
constructor(){

}
  print() {
    console.log(this.name, this.city);
  }
}

var a1 = new A(); // var a1 = {name:"Raj",city:"delhi",print:function(){-----}}
var a2 = new A();

a2.print();
a2.name = "Ziya";
a2.city = "Pune";
a2.print();
a1.print();

// console.log(a1.name);
// a1.name = "Sneha Reddy";
// console.log(a1.name);
// a1.print();

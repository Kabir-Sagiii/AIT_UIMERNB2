class Myclass {
  name = "Kabir";
  city = "Delhi";
  id = 101;

  print() {
    console.log(this.name, this.city, this.id);
  }
}

var obj1 = new Myclass();
obj1.print();

var obj2 = new Myclass();
obj2.print();

var obj3 = new Myclass();
obj3.print();

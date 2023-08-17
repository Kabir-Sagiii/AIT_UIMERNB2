class Myclass {
  name;
  city;
  id;

  constructor(name, city, id) {
    this.name = name;
    this.city = city;
    this.id = id;
  }

  print() {
    console.log(this.name, this.city, this.id);
  }
}

var obj1 = new Myclass("Kabir", "Delhi", 101);
obj1.print();

var obj2 = new Myclass("Riya", "Pune", 102);
obj2.print();

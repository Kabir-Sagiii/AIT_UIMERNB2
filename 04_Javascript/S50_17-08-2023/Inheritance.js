class A {
  #id;
  name;
  constructor(name) {
    this.name = name;
    this.#id = 101;
  }

  print() {
    console.log(this.name);
  }
  connect() {
    //Logic to connect with Database
  }
}

class B extends A {
  city;
  constructor(name, city) {
    super(name);
    this.city = city;
  }
  display() {
    this.print();
    console.log(this.name, this.city);
  }
}

var b1 = new B("Raj", "Delhi");
b1.display();

var b1 = new B("Sneha", "Hyd");
b1.display();

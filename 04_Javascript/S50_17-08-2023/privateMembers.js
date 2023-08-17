class A {
  name;
  #city;
  constructor() {
    this.name = "Kabir";
    this.#city = "Delhi";
  }

  print() {
    console.log(this.#city);
    this.#add();
  }
  #add() {
    console.log(100 + 500);
  }
}

var a1 = new A();
a1.print();
a1.city = "Hyderabad";
a1.print();
// a1.add();

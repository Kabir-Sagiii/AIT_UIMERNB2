class Parent {
  name = "Sneha";
  city = "Banglore";

  display() {
    this.name = "Rajesh";
    this.city = "Delhi";
    console.log(this.name, this.city);
  }
}

class Child extends Parent {
  detail;
  display() {
    this.detail = this.name + " is From " + this.city;
    console.log(this.detail);
  }
}

var c1 = new Child();
c1.display();

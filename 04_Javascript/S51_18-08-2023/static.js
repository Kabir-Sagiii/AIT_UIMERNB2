class User {
  gender;
  name;
  static city;
  static state;
  constructor(name) {
    this.gender = "male";
    this.name = name;
    User.city = "Hyd";
    User.state = "TS";
  }

  displayUserDetails() {
    console.log("User Name: ", this.name);
    console.log("User City: ", User.city);
  }

  print() {
    console.log(this.gender, this.name, User.city, User.state, this.city);
  }

  static changeCity() {
    // console.log(this.gender, this.city);
    this.city = "Warangal";
    console.log(this.city);
  }
}

var user1 = new User("Riya");
var user2 = new User("Karan");
var user3 = new User("Ziya");
var user4 = new User("Sahil");
var user5 = new User("Ravi");

user1.displayUserDetails();
user2.displayUserDetails();
user3.displayUserDetails();
user4.displayUserDetails();
user5.displayUserDetails();

// console.log(user1);
// user1.print();
// User.changeCity();

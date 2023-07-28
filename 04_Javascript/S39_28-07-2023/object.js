var student = {
  id: 101,
  name: "Dhiraj Verma",
  city: "Pune",
  state: "MH",
  isPlaced: true,
  display: function () {
    console.log("It is a anonomous function");
    var x = 10;
    var y = 20;
    console.log(x + y);
  },
};

console.log(student);
//access the value of specific property:  <objName>.<keyName>
console.log(student.city, student.state);

//Insert New Property: <objectName>.<New Property Key> = <value>
student.email = "Dhiraj@gmail.com";
console.log(student);

//Update Property: <objectName>.<Property Key> = <New value>
student.city = "Mumbai";
console.log(student);

//delete Property : delete <objectName>.<Property key>
delete student.id;
delete student.email;
console.log(student);

//Access the function in the Object
student.display();

console.log();

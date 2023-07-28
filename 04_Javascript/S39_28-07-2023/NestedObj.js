var student = {
  id: 101,
  name: "Kajal sharma",
  email: "Kajal@gmail.com",
  address: {
    area: {
      area1: "hitech city",
      area2: "Banjara hills",
      aera3: "Begumpet",
    },
    city: "Hyd",
    state: "TS",
  },
};

console.log(student.address.city);
console.log(student.address.area.aera3);
student.address.area.aera3 = "Secbd";
console.log(student.address.area.aera3);
student.address.area.area4 = "Jubli hills";
console.log(student.address.area);

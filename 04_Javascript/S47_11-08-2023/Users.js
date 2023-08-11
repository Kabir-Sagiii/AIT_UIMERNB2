// function createTableElement() {
//   document.getElementById("btn").disabled = true;
//   var table = document.createElement("table"); //<table> </table>

//   var tr1 = document.createElement("tr"); //<tr>  </tr>
//   var tr2 = document.createElement("tr"); //<tr>  </tr>
//   var tr3 = document.createElement("tr"); //<tr>  </tr>
//   var tr4 = document.createElement("tr"); //<tr>  </tr>

//   var th1 = document.createElement("th"); //<th>  </th>
//   var th2 = document.createElement("th"); //<th>  </th>
//   var th3 = document.createElement("th"); //<th>  </th>

//   var td1 = document.createElement("td"); //<td>  </td>
//   var td2 = document.createElement("td"); //<td>  </td>
//   var td3 = document.createElement("td"); //<td>  </td>

//   var td4 = document.createElement("td"); //<td>  </td>
//   var td5 = document.createElement("td"); //<td>  </td>
//   var td6 = document.createElement("td"); //<td>  </td>

//   var td7 = document.createElement("td"); //<td>  </td>
//   var td8 = document.createElement("td"); //<td>  </td>
//   var td9 = document.createElement("td"); //<td>  </td>

//   tr1.appendChild(th1); // <tr> <th>  </th> </tr>
//   tr1.appendChild(th2); // <tr> <th> </th> <th>  </th></tr>
//   tr1.appendChild(th3); //<tr><th> </th><th> </th><th> </th></tr>

//   tr2.appendChild(td1);
//   tr2.appendChild(td2);
//   tr2.appendChild(td3);

//   tr3.appendChild(td4);
//   tr3.appendChild(td5);
//   tr3.appendChild(td6);

//   tr4.appendChild(td7);
//   tr4.appendChild(td8);
//   tr4.appendChild(td9);

//   th1.innerText = "ID"; // <tr> <th>ID</th></tr>
//   th2.innerText = "NAME";
//   th3.innerText = "CITY";

//   td1.innerText = 101;
//   td2.innerText = "Raj Verma";
//   td3.innerText = "Hyderabad";

//   td4.innerText = 102;
//   td5.innerText = "Sneha Sharma";
//   td6.innerText = "Delhi";

//   td7.innerText = 103;
//   td8.innerText = "Ziya";
//   td9.innerText = "Pune";

//   table.appendChild(tr1);
//   table.appendChild(tr2);
//   table.appendChild(tr3);
//   table.appendChild(tr4);

//   table.frame = "box";
//   table.rules = "all";
//   table.width = "800px";
//   table.cellPadding = "10";
//   table.style.margin = "30px auto";

//   tr2.align = "center";
//   tr3.align = "center";
//   tr4.align = "center";

//   document.getElementById("body").appendChild(table);
// }

var data = [
  {
    id: 101,
    name: "Raj Verma",
    city: "Delhi",
  },
  {
    id: 102,
    name: "Riya Sharma",
    city: "Noida",
  },
  {
    id: 103,
    name: "Shiv Reddy",
    city: "Hyderabad",
  },
  {
    id: 104,
    name: "Meghna Reddy",
    city: "Banglore",
  },
  {
    id: 105,
    name: "Ziya Khan",
    city: "Bhopal",
  },
  {
    id: 101,
    name: "Raj Verma",
    city: "Delhi",
  },
  {
    id: 102,
    name: "Riya Sharma",
    city: "Noida",
  },
  {
    id: 103,
    name: "Shiv Reddy",
    city: "Hyderabad",
  },
];
function createTableElement() {
  var table = document.createElement("table");
  var tr1 = document.createElement("tr");
  var th1 = document.createElement("th");
  var th2 = document.createElement("th");
  var th3 = document.createElement("th");

  th1.innerText = "ID";
  th2.innerText = "NAME";
  th3.innerText = "CITY";

  tr1.appendChild(th1);
  tr1.appendChild(th2);
  tr1.appendChild(th3);

  table.appendChild(tr1);

  table.width = "500px";
  table.style.margin = "30px auto";
  table.frame = "box";
  (table.rules = "all"), (table.cellPadding = "10");
  tr1.style.backgroundColor = "black";
  tr1.style.color = "white";

  data.forEach(function (element) {
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.align = "center";

    td1.textContent = element.id;

    td2.innerHTML = `<b><i> ${element.name}</i> </b>`;
    td3.innerHTML = `<b><i> ${element.city}</i> </b>`;
    table.appendChild(tr);
  });

  document.getElementById("body").appendChild(table);
}

function changeButtonColor() {
  var btn = document.getElementById("btn");
  btn.style.backgroundColor = "red";
  btn.style.color = "white";
  btn.style.padding = "10px 20px";
  btn.style.border = "none";
}

function changeStyle() {
  var btn = document.getElementById("btn");
  btn.style.backgroundColor = "green";
  btn.style.color = "white";
  btn.style.padding = "10px 50px";
  btn.style.border = "none";
}

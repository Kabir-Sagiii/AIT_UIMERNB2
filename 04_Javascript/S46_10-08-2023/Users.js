function createTableElement() {
  document.getElementById("btn").disabled = true;
  var table = document.createElement("table"); //<table> </table>

  var tr1 = document.createElement("tr"); //<tr>  </tr>
  var tr2 = document.createElement("tr"); //<tr>  </tr>
  var tr3 = document.createElement("tr"); //<tr>  </tr>
  var tr4 = document.createElement("tr"); //<tr>  </tr>

  var th1 = document.createElement("th"); //<th>  </th>
  var th2 = document.createElement("th"); //<th>  </th>
  var th3 = document.createElement("th"); //<th>  </th>

  var td1 = document.createElement("td"); //<td>  </td>
  var td2 = document.createElement("td"); //<td>  </td>
  var td3 = document.createElement("td"); //<td>  </td>

  var td4 = document.createElement("td"); //<td>  </td>
  var td5 = document.createElement("td"); //<td>  </td>
  var td6 = document.createElement("td"); //<td>  </td>

  var td7 = document.createElement("td"); //<td>  </td>
  var td8 = document.createElement("td"); //<td>  </td>
  var td9 = document.createElement("td"); //<td>  </td>

  tr1.appendChild(th1); // <tr> <th>  </th> </tr>
  tr1.appendChild(th2); // <tr> <th> </th> <th>  </th></tr>
  tr1.appendChild(th3); //<tr><th> </th><th> </th><th> </th></tr>

  tr2.appendChild(td1);
  tr2.appendChild(td2);
  tr2.appendChild(td3);

  tr3.appendChild(td4);
  tr3.appendChild(td5);
  tr3.appendChild(td6);

  tr4.appendChild(td7);
  tr4.appendChild(td8);
  tr4.appendChild(td9);

  th1.innerText = "ID"; // <tr> <th>ID</th></tr>
  th2.innerText = "NAME";
  th3.innerText = "CITY";

  td1.innerText = 101;
  td2.innerText = "Raj Verma";
  td3.innerText = "Hyderabad";

  td4.innerText = 102;
  td5.innerText = "Sneha Sharma";
  td6.innerText = "Delhi";

  td7.innerText = 103;
  td8.innerText = "Ziya";
  td9.innerText = "Pune";

  table.appendChild(tr1);
  table.appendChild(tr2);
  table.appendChild(tr3);
  table.appendChild(tr4);

  table.frame = "box";
  table.rules = "all";
  table.width = "800px";
  table.cellPadding = "10";
  table.style.margin = "30px auto";

  tr2.align = "center";
  tr3.align = "center";
  tr4.align = "center";

  document.getElementById("body").appendChild(table);
}

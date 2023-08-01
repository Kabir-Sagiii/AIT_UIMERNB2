function fnAction(x, y, operation) {
  var x = x;
  var y = y;

  var result;

  if (operation == "+") {
    result = x + y;
  }

  if (operation == "-") {
    result = x - y;
  }

  console.log(result);
}

fnAction(300, 100, "+"); //400

fnAction(300, 100, "-"); //200

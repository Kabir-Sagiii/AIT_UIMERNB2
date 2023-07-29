var data = [20, 30, 50, 100, 89, 11, 34, 56, 78, 99];

var filteredData = data.filter(function (element, index) {
  return element == 50;
});

console.log(filteredData);

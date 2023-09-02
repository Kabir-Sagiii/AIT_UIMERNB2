var http = require("http");

var fs = require("fs");

http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    console.log(req.url);
    if (req.url === "/products") {
      fs.readFile("product.json", "utf-8", function (err, data) {
        if (err) {
          res.end("Something Went Wrong");
        } else {
          res.end(data);
        }
      });
    } else if (req.url === "/products/apple") {
      fs.readFile("product.json", "utf-8", function (err, data) {
        if (err) {
          res.end("Something Went Wrong");
        } else {
          var d = JSON.parse(data);
          var da = d.products.filter((ele) => ele.brand === "apple");
          res.end(
            JSON.stringify({
              products: da,
            })
          );
        }
      });
    } else if (req.url === "/products/samsung") {
      fs.readFile("product.json", "utf-8", function (err, data) {
        if (err) {
          res.end("Something Went Wrong");
        } else {
          var d = JSON.parse(data);
          var da = d.products.filter((ele) => ele.brand === "samsung");
          res.end(
            JSON.stringify({
              products: da,
            })
          );
        }
      });
    } else if (req.url === "/products/vivo") {
      fs.readFile("product.json", "utf-8", function (err, data) {
        if (err) {
          res.end("Something Went Wrong");
        } else {
          var d = JSON.parse(data);
          var da = d.products.filter((ele) => ele.brand === "vivo");
          res.end(
            JSON.stringify({
              products: da,
            })
          );
        }
      });
    }
  })
  .listen(7030);

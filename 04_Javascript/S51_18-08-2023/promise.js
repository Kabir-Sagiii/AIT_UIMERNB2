var promise = new Promise(function (resolve, reject) {
  resolve({
    name: "Kabir",
    city: "Delhi",
  });

  //   reject({
  //     msg: "Error While getting data",
  //     status: 404,
  //     Ok: true,
  //   });
});

promise
  .then(function (res) {
    console.log("Success Response", res);
  })
  .catch(function (error) {
    console.log("Error Response", error);
  });

// console.log(promise);

function createPromise() {
  var promise = new Promise(function (resolve, reject) {
    reject({
      status: false,
      error: {
        msg: "Error due to connection failure",
      },
    }); //error or failure data
  });

  return promise;
}

var promise = createPromise();

//to access the data from Promise Object, We have to handle it
// console.log(promise);

promise
  .then(function (successdata) {
    console.log("SuccessData : ", successdata);
  })
  .catch(function (errordata) {
    console.log("FailureData : ", errordata);
  });

function createPromise() {
  var promise = new Promise(function (resolve, reject) {
    resolve({
      status: true,
      data: [
        { name: "Raj Verma" },
        { name: "Ziya Khan" },
        { name: "Godwill" },
        { name: "Parmeet Singh" },
      ],
    }); //success data

    //  reject() //error or failure data
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

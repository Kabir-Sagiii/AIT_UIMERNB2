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
    //     reject({
    //       status: false,
    //       error: {
    //         msg: "Error due to connection failure",
    //       },
    //     }); //error or failure data
  });

  return promise;
}

async function handlePromise() {
  try {
    var data = await createPromise();

    //logic to handle success response
  } catch (error) {
    //logic to handle error response
  }

  console.log(data);
}

handlePromise();

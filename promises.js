function getUserDetails(userId) {
  return new Promise((resolve, reject) => {
    console.log("fun1 called");
    resolve({ userRoll: "123" });
  });
}
function getUserSubject(userRoll, callback) {
  return new Promise((resolve, reject) => {
    console.log("fun2 called");
    resolve({subId: "en-1" });
  });
}
function getuserMarks(subId) {
  return new Promise((resolve, reject) => {
    console.log("fun3 called");
    resolve(subId);
  });
}

getUserDetails("123")
  .then(result => {
    return getUserSubject(result.userRoll);
  })
  .then(result => {
    return getuserMarks(result.subId);
  })
  .then(result => console.log(result))
  .catch(error => console.log(error));

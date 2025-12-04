// function getUserDetails(userId) {
// return new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve({userRoll : "678"})
//     },2000)
// });
// };

// const myfun = async() =>{
//     console.log("123")
//     const res = await getUserDetails("123");
//     console.log(res);
//     console.log("456");
// };
// myfun();

function fun1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Result from fun1");
    }, 1000);
  });
}

function fun2(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data + " -> Result from fun2");
    }, 1000);
  });
}

function fun3(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data + " -> Result from fun3");
    }, 1000);
  });
}

const myfun = async () => {
  console.log("Start");

  const r1 = await fun1();
  console.log(r1);

  const r2 = await fun2(r1);
  console.log(r2);

  const r3 = await fun3(r2);
  console.log(r3);

  console.log("End");
};

myfun();


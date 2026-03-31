//! fetch example

// fetch("https://jsonplaceholder.typicode.com/users", {
//   method: "GET",
// })
//   .then(function (response) {
//     if (!response.ok) {
//       throw "Server Error";
//     }
//     return response.json();
//   })
//   .then(function (mosuliData) {
//     let pNew = document.createElement("p");
//     pNew.textContent = mosuliData[1].email;
//     document.getElementById("api").appendChild(pNew);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

//! axios example
// axios
//   .get("https://jsonplaceholder.typicode.com/users")
//   .then(function (response) {
//     // console.log(response.data);
//     let pNew = document.createElement("p");
//     pNew.textContent = response.data[2].email;
//     document.getElementById("api-axios").appendChild(pNew);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

//! async await + then  catch example
// async function getData() {
//   let resposeInfo = await fetch("https://jsonplaceholder.typicode.com/users");
//   console.log(resposeInfo);
//   if (!resposeInfo.ok) {
//     throw "Server Error";
//   }
//   let data = await resposeInfo.json();
//   return data; //js obj
// }

// getData()
//   .then(function (mosuliDataNew) {
//     let pNew = document.createElement("p");
//     pNew.textContent = mosuliDataNew[3].email;
//     document.getElementById("async-api").appendChild(pNew);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

//!  async await + try catch example
// async function getDataNew() {
//   try {
//     let resposeInfo = await fetch("https://jsonplaceholder.typicode.com/users");
//     console.log(resposeInfo);
//     if (!resposeInfo.ok) {
//       throw "Server Error";
//     }
//     let data = await resposeInfo.json();
//     let pNew = document.createElement("p");
//     pNew.textContent = data[4].email;
//     document.getElementById("async-new").appendChild(pNew);
//   } catch (e) {
//     console.log(e);
//   }
// }

// getDataNew();

//! array destructuring

// const cities = ["madrid", "paris", "berlin", "tbilisi"];

//
// const [madridCity, parisCity, berlinCity] = cities;
// console.log(madridCity, parisCity, berlinCity);

//! მნიშვნელობების გამოტოვება
// const [madridCity, , berlinCity] = cities;
// console.log(madridCity, berlinCity);

//! object destructuring
// ობიექტის დროს ცვლადის სახელი უნდა იყოს იგივე რა key-ს სახელი
// გვაქვს.

// const developer = {
//   id: 1,
//   name: "anna",
//   skills: ["html", "css", "js"],
//   area: "frontend",
//   languages: {
//     english: "b2",
//     spanish: "native",
//     german: "A1",
//   },
// };

//
// const { area, id } = developer;
// console.log(area, id);

// ! ცვლადის სახელის შეცვლა
// const { area: areaDeveloper, id } = developer;
// console.log(areaDeveloper, id);

//! ჩაშენებული ობიქტიდან მნიშვნელობის ამოღება
// const {
//   languages: { spanish },
// } = developer;
// console.log(spanish);

//! ჩაშენებული მასივიდან მნიშვნელობის ამოღება
// const {
//   skills: [, basicSkill],
// } = developer;
// console.log(basicSkill);

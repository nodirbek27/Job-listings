" use strict";

// alert("is your age +18.?");

// const place = confirm('Are you here.?');
// console.log(typeof place);

// const currentPlace = prompt('Where are you from.?', "")
// console.log(typeof currentPlace);

// const currentPlace = prompt('Where are you from.?', "Tashkent")
// console.log(currentPlace);

// const favouriteColor = []
// favouriteColor[0] = prompt('What is your favourite color #1.?', '')
// favouriteColor[1] = prompt('What is your favourite color #2.?', '')
// favouriteColor[2] = prompt('What is your favourite color #3.?', '')
// console.log(favouriteColor)

// const age = prompt('How old are you.?', "")
// console.log(typeof age);

// const age = +prompt('How old are you.?', "")
// console.log(typeof age);


// let numberOfSeries;

// function startApp() {
//   numberOfSeries = +prompt("Nechta serial ko'rdingiz.?", "");
//   while (numberOfSeries == null || numberOfSeries == "" || isNaN(numberOfSeries)) {
//     numberOfSeries = +prompt("Nechta serial ko'rdingiz.?", "");
//   }
// }
// startApp();

// const seriesDB = {
// count: numberOfSeries,
// series: {},
// actors: {},
// genres: [],
// private: false,
// };

// function detectLevelSeries(count) {
//   if (count <= 5) {
//     console.log("Kam serial ko'ripsiz");
//   } else if (count <= 10) {
//     console.log("Siz klassik tomoshabin ekansiz");
//   } else if (count >= 10) {
//     console.log("Siz serialchi zvezda ekansiz");
//   } else {
//     console.log("ERROR");
//   }
// }
// detectLevelSeries(seriesDB.count);



// function rememberMySeries() {
//   for (let i = 0; i < 2; i++) {
//     const SerialName = prompt("Ohirgi ko'rgan serialingiz.?", "");
//     const SerialMark = prompt("Nechi baxo berasiz.?", "");

//     if (SerialName != null && SerialMark != null && SerialName != "" && SerialMark != "") {
//       seriesDB.series[SerialName] = SerialMark;
//     } else {
//       i--;
//     }

//   };
// }
// rememberMySeries();
/* let i = 0;
while (i < 2) {
  const SerialName = prompt("Ohirgi ko'rgan serialingiz.?", "");
  const SerialMark = prompt("Nechi baxo berasiz.?", "");

  seriesDB.series[SerialName] = SerialMark;
  i++;
} */

/* let i = 0;
do {
  const SerialName = prompt("Ohirgi ko'rgan serialingiz.?", "");
  const SerialMark = prompt("Nechi baxo berasiz.?", "");
  i++;

  seriesDB.series[SerialName] = SerialMark;
} while (i < 2);

console.log(seriesDB); */

// function showDB(hidden) {
//   if (!hidden) {
//     console.log(seriesDB);
//   }
// }
// showDB(seriesDB.private);

// function writeGenres() {
//   for (let i = 0; i < 3; i++) {
//     const genre = prompt(`Yaxshi ko'rgan janringiz ${i + 1}`);
//     seriesDB.genres[i] = genre;
//   }
// }
// writeGenres();



//CALLBACK
/* function first(callback) {
  setTimeout(() => {
    console.log(1);
    callback();
  }, 1000);
}

function second() {
  console.log(2);
}

first(second); */

// function nusxaObj(obj) {
//   let objNusxa = {};

//   for (const key in obj) {
//     objNusxa[key] = obj[key];
//   }
//   return objNusxa;
// }

// let numbers = {
//   x: 12,
//   y: 4,
// };

// let newNumbers = nusxaObj(numbers);

// newNumbers.x = 15;

// console.log(numbers);
// console.log(newNumbers);

// let numbers = {
//   x: 2,
//   y: 3,
// };

// let newNumbers = Object.assign({}, numbers);

// newNumbers.x = 5;

// console.log(newNumbers);
// console.log(numbers);

// let addNumber = {
//   z: 5
// };

// let allNumbers = Object.assign(numbers, addNumber);
// console.log(allNumbers);

// let arr = [2, 4, 7];
// let newArr = arr.slice();

// newArr[1] = "nodir";
// console.log(newArr);


//SPREAD
// let liverpool = ["Salah", "Mane"];
// let manCity = ["Messi"];

// let mixPlayer = [...liverpool, ...manCity];
// console.log(mixPlayer);
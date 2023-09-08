// const jsonToCSV = require("./json2csv");
// const header = require("./header");
//  // console.log(data.length)
//  let date = new Date();
//  var date_today =
//    ("0"+date.getDate()).slice(-2) +
//    ("0" + (date.getMonth() + 1)).slice(-2) +
//    "" +
//    date.getFullYear();
// let path= `C:/GS1/adsp/GS1 Saudi Arabia_${date_today}.csv`

// let pathjson= `./JSON_Files/data${date_today}.json`
// module.exports = (function() {
//   const csvFiles = [];

//   for (let i = 1; i < 2001; i++)
//     csvFiles.push(
//       jsonToCSV(header, {
//         in: pathjson,
//         out: path
//       })
//     );

//   Promise.all(csvFiles)
//     .then(() => {
//       console.log("All csv files written successfully!");
//     })
//     .catch(err => console.log(err.message));
// });


const jsonToCSV = require("./json2csv");
const header = require("./header");

let date = new Date();

let formattedDate = 
  `${date.getDate().toString().padStart(2, '0')}-` +
  `${(date.getMonth() + 1).toString().padStart(2, '0')}-` +
  `${date.getFullYear()}_` +
  `${date.getHours().toString().padStart(2, '0')}-` +
  `${date.getMinutes().toString().padStart(2, '0')}-` +
  `${date.getSeconds().toString().padStart(2, '0')}`;

let path = `C:/GS1/adsp/GS1 Saudi Arabia_${formattedDate}.csv`;
let pathjson = `./JSON_Files/data${formattedDate}.json`;

module.exports = (async function() {
  try {
    await jsonToCSV(header, { in: pathjson, out: path });
    console.log("CSV file written successfully!");
  } catch (err) {
    console.error(err.message);
  }
});

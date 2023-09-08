// const csvjson = require('csvjson');
// const readFile = require('fs').readFile;
// const writeFile = require('fs').writeFile;
// const fs = require('fs');

// let date = new Date();
// var date_today =
// ("0"+date.getDate()).slice(-2)+
//   ("0" + (date.getMonth() + 1)).slice(-2) +
//   "" +
//   date.getFullYear();
// //   let  header= require("./header.json")




// module.exports = function (){
// readFile(`./JSON_Files/data${date_today}.json`, 'utf-8', (err, fileContent) => {
//     // console.log(fileContent[0][0].Street)
//     if (err) {
//         console.log(err); // Do something to handle the error or just throw it
//         throw new Error(err);
//     }
//     // Node.js program to demonstrate the
//     // fs.close() method

//     // Import the filesystem module
//     const fs = require('fs');

//     // Get the file descriptor of the given path
//     file_descriptor = fs.openSync(`./JSON_Files/data${date_today}.json`);
//     console.log("The file descriptor is:", file_descriptor);

//     // Close the file descriptor


//     //    console.log(fileContent.replace('"\ ','"'))
//     const csvData = csvjson.toCSV(fileContent, {
//         headers:'key'
//     });
//     if (fs.existsSync(`C:/GS1/adsp/GS2 Saudi Arabia_${date_today}.csv`)) {
//         console.error("already file exists"); // Do something to handle the error or just throw it
//        // throw new Error(err);
//     }else{
//     writeFile(`C:/GS1/adsp/GS2 Saudi Arabia_${date_today}.csv`, csvData, (err) => {
//         if(err) {
//             console.log(err); // Do something to handle the error or just throw it
//             throw new Error(err);
//         }
//         console.log('Success!');


//     fs.close(file_descriptor, (err) => {
//         if (err)
//           console.error('Failed to close file', err);
//         else {
//           console.log("\n> File Closed successfully");
//         }
//       })});
//     }

// });
// }

// const csvjson = require('csvjson');
// const readFile = require('fs').readFile;
// const writeFile = require('fs').writeFile;
// const fs = require('fs');

// let date = new Date();
// // var date_today = date.toLocaleDateString('en-GB').split('/').join('-');
// console.log("checkit" + date.getDate());
// var date_today =
//   ("0" + date.getDate()).slice(-2) +
//   ("0" + (date.getMonth() + 1)).slice(-2) +
//   date.getFullYear();

// module.exports = function (){
//   readFile(`./JSON_Files/data${date_today}.json`, 'utf-8', (err, fileContent) => {
//       if (err) {
//           console.log(err);
//           throw new Error(err);
//       }

//       const fs = require('fs');
//       file_descriptor = fs.openSync(`./JSON_Files/data${date_today}.json`);
//       console.log("The file descriptor is:", file_descriptor);

//       const csvData = csvjson.toCSV(fileContent, {
//           headers:'key'
//       });

//       if (fs.existsSync(`C:/GS1/adsp/GS1 Saudi Arabia_${date_today}.csv`)) {
//           console.error("already file exists");
//       } else {
//           writeFile(`C:/GS1/adsp/GS1 Saudi Arabia_${date_today}.csv`, csvData, (err) => {
//               if(err) {
//                   console.log(err);
//                   throw new Error(err);
//               }
//               console.log('Success!');

//               fs.close(file_descriptor, (err) => {
//                   if (err)
//                     console.error('Failed to close file', err);
//                   else {
//                     console.log("\n> File Closed successfully");
//                   }
//                 });
//           });
//       }

//   });
// }

const csvjson = require('csvjson');
const fs = require('fs');
const ftp = require('ftp');

let date = new Date();

var date_today =
  ("0" + date.getDate()).slice(-2) +
  ("0" + (date.getMonth() + 1)).slice(-2) +
  date.getFullYear();

module.exports = function () {
  fs.readFile(`./JSON_Files/data${date_today}.json`, 'utf-8', (err, fileContent) => {
    if (err) {
      console.log(err);
      throw new Error(err);
    }

    const csvData = csvjson.toCSV(fileContent, {
      headers: 'key'
    });

    const outputFilePath = `C:/GS1/adsp/GS1 Saudi Arabia_${date_today}.csv`;

    if (fs.existsSync(outputFilePath)) {
      console.error("already file exists");
    } else {
      fs.writeFile(outputFilePath, csvData, (err) => {
        if (err) {
          console.log(err);
          throw new Error(err);
        }
        console.log('CSV file created successfully.');

        // FTP Upload Code
        const client = new ftp();

        client.on('ready', function () {
          let ftpFileName = `GS1_Saudi_Arabia_${date_today}.csv`;
          client.put(outputFilePath, `/${ftpFileName}`, function (err) {
            if (err) {
              console.log('FTP Upload Error:', err);
              throw err;
            }
            console.log('Successfully uploaded to FTP server.');
            client.end();
          });
        });

        client.connect({
          host: process.env.HOST,
          user: process.env.USER,
          password: process.env.PASSWORD,
        });
      });
    }
  });
}

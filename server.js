// const cron = require("node-cron");
// const CronJob = require('cron').CronJob;
// const express = require("express");
// const bodyParser = require("body-parser");
// const schedule= require("node-schedule")
// const cors = require("cors");
// const app = express();
// // const getDataByDate = require("./api");
// const getData = require("./routes");

// const helmet = require("helmet");
// const { application } = require("express");
// const morgan = require("morgan");
// const data = require("./api.js");

// app.use(helmet());

// app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(morgan());
// app.use(cors());

// app.use(getData);
// //58 23 * * * for 11:58 pm 
// //*/30 * * * * *  for 30 sec .. to save csv file 

// // cron.schedule("*/30 * * * * * ", () => {
// //   console.log("started cron");
// //   data.getDatabyDate().then((result) => {y

// //     console.log(result);
//     // '00 58 23 * * *'  for 11:58 23
// //   });
// // }
// // */30 * * * * * "
// // // '00 58 23  * * *'
// // const job = schedule.scheduleJob('*/30 * * * * *', 'Asia/Baghdad',()=>{
// //   // const job = new CronJob('*/30 * * * * *', () => {
// //       data.getDatabyDate().then((result) => {
// //           console.log(result);
          
// //         })
// //   // }, null, true, 'Asia/Baghdad');
// //   });
// //   job.start();
// //const job = new CronJob('*/30 * * * * *', () => {
//   const job = new CronJob('00 55 23 * * *', () => {
//     data.getDatabyDate().then((result) => {
//         console.log(result);
        
//       })
// }, null, true, 'Asia/Baghdad');
// job.start();

// const PORT = 6500;

// app.listen(PORT, () => {
//   console.log(`Server started on PORT ${PORT}`);
// });

const express = require("express");
require('dotenv').config();
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const getData = require("./routes");
const helmet = require("helmet");
const morgan = require("morgan");
const data = require("./api.js");
const CronJob = require('cron').CronJob;

app.use(helmet());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('combined')); // Using 'combined' format for logs
app.use(cors());

app.use(getData);

const job = new CronJob('00 55 23 * * *', () => {
  data.getDatabyDate().then((result) => {
      console.log(result);
    })
    .catch(err => {
      console.error('Error executing cron job:', err);
    });
}, null, true, 'Asia/Baghdad');
job.start();

// New API endpoint to trigger data generation
app.get('/generateData', (req, res) => {
  data.getDatabyDate()
    .then((result) => {
      console.log(result);
      res.json({ status: "success", message: "Data generated successfully!" });
    })
    .catch(err => {
      console.error('Error:', err);
      res.status(500).json({ status: "failure", message: "Failed to generate data!" });
    });
});

const PORT = 6500;

app.listen(PORT, () => {
  console.log(`Server started on PORT ${PORT}`);
});
